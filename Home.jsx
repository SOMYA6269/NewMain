import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'
import manageVideo from '../assets/images/manage.mp4'

const DRAG_TOOLS = [
  { icon: '⚡', name: 'Automation', color: '#f59e0b' },
  { icon: '🔧', name: 'Integration', color: '#8b5cf6' },
  { icon: '📊', name: 'Analytics', color: '#06b6d4' },
  { icon: '🔐', name: 'Security', color: '#10b981' },
  { icon: '☁️', name: 'Cloud', color: '#3b82f6' },
  { icon: '🚀', name: 'Deploy', color: '#ef4444' },
]

const CAPABILITIES = [
  {
    title: 'Drag & Build',
    description: 'Visual workflow builder. Drag components, drop connections, build powerful automations in minutes.',
    icon: '🎯',
  },
  {
    title: 'Drop & Integrate',
    description: 'Connect any system instantly. Drop APIs, databases, and services into your workflow seamlessly.',
    icon: '🔗',
  },
  {
    title: 'Deploy & Scale',
    description: 'One-click deployment. Scale from prototype to production with enterprise-grade infrastructure.',
    icon: '⚙️',
  },
]

export default function Home() {
  const [draggedItem, setDraggedItem] = useState(null)

  return (
    <div className="homepage-new">
      <Navbar />
      <main className="home-main-new">
        {/* Hero Section */}
        <section className="hero-new">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">Drag & Drop Software Tools</div>
              <h1 className="hero-title-new">
                <span className="drag-text">Drag</span> Your Ideas,{' '}
                <span className="drop-text">Drop</span> Your Solutions
              </h1>
              <p className="hero-description-new">
                Build powerful software tools with our drag-and-drop platform. No coding required. 
                Just drag, drop, and deploy. Create automation workflows, integrate systems, and scale 
                your business with visual software tools.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">10x</div>
                  <div className="stat-label">Faster Development</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Pre-built Tools</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
              <div className="hero-actions-new">
                <Link to="/trial" className="btn-primary-new">
                  Start Building Free
                </Link>
                <Link to="/demo" className="btn-secondary-new">
                  Watch Demo
                </Link>
              </div>
            </div>
            <div className="hero-visual-new">
              <div className="drag-drop-canvas">
                <div className="canvas-background"></div>
                <div className="tool-blocks">
                  {DRAG_TOOLS.map((tool, index) => (
                    <div
                      key={tool.name}
                      className={`tool-block ${draggedItem === index ? 'dragging' : ''}`}
                      style={{ '--tool-color': tool.color }}
                      onMouseDown={() => setDraggedItem(index)}
                      onMouseUp={() => setDraggedItem(null)}
                    >
                      <span className="tool-icon">{tool.icon}</span>
                      <span className="tool-name">{tool.name}</span>
                    </div>
                  ))}
                </div>
                <div className="canvas-image">
                  <video 
                    src={manageVideo} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="drag-video"
                    aria-label="Drag and Drop Software Tools Demo"
                  />
                </div>
                <div className="connection-lines">
                  <svg className="connections">
                    <path d="M50 100 Q150 50 250 100" stroke="currentColor" fill="none" strokeWidth="2" />
                    <path d="M250 100 Q350 150 450 100" stroke="currentColor" fill="none" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="capabilities-section">
          <div className="container-new">
            <div className="section-header-new">
              <h2>How Drag & Drop Works</h2>
              <p>Three simple steps to build powerful software tools</p>
            </div>
            <div className="capabilities-grid">
              {CAPABILITIES.map((cap, index) => (
                <div key={cap.title} className="capability-card" style={{ '--delay': `${index * 0.1}s` }}>
                  <div className="capability-icon">{cap.icon}</div>
                  <h3>{cap.title}</h3>
                  <p>{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Showcase */}
        <section className="tools-showcase">
          <div className="container-new">
            <div className="showcase-header">
              <h2>Build Any Software Tool</h2>
              <p>From automation to analytics, create what you need</p>
            </div>
            <div className="tools-grid-new">
              {DRAG_TOOLS.map((tool) => (
                <div key={tool.name} className="tool-card-new" style={{ '--accent': tool.color }}>
                  <div className="tool-card-icon" style={{ backgroundColor: `${tool.color}20`, color: tool.color }}>
                    {tool.icon}
                  </div>
                  <h4>{tool.name}</h4>
                  <p>Build {tool.name.toLowerCase()} tools with drag-and-drop simplicity</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section-new">
          <div className="container-new">
            <div className="cta-content-new">
              <h2>Ready to Build Your Software Tools?</h2>
              <p>Join thousands of businesses building with Drag & Drop</p>
              <div className="cta-buttons">
                <Link to="/trial" className="btn-cta-primary">
                  Start Free Trial
                </Link>
                <Link to="/demo" className="btn-cta-secondary">
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
