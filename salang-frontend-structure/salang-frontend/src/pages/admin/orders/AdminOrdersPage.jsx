import { Link } from 'react-router-dom'
import mockOrders from '../../../data/mockOrders.js'
import { formatDate } from '../../../utils/formatDate.js'
import './AdminOrdersPage.css'

function AdminOrdersPage() {
  return (
    <div className="page admin-orders">
      <h1>Admin — Orders</h1>
      <table className="admin-table">
        <thead><tr><th>Order ID</th><th>Date</th><th>Status</th><th>Total</th><th>Actions</th></tr></thead>
        <tbody>
          {mockOrders.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{formatDate(o.date)}</td>
              <td>{o.status}</td>
              <td>${o.total}</td>
              <td><Link to={`/admin/orders/${o.id}`} className="btn-secondary" style={{ padding: '4px 10px', borderRadius: 4, fontSize: 12, border: '1px solid #222' }}>View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminOrdersPage
