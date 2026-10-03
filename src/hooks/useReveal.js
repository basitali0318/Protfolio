import { useEffect, useRef } from 'react'

// Adds `is-visible` to the element the first time it scrolls into view.
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
