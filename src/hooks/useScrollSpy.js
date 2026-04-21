import { useEffect, useState } from 'react'

/**
 * Watches which section is currently in view and returns its id.
 * @param {string[]} sectionIds
 */
export function useScrollSpy(sectionIds) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id)
      if (!el) return null

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.35 }
      )
      obs.observe(el)
      return obs
    })

    return () => observers.forEach(o => o?.disconnect())
  }, [sectionIds])

  return active
}
