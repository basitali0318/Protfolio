import { useState } from 'react'
import { site } from '../data.js'

// Renders the profile photo; hides itself if the file is missing.
export default function Portrait({ className = '' }) {
  const [failed, setFailed] = useState(false)
  if (!site.photo || failed) return null
  return (
    <figure className={className}>
      <img
        src={site.photo}
        alt={`Portrait of ${site.name}`}
        width="273"
        height="406"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="aspect-[4/5] w-full rounded-sm border border-line object-cover object-top grayscale-[0.85] sepia-[0.15]"
      />
    </figure>
  )
}
