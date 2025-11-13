import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CompanyPages.css'

export default function CompanyPages() {
  const { page } = useParams()
  
  const content = {
    'about': {
      title: 'About Us',
      content: <AboutContent />
    },
    'careers': {
      title: 'Careers',
      content: <CareersContent />
    },
    'blog': {
      title: 'Blog',
      content: <BlogContent />
    },
    'partners': {
      title: 'Partners',
      content: <PartnersContent />
    }
  }
  
  const currentContent = content[page] || content['about']
  
  return (
    <div className="company-page">
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>{currentContent.title}</h1>
        </div>
      </div>
      <section className="company-content">
        <div className="container">
          {currentContent.content}
        </div>
      </section>
      <Footer />
    </div>
  )
}

function AboutContent() {
  return (
    <div className="about-content">
      <h2>About Drag & Drop Grocery ERP</h2>
      <p>We are a team of passionate developers and business experts dedicated to helping grocery store owners succeed. Our mission is to provide affordable, easy-to-use ERP solutions that empower small and medium businesses to compete with larger players.</p>
      <p>Founded in 2024, we've already helped 500+ grocery stores streamline their operations and grow their businesses. We believe that every store owner deserves access to enterprise-level tools without the complexity or high costs.</p>
      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-number">500+</div>
          <div className="stat-label">Active Stores</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">₹2.5Cr+</div>
          <div className="stat-label">Revenue Managed</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">99.9%</div>
          <div className="stat-label">Uptime</div>
        </div>
      </div>
    </div>
  )
}

function CareersContent() {
  return (
    <div>
      <h2>Join Our Team</h2>
      <p>We're looking for talented individuals who share our passion for helping businesses succeed. Check out our open positions below.</p>
      <div className="jobs-list">
        <div className="job-card">
          <h3>Frontend Developer</h3>
          <p>We're looking for an experienced React developer to join our team.</p>
          <span className="job-location">Remote / Mumbai</span>
          <a href="#" className="btn btn-secondary job-apply">Apply Now</a>
        </div>
        <div className="job-card">
          <h3>Backend Developer</h3>
          <p>Looking for a skilled backend developer with Node.js experience.</p>
          <span className="job-location">Remote / Mumbai</span>
          <a href="#" className="btn btn-secondary job-apply">Apply Now</a>
        </div>
        <div className="job-card">
          <h3>Customer Success Manager</h3>
          <p>Help our customers succeed with our ERP system.</p>
          <span className="job-location">Mumbai</span>
          <a href="#" className="btn btn-secondary job-apply">Apply Now</a>
        </div>
      </div>
    </div>
  )
}

function BlogContent() {
  return (
    <div>
      <h2>Latest Blog Posts</h2>
      <div className="blog-grid">
        <div className="blog-card">
          <h3>10 Tips to Grow Your Grocery Store Business</h3>
          <p>Discover practical strategies to increase sales and customer loyalty in your grocery store.</p>
          <span className="blog-date">December 2024</span>
          <a href="#" className="blog-link">Read More →</a>
        </div>
        <div className="blog-card">
          <h3>How to Manage Inventory During Peak Seasons</h3>
          <p>Learn how to handle inventory during busy seasons and avoid stockouts.</p>
          <span className="blog-date">November 2024</span>
          <a href="#" className="blog-link">Read More →</a>
        </div>
        <div className="blog-card">
          <h3>GST Compliance Made Easy for Grocery Stores</h3>
          <p>Understanding GST requirements and how our ERP makes compliance simple.</p>
          <span className="blog-date">October 2024</span>
          <a href="#" className="blog-link">Read More →</a>
        </div>
      </div>
    </div>
  )
}

function PartnersContent() {
  return (
    <div>
      <h2>Partnership Opportunities</h2>
      <p>Join us in revolutionizing grocery store management. We offer various partnership programs for technology companies, consultants, and regional partners.</p>
      <div className="partner-types">
        <div className="partner-card">
          <h3>Technology Partners</h3>
          <p>Integrate your solutions with our ERP platform</p>
        </div>
        <div className="partner-card">
          <h3>Reseller Partners</h3>
          <p>Sell our ERP solutions and earn commissions</p>
        </div>
        <div className="partner-card">
          <h3>Consulting Partners</h3>
          <p>Help businesses implement and optimize our ERP</p>
        </div>
      </div>
      <div className="partner-cta">
        <a href="/support/contact" className="btn btn-primary partner-button">Become a Partner</a>
      </div>
    </div>
  )
}








