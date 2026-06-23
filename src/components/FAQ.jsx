import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'
import { faqs } from '../data/content'
import { fadeUp } from '../utils/animations'
import { useSectionInView } from '../hooks/useAnimations'

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-xl border border-voyage-teal/10 bg-white transition-shadow hover:shadow-md">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-deep-ocean">{question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <HiChevronDown className="shrink-0 text-voyage-teal" size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="border-t border-voyage-teal/5 px-6 py-4 text-sm leading-relaxed text-deep-ocean/65">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, isInView] = useSectionInView()

  return (
    <section id="faqs" className="section-light py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-voyage-teal">FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-deep-ocean sm:text-4xl">
            Frequently Asked <span className="text-voyage-teal">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-deep-ocean/60">
            Everything you need to know about pursuing MBBS abroad with Doctor Voyage.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="mt-12 space-y-3"
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              {...faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
