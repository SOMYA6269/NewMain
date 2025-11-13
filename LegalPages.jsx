import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './LegalPages.css'

export default function LegalPages() {
  const { page } = useParams()
  
  const content = {
    'terms': {
      title: 'Terms and Conditions',
      content: <TermsContent />
    },
    'privacy': {
      title: 'Privacy Policy',
      content: <PrivacyContent />
    },
    'cookies': {
      title: 'Cookie Policy',
      content: <CookieContent />
    },
    'refund': {
      title: 'Refund Policy',
      content: <RefundContent />
    }
  }
  
  const currentContent = content[page] || content['terms']
  
  return (
    <div className="legal-page">
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>{currentContent.title}</h1>
          <p className="last-updated">Last updated: December 2024</p>
        </div>
      </div>
      <section className="legal-content">
        <div className="container">
          {currentContent.content}
        </div>
      </section>
      <Footer />
    </div>
  )
}

function TermsContent() {
  return (
    <div className="legal-text">
      <section className="legal-section">
        <h2>1. Acceptance of Terms</h2>
        <p>These Terms and Conditions ("Terms") govern your access to and use of the Drag & Drop Grocery ERP platform (the "Service"). By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you may not use the Service.</p>
      </section>
      <section className="legal-section">
        <h2>2. Service Description</h2>
        <p>The Service provides tools for retail and grocery businesses to manage customers, products, inventory, billing, purchase orders, finance, analytics, and related operations. Features may vary by subscription plan. We may improve, update, or modify features at our discretion.</p>
      </section>
      <section className="legal-section">
        <h2>3. Accounts and Security</h2>
        <p>You must provide accurate information when creating an account and keep your login credentials secure. You are responsible for activities under your account. Notify us immediately of any unauthorized access or suspected breach.</p>
      </section>
      <section className="legal-section">
        <h2>4. Free Trial</h2>
        <p>New users may receive a 7-day free trial with access to plan features. No payment details are required to start a trial. At the end of the trial, continued access requires selecting and paying for a subscription plan.</p>
      </section>
      <section className="legal-section">
        <h2>5. Subscriptions, Pricing and Payments</h2>
        <p>Subscription fees are billed in advance and are non-refundable, except as required by law or expressly stated in our Refund Policy. Prices are listed in INR and may be updated with reasonable prior notice.</p>
      </section>
      <section className="legal-section">
        <h2>6. Acceptable Use</h2>
        <p>You agree not to misuse the Service, including but not limited to violating laws, infringing intellectual property, attempting unauthorized access, introducing malicious code, or interfering with Service operations.</p>
      </section>
      <section className="legal-section">
        <h2>7. Data Privacy and Security</h2>
        <p>We implement administrative, technical, and physical safeguards to protect your data. Our use of personal data is described in the Privacy Policy. You retain ownership of business data you upload to the Service.</p>
      </section>
      <section className="legal-section">
        <h2>8. Service Availability</h2>
        <p>We strive to provide reliable uptime but do not guarantee uninterrupted availability. We may perform maintenance or suspend access to address security, legal, or operational concerns.</p>
      </section>
      <section className="legal-section">
        <h2>9. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Drag & Drop and its affiliates are not liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, revenue, data, or business opportunities arising from your use of the Service.</p>
      </section>
      <section className="legal-section">
        <h2>10. Termination</h2>
        <p>We may suspend or terminate access for violations of these Terms or for other legitimate reasons. You may cancel at any time; upon cancellation, access to the Service will end at the close of your current billing period.</p>
      </section>
      <section className="legal-section">
        <h2>11. Governing Law</h2>
        <p>These Terms are governed by the laws of India. Courts in Mumbai, Maharashtra shall have exclusive jurisdiction, subject to applicable law.</p>
      </section>
      <section className="legal-section">
        <h2>12. Contact</h2>
        <p>For questions about these Terms, contact: support@dragdropgrocery.com</p>
      </section>
    </div>
  )
}

function PrivacyContent() {
  return (
    <div className="legal-text">
      <section className="legal-section">
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
      </section>
      <section className="legal-section">
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
      </section>
      <section className="legal-section">
        <h2>3. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
      </section>
    </div>
  )
}

function CookieContent() {
  return (
    <div className="legal-text">
      <section className="legal-section">
        <h2>1. What Are Cookies</h2>
        <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience.</p>
      </section>
      <section className="legal-section">
        <h2>2. How We Use Cookies</h2>
        <p>We use cookies to remember your preferences, analyze site traffic, and improve our services.</p>
      </section>
      <section className="legal-section">
        <h2>3. Managing Cookies</h2>
        <p>You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.</p>
      </section>
    </div>
  )
}

function RefundContent() {
  return (
    <div className="legal-text">
      <section className="legal-section">
        <h2>1. Refund Eligibility</h2>
        <p>We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service within the first 30 days, we will provide a full refund.</p>
      </section>
      <section className="legal-section">
        <h2>2. Refund Process</h2>
        <p>To request a refund, please contact our support team. Refunds are processed within 5-7 business days to your original payment method.</p>
      </section>
      <section className="legal-section">
        <h2>3. Non-Refundable Items</h2>
        <p>Setup fees, if any, are non-refundable. Refunds are only available for monthly subscription fees.</p>
      </section>
    </div>
  )
}

