import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Features.css'

const SOFTWARE_TOOLS = [
  {
    label: 'AI',
    title: 'AI Workspace Copilot',
    summary: 'Automated insight, triage, and follow-up for every retail channel.',
    accent: 'violet',
    icon: '🤖',
    bullets: [
      'Flags signal spikes and quality drift in minutes.',
      'Drafts responses, action plans, and approvals on demand.',
      'Keeps decision history and accountability in one place.',
    ],
    metric: '4 min',
    metricLabel: 'incident triage',
    teams: 'CxO • Ops • Finance',
    spotlight: 'AI copilots turn raw alerts into ready-to-run actions with governed hand-offs.',
  },
  {
    label: 'OP',
    title: 'Operations Orchestrator',
    summary: 'Plan, launch, and monitor daily execution across every site.',
    accent: 'blue',
    icon: '⚙️',
    bullets: [
      'Digitise playbooks with SLAs, owners, and automation.',
      'Track throughput, blockers, and escalations in real time.',
      'Distribute updates instantly to field, store, and partner teams.',
    ],
    metric: '18%',
    metricLabel: 'uptime lift',
    teams: 'Ops leads • Store managers',
    spotlight: 'Every routine becomes a measurable workflow with alerts before service slips.',
  },
  {
    label: 'BC',
    title: 'Billing & Commerce Hub',
    summary: 'Point-of-sale, billing, and settlement software in one layer.',
    accent: 'indigo',
    icon: '🧾',
    bullets: [
      'POS, invoicing, and subscriptions built for Indian retail.',
      'Automated tax, credits, and settlement reconciliation.',
      'UPI, cards, wallets, BNPL, and split payments out of the box.',
    ],
    metric: '99.8%',
    metricLabel: 'settlement accuracy',
    teams: 'Finance • Store teams',
    spotlight: 'Finance, ops, and store teams share the same live ledger and cash view.',
  },
  {
    label: 'DF',
    title: 'Decision & Finance Studio',
    summary: 'Profit, risk, and cash visibility without spreadsheet chaos.',
    accent: 'teal',
    icon: '📈',
    bullets: [
      'Live margin, sell-through, and spend dashboards by store or SKU.',
      'Scenario modelling to evaluate pricing and supplier options.',
      'Auto-generated digests to Slack, WhatsApp, or email.',
    ],
    metric: '360°',
    metricLabel: 'profit view',
    teams: 'Finance • Leadership',
    spotlight: 'Every leader sees the same numbers, models outcomes, and shares the plan in one click.',
  },
  {
    label: 'CL',
    title: 'Client & Loyalty Cloud',
    summary: 'Unified CX software for journeys, loyalty, and credit.',
    accent: 'rose',
    icon: '💞',
    bullets: [
      'Full customer timeline across purchase, support, and credit.',
      'Drag-and-drop lifecycle journeys for onboarding and retention.',
      'Loyalty, referral, and credit programs that sync everywhere.',
    ],
    metric: '21%',
    metricLabel: 'repeat lift',
    teams: 'CX • Growth • CRM',
    spotlight: 'Journeys adapt to real-time signals so offers, credits, and messaging stay relevant.',
  },
  {
    label: 'IF',
    title: 'Integration Fabric',
    summary: 'Connectors, APIs, and events to wire Drag & Drop into your stack.',
    accent: 'amber',
    icon: '🔗',
    bullets: [
      'Pre-built adapters for accounting, CRM, ecommerce, and analytics.',
      'REST APIs, webhooks, and streams keep your warehouse current.',
      'Custom hooks for internal tools, bots, and partner systems.',
    ],
    metric: '40+',
    metricLabel: 'integrations',
    teams: 'Engineering • Analytics',
    spotlight: 'Deploy connectors in hours with retries, logs, and version control included.',
  },
]

export default function Features() {
  const [activeTool, setActiveTool] = useState(0)
  const activeToolData = SOFTWARE_TOOLS[activeTool]

  return (
    <div className="features-page">
      <Navbar />
      <main className="features-main">
        <section className="features-hero">
          <div className="hero-container">
            <span className="hero-kicker">Product suites</span>
            <h1>Spin up retail software without rebuilding your stack.</h1>
            <p>
              Drag &amp; Drop delivers ready-to-run software modules across ops, billing, CX, and intelligence. Choose the
              suites you need, connect your data, and go live quickly with governance in place.
            </p>
          </div>
        </section>

        <section className="suite-lab" id="suite-lab">
          <div className="container lab-grid">
            <aside className="lab-sidenav">
              <h2>Suite lab</h2>
              <p>Switch suites to see the software bundle, primary teams, and rollout notes.</p>
              <div className="lab-controls">
                {SOFTWARE_TOOLS.map((tool, index) => {
                  const isActive = index === activeTool
                  return (
                    <button
                      key={tool.title}
                      type="button"
                      className={['lab-button', isActive ? 'lab-button--active' : ''].join(' ')}
                      onClick={() => setActiveTool(index)}
                      aria-pressed={isActive}
                    >
                      <span className="lab-button-icon" data-accent={tool.accent} aria-hidden="true">
                        {tool.icon}
                      </span>
                      <div className="lab-button-copy">
                        <strong>{tool.title}</strong>
                        <small>{tool.metricLabel}</small>
                      </div>
                    </button>
                  )
                })}
              </div>
            </aside>
            <article className="lab-panel">
              <header className="lab-panel-header">
                <span className="lab-tag" data-accent={activeToolData.accent}>
                  {activeToolData.label} suite
                </span>
                <h2>{activeToolData.title}</h2>
                <p>{activeToolData.summary}</p>
              </header>
              <div className="lab-panel-body">
                <div className="lab-stats">
                  <div className="lab-stat">
                    <strong>{activeToolData.metric}</strong>
                    <span>{activeToolData.metricLabel}</span>
                  </div>
                  <div className="lab-stat">
                    <strong>{activeToolData.teams}</strong>
                    <span>Primary teams</span>
                  </div>
                </div>
                <div className="lab-columns">
                  <div className="lab-column">
                    <span className="lab-column-title">What it unlocks</span>
                    <ul>
                      {activeToolData.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="lab-column lab-column--spotlight">
                    <span className="lab-column-title">Spotlight</span>
                    <p>{activeToolData.spotlight}</p>
                  </div>
                </div>
              </div>
              <footer className="lab-panel-footer">
                <div className="lab-actions">
                  <Link to="/demo" className="btn btn-primary">
                    Add to rollout plan
                  </Link>
                  <Link to="/support/contact" className="btn btn-secondary">
                    Talk to product specialist
                  </Link>
                </div>
                <div className="lab-meta">
                  <span>Sandbox-ready • installs in under 30 minutes • governed access roles included</span>
                </div>
              </footer>
            </article>
          </div>
        </section>

        <section className="features-cta">
          <div className="container cta-body">
            <div className="cta-copy">
              <h2>Deploy the software stack your operations need</h2>
              <p>Share your use cases and we will package the right suites, integrations, and rollout plan for your team.</p>
            </div>
            <div className="cta-buttons">
              <Link to="/demo" className="btn btn-primary">
                Book a suite walkthrough
              </Link>
              <Link to="/upcoming-tools" className="btn btn-secondary">
                Preview upcoming tools
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
