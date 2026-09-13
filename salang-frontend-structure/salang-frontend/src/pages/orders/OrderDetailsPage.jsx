import { useParams, Link } from 'react-router-dom'
import mockOrders from '../../data/mockOrders.js'
import { formatDate } from '../../utils/formatDate.js'
import './OrderDetailsPage.css'

function OrderDetailsPage() {
  const { id } = useParams()
  const order = mockOrders.find(o => o.id === id)

  if (!order) return (
    <div className="page">
      <h2>Order not found.</h2>
      <Link to="/orders">Back to Orders</Link>
    </div>
  )

  return (
    <div className="page order-detail-page">
      <Link to="/orders" className="back-link">&larr; Back to Orders</Link>
      <h1>Order {order.id}</h1>
      <p>Date: {formatDate(order.date)}</p>
      <p>Status: <strong>{order.status}</strong></p>
      <h2 style={{ marginTop: 20, marginBottom: 10 }}>Items</h2>
      <table className="order-detail-table">
        <thead><tr><th>Product</th><th>Qty</th><th>Price</th></tr></thead>
        <tbody>
          {order.items.map((item, i) => (
            <tr key={i}><td>{item.name}</td><td>{item.qty}</td><td>${item.price}</td></tr>
          ))}
        </tbody>
      </table>
      <p className="order-total-line">Total: <strong>${order.total.toFixed(2)}</strong></p>
    </div>
  )
}

export default OrderDetailsPage
