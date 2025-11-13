import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './SupportPages.css'

const documentationItems = [
  {
    label: 'DP',
    title: 'Daily & Monthly Profit Tracking',
    description:
      'Get real-time insights into your performance with daily sales, expenses, and net profit summaries. Monthly rollups help you uncover trends and act fast.',
    points: ['Real-time profit calculations', 'Daily sales summaries', 'Monthly profit reports', 'Expense tracking and categorization'],
  },
  {
    label: 'PM',
    title: 'Purchase Management',
    description:
      'Streamline procurement with automated purchase orders, delivery tracking, and supplier insights so the right stock lands on your shelves every time.',
    points: ['Create purchase orders daily', 'Track supplier deliveries', 'Maintain purchase history', 'Automated inventory updates'],
  },
  {
    label: 'AL',
    title: 'Smart Alerts & Notifications',
    description:
      'Stay ahead of issues with low-stock, expiry, and business health alerts delivered to the channels your team relies on.',
    points: ['Low stock thresholds you control', 'Expiry date safeguards', 'Custom alert configurations', 'Push and email notifications'],
  },
  {
    label: 'WA',
    title: 'Billing via WhatsApp',
    description:
      'Generate professional bills instantly and share them over WhatsApp for faster customer response and tracked payments.',
    points: ['Instant bill generation', 'Share securely via WhatsApp', 'Professional templates', 'Quick payment tracking'],
  },
  {
    label: 'BS',
    title: 'Barcode Scanner',
    description:
      'Accelerate checkout and inventory updates by scanning product barcodes straight from any device camera.',
    points: ['Camera-based scanning', 'Quick product lookup', 'Instant stock updates', 'Faster billing'],
  },
  {
    label: 'CD',
    title: 'Customer & Debtor Management',
    description:
      'Manage customer profiles, purchase history, and outstanding balances with automated reminders and credit controls.',
    points: ['Rich customer profiles', 'Credit limit management', 'Automated reminders', 'Historical purchase insights'],
  },
  {
    label: 'AI',
    title: 'AI Assistant',
    description:
      'Let AI coach your pricing, inventory, and demand plans with contextual guidance and voice-ready quick actions.',
    points: ['Smart pricing nudges', 'Inventory optimization', 'Demand forecasting', 'Voice-ready commands'],
  },
  {
    label: 'POS',
    title: 'Advanced Billing System',
    description:
      'Deliver GST-compliant bills, support multiple payment methods, and keep billing synced with inventory and customer records.',
    points: ['Quick bill generation', 'GST compliant invoices', 'Multiple payment modes', 'Receipt printing & notes'],
  },
]

export default function SupportPages() {
  const { page } = useParams()
  
  const content = {
    'help-center': {
      title: 'Help Center',
      content: <HelpCenterContent />,
    },
    contact: {
      title: 'Contact Us',
      content: <ContactContent />,
    },
    documentation: {
      title: 'Documentation',
      content: <DocumentationContent />,
    },
  }
  
  const currentContent = content[page] || content['help-center']
  
  return (
    <div className="support-page">
      <Navbar />
      {page !== 'contact' && (
        <div className="page-hero">
          <div className="container">
            <h1>{currentContent.title}</h1>
            <p>We're here to help you succeed</p>
          </div>
        </div>
      )}
      <section className="support-content">
        <div className="container">{currentContent.content}</div>
      </section>
      <Footer />
    </div>
  )
}

function HelpCenterContent() {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <h3>How do I get started?</h3>
          <p>Sign up for a free 7-day trial. No credit card required. You'll have full access to all features during the trial period.</p>
        </div>
        <div className="faq-item">
          <h3>Can I import my existing data?</h3>
          <p>Yes! We provide tools to import your existing inventory, customer, and sales data. Our support team will help you with the migration process.</p>
        </div>
        <div className="faq-item">
          <h3>Is there a mobile app?</h3>
          <p>Our ERP is fully responsive and works on all devices including smartphones and tablets. You can access all features from any device with an internet connection.</p>
        </div>
        <div className="faq-item">
          <h3>What payment methods do you accept?</h3>
          <p>We accept all major credit cards, debit cards, UPI, and net banking. Payments are processed securely.</p>
        </div>
      </div>
    </div>
  )
}

function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactChannels = [
    {
      label: 'Direct email',
      value: 'dragdroperp@gmail.com',
      meta: 'Avg. reply time: 2 hours',
      icon: '✉️',
      color: '#8b5cf6',
    },
    {
      label: 'Hotline',
      value: '+91 98765 43210',
      meta: 'Weekdays 8:00 – 20:00 IST',
      icon: '📞',
      color: '#06b6d4',
    },
    {
      label: 'WhatsApp desk',
      value: '+91 99887 76655',
      meta: 'Instant updates, ticket status & nudges',
      icon: '💬',
      color: '#10b981',
    },
    {
      label: 'Product HQ',
      value: '3rd Floor, Block H, Sector 63, Noida',
      meta: 'Co-build sessions every Friday',
      icon: '📍',
      color: '#f59e0b',
    },
  ]

  const promiseStats = [
    { value: '97%', label: 'Tickets resolved within SLA', icon: '✓' },
    { value: '28 min', label: 'Average callback time', icon: '⚡' },
    { value: '24/7', label: 'Monitoring for premium plans', icon: '🛡️' },
  ]

  const flowStages = [
    { title: 'Share your context', detail: 'Tell us the workflow, outlet, or integration you need help with.', icon: '📝' },
    { title: 'Drag into our support board', detail: 'We assign the right specialist and loop in engineering if needed.', icon: '🎯' },
    { title: 'Drop the resolution back to you', detail: 'Receive fixes, playbooks, or personalized recordings inside the app.', icon: '✨' },
  ]

  return (
    <div className="contact-page-new">
      {/* Hero Section */}
      <section className="contact-hero-new">
        <div className="container contact-hero-container">
          <div className="contact-hero-content">
            <span className="contact-hero-badge">Get in Touch</span>
            <h1 className="contact-hero-title">
              <span className="contact-title-highlight">Connect</span> with Our Team
            </h1>
            <p className="contact-hero-description">
              Whether you're onboarding, scaling, or creating a custom flow, our product specialists respond fast and move your work forward. 
              Contact us through the channel that fits your day.
            </p>
            <div className="contact-stats-grid">
              {promiseStats.map((stat, index) => (
                <div key={stat.label} className="contact-stat-card" style={{ '--delay': `${index * 0.1}s` }}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="contact-channels-section">
        <div className="container">
          <div className="section-header-new">
            <span className="section-badge-new">Contact Channels</span>
            <h2>Choose Your Preferred Way to Reach Us</h2>
            <p>Multiple ways to connect, same great support experience</p>
          </div>
          <div className="contact-channels-grid">
            {contactChannels.map((channel, index) => (
              <div 
                key={channel.label} 
                className="contact-channel-card"
                style={{ '--accent-color': channel.color, '--delay': `${index * 0.1}s` }}
              >
                <div className="channel-icon-wrapper" style={{ backgroundColor: `${channel.color}20`, color: channel.color }}>
                  <span className="channel-icon">{channel.icon}</span>
                </div>
                <h3>{channel.label}</h3>
                <p className="channel-value">{channel.value}</p>
                <span className="channel-meta">{channel.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Flow */}
      <section className="contact-form-section">
        <div className="container contact-form-wrapper">
          <div className="contact-form-side">
            <div className="form-header">
              <span className="form-badge">Send Message</span>
              <h2>Let's Start a Conversation</h2>
              <p>Fill out the form below and we'll get back to you within 60 minutes during business hours.</p>
            </div>
            <form className="contact-form-new" onSubmit={handleSubmit}>
              <div className="form-row-new">
                <div className="form-field-new">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-field-new">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-row-new">
                <div className="form-field-new">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div className="form-field-new">
                  <label htmlFor="reason">Reason for Contact</label>
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a reason</option>
                    <option value="onboarding">Onboarding support</option>
                    <option value="automation">Automation help</option>
                    <option value="integration">Integration request</option>
                    <option value="billing">Billing & account</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-field-new">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe how we can help you..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="form-footer-new">
                <span className="response-pledge">
                  <strong>Response pledge:</strong> First reply within 60 minutes during business hours.
                </span>
                <button type="submit" className="btn-submit-new">
                  Send Message →
                </button>
              </div>
            </form>
          </div>

          <div className="contact-flow-side">
            <div className="flow-header">
              <span className="flow-badge">How Support Works</span>
              <h2>Our Support Flow</h2>
            </div>
            <div className="support-flow-visual">
              {flowStages.map((stage, index) => (
                <div key={stage.title} className="flow-step-card" style={{ '--step': index + 1 }}>
                  <div className="flow-step-number">{index + 1}</div>
                  <div className="flow-step-icon">{stage.icon}</div>
                  <h3>{stage.title}</h3>
                  <p>{stage.detail}</p>
                  {index < flowStages.length - 1 && <div className="flow-connector"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="contact-info-section">
        <div className="container">
          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-icon">🚨</div>
              <h3>Need immediate help?</h3>
              <p>Ping our real-time operations desk from the in-app beacon or WhatsApp. We'll drag your request straight to the hot lane.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🤝</div>
              <h3>Want to co-build?</h3>
              <p>Join our weekly roadmap studio and pair-build new drag-and-drop flows with the product team.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📚</div>
              <h3>Looking for docs?</h3>
              <p>Browse ready-to-deploy blueprints, APIs, and playbooks in the documentation hub.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function DocumentationContent() {
  return (
    <div className="documentation-content">
      <h2>How Our ERP Works</h2>
      <p className="doc-intro">
        Our comprehensive grocery management system helps you streamline operations, track profits, manage inventory, and
        grow your business efficiently. Here's how each feature works:
      </p>
      <div className="doc-grid">
        {documentationItems.map((item) => (
          <article className="doc-card" key={item.title}>
            <div className="doc-card-icon" aria-hidden="true">
              <span>{item.label}</span>
        </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
          </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

