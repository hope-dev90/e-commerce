import ProductGrid from '../../components/product-grid/ProductGrid.jsx'
import mockProducts from '../../data/mockProducts.js'
import './ProductsPage.css'

function ProductsPage() {
  return (
    <div className="page products-page">
      <h1>Products</h1>
      <p className="page-desc">Browse our sample products.</p>
      <ProductGrid products={mockProducts} />
    </div>
  )
}

export default ProductsPage
