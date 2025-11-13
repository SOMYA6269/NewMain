import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './UpcomingTools.css'

const CURRENT_TOOL = {
  id: 'grocery-studio',
  icon: '🛒',
  name: 'Grocery Studio',
  tagline: 'Your Current Software Tool',
  description: 'Workflow studio for billing, purchasing, and store intelligence. Build your end-to-end grocery operation with drag-and-drop software tools.',
  features: ['Workflow builder', 'Live dashboards', 'Automation hooks', 'Billing automation', 'Store intelligence'],
  isAvailable: true,
  detailLink: '/upcoming-tools/grocery-studio',
  statusNote: 'Live & Available Now',
}

const UPCOMING_TOOLS = [
  {
    id: 'mobile-command',
    icon: '📱',
    name: 'Mobile Command',
    description: 'Native apps that keep field teams aligned on the go.',
    tags: ['Offline mode', 'Push tasks', 'Biometric sign-in'],
    isAvailable: false,
    stage: 'beta',
    statusNote: 'Private beta',
    releaseWindow: 'GA target • FY26 Q1',
  },
  {
    id: 'automation-recipes',
    icon: '🤖',
    name: 'Automation Recipes',
    description: 'Pre-built AI routines that connect Drag & Drop to your SaaS stack.',
    tags: ['Event streams', 'Smart triggers'],
    isAvailable: false,
    stage: 'beta',
    statusNote: 'Connector studio tests',
    releaseWindow: 'Pilot expansion • FY26 Q2',
  },
  {
    id: 'enterprise-guard',
    icon: '🔐',
    name: 'Enterprise Guard',
    description: 'Advanced roles, policies, and compliance exports for larger teams.',
    tags: ['Granular roles', 'Policy packs'],
    isAvailable: false,
    stage: 'explore',
    statusNote: 'Research interviews',
    releaseWindow: 'Discovery • FY26 Q3',
  },
]

const STAGE_INFO = {
  live: { label: 'Live', accent: 'success' },
  beta: { label: 'Beta', accent: 'beta' },
  explore: { label: 'Explore', accent: 'explore' },
}

const STAGE_FILTERS = [
  { id: 'all', label: 'All stages' },
  { id: 'live', label: 'Live now' },
  { id: 'beta', label: 'Private beta' },
  { id: 'explore', label: 'In discovery' },
]

const STAGE_ORDER = ['live', 'beta', 'explore']

const ACCESS_PROGRAMS = [
  {
    id: 'beta-network',
    icon: '🚀',
    title: 'Beta pilot network',
    description: 'Get first access to upcoming modules and co-design flows with our product team.',
    actionLabel: 'Join pilot waitlist',
    actionLink: '/support/contact',
  },
  {
    id: 'research-panel',
    icon: '📝',
    title: 'Research panel',
    description: 'Share how your teams operate today and help us validate the next set of software decisions.',
    actionLabel: 'Book a discovery call',
    actionLink: '/support/contact',
  },
  {
    id: 'release-digest',
    icon: '📬',
    title: 'Release digest',
    description: 'Receive monthly build notes, changelog highlights, and rollout guidance straight to your inbox.',
    actionLabel: 'View latest changelog',
    actionLink: '/documentation',
  },
]

export default function UpcomingTools() {
  const [activeStage, setActiveStage] = useState('all')

  const stageCounts = STAGE_ORDER.reduce((counts, stage) => {
    counts[stage] = UPCOMING_TOOLS.filter((tool) => tool.stage === stage).length
    return counts
  }, {})

  const filteredTools =
    activeStage === 'all'
      ? UPCOMING_TOOLS
      : UPCOMING_TOOLS.filter((tool) => tool.stage === activeStage)

  const roadmapTimeline = UPCOMING_TOOLS.filter((tool) => tool.stage !== 'live').map((tool) => ({
    name: tool.name,
    window: tool.releaseWindow,
    stage: STAGE_INFO[tool.stage].label,
  }))

  const lanesToRender = activeStage === 'all' ? STAGE_ORDER : [activeStage]

  const renderLane = (stage) => {
    const tools = UPCOMING_TOOLS.filter((tool) => tool.stage === stage)
    const stageInfo = STAGE_INFO[stage]
    const count = stageCounts[stage] ?? 0

    return (
      <div key={stage} className="lane">
        <header>
          <span className={`tool-stage tool-stage--${stageInfo.accent}`}>{stageInfo.label}</span>
          <strong>{count ? `${count} ${count === 1 ? 'module' : 'modules'}` : 'No modules yet'}</strong>
        </header>
        <div className="lane-list">
          {tools.length ? (
            tools.map((tool) => <ToolCard key={tool.id} tool={tool} variant="lane" />)
          ) : (
            <p className="empty-state">Help us prioritise this lane—reach out to product.</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="upcoming-tools-page">
      <Navbar />
      <main className="upcoming-main">
        {/* Hero Section - Current Tool Focus */}
        <section className="tools-hero">
          <div className="container tools-hero-container">
            <div className="hero-intro">
              <span className="hero-badge">Software Tools</span>
              <h1>Build Powerful Software Tools</h1>
              <p>
                We create software tools that power your business. From automation to analytics, 
                each tool is designed to solve real problems and scale with your needs.
              </p>
            </div>
            
            {/* Current Tool Showcase */}
            <div className="current-tool-showcase">
              <div className="current-tool-badge">
                <span className="live-indicator"></span>
                <span>Current Tool</span>
              </div>
              <div className="current-tool-card">
                <div className="current-tool-header">
                  <div className="current-tool-icon-wrapper">
                    <span className="current-tool-icon">{CURRENT_TOOL.icon}</span>
                  </div>
                  <div className="current-tool-info">
                    <h2>{CURRENT_TOOL.name}</h2>
                    <p className="current-tool-tagline">{CURRENT_TOOL.tagline}</p>
                  </div>
                </div>
                <p className="current-tool-description">{CURRENT_TOOL.description}</p>
                <div className="current-tool-features">
                  {CURRENT_TOOL.features.map((feature) => (
                    <span key={feature} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <div className="current-tool-actions">
                  <Link to={CURRENT_TOOL.detailLink} className="btn btn-primary">
                    Explore {CURRENT_TOOL.name} →
                  </Link>
                  <span className="current-tool-status">{CURRENT_TOOL.statusNote}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Tools Section */}
        <section className="upcoming-tools-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Coming Soon</span>
              <h2>Upcoming Software Tools</h2>
              <p>Explore tools in development and join early access programs</p>
            </div>
            
            <div className="tools-filter-nav">
              <div className="filter-buttons">
                {STAGE_FILTERS.map((stage) => (
                  <button
                    key={stage.id}
                    type="button"
                    className={['filter-btn', activeStage === stage.id ? 'filter-btn--active' : ''].join(' ')}
                    onClick={() => setActiveStage(stage.id)}
                  >
                    {stage.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={`tools-grid ${activeStage === 'all' ? 'tools-grid--all' : 'tools-grid--single'}`} aria-live="polite">
              {lanesToRender.map((stage) => renderLane(stage))}
            </div>
          </div>
        </section>

        {/* Access Programs */}
        <section className="access-programs-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Get Involved</span>
              <h2>Join Early Access Programs</h2>
              <p>Partner with us to shape the future of software tools</p>
            </div>
            <div className="programs-grid">
              {ACCESS_PROGRAMS.map((program) => (
                <article key={program.id} className="program-card">
                  <span className="program-icon" aria-hidden="true">
                    {program.icon}
                  </span>
                  <div className="program-body">
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                  </div>
                  <Link to={program.actionLink} className="program-link">
                    {program.actionLabel} →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Release Timeline */}
        <section className="release-timeline-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Roadmap</span>
              <h2>Release Timeline</h2>
              <p>Planned release windows for upcoming tools</p>
            </div>
            {roadmapTimeline.length ? (
              <div className="timeline-grid">
                {roadmapTimeline.map((entry) => (
                  <div key={entry.name} className="timeline-card">
                    <span className="timeline-stage">{entry.stage}</span>
                    <strong>{entry.name}</strong>
                    <span className="timeline-window">{entry.window}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-state">More roadmap milestones coming soon.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ToolCard({ tool, variant = 'lane' }) {
  const stageInfo = STAGE_INFO[tool.stage]

  return (
    <article className={`tool-card tool-card--${variant}`}>
      <div className="tool-card-top">
        <span className={`tool-stage tool-stage--${stageInfo.accent}`}>{stageInfo.label}</span>
        <span className="tool-icon">{tool.icon}</span>
      </div>
      <h3>{tool.name}</h3>
      <p>{tool.description}</p>
      <div className="tool-tag-list">
        {tool.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="tool-card-meta">
        <span>{tool.releaseWindow}</span>
        <span>{tool.statusNote}</span>
      </div>
      <div className="tool-card-footer">
        {tool.isAvailable && tool.detailLink ? (
          <Link to={tool.detailLink} className="tool-link">
            {variant === 'spotlight' ? 'Explore live board' : 'Open live board →'}
          </Link>
        ) : (
          <button type="button" className="tool-link ghost">
            Request access
          </button>
        )}
      </div>
    </article>
  )
}

