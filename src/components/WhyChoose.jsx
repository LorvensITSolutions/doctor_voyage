import { motion } from 'framer-motion'
import {
  FaUniversity,
  FaFileAlt,
  FaFolderOpen,
  FaPassport,
  FaPlane,
  FaHandsHelping,
} from 'react-icons/fa'
import { features } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/animations'
import { useSectionInView } from '../hooks/useAnimations'

const iconMap = {
  university: FaUniversity,
  admission: FaFileAlt,
  documents: FaFolderOpen,
  visa: FaPassport,
  travel: FaPlane,
  support: FaHandsHelping,
}

export default function WhyChoose() {
  const [ref, isInView] = useSectionInView()

  return (
    <section id="why-choose" className="section-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-voyage-teal">Why Us</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-deep-ocean sm:text-4xl">
            Why Choose <span className="text-voyage-teal">Doctor Voyage</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-deep-ocean/60">
            Comprehensive support at every stage of your MBBS abroad journey — from first counseling to campus arrival.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-voyage-teal/10 bg-white p-7 shadow-sm transition-all hover:border-voyage-teal/25 hover:shadow-lg hover:shadow-voyage-teal/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-voyage-teal to-voyage-teal/70 shadow-lg shadow-voyage-teal/20 transition-transform group-hover:scale-110">
                  <Icon className="text-sage-white" size={24} />
                </div>
                <h3 className="font-display text-xl font-semibold text-deep-ocean">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep-ocean/60">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
