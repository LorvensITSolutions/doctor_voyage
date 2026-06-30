import { Link } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'

export default function PolicyPageLayout({ title, description, lastUpdated, children }) {
  return (
    <>
      <Navbar />
      <main className="section-light min-h-screen pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-voyage-teal transition-colors hover:text-deep-ocean"
          >
            <HiArrowLeft size={18} />
            Back to Home
          </Link>

          <header className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-voyage-teal">Legal</p>
            <h1 className="mt-3 font-display text-3xl font-bold text-deep-ocean sm:text-4xl">{title}</h1>
            {description && (
              <p className="mt-4 text-base leading-relaxed text-deep-ocean/70">{description}</p>
            )}
            {lastUpdated && (
              <p className="mt-4 text-sm text-deep-ocean/50">Last updated: {lastUpdated}</p>
            )}
          </header>

          <div className="mt-10">{children}</div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
