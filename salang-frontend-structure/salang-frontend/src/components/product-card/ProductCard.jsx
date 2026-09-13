import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart.js'
import './ProductCard.css'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card-img" />
      <div className="product-card-body">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
        <p className="product-card-stock">Stock: {product.stock}</p>
        <div className="product-card-actions">
          <Link to={`/products/${product.id}`} className="btn-secondary" style={{ padding: '6px 12px', borderRadius: 4, fontSize: 13, border: '1px solid #222' }}>View Details</Link>
          <button className="btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
