import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Pricing.css'

export default function Pricing() {
  return (
    <div className="pricing-page">
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>Simple, Transparent Pricing</h1>
          <p>Limited-time first-month offers applied. Upgrade or downgrade anytime.</p>
        </div>
      </div>
      
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="plan-header">
                <h3 className="plan-name">Basic</h3>
                <div className="plan-price">
                  <span className="strike">₹499</span>
                  <span className="offer">₹299</span>
                  <span className="offer-note">first month</span>
                </div>
                <p className="plan-description">Then ₹499 / month</p>
              </div>
              <div className="plan-features">
                <div className="limits">
                  <div>👥 Max Customers: <strong>149</strong></div>
                  <div>📦 Max Products: <strong>499</strong></div>
                </div>
                <div className="modules">
                  <h4>Modules Unlocked</h4>
                  <ul>
                    <li>Dashboard</li>
                    <li>Customers</li>
                    <li>Products</li>
                    <li>Inventory</li>
                    <li>Billing</li>
                  </ul>
                  <h4>Locked Modules</h4>
                  <ul className="locked">
                    <li>Purchase Orders</li>
                    <li>Financial</li>
                    <li>AI Assistant</li>
                    <li>Reports</li>
                    <li>Settings (only basic profile/theme)</li>
                  </ul>
                </div>
                <p className="plan-note">Best for small shops needing simple billing & stock tracking.</p>
              </div>
              <Link to="/trial" className="btn btn-primary plan-button">
                Start Free Trial
              </Link>
            </div>
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <div className="plan-header">
                <h3 className="plan-name">Standard</h3>
                <div className="plan-price">
                  <span className="strike">₹999</span>
                  <span className="offer">₹799</span>
                  <span className="offer-note">first month</span>
                </div>
                <p className="plan-description">Then ₹999 / month</p>
              </div>
              <div className="plan-features">
                <div className="limits">
                  <div>👥 Max Customers: <strong>299</strong></div>
                  <div>📦 Max Products: <strong>899</strong></div>
                </div>
                <div className="modules">
                  <h4>Modules Unlocked</h4>
                  <ul>
                    <li>Dashboard</li>
                    <li>Customers</li>
                    <li>Products</li>
                    <li>Inventory</li>
                    <li>Billing</li>
                    <li>Purchase Orders</li>
                    <li>Reports (basic analytics)</li>
                  </ul>
                  <h4>Locked Modules</h4>
                  <ul className="locked">
                    <li>Financial</li>
                    <li>AI Assistant (text only, no voice)</li>
                    <li>Settings (no user management/branding)</li>
                  </ul>
                </div>
                <p className="plan-note">Ideal for medium-sized stores managing suppliers & reports.</p>
              </div>
              <Link to="/trial" className="btn btn-primary plan-button">
                Start Free Trial
              </Link>
            </div>
            <div className="pricing-card">
              <div className="plan-header">
                <h3 className="plan-name">Premium</h3>
                <div className="plan-price">
                  <span className="strike">₹1,299</span>
                  <span className="offer">₹999</span>
                  <span className="offer-note">first month</span>
                </div>
                <p className="plan-description">Then ₹1,299 / month</p>
              </div>
              <div className="plan-features">
                <div className="limits">
                  <div>👥 Max Customers: <strong>Unlimited</strong></div>
                  <div>📦 Max Products: <strong>Unlimited</strong></div>
                </div>
                <div className="modules">
                  <h4>Modules Unlocked</h4>
                  <ul>
                    <li>Dashboard</li>
                    <li>Customers</li>
                    <li>Products</li>
                    <li>Inventory</li>
                    <li>Billing</li>
                    <li>Purchase Orders</li>
                    <li>Financial</li>
                    <li>AI Assistant (voice + smart billing commands)</li>
                    <li>Reports (advanced insights + profit analysis)</li>
                    <li>Settings (full admin, branding, multi-user)</li>
                  </ul>
                </div>
                <p className="plan-note">Everything you need for enterprise-grade operations.</p>
              </div>
              <Link to="/trial" className="btn btn-primary plan-button">
                Start Free Trial
              </Link>
            </div>
          </div>
          <div className="pricing-note">
            <p>All plans include 7-day free trial • First-month offer applies automatically • Cancel anytime</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

