import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart.js'
import './CheckoutPage.css'

function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()

  const handleOrder = (e) => {
    e.preventDefault()
    clearCart()
    navigate('/order-success')
  }

  return (
    <div className="page checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleOrder}>
          <h2>Shipping Details</h2>
          <label>Full Name<input type="text" placeholder="Full Name" required /></label>
          <label>Address<input type="text" placeholder="Street address" required /></label>
          <label>City<input type="text" placeholder="City" required /></label>
          <label>Email<input type="email" placeholder="Email" required /></label>
          <h2 style={{ marginTop: 16 }}>Payment</h2>
          <label>Card Number<input type="text" placeholder="0000 0000 0000 0000" /></label>
          <button type="submit" className="btn-primary">Place Order</button>
        </form>
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          {items.map(i => <p key={i.id}>{i.name} x{i.quantity} — ${(i.price * i.quantity).toFixed(2)}</p>)}
          <hr style={{ margin: '12px 0' }} />
          <p><strong>Total: ${total.toFixed(2)}</strong></p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
