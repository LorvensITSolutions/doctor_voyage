import { LOGO_URL } from '../data/brand'

export default function Logo({ className = 'h-12', alt = 'Doctor Voyage' }) {
  return (
    <img
      src={LOGO_URL}
      alt={alt}
      className={`w-auto rounded-xl object-contain ${className}`}
      loading="eager"
    />
  )
}
