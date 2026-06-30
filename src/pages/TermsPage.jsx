import PolicyPageLayout from '../components/PolicyPageLayout'
import PolicyContent from '../components/PolicyContent'

export default function TermsPage() {
  return (
    <PolicyPageLayout
      title="Terms & Conditions"
      description="The terms governing your use of Doctor Voyage consultancy services and this website."
      lastUpdated="June 30, 2026"
    >
      <PolicyContent type="terms" variant="page" />
    </PolicyPageLayout>
  )
}
