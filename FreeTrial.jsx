import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FreeTrial.css'

const WORKSPACE_URL = 'https://drag-and-drop-offline-jvym.onrender.com'

export default function FreeTrial() {
  return (
    <div className="trial-page">
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>Spin up Drag &amp; Drop in seconds</h1>
          <p>
            No forms. No gatekeepers. Click below to open the Drag &amp; Drop software workspace and explore
            every tool firsthand.
          </p>
          <a
            className="btn btn-primary trial-launch-btn"
            href={WORKSPACE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch Drag &amp; Drop workspace
          </a>
        </div>
      </div>
      
      <section className="trial-direct">
        <div className="container">
          <div className="trial-direct-card">
            <h2>What happens next?</h2>
            <ol>
              <li>We open the Drag &amp; Drop environment in a new tab—no signup required.</li>
              <li>Use the built-in tour or explore the tool stack at your own pace.</li>
              <li>Need your own tenant? Ping us from within the workspace and we’ll provision it instantly.</li>
            </ol>
            <a
              className="btn btn-secondary"
              href="/support/contact"
            >
              Talk with a product specialist
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

