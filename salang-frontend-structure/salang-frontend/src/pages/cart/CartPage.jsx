import { Link } from 'react-router-dom'
import CartItem from '../../components/cart/CartItem.jsx'
import { useCart } from '../../hooks/useCart.js'
import './CartPage.css'

function CartPage() {
  const { items, total, clearCart } = useCart()

  if (items.length === 0) return (
    <div className="page cart-page">
      <h1>Your Cart</h1>
      <p>Your cart is empty.</p>
      <Link to="/products" className="btn-primary" style={{ display: 'inline-block', marginTop: 16, padding: '8px 18px', borderRadius: 4 }}>Browse Products</Link>
    </div>
  )

  return (
    <div className="page cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {items.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      <div className="cart-summary">
        <p className="cart-total">Total: <strong>${total.toFixed(2)}</strong></p>
        <div className="cart-actions">
          <button className="btn-secondary" onClick={clearCart}>Clear Cart</button>
          <Link to="/checkout" className="btn-primary" style={{ padding: '8px 18px', borderRadius: 4, display: 'inline-block' }}>Checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage
