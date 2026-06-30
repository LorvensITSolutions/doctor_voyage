import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import { contactInfo, formSubmitUrl, formSubmitAjaxUrl } from '../data/content'
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

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function Contact() {
  const [ref, isInView] = useSectionInView()
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch(formSubmitAjaxUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'New Contact Form Submission - Doctor Voyage',
          _template: 'table',
          ...form,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setForm(initialForm)
      } else {
        setError('Something went wrong. Please try again or contact us directly.')
      }
    } catch {
      setError('Unable to send your message. Please try again or reach us on WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

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
            Have questions? We're here to help. Reach out through any of the channels below or send us a message.
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
          className="mx-auto mt-14 max-w-2xl"
        >
          {submitted ? (
            <div className="rounded-2xl border border-success-green/20 bg-success-green/5 p-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-green/20">
                <HiArrowRight className="text-success-green" size={28} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-deep-ocean">Message Sent!</h3>
              <p className="mt-2 text-deep-ocean/65">
                Thank you for reaching out. Our team will get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              action={formSubmitUrl}
              method="POST"
              onSubmit={handleSubmit}
              className="rounded-2xl border border-voyage-teal/10 bg-white p-8 shadow-xl shadow-voyage-teal/5"
            >
              <h3 className="font-display text-xl font-bold text-deep-ocean">Send Us a Message</h3>
              <p className="mt-2 text-sm text-deep-ocean/60">
                Fill in your details and we'll respond as soon as possible.
              </p>

              <input type="hidden" name="_subject" value="New Contact Form Submission - Doctor Voyage" />
              <input type="hidden" name="_template" value="table" />

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-deep-ocean">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-voyage-teal/15 bg-sage-white/50 px-4 py-3 text-sm text-deep-ocean outline-none transition-colors focus:border-voyage-teal focus:ring-2 focus:ring-voyage-teal/20"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-deep-ocean">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-voyage-teal/15 bg-sage-white/50 px-4 py-3 text-sm text-deep-ocean outline-none transition-colors focus:border-voyage-teal focus:ring-2 focus:ring-voyage-teal/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-deep-ocean">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-voyage-teal/15 bg-sage-white/50 px-4 py-3 text-sm text-deep-ocean outline-none transition-colors focus:border-voyage-teal focus:ring-2 focus:ring-voyage-teal/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-deep-ocean">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full resize-none rounded-xl border border-voyage-teal/15 bg-sage-white/50 px-4 py-3 text-sm text-deep-ocean outline-none transition-colors focus:border-voyage-teal focus:ring-2 focus:ring-voyage-teal/20"
                  />
                </div>
              </div>

              {error && (
                <p className="mt-4 text-sm text-ember">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-luxury-gold py-4 text-base font-semibold text-deep-ocean transition-all hover:bg-luxury-gold/90 hover:shadow-lg hover:shadow-luxury-gold/20 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? 'Sending...' : 'Send Message'}
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
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
