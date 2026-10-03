import { useEffect, useState } from 'react'

function currentTheme() {
  const set = document.documentElement.dataset.theme
  if (set) return set
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => setTheme(currentTheme()), [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked; the toggle still works for this visit.
    }
    setTheme(next)
  }

  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="label link inline-flex min-h-[44px] items-center text-muted"
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}
