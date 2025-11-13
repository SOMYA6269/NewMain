import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import dragVideo from '../assets/images/drag.mp4'
import invoicePreview from '../assets/images/invoice.png'
import './GroceryStudio.css'

const METRICS = [
  { label: 'Implementation', value: '< 7 days' },
  { label: 'Accuracy', value: '99.9%' },
  { label: 'Satisfaction', value: '4.8/5' },
]

const WORKFLOW_STEPS = [
  {
    title: 'Connect sources',
    description: 'Import SKUs, price lists, vendors, and outlets from spreadsheets or your legacy systems in minutes.',
  },
  {
    title: 'Model your flows',
    description: 'Drag and drop replenishment, procurement, and billing lanes. Set guardrails once—let automation do the rest.',
  },
  {
    title: 'Measure & optimise',
    description: 'Monitor real-time dashboards, trigger alerts, and improve margins with AI-backed nudges.',
  },
]

const HIGHLIGHTS = [
  {
    title: 'Store-ready templates',
    description: 'Launch with playbooks for grocery, supermarket, and omni-channel retail—customise without code.',
  },
  {
    title: 'Governed automation',
    description: 'Automate replenishment, expiry, and vendor SLAs with approvals, audit logs, and alerts built-in.',
  },
  {
    title: 'Unified intelligence',
    description: 'Unlock cohort-level profitability, shrinkage insights, and workforce productivity from a single board.',
  },
]

const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '₹1,299 / month',
    details: 'Single store, core automation blocks, daily performance digest.',
  },
  {
    name: 'Growth',
    price: '₹2,499 / month',
    details: 'Multi-store coordination, demand forecasting, vendor scorecards.',
  },
  {
    name: 'Scale',
    price: 'Talk to us',
    details: 'Advanced controls with SSO, regional rollouts, and data residency.',
  },
]

const INITIAL_FEEDBACK = [
  {
    source: 'FreshCart Retail',
    quote: 'We replaced three apps in 10 days—dashboards now update faster than our team chats. (Rated 5/5)',
  },
  {
    source: 'DailyMart',
    quote: 'Pricing clarity plus ready-made flows made multi-outlet expansion painless. (Rated 4/5)',
  },
]

export default function GroceryStudio() {
  const [feedbackEntries, setFeedbackEntries] = useState(INITIAL_FEEDBACK)
  const [form, setForm] = useState({ name: '', rating: '5', comment: '' })
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = form.comment.trim()
    if (!trimmed) {
      setMessage('Please add a quick note about your experience before submitting.')
      return
    }

    const entry = {
      source: form.name.trim() || 'Anonymous user',
      quote: `${trimmed} (Rated ${form.rating}/5)`,
    }
    setFeedbackEntries([entry, ...feedbackEntries])
    setForm({ name: '', rating: '5', comment: '' })
    setMessage('Thank you! Your feedback has been captured.')
    setTimeout(() => setMessage(''), 2500)
  }

  return (
    <div className="grocery-page">
      <Navbar />
      <header className="grocery-hero">
        <div className="container grocery-hero-grid">
          <div className="hero-copy">
            <Link to="/upcoming-tools" className="back-link">
              ← Back to Upcoming Tools
            </Link>
            <span className="grocery-badge">Available now</span>
            <h1>Grocery Studio</h1>
            <p>
              Build your end-to-end grocery operation with drag-and-drop software tools. Automate billing, purchasing,
              replenishment, and analytics without stitching together multiple systems.
            </p>
            <div className="hero-metrics">
              {METRICS.map((metric) => (
                <div className="metric-pill" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions hero-actions--shaded">
              <Link to="/pricing" className="btn btn-primary">
                Check suite pricing
              </Link>
              <Link to="/support/contact" className="btn btn-secondary">
                Talk to product specialist
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="device-stack">
              <div className="hero-laptop">
                <div className="laptop-screen">
                  <span className="laptop-notch" aria-hidden="true"></span>
                  <video
                    src={dragVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="laptop-video"
                    aria-label="Grocery Studio drag and drop demo"
                  />
                </div>
                <div className="laptop-base">
                  <span className="laptop-trackpad" aria-hidden="true"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="grocery-main">
        <section className="grocery-section product-preview">
          <div className="container preview-grid">
            <div className="preview-copy">
              <span className="preview-label">Product Preview</span>
              <h2 className="section-title">Invoice and billing flows in one clean workspace</h2>
              <p>
                Breeze through billing with drag-and-drop invoice blocks, automated tax calculation, and quick-export
                ledger views. Grocery Studio keeps every transaction synced with your stock and supplier records.
              </p>
            </div>
            <div className="preview-visual">
              <div className="preview-mobile">
                <div className="preview-mobile-top">
                  <span className="preview-mobile-camera"></span>
                  <span className="preview-mobile-speaker"></span>
                </div>
                <div className="preview-mobile-screen">
                  <img
                    src={invoicePreview}
                    alt="Invoice workspace inside Grocery Studio"
                    className="preview-image"
                    loading="lazy"
                  />
                </div>
                <div className="preview-mobile-bottom">
                  <span className="preview-mobile-home"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grocery-section">
          <div className="container">
            <h2 className="section-title">How it works in three steps</h2>
            <div className="process-grid">
              {WORKFLOW_STEPS.map((step) => (
                <article className="process-card" key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grocery-section">
          <div className="container">
            <h2 className="section-title">Why teams love Grocery Studio</h2>
            <div className="highlight-grid">
              {HIGHLIGHTS.map((item) => (
                <article className="highlight-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grocery-section">
          <div className="container">
            <div className="detail-card">
              <h2 className="section-title">Pricing</h2>
              <div className="pricing-grid">
                {PRICING_PLANS.map((plan) => (
                  <article className="pricing-card" key={plan.name}>
                    <h3>{plan.name}</h3>
                    <span className="pricing-price">{plan.price}</span>
                    <p>{plan.details}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grocery-section">
          <div className="container feedback-grid">
            <div className="detail-card feedback-card">
              <h2 className="section-title">Teams are saying</h2>
              <ul className="feedback-list">
                {feedbackEntries.map((entry, index) => (
                  <li key={`${entry.source}-${index}`}>
                    <p>“{entry.quote}”</p>
                    <span>— {entry.source}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="detail-card form-card">
              <h2 className="section-title">Share your experience</h2>
              <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label className="form-field">
                    <span>Your name (optional)</span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      placeholder="Pat from MarketFresh"
                    />
                  </label>
                  <label className="form-field">
                    <span>Rating</span>
                    <select
                      value={form.rating}
                      onChange={(event) => setForm({ ...form, rating: event.target.value })}
                    >
                      <option value="5">5 - Outstanding</option>
                      <option value="4">4 - Very good</option>
                      <option value="3">3 - Good</option>
                      <option value="2">2 - Needs work</option>
                      <option value="1">1 - Not for me</option>
                    </select>
                  </label>
                </div>
                <label className="form-field">
                  <span>Your feedback</span>
                  <textarea
                    rows={4}
                    value={form.comment}
                    onChange={(event) => setForm({ ...form, comment: event.target.value })}
                    placeholder="Tell us how Grocery Studio fits your workflow…"
                    required
                  />
                </label>
                {message && <p className="form-message">{message}</p>}
                <button type="submit" className="btn btn-primary submit-btn">
                  Submit feedback
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
