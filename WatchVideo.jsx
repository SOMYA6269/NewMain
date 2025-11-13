import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import VideoSection from '../components/VideoSection'
import ScrollSection from '../components/ScrollSection'
import './WatchVideo.css'

export default function WatchVideo() {
  return (
    <div className="watch-video-page">
      <Navbar />
      <main className="watch-main">
        <ScrollSection animationType="fadeUp">
          <VideoSection />
        </ScrollSection>
        <div className="youtube-channel-section">
          <div className="container">
            <h2>Visit Our YouTube Channel</h2>
            <p>Watch tutorials, demos, and get the latest updates</p>
            <a 
              href="https://youtube.com/@dragdrop-8223?si=anZKVtF2JzIu8MSS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-channel-button"
            >
              <span className="youtube-icon">▶</span>
              Subscribe to Our Channel
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


