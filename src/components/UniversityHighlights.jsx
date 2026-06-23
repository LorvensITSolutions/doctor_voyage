import { motion } from 'framer-motion'
import { FaUniversity, FaGlobeAmericas, FaCertificate, FaRupeeSign, FaClock } from 'react-icons/fa'
import { universities } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/animations'
import { useSectionInView } from '../hooks/useAnimations'

export default function UniversityHighlights() {
  const [ref, isInView] = useSectionInView()

  return (
    <section id="universities" className="section-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-ice-teal">Partner Universities</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-sage-white sm:text-4xl">
            Featured <span className="text-gradient-gold">Universities</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sage-white/60">
            NMC-recognized institutions offering world-class medical education at affordable tuition.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {universities.map((uni, i) => (
            <motion.div
              key={uni.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.02 }}
              className="group glass-dark overflow-hidden rounded-2xl transition-all hover:shadow-2xl hover:shadow-voyage-teal/15"
            >
              <div className={`bg-gradient-to-br ${uni.color} relative flex h-40 items-center justify-center`}>
                <FaUniversity className="text-sage-white/20" size={80} />
                <div className="absolute inset-0 bg-deep-ocean/20 transition-opacity group-hover:opacity-0" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-sage-white">{uni.name}</h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-sage-white/60">
                    <FaGlobeAmericas className="shrink-0 text-ice-teal" size={14} />
                    {uni.country}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-sage-white/60">
                    <FaCertificate className="shrink-0 text-luxury-gold" size={14} />
                    {uni.recognition}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-sage-white/60">
                    <FaClock className="shrink-0 text-ice-teal" size={14} />
                    {uni.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
