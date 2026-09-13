import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-brand">SALANG</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/products">Products</Link>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Salang. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
