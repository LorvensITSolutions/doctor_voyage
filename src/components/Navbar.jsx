import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks } from '../data/content'
import { useScrollTo } from '../hooks/useAnimations'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrollTo = useScrollTo()
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    if (isHome) {
      scrollTo(href)
    } else {
      navigate('/', { state: { scrollTo: href } })
    }
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'glass-dark shadow-lg shadow-deep-ocean/20' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <Logo className="h-11 sm:h-12" />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-sage-white/80 transition-colors hover:text-luxury-gold"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={() => handleNav('#counseling')}
            className="rounded-full bg-luxury-gold px-6 py-2.5 text-sm font-semibold text-deep-ocean transition-all hover:bg-luxury-gold/90 hover:shadow-lg hover:shadow-luxury-gold/20"
          >
            Free Counseling
          </button>
        </div>

        <button
          className="text-sage-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-dark overflow-hidden border-t border-ice-teal/10 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-sage-white/90 transition-colors hover:bg-voyage-teal/20"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNav('#counseling')}
                  className="w-full rounded-full bg-luxury-gold px-6 py-3 text-sm font-semibold text-deep-ocean"
                >
                  Free Counseling
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
