import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function useScrollTo() {
  return (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

export function useCounter(end, duration = 2, inView = true) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    let start = 0
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) requestAnimationFrame(animate)
      else setCount(end)
    }

    requestAnimationFrame(animate)
  }, [end, duration, inView])

  return count
}

export function useSectionInView(margin = '-80px') {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin })
  return [ref, isInView]
}
