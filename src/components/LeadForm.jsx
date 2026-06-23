import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { FaShieldAlt } from 'react-icons/fa'
import { neetOptions, countryOptions } from '../data/content'
import { fadeUp } from '../utils/animations'
import { useSectionInView } from '../hooks/useAnimations'

export default function LeadForm() {
  const [ref, isInView] = useSectionInView()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    neet: '',
    country: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="counseling" className="section-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-voyage-teal">Get Started</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-deep-ocean sm:text-4xl">
              Book Your <span className="text-voyage-teal">Free Counseling</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-deep-ocean/65">
              Take the first step toward your MBBS abroad dream. Fill in your details and our expert
              counselors will reach out within 24 hours with personalized guidance.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-success-green/20 bg-success-green/5 px-5 py-4">
              <FaShieldAlt className="shrink-0 text-success-green" size={20} />
              <p className="text-sm text-deep-ocean/70">
                100% free consultation. No hidden charges. Your information is kept confidential.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            {submitted ? (
              <div className="rounded-2xl border border-success-green/20 bg-success-green/5 p-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-green/20">
                  <HiArrowRight className="text-success-green" size={28} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-deep-ocean">Thank You!</h3>
                <p className="mt-2 text-deep-ocean/65">
                  Our counselor will contact you shortly. Check your phone and email for updates.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-voyage-teal/10 bg-white p-8 shadow-xl shadow-voyage-teal/5"
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-deep-ocean">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-voyage-teal/15 bg-sage-white/50 px-4 py-3 text-sm text-deep-ocean outline-none transition-colors focus:border-voyage-teal focus:ring-2 focus:ring-voyage-teal/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-deep-ocean">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-voyage-teal/15 bg-sage-white/50 px-4 py-3 text-sm text-deep-ocean outline-none transition-colors focus:border-voyage-teal focus:ring-2 focus:ring-voyage-teal/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-deep-ocean">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-voyage-teal/15 bg-sage-white/50 px-4 py-3 text-sm text-deep-ocean outline-none transition-colors focus:border-voyage-teal focus:ring-2 focus:ring-voyage-teal/20"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="neet" className="mb-1.5 block text-sm font-medium text-deep-ocean">
                        NEET Status
                      </label>
                      <select
                        id="neet"
                        name="neet"
                        required
                        value={form.neet}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-voyage-teal/15 bg-sage-white/50 px-4 py-3 text-sm text-deep-ocean outline-none transition-colors focus:border-voyage-teal focus:ring-2 focus:ring-voyage-teal/20"
                      >
                        <option value="">Select status</option>
                        {neetOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="country" className="mb-1.5 block text-sm font-medium text-deep-ocean">
                        Preferred Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        value={form.country}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-voyage-teal/15 bg-sage-white/50 px-4 py-3 text-sm text-deep-ocean outline-none transition-colors focus:border-voyage-teal focus:ring-2 focus:ring-voyage-teal/20"
                      >
                        <option value="">Select country</option>
                        {countryOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-luxury-gold py-4 text-base font-semibold text-deep-ocean transition-all hover:bg-luxury-gold/90 hover:shadow-lg hover:shadow-luxury-gold/20"
                >
                  Get Free Counseling
                  <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
