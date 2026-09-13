import { Link } from 'react-router-dom'
import mockProducts from '../../../data/mockProducts.js'
import './AdminProductsPage.css'

function AdminProductsPage() {
  return (
    <div className="page admin-products">
      <div className="admin-header">
        <h1>Admin — Products</h1>
        <Link to="/admin/products/add" className="btn-primary" style={{ padding: '8px 16px', borderRadius: 4 }}>+ Add Product</Link>
      </div>
      <table className="admin-table">
        <thead><tr><th>ID</th><th>Name</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead>
        <tbody>
          {mockProducts.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>{p.stock}</td>
              <td>
                <Link to={`/admin/products/edit/${p.id}`} className="btn-secondary" style={{ padding: '4px 10px', borderRadius: 4, fontSize: 12, border: '1px solid #222', marginRight: 8 }}>Edit</Link>
                <button className="btn-danger" style={{ padding: '4px 10px', borderRadius: 4, fontSize: 12 }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminProductsPage
