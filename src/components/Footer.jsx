import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navLinks, countries, contactInfo } from '../data/content'
import SocialLinks from './SocialLinks'
import Logo from './Logo'
import { useScrollTo } from '../hooks/useAnimations'

export default function Footer() {
  const scrollTo = useScrollTo()
  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionNav = (href) => {
    if (location.pathname === '/') {
      scrollTo(href)
    } else {
      navigate('/', { state: { scrollTo: href } })
    }
  }

  return (
    <footer className="section-dark border-t border-ice-teal/10 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block">
              <Logo className="h-14" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-sage-white/50">
              Your trusted partner for MBBS abroad admissions. Expert guidance from counseling to enrollment.
            </p>
            <div className="mt-6">
              <SocialLinks variant="dark" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sage-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleSectionNav(link.href)}
                    className="text-sm text-sage-white/50 transition-colors hover:text-ice-teal"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sage-white">Countries</h3>
            <ul className="mt-4 space-y-2.5">
              {countries.map((c) => (
                <li key={c.name}>
                  <button
                    onClick={() => handleSectionNav('#countries')}
                    className="text-sm text-sage-white/50 transition-colors hover:text-ice-teal"
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sage-white">Contact Info</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-sage-white/50">
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
              <li className="leading-relaxed">{contactInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ice-teal/10 pt-8 sm:flex-row">
          <p className="text-sm text-sage-white/40">
            &copy; 2026 Doctor Voyage. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-sage-white/40 transition-colors hover:text-ice-teal"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-sage-white/40 transition-colors hover:text-ice-teal"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
