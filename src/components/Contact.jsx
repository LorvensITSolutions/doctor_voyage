import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { contactInfo } from '../data/content'
import { fadeUp, staggerContainer } from '../utils/animations'
import { useSectionInView } from '../hooks/useAnimations'
import SocialLinks from './SocialLinks'

const cards = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    color: 'text-voyage-teal',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: contactInfo.whatsapp,
    href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`,
    color: 'text-success-green',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    color: 'text-ember',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Office Address',
    value: contactInfo.address,
    href: null,
    color: 'text-luxury-gold',
  },
]

export default function Contact() {
  const [ref, isInView] = useSectionInView()

  return (
    <section id="contact" className="section-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-voyage-teal">Reach Us</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-deep-ocean sm:text-4xl">
            Get in <span className="text-voyage-teal">Touch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-deep-ocean/60">
            Have questions? We're here to help. Reach out through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card, i) => {
            const Icon = card.icon
            const content = (
              <motion.div
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4 }}
                className="h-full rounded-2xl border border-voyage-teal/10 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-lg hover:shadow-voyage-teal/5"
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-voyage-teal/10 ${card.color}`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-deep-ocean">{card.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-deep-ocean/60">{card.value}</p>
              </motion.div>
            )

            return card.href ? (
              <a key={card.label} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={card.label}>{content}</div>
            )
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-sm font-medium text-deep-ocean/50">Follow us on social media</p>
          <SocialLinks className="justify-center" />
        </motion.div>
      </div>
    </section>
  )
}
