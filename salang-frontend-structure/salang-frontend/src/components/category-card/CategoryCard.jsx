import { Link } from 'react-router-dom'
import './CategoryCard.css'

function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <img src={category.image} alt={category.name} className="category-card-img" />
      <div className="category-card-body">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <Link to={`/products?category=${category.name}`} className="btn-primary" style={{ display: 'inline-block', marginTop: 8, padding: '6px 14px', borderRadius: 4 }}>Browse</Link>
      </div>
    </div>
  )
}

export default CategoryCard
