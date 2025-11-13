import { useEffect, useState } from 'react'
import logoImg from '../assets/images/ddfinal.png'
import './SplashScreen.css'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Minimum display time of 2.5 seconds
    const minDisplayTime = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    // Check if page is fully loaded
    const checkPageLoaded = () => {
      if (document.readyState === 'complete') {
        clearTimeout(minDisplayTime)
        // Give minimum 2 seconds for smooth experience
        setTimeout(() => {
          setIsVisible(false)
        }, 2000)
      }
    }

    window.addEventListener('load', checkPageLoaded)
    
    // If already loaded
    if (document.readyState === 'complete') {
      checkPageLoaded()
    }

    return () => {
      clearTimeout(minDisplayTime)
      window.removeEventListener('load', checkPageLoaded)
    }
  }, [])

  return (
    <div className={`splash-screen ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="splash-content">
        <div className="splash-orbit">
          <div className="orbit-ring orbit-ring--outer"></div>
          <div className="orbit-ring orbit-ring--inner"></div>
          <div className="splash-logo-container">
            <img src={logoImg} alt="Drag & Drop Logo" className="splash-logo-img" />
          </div>
          <div className="orbit-dot orbit-dot--one"></div>
          <div className="orbit-dot orbit-dot--two"></div>
        </div>
        <div className="splash-brand-text">
          <h1>Drag &amp; Drop</h1>
          <p>Retail software tools</p>
        </div>
        <div className="splash-tagline">
          <p>Design, launch, and scale retail flows with one modular software stack.</p>
        </div>
        <div className="splash-loader">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  )
}

