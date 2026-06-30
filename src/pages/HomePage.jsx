import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Countries from '../components/Countries'
import WhyChoose from '../components/WhyChoose'
import AdmissionProcess from '../components/AdmissionProcess'
import SuccessMetrics from '../components/SuccessMetrics'
import SuccessStories from '../components/SuccessStories'
import UniversityHighlights from '../components/UniversityHighlights'
import FAQ from '../components/FAQ'
import LeadForm from '../components/LeadForm'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import StickyCounseling from '../components/StickyCounseling'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo || location.hash
    if (!scrollTarget) return

    const selector = scrollTarget.startsWith('#') ? scrollTarget : `#${scrollTarget}`
    const timer = setTimeout(() => {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)

    if (location.state?.scrollTo) {
      window.history.replaceState({}, document.title)
    }

    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Countries />
        <WhyChoose />
        <AdmissionProcess />
        <SuccessMetrics />
        <SuccessStories />
        <UniversityHighlights />
        <FAQ />
        <LeadForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <StickyCounseling />
    </>
  )
}
