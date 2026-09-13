import { useNavigate } from 'react-router-dom'
import './AdminAddProductPage.css'

function AdminAddProductPage() {
  const navigate = useNavigate()

  return (
    <div className="page admin-add-product">
      <h1>Add Product</h1>
      <form className="admin-form" onSubmit={(e) => { e.preventDefault(); navigate('/admin/products') }}>
        <label>Name<input type="text" placeholder="Product name" required /></label>
        <label>Price<input type="number" placeholder="0.00" required /></label>
        <label>Stock<input type="number" placeholder="0" required /></label>
        <label>Category<input type="text" placeholder="Category" /></label>
        <label>Description<textarea rows={3} placeholder="Short description" /></label>
        <button type="submit" className="btn-primary">Add Product</button>
      </form>
    </div>
  )
}

export default AdminAddProductPage
