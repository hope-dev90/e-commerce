import ProductCard from '../product-card/ProductCard.jsx'
import './ProductGrid.css'

function ProductGrid({ products }) {
  if (!products || products.length === 0) return <p>No products found.</p>

  return (
    <div className="product-grid">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}

export default ProductGrid
