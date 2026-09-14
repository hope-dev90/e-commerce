import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart.js'
import './ProductCard.css'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <div className="product-card-img-wrap">
        <img src={product.image} alt={product.name} className="product-card-img" />
        <span className="product-card-category">{product.category}</span>
      </div>

      <div className="product-card-body">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-desc">{product.description}</p>

        <div className="product-card-footer">
          <span className="product-card-price">${product.price}</span>
          <div className="product-card-actions">
            <Link to={`/products/${product.id}`} className="product-card-btn product-card-btn--ghost">
              Details
            </Link>
            <button className="product-card-btn product-card-btn--fill" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
