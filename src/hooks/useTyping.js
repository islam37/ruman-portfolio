import { useEffect, useState } from 'react'

/**
 * Animated typewriter hook.
 * Cycles through an array of strings, typing and deleting each one.
 *
 * @param {string[]} texts   - Array of strings to cycle through
 * @param {number}   speed   - Typing speed in ms per character (default 80)
 * @param {number}   pause   - Pause duration after fully typed (default 1800)
 * @returns {string}         - Current display string
 */
export function useTyping(texts, speed = 80, pause = 1800) {
  const [display,  setDisplay]  = useState('')
  const [textIdx,  setTextIdx]  = useState(0)
  const [charIdx,  setCharIdx]  = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIdx]

    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), speed)
      return () => clearTimeout(t)
    }

    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
      return () => clearTimeout(t)
    }

    if (deleting && charIdx === 0) {
      setDeleting(false)
      setTextIdx(i => (i + 1) % texts.length)
    }
  }, [charIdx, deleting, textIdx, texts, speed, pause])

  useEffect(() => {
    setDisplay(texts[textIdx].slice(0, charIdx))
  }, [charIdx, textIdx, texts])

  return display
}
