import { useParams, Link } from 'react-router-dom'
import mockOrders from '../../../data/mockOrders.js'
import { formatDate } from '../../../utils/formatDate.js'
import './AdminOrderDetailsPage.css'

function AdminOrderDetailsPage() {
  const { id } = useParams()
  const order = mockOrders.find(o => o.id === id)

  if (!order) return <div className="page"><h2>Order not found.</h2><Link to="/admin/orders">Back</Link></div>

  return (
    <div className="page admin-order-details">
      <Link to="/admin/orders" className="back-link">&larr; All Orders</Link>
      <h1>Order {order.id}</h1>
      <p>Date: {formatDate(order.date)}</p>
      <p>Status: <strong>{order.status}</strong></p>
      <h2 style={{ marginTop: 20, marginBottom: 10 }}>Items</h2>
      <ul>
        {order.items.map((item, i) => <li key={i}>{item.name} — qty {item.qty} — ${item.price}</li>)}
      </ul>
      <p style={{ marginTop: 12 }}><strong>Total: ${order.total}</strong></p>
    </div>
  )
}

export default AdminOrderDetailsPage
