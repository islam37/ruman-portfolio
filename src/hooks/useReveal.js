import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible] using IntersectionObserver.
 * Once visible, stays visible (one-shot trigger).
 *
 * @param {number} threshold - Intersection threshold (0–1, default 0.12)
 */
export function useReveal(threshold = 0.12) {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )

    const el = ref.current
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, visible]
}
