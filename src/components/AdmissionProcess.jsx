import { motion } from 'framer-motion'
import {
  FaComments,
  FaUserCheck,
  FaUniversity,
  FaFileUpload,
  FaEnvelopeOpen,
  FaPassport,
  FaPlaneDeparture,
  FaGraduationCap,
} from 'react-icons/fa'
import { processSteps } from '../data/content'
import { BRAND_TAGLINE } from '../data/brand'
import { fadeUp, staggerContainer } from '../utils/animations'
import { useSectionInView } from '../hooks/useAnimations'

const iconMap = {
  counseling: FaComments,
  evaluation: FaUserCheck,
  selection: FaUniversity,
  application: FaFileUpload,
  admission: FaEnvelopeOpen,
  visa: FaPassport,
  travel: FaPlaneDeparture,
  joining: FaGraduationCap,
}

export default function AdmissionProcess() {
  const [ref, isInView] = useSectionInView()

  return (
    <section id="process" className="section-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-voyage-teal">How It Works</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-deep-ocean sm:text-4xl">
            Your Admission <span className="text-voyage-teal">Journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-deep-ocean/60">
            {BRAND_TAGLINE} — a clear 8-step path from your first counseling session to university enrollment.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon]
            return (
              <motion.div
                key={step.step}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-voyage-teal/10 bg-white p-6 shadow-sm transition-all hover:border-voyage-teal/25 hover:shadow-lg hover:shadow-voyage-teal/5"
              >
                <span className="absolute right-4 top-4 font-display text-4xl font-bold text-voyage-teal/10">
                  {String(step.step).padStart(2, '0')}
                </span>

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-voyage-teal to-voyage-teal/80 shadow-md shadow-voyage-teal/20 transition-transform group-hover:scale-110">
                  <Icon className="text-sage-white" size={20} />
                </div>

                <div className="relative mt-5">
                  <span className="inline-block rounded-full bg-luxury-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-luxury-gold">
                    Step {step.step}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-deep-ocean">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-deep-ocean/55">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
