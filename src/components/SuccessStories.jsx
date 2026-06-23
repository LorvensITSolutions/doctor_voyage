import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { testimonials } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/animations'
import { useSectionInView } from '../hooks/useAnimations'

export default function SuccessStories() {
  const [ref, isInView] = useSectionInView()

  return (
    <section id="success-stories" className="section-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-ice-teal">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-sage-white sm:text-4xl">
            Student <span className="text-gradient-gold">Success Stories</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sage-white/60">
            Hear from students and parents who trusted Doctor Voyage with their MBBS abroad journey.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-14 grid gap-8 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              className="glass-dark relative rounded-2xl p-8 transition-shadow hover:shadow-xl hover:shadow-voyage-teal/10"
            >
              <FaQuoteLeft className="text-luxury-gold/40" size={28} />
              <p className="mt-4 text-sm leading-relaxed text-sage-white/80">{t.review}</p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} className="text-luxury-gold" size={12} />
                ))}
              </div>
              <div className="mt-6 flex items-center gap-4 border-t border-ice-teal/10 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-voyage-teal to-ice-teal font-semibold text-sage-white">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sage-white">{t.name}</p>
                  <p className="text-sm text-ice-teal">MBBS in {t.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
