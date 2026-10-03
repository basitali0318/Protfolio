// Uploads the CV and photo to Vercel Blob before each build and writes their
// public URLs to src/assets.json. File names include a content hash, so a new
// CV or photo always gets a new URL and no cache can serve an old copy.
// Without BLOB_READ_WRITE_TOKEN (local dev), or if the upload fails, the site
// keeps serving the copies in public/.
import { createHash } from 'node:crypto'
import { readFile, writeFile } from 'node:fs/promises'
import { del, list, put } from '@vercel/blob'

const PREFIX = 'portfolio/'
const files = {
  cv: { local: 'public/Basit-Ali-CV.pdf', name: 'Basit-Ali-CV', ext: 'pdf', contentType: 'application/pdf' },
  photo: { local: 'public/basit-ali.jpg', name: 'basit-ali', ext: 'jpg', contentType: 'image/jpeg' },
}

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.log('[assets] BLOB_READ_WRITE_TOKEN not set, using files from public/')
  process.exit(0)
}

try {
  const urls = {}
  const keep = new Set()
  for (const [key, f] of Object.entries(files)) {
    const body = await readFile(f.local)
    const hash = createHash('sha256').update(body).digest('hex').slice(0, 10)
    const pathname = `${PREFIX}${f.name}-${hash}.${f.ext}`
    const blob = await put(pathname, body, {
      access: 'public',
      contentType: f.contentType,
      addRandomSuffix: false,
      allowOverwrite: true,
    })
    urls[key] = blob.url
    keep.add(pathname)
    console.log(`[assets] ${key} -> ${blob.url}`)
  }
  await writeFile('src/assets.json', JSON.stringify(urls, null, 2) + '\n')

  // Remove old versions so the store only holds the current files.
  const { blobs } = await list({ prefix: PREFIX })
  const stale = blobs.filter((b) => !keep.has(b.pathname)).map((b) => b.url)
  if (stale.length) {
    await del(stale)
    console.log(`[assets] removed ${stale.length} old file(s)`)
  }
} catch (err) {
  console.warn(`[assets] Blob upload failed, using files from public/: ${err.message}`)
}
