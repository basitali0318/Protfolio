// Uploads the CV and photo to Vercel Blob before each build and writes their
// public URLs to src/assets.json. Without BLOB_READ_WRITE_TOKEN (local dev),
// or if the upload fails, the site keeps serving the copies in public/.
import { readFile, writeFile } from 'node:fs/promises'
import { put } from '@vercel/blob'

const files = {
  cv: { local: 'public/Basit-Ali-CV.pdf', pathname: 'portfolio/Basit-Ali-CV.pdf', contentType: 'application/pdf' },
  photo: { local: 'public/basit-ali.jpg', pathname: 'portfolio/basit-ali.jpg', contentType: 'image/jpeg' },
}

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.log('[assets] BLOB_READ_WRITE_TOKEN not set, using files from public/')
  process.exit(0)
}

try {
  const urls = {}
  for (const [key, f] of Object.entries(files)) {
    const blob = await put(f.pathname, await readFile(f.local), {
      access: 'public',
      contentType: f.contentType,
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 3600,
    })
    urls[key] = blob.url
    console.log(`[assets] ${key} -> ${blob.url}`)
  }
  await writeFile('src/assets.json', JSON.stringify(urls, null, 2) + '\n')
} catch (err) {
  console.warn(`[assets] Blob upload failed, using files from public/: ${err.message}`)
}
