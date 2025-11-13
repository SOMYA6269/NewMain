import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Documentation.css'

const guides = {
  'getting-started': {
    title: 'Getting Started',
    icon: '🚀',
    description: 'Learn how to set up your account and configure your store',
    content: `
      <h2>Welcome to Drag & Drop ERP</h2>
      <p>This guide will help you get started with your grocery management system.</p>
      
      <h3>1. Account Setup</h3>
      <p>After signing up, you'll be guided through the initial setup process:</p>
      <ul>
        <li>Enter your store details (name, address, contact information)</li>
        <li>Configure your GST details if applicable</li>
        <li>Set up your preferred currency and date format</li>
        <li>Choose your theme (light or dark mode)</li>
      </ul>
      
      <h3>2. Store Configuration</h3>
      <p>Configure your store settings:</p>
      <ul>
        <li>Set business hours</li>
        <li>Add payment methods (cash, card, UPI, etc.)</li>
        <li>Configure tax settings</li>
        <li>Set up receipt printing preferences</li>
      </ul>
      
      <h3>3. Initial Setup Checklist</h3>
      <ul>
        <li>✅ Complete your profile</li>
        <li>✅ Add your first product</li>
        <li>✅ Create your first customer</li>
        <li>✅ Run a test billing transaction</li>
      </ul>
      
      <p>Once you've completed these steps, you're ready to start using the system!</p>
    `
  },
  'inventory-management': {
    title: 'Inventory Management',
    icon: '📦',
    description: 'Complete guide to managing your inventory and stock levels',
    content: `
      <h2>Inventory Management Guide</h2>
      <p>Learn how to efficiently manage your inventory and stock levels.</p>
      
      <h3>Adding Products</h3>
      <p>To add a new product:</p>
      <ol>
        <li>Navigate to Products section</li>
        <li>Click "Add New Product"</li>
        <li>Enter product details (name, SKU, price, category)</li>
        <li>Set initial stock quantity</li>
        <li>Add expiry date if applicable</li>
        <li>Save the product</li>
      </ol>
      
      <h3>Stock Management</h3>
      <ul>
        <li><strong>Stock Adjustment:</strong> Manually adjust stock levels for corrections</li>
        <li><strong>Stock Transfer:</strong> Transfer items between locations</li>
        <li><strong>Stock Reports:</strong> View current stock, low stock alerts, and stock history</li>
      </ul>
      
      <h3>Low Stock Alerts</h3>
      <p>The system automatically alerts you when products fall below the minimum stock level you've set. You can configure these thresholds for each product.</p>
      
      <h3>Barcode Scanning</h3>
      <p>Use barcode scanning for quick product lookup and billing. The system supports standard barcode formats.</p>
    `
  },
  'billing-pos': {
    title: 'Billing & POS',
    icon: '🧾',
    description: 'How to create bills, process payments, and manage GST',
    content: `
      <h2>Billing & POS Guide</h2>
      <p>Learn how to create bills, process payments, and manage GST efficiently.</p>
      
      <h3>Creating a Bill</h3>
      <ol>
        <li>Open the Billing section</li>
        <li>Scan or search for products</li>
        <li>Add products to the cart</li>
        <li>Apply discounts if needed</li>
        <li>Select payment method</li>
        <li>Process payment and print receipt</li>
      </ol>
      
      <h3>Payment Methods</h3>
      <ul>
        <li><strong>Cash:</strong> Enter amount received and calculate change</li>
        <li><strong>Card:</strong> Process card payments (if card reader is connected)</li>
        <li><strong>UPI:</strong> Generate UPI QR code or enter transaction ID</li>
        <li><strong>Credit:</strong> Allow customers to pay later (requires customer account)</li>
      </ul>
      
      <h3>GST Management</h3>
      <p>The system automatically calculates GST based on your settings:</p>
      <ul>
        <li>Configure GST rates in Settings</li>
        <li>GST is automatically applied to billable items</li>
        <li>View GST reports for filing returns</li>
        <li>Export GSTR-1 and GSTR-2 reports</li>
      </ul>
      
      <h3>Receipt Printing</h3>
      <p>Print receipts directly from the system. Configure your printer settings in the Settings section.</p>
    `
  },
  'reports-analytics': {
    title: 'Reports & Analytics',
    icon: '📊',
    description: 'Understanding your business reports and analytics',
    content: `
      <h2>Reports & Analytics Guide</h2>
      <p>Learn how to understand and use your business reports and analytics.</p>
      
      <h3>Sales Reports</h3>
      <ul>
        <li><strong>Daily Sales:</strong> View sales summary for a specific day</li>
        <li><strong>Monthly Reports:</strong> Track monthly performance</li>
        <li><strong>Product-wise Sales:</strong> See which products sell the most</li>
        <li><strong>Customer Reports:</strong> Track customer purchase history</li>
      </ul>
      
      <h3>Financial Reports</h3>
      <ul>
        <li><strong>Profit & Loss:</strong> Track your business profitability</li>
        <li><strong>Revenue Reports:</strong> Analyze revenue trends</li>
        <li><strong>Expense Tracking:</strong> Monitor business expenses</li>
        <li><strong>Tax Reports:</strong> GST and tax-related reports</li>
      </ul>
      
      <h3>Inventory Reports</h3>
      <ul>
        <li><strong>Stock Reports:</strong> Current stock levels</li>
        <li><strong>Low Stock Alerts:</strong> Products running low</li>
        <li><strong>Purchase Reports:</strong> Track purchase history</li>
      </ul>
      
      <h3>Analytics Dashboard</h3>
      <p>The dashboard provides real-time insights into your business:</p>
      <ul>
        <li>Today's sales summary</li>
        <li>Top selling products</li>
        <li>Customer engagement metrics</li>
        <li>Revenue trends</li>
      </ul>
      
      <h3>Exporting Reports</h3>
      <p>All reports can be exported in PDF or Excel format for record-keeping or sharing.</p>
    `
  }
}

export default function Documentation() {
  const [selectedGuide, setSelectedGuide] = useState(null)

  const handleGuideClick = (guideId) => {
    setSelectedGuide(guideId)
  }

  const handleBack = () => {
    setSelectedGuide(null)
  }

  if (selectedGuide) {
    const guide = guides[selectedGuide]
    return (
      <div className="documentation-page">
        <Navbar />
        <div className="guide-viewer">
          <div className="container">
            <button onClick={handleBack} className="back-button">← Back to Documentation</button>
            <div className="guide-header">
              <span className="guide-icon-large">{guide.icon}</span>
              <h1>{guide.title}</h1>
              <p className="guide-subtitle">{guide.description}</p>
            </div>
            <div className="guide-content-wrapper">
              <div className="guide-content" dangerouslySetInnerHTML={{ __html: guide.content }} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="documentation-page">
      <Navbar />
      <div className="page-hero">
        <div className="container">
          <h1>Documentation</h1>
          <p>Complete guides to help you get the most out of Drag & Drop ERP</p>
        </div>
      </div>

      <section className="documentation-section">
        <div className="container">
          <div className="guides-grid">
            <div className="guide-card" onClick={() => handleGuideClick('getting-started')}>
              <div className="guide-icon">🚀</div>
              <h3>Getting Started</h3>
              <p>Learn how to set up your account and configure your store</p>
              <Link to="#" className="guide-link" onClick={(e) => { e.preventDefault(); handleGuideClick('getting-started'); }}>
                Read Guide →
              </Link>
            </div>

            <div className="guide-card" onClick={() => handleGuideClick('inventory-management')}>
              <div className="guide-icon">📦</div>
              <h3>Inventory Management</h3>
              <p>Complete guide to managing your inventory and stock levels</p>
              <Link to="#" className="guide-link" onClick={(e) => { e.preventDefault(); handleGuideClick('inventory-management'); }}>
                Read Guide →
              </Link>
            </div>

            <div className="guide-card" onClick={() => handleGuideClick('billing-pos')}>
              <div className="guide-icon">🧾</div>
              <h3>Billing & POS</h3>
              <p>How to create bills, process payments, and manage GST</p>
              <Link to="#" className="guide-link" onClick={(e) => { e.preventDefault(); handleGuideClick('billing-pos'); }}>
                Read Guide →
              </Link>
            </div>

            <div className="guide-card" onClick={() => handleGuideClick('reports-analytics')}>
              <div className="guide-icon">📊</div>
              <h3>Reports & Analytics</h3>
              <p>Understanding your business reports and analytics</p>
              <Link to="#" className="guide-link" onClick={(e) => { e.preventDefault(); handleGuideClick('reports-analytics'); }}>
                Read Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

