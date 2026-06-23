import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { countries } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/animations'
import { useSectionInView, useScrollTo } from '../hooks/useAnimations'

export default function Countries() {
  const [ref, isInView] = useSectionInView()
  const scrollTo = useScrollTo()

  return (
    <section id="countries" className="section-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-ice-teal">Destinations</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-sage-white sm:text-4xl">
            Top Countries for <span className="text-gradient-gold">MBBS Abroad</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sage-white/60">
            Explore affordable, NMC-recognized medical programs across the world's leading destinations.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {countries.map((country, i) => (
            <motion.div
              key={country.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group glass-dark overflow-hidden rounded-2xl transition-shadow hover:shadow-xl hover:shadow-voyage-teal/10"
            >
              <div className={`bg-gradient-to-br ${country.gradient} px-6 py-8`}>
                <span className="text-5xl">{country.flag}</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-sage-white">{country.name}</h3>
              </div>
              <div className="space-y-3 p-6">
                <div className="flex justify-between text-sm">
                  <span className="text-sage-white/50">Starting Tuition</span>
                  <span className="font-semibold text-ice-teal">{country.tuition}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-sage-white/50">Duration</span>
                  <span className="font-medium text-sage-white">{country.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-sage-white/50">Recognition</span>
                  <span className="font-medium text-luxury-gold">{country.recognition}</span>
                </div>
                <button
                  onClick={() => scrollTo('#counseling')}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-ice-teal/20 py-2.5 text-sm font-semibold text-ice-teal transition-all group-hover:bg-voyage-teal group-hover:text-sage-white group-hover:border-voyage-teal"
                >
                  Apply Now
                  <HiArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
