import { motion } from 'framer-motion'
import { metrics } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/animations'
import { useSectionInView, useCounter } from '../hooks/useAnimations'

function MetricCard({ value, suffix, label, inView, index }) {
  const count = useCounter(value, 2, inView)

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="text-center"
    >
      <div className="font-display text-5xl font-bold text-ice-teal sm:text-6xl">
        {count}{suffix}
      </div>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-sage-white/60">{label}</p>
    </motion.div>
  )
}

export default function SuccessMetrics() {
  const [ref, isInView] = useSectionInView()

  return (
    <section id="metrics" className="section-dark relative overflow-hidden py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(13,115,119,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-ice-teal">Our Impact</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-sage-white sm:text-4xl">
            Numbers That <span className="text-gradient-gold">Speak</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} {...metric} inView={isInView} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
