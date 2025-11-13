import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/images/ddfinal.png'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)
      if (currentY > lastScrollY && currentY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScrollY])

  // lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => document.body.classList.remove('no-scroll')
  }, [mobileMenuOpen])

  // close on ESC key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // close on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <nav className={`navbar ${hidden ? 'navbar-hidden' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-container">
            <img src={logoImg} alt="Drag & Drop Logo" className="navbar-logo-img" />
            <div className="brand-text">
              <h1>Drag & Drop</h1>
              <p>Software Tools</p>
            </div>
          </div>
        </Link>
        
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
        
        {mobileMenuOpen && (
          <div className={`nav-overlay ${mobileMenuOpen ? 'active' : ''}`}>
            <div id="mobile-menu" className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
              <button 
                className="mobile-menu-close"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✕
              </button>
              <div className="nav-links-content">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/features" className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  Features
                </Link>
                <Link to="/upcoming-tools" className={`nav-link ${location.pathname === '/upcoming-tools' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  Upcoming Tools
                </Link>
                <Link to="/support/contact" className={`nav-link ${location.pathname.startsWith('/support') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
                <a 
                  href="https://youtube.com/@dragdrop-8223?si=QlSqPTNULwQUF1HO" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="nav-link video-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        )}
        <div className="nav-links desktop-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/features" className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}>
            Features
          </Link>
          <Link to="/upcoming-tools" className={`nav-link ${location.pathname === '/upcoming-tools' ? 'active' : ''}`}>
            Upcoming Tools
          </Link>
          <Link to="/support/contact" className={`nav-link ${location.pathname.startsWith('/support') ? 'active' : ''}`}>
            Contact
          </Link>
          <a 
            href="https://youtube.com/@dragdrop-8223?si=QlSqPTNULwQUF1HO" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link video-link"
          >
            Watch Video
          </a>
        </div>
      </div>
    </nav>
  )
}

