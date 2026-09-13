import CategoryCard from '../../components/category-card/CategoryCard.jsx'
import mockCategories from '../../data/mockCategories.js'
import './CategoriesPage.css'

function CategoriesPage() {
  return (
    <div className="page categories-page">
      <h1>Categories</h1>
      <p className="page-desc">Browse products by category.</p>
      <div className="categories-grid">
        {mockCategories.map(c => <CategoryCard key={c.id} category={c} />)}
      </div>
    </div>
  )
}

export default CategoriesPage
