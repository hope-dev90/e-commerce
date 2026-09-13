import { Link } from 'react-router-dom'
import ProductGrid from '../../components/product-grid/ProductGrid.jsx'
import mockProducts from '../../data/mockProducts.js'
import './HomePage.css'

function HomePage() {
  const featured = mockProducts.slice(0, 3)

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Salang</h1>
        <p>Find what you love.</p>
        <Link to="/products" className="btn-primary hero-btn">Shop Now</Link>
      </section>

      <div className="page">
        <section className="home-section">
          <h2>Featured Products</h2>
          <ProductGrid products={featured} />
          <div style={{ marginTop: 16 }}>
            <Link to="/products" className="btn-secondary" style={{ padding: '8px 18px', borderRadius: 4, border: '1px solid #222', display: 'inline-block' }}>View All Products</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
