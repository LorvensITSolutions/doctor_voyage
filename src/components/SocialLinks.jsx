import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
]

export default function SocialLinks({ className = '', iconSize = 18, variant = 'light' }) {
  const base =
    variant === 'dark'
      ? 'bg-ice-teal/10 text-ice-teal hover:bg-ice-teal/20 hover:text-sage-white'
      : 'bg-voyage-teal/10 text-voyage-teal hover:bg-voyage-teal hover:text-sage-white'

  return (
    <div className={`flex gap-3 ${className}`}>
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${base}`}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  )
}
