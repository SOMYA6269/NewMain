import { useState } from 'react'
import './VideoSection.css'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  
  // YouTube video ID - Replace with your actual video ID
  // Example: If your URL is https://www.youtube.com/watch?v=dQw4w9WgXcQ
  // Then videoId should be 'dQw4w9WgXcQ'
  const videoId = 'YOUR_VIDEO_ID'
  
  // YouTube thumbnail URL (high quality)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  
  // YouTube embed URL with autoplay
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
  
  const handleThumbnailClick = () => {
    setIsPlaying(true)
  }
  
  return (
    <section className="video-section" data-color-target>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">See Our ERP in Action</h2>
          <p className="section-subtitle">
            Watch how our powerful drag-and-drop ERP system transforms your grocery store management.
            See real-time demonstrations of inventory tracking, billing, and analytics.
          </p>
        </div>
        
        <div className="video-container">
          {!isPlaying ? (
            <div 
              className="video-thumbnail-wrapper"
              onClick={handleThumbnailClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleThumbnailClick()
                }
              }}
              aria-label="Play video"
            >
              <div className="video-thumbnail">
                <img 
                  src={thumbnailUrl} 
                  alt="Video thumbnail" 
                  className="thumbnail-image"
                  loading="lazy"
                />
                <div className="play-button-overlay">
                  <div className="play-button">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="40" r="40" fill="rgba(255, 255, 255, 0.9)"/>
                      <path d="M32 24L56 40L32 56V24Z" fill="#FF0000"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="video-embed-wrapper">
              <iframe
                src={embedUrl}
                title="ERP Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}



