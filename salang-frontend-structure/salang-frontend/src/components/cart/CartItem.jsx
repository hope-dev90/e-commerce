import { useCart } from '../../hooks/useCart.js'
import './CartItem.css'

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart()

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-img" />
      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">${item.price}</p>
      </div>
      <div className="cart-item-qty">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <p className="cart-item-subtotal">${(item.price * item.quantity).toFixed(2)}</p>
      <button className="btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  )
}

export default CartItem
