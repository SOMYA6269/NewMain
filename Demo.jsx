import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Demo.css'

export default function Demo() {
  return (
    <div className="demo-page">
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>Product Demo</h1>
          <p>A quick look at the dashboard you’ll get on day one</p>
        </div>
      </div>
      
      <section className="demo-section">
        <div className="container">
          <div className="demo-content">
            <div className="demo-card">
              <h2>Dashboard Preview</h2>
              <p>Here’s a visual preview of the dashboard and analytics you’ll use daily.</p>
              <div className="dashboard-preview" style={{marginTop: '1rem'}}>
                <div className="preview-header">
                  <div className="preview-dots"><span></span><span></span><span></span></div>
                  <span className="preview-title">Dashboard</span>
                  <div className="preview-status"><span className="status-dot"></span><span>Sample</span></div>
                </div>
                <div className="preview-content">
                  <div className="dashboard-grid">
                    <div className="dashboard-card">
                      <div className="card-icon">👥</div>
                      <div className="card-title">Customers Engaged</div>
                      <div className="card-value">1,247</div>
                    </div>
                    <div className="dashboard-card">
                      <div className="card-icon">🧾</div>
                      <div className="card-title">Bills Today</div>
                      <div className="card-value">182</div>
                    </div>
                  </div>
                  <div className="chart">
                    <div className="chart-header">
                      <span>Weekly Sales</span>
                    </div>
                    <div className="chart-bars">
                      <div className="bar" style={{ height: '35%' }}></div>
                      <div className="bar" style={{ height: '50%' }}></div>
                      <div className="bar" style={{ height: '65%' }}></div>
                      <div className="bar" style={{ height: '45%' }}></div>
                      <div className="bar" style={{ height: '80%' }}></div>
                      <div className="bar" style={{ height: '55%' }}></div>
                      <div className="bar" style={{ height: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

