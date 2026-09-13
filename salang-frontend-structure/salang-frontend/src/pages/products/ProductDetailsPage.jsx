import { useParams, Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart.js'
import mockProducts from '../../data/mockProducts.js'
import './ProductDetailsPage.css'

function ProductDetailsPage() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = mockProducts.find(p => p.id === Number(id))

  if (!product) return (
    <div className="page">
      <h2>Product not found.</h2>
      <Link to="/products">Back to Products</Link>
    </div>
  )

  return (
    <div className="page product-details-page">
      <Link to="/products" className="back-link">&larr; Back to Products</Link>
      <div className="product-details-layout">
        <img src={product.image} alt={product.name} className="product-details-img" />
        <div className="product-details-info">
          <h1>{product.name}</h1>
          <p className="product-details-price">${product.price}</p>
          <p className="product-details-stock">In Stock: {product.stock}</p>
          <p className="product-details-category">Category: {product.category}</p>
          <p className="product-details-desc">{product.description}</p>
          <button className="btn-primary" style={{ marginTop: 16, padding: '10px 24px' }} onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
