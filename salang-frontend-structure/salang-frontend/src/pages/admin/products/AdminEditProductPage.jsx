import { useParams, useNavigate } from 'react-router-dom'
import mockProducts from '../../../data/mockProducts.js'
import './AdminEditProductPage.css'

function AdminEditProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = mockProducts.find(p => p.id === Number(id))

  return (
    <div className="page admin-edit-product">
      <h1>Edit Product</h1>
      <form className="admin-form" onSubmit={(e) => { e.preventDefault(); navigate('/admin/products') }}>
        <label>Name<input type="text" defaultValue={product?.name || ''} /></label>
        <label>Price<input type="number" defaultValue={product?.price || ''} /></label>
        <label>Stock<input type="number" defaultValue={product?.stock || ''} /></label>
        <label>Category<input type="text" defaultValue={product?.category || ''} /></label>
        <label>Description<textarea rows={3} defaultValue={product?.description || ''} /></label>
        <button type="submit" className="btn-primary">Save Changes</button>
      </form>
    </div>
  )
}

export default AdminEditProductPage
