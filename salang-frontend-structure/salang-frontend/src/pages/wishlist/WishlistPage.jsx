import { Link } from 'react-router-dom'
import './WishlistPage.css'

function WishlistPage() {
  return (
    <div className="page wishlist-page">
      <h1>My Wishlist</h1>
      <p>You have no items in your wishlist yet.</p>
      <Link to="/products" className="btn-primary" style={{ display: 'inline-block', marginTop: 16, padding: '8px 18px', borderRadius: 4 }}>Browse Products</Link>
    </div>
  )
}

export default WishlistPage
