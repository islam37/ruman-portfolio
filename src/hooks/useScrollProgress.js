import { useEffect, useState } from 'react'

/**
 * Returns current scroll progress as a percentage (0–100).
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el  = document.documentElement
      const pct = el.scrollTop / (el.scrollHeight - el.clientHeight)
      setProgress(Math.min(pct * 100, 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}
