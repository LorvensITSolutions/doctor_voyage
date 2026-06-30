export default function PolicyContent({ type, variant = 'modal' }) {
  const isPage = variant === 'page'
  const containerClass = isPage
    ? 'space-y-8 text-base leading-relaxed text-deep-ocean/80'
    : 'space-y-5 text-sm leading-relaxed text-deep-ocean/80'
  const headingClass = isPage
    ? 'mb-3 font-display text-xl font-semibold text-deep-ocean'
    : 'mb-2 font-display text-lg font-semibold text-deep-ocean'

  if (type === 'privacy') {
    return (
      <div className={containerClass}>
        <section>
          <h3 className={headingClass}>Information Collection</h3>
          <p>
            Doctor Voyage collects personal information that you voluntarily provide when you inquire about
            MBBS abroad admissions, including your name, phone number, email address, academic qualifications,
            NEET status, and preferred study destination. We may also collect information through counseling
            sessions, application forms, and communication channels.
          </p>
        </section>
        <section>
          <h3 className={headingClass}>Student Data Usage</h3>
          <p>
            Your information is used exclusively to provide educational consultancy services, including
            university shortlisting, admission assistance, visa guidance, and ongoing student support. We may
            share relevant details with partner universities solely for admission processing purposes, with
            your explicit consent. We do not sell or rent student data to third parties.
          </p>
        </section>
        <section>
          <h3 className={headingClass}>Security</h3>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data
            against unauthorized access, alteration, disclosure, or destruction. Access to student records
            is restricted to authorized consultancy staff involved in your admission process.
          </p>
        </section>
        <section>
          <h3 className={headingClass}>Cookies</h3>
          <p>
            Our website may use cookies and similar technologies to enhance your browsing experience,
            analyze site traffic, and improve our services. You can manage cookie preferences through your
            browser settings. Essential cookies required for site functionality cannot be disabled.
          </p>
        </section>
        <section>
          <h3 className={headingClass}>Contact Information</h3>
          <p>
            For privacy-related inquiries, data access requests, or to exercise your rights regarding
            personal information, please contact us at{' '}
            <a href="mailto:info@doctorvoyage.com" className="text-voyage-teal hover:underline">
              info@doctorvoyage.com
            </a>{' '}
            or call +91 98765 43210.
          </p>
        </section>
      </div>
    )
  }

  return (
    <div className={containerClass}>
      <section>
        <h3 className={headingClass}>Consultancy Scope</h3>
        <p>
          Doctor Voyage provides educational consultancy services for MBBS admissions abroad. Our role is
          to guide, advise, and assist students and parents through the admission process. We are not a
          university, government body, or visa-issuing authority.
        </p>
      </section>
      <section>
        <h3 className={headingClass}>Admission Responsibility</h3>
        <p>
          While we provide comprehensive admission support, the final responsibility for meeting university
          eligibility criteria, submitting accurate documentation, and complying with admission requirements
          rests with the student and their guardians.
        </p>
      </section>
      <section>
        <h3 className={headingClass}>University Decisions</h3>
        <p>
          Admission decisions are made solely by respective universities based on their criteria and
          policies. Doctor Voyage cannot guarantee admission to any specific university and acts as an
          intermediary facilitating the application process.
        </p>
      </section>
      <section>
        <h3 className={headingClass}>Visa Approval Disclaimer</h3>
        <p>
          Visa approval is at the sole discretion of the respective embassy or consulate. Doctor Voyage
          provides documentation assistance and interview preparation but does not guarantee visa issuance.
          Our reported success rates are based on historical data and may vary.
        </p>
      </section>
      <section>
        <h3 className={headingClass}>Payment Terms</h3>
        <p>
          Consultancy fees, university tuition, and other charges are communicated transparently before
          engagement. Payment schedules and refund policies are outlined in individual service agreements.
          University fees are payable directly to institutions unless otherwise agreed in writing.
        </p>
      </section>
      <section>
        <h3 className={headingClass}>Intellectual Property</h3>
        <p>
          All content on this website, including text, graphics, logos, and materials, is the property of
          Doctor Voyage and protected by applicable intellectual property laws. Unauthorized reproduction or
          distribution is prohibited.
        </p>
      </section>
      <section>
        <h3 className={headingClass}>Limitation of Liability</h3>
        <p>
          Doctor Voyage shall not be liable for any indirect, incidental, or consequential damages arising
          from the use of our services. Our liability is limited to the consultancy fees paid for the
          specific service in question, to the extent permitted by applicable law.
        </p>
      </section>
    </div>
  )
}
