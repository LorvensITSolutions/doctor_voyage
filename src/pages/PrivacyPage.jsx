import PolicyPageLayout from '../components/PolicyPageLayout'
import PolicyContent from '../components/PolicyContent'

export default function PrivacyPage() {
  return (
    <PolicyPageLayout
      title="Privacy Policy"
      description="How Doctor Voyage collects, uses, and protects your personal information when you use our MBBS abroad consultancy services."
      lastUpdated="June 30, 2026"
    >
      <PolicyContent type="privacy" variant="page" />
    </PolicyPageLayout>
  )
}
