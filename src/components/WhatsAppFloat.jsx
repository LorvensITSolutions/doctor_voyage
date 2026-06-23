import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { contactInfo } from '../data/content'

export default function WhatsAppFloat() {
  const number = contactInfo.whatsapp.replace(/[^0-9]/g, '')

  return (
    <motion.a
      href={`https://wa.me/${number}?text=Hi%2C%20I%20am%20interested%20in%20MBBS%20abroad%20counseling.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-success-green text-white shadow-lg shadow-success-green/30 transition-shadow hover:shadow-xl hover:shadow-success-green/40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  )
}
