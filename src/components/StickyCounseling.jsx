import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { useScrollTo } from '../hooks/useAnimations'

export default function StickyCounseling() {
  const [visible, setVisible] = useState(false)
  const scrollTo = useScrollTo()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          onClick={() => scrollTo('#counseling')}
          className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-sage-white shadow-lg shadow-ember/30 transition-shadow hover:shadow-xl hover:shadow-ember/40 sm:left-auto sm:right-6 sm:translate-x-0"
        >
          Free Counseling
          <HiArrowRight size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
