import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart.js'
import logo from '/home/hope/Documents/projects/microservices/salang-frontend-structure/salang-frontend/src/assets/images/{brand,hero,products,categories,banners,testimonials,icons}/logo.png'
import './Navbar.css'

function Navbar() {
  const { items } = useCart()
  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Salang" className="navbar-logo-img" />
        </Link>

        <ul className="navbar-links">
          <li><Link to="/products">Shop</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="navbar-actions">
          <Link to="/cart" className="navbar-cart" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 8H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="21" r="1.4" fill="currentColor"/>
              <circle cx="18" cy="21" r="1.4" fill="currentColor"/>
            </svg>
            {count > 0 && <span className="navbar-cart-badge">{count}</span>}
          </Link>
          <Link to="/login" className="navbar-cta">Login</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar