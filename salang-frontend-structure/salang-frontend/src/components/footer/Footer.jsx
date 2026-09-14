import { Link } from 'react-router-dom'
import logo from '../../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/logo.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Salang" className="footer-logo" />

          <div className="footer-socials">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.5 22H1.4l8.1-9.3L1 2h7l4.9 6L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.4a3 3 0 0 0-2.1-2.1C18.1 5.8 12 5.8 12 5.8s-6.1 0-7.9.5A3 3 0 0 0 2 8.4 31 31 0 0 0 1.6 12a31 31 0 0 0 .4 3.6 3 3 0 0 0 2.1 2.1c1.8.5 7.9.5 7.9.5s6.1 0 7.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.4 12a31 31 0 0 0-.4-3.6ZM10 15V9l5.2 3-5.2 3Z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2.2.27 3 .58a5.7 5.7 0 0 1 2.1 1.35 5.7 5.7 0 0 1 1.35 2.1c.3.8.52 1.8.58 3 .06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.27 2.2-.58 3a5.7 5.7 0 0 1-1.35 2.1 5.7 5.7 0 0 1-2.1 1.35c-.8.3-1.8.52-3 .58-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2.2-.27-3-.58a5.7 5.7 0 0 1-2.1-1.35 5.7 5.7 0 0 1-1.35-2.1c-.3-.8-.52-1.8-.58-3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.27-2.2.58-3A5.7 5.7 0 0 1 4.2 2c.62-.62 1.32-1.05 2.1-1.35.8-.3 1.8-.52 3-.58C10.4 2.2 10.8 2.2 12 2.2Zm0 3.15a6.65 6.65 0 1 0 0 13.3 6.65 6.65 0 0 0 0-13.3Zm0 10.97a4.32 4.32 0 1 1 0-8.64 4.32 4.32 0 0 1 0 8.64Zm6.9-11.22a1.55 1.55 0 1 1-3.1 0 1.55 1.55 0 0 1 3.1 0Z"/></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 2h-3.3v14.2a2.8 2.8 0 1 1-2-2.7v-3.4a6.2 6.2 0 1 0 5.3 6.1V9.3a7.6 7.6 0 0 0 4.4 1.4V7.4a4.3 4.3 0 0 1-4.4-4.3V2Z"/></svg>
            </a>
          </div>

          <p className="footer-disclaimer">
            Salang connects you with local sellers and makers. All product listings are subject to
            each seller's own terms. Delivery times and pricing may vary by region.
          </p>
        </div>

        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/products">All products</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Help center</Link></li>
            <li><a href="#">Shipping &amp; returns</a></li>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Stay in the loop</h4>
          <p>Get new arrivals and offers in your inbox.</p>
          <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>Copyright &copy; {new Date().getFullYear()} Salang. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer