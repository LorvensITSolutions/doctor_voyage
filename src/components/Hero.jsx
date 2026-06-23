import { motion } from 'framer-motion'
import { FaUsers, FaGraduationCap, FaHandshake } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { useScrollTo } from '../hooks/useAnimations'

const trustIndicators = [
  { icon: FaUsers, text: '500+ Students Guided' },
  { icon: FaGraduationCap, text: 'MBBS Abroad Experts' },
  { icon: FaHandshake, text: 'End-to-End Admission Support' },
]

const floatingShapes = [
  { size: 300, x: '10%', y: '20%', delay: 0 },
  { size: 200, x: '75%', y: '15%', delay: 1 },
  { size: 150, x: '60%', y: '70%', delay: 2 },
  { size: 100, x: '20%', y: '75%', delay: 1.5 },
]

export default function Hero() {
  const scrollTo = useScrollTo()

  return (
    <section id="home" className="relative min-h-screen overflow-hidden gradient-hero section-dark">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(13,115,119,0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.15),transparent_50%)]" />
      </div>

      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-ice-teal/10 bg-voyage-teal/5"
          style={{ width: shape.size, height: shape.size, left: shape.x, top: shape.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: shape.delay, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-block rounded-full border border-luxury-gold/30 bg-luxury-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-luxury-gold"
          >
            Trusted MBBS Abroad Consultancy
          </motion.span>

          <h1 className="font-display text-4xl font-bold leading-tight text-sage-white sm:text-5xl lg:text-6xl">
            Your MBBS Journey Begins{' '}
            <span className="text-gradient-gold">With Confidence</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sage-white/75 sm:text-xl">
            Expert guidance for MBBS admissions abroad with complete support from counseling to
            university enrollment.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollTo('#counseling')}
              className="group flex items-center justify-center gap-2 rounded-full bg-luxury-gold px-8 py-4 text-base font-semibold text-deep-ocean transition-all hover:bg-luxury-gold/90 hover:shadow-xl hover:shadow-luxury-gold/25"
            >
              Book Free Counseling
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('#universities')}
              className="rounded-full border border-ice-teal/30 bg-ice-teal/10 px-8 py-4 text-base font-semibold text-sage-white transition-all hover:bg-ice-teal/20"
            >
              Explore Universities
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {trustIndicators.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="glass-dark flex items-center gap-3 rounded-xl px-5 py-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-voyage-teal/30">
                <Icon className="text-ice-teal" size={18} />
              </div>
              <span className="text-sm font-medium text-sage-white/90">{text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-ocean to-transparent" />
    </section>
  )
}
