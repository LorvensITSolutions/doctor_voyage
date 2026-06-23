import { motion } from 'framer-motion'
import { FaUserMd, FaShieldAlt, FaEye, FaHeart } from 'react-icons/fa'
import { aboutHighlights } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/animations'
import { useSectionInView } from '../hooks/useAnimations'

const icons = [FaUserMd, FaShieldAlt, FaEye, FaHeart]

export default function About() {
  const [ref, isInView] = useSectionInView()

  return (
    <section id="about" className="section-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-voyage-teal/20 to-deep-ocean/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <FaUserMd className="mx-auto text-voyage-teal/40" size={120} />
                  <p className="mt-4 text-sm font-medium text-deep-ocean/40">Professional Team Image</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl border-4 border-sage-white bg-luxury-gold/20" />
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full border-4 border-sage-white bg-voyage-teal/20" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="text-sm font-semibold uppercase tracking-widest text-voyage-teal">
              About Us
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-3 font-display text-3xl font-bold text-deep-ocean sm:text-4xl">
              Guiding Dreams to <span className="text-voyage-teal">Global Medical Careers</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-deep-ocean/70">
              Doctor Voyage is a premier MBBS abroad consultancy dedicated to helping Indian students
              and their families navigate the complex world of international medical education. With
              years of expertise and partnerships across top universities in Kyrgyzstan, Russia,
              Kazakhstan, Georgia, Uzbekistan, and beyond, we transform aspirations into achievements.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-deep-ocean/70">
              Our mission is simple: provide honest, transparent, and comprehensive guidance so every
              student finds the right university, secures admission, and thrives in their medical journey abroad.
            </motion.p>

            <motion.div variants={staggerContainer} className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutHighlights.map((item, i) => {
                const Icon = icons[i]
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    custom={i}
                    className="glass-light group rounded-xl p-5 transition-all hover:shadow-lg hover:shadow-voyage-teal/10"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-voyage-teal/10 transition-colors group-hover:bg-voyage-teal/20">
                      <Icon className="text-voyage-teal" size={18} />
                    </div>
                    <h3 className="font-semibold text-deep-ocean">{item.title}</h3>
                    <p className="mt-1 text-sm text-deep-ocean/60">{item.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
