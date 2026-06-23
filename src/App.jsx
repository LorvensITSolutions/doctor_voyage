import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Countries from './components/Countries'
import WhyChoose from './components/WhyChoose'
import AdmissionProcess from './components/AdmissionProcess'
import SuccessMetrics from './components/SuccessMetrics'
import SuccessStories from './components/SuccessStories'
import UniversityHighlights from './components/UniversityHighlights'
import FAQ from './components/FAQ'
import LeadForm from './components/LeadForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import StickyCounseling from './components/StickyCounseling'
import Modal from './components/Modal'
import PolicyContent from './components/PolicyContent'

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

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
      <Footer onPrivacy={() => setPrivacyOpen(true)} onTerms={() => setTermsOpen(true)} />
      <WhatsAppFloat />
      <StickyCounseling />

      <Modal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        <PolicyContent type="privacy" />
      </Modal>
      <Modal isOpen={termsOpen} onClose={() => setTermsOpen(false)} title="Terms & Conditions">
        <PolicyContent type="terms" />
      </Modal>
    </>
  )
}
