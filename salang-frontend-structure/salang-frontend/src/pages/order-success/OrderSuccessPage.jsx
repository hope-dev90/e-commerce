import { Link } from 'react-router-dom'
import './OrderSuccessPage.css'

function OrderSuccessPage() {
  return (
    <div className="page order-success-page">
      <div className="success-box">
        <h1>Order Placed!</h1>
        <p>Your order has been placed successfully.</p>
        <p>You will receive a confirmation shortly.</p>
        <div className="success-actions">
          <Link to="/orders" className="btn-primary" style={{ padding: '8px 18px', borderRadius: 4, display: 'inline-block' }}>My Orders</Link>
          <Link to="/products" className="btn-secondary" style={{ padding: '8px 18px', borderRadius: 4, display: 'inline-block', border: '1px solid #222' }}>Keep Shopping</Link>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccessPage
