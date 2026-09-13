import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/formatDate.js'
import './OrderCard.css'

function OrderCard({ order }) {
  return (
    <div className="order-card">
      <div className="order-card-header">
        <span className="order-id">{order.id}</span>
        <span className={`order-status status-${order.status.toLowerCase()}`}>{order.status}</span>
      </div>
      <p className="order-date">Date: {formatDate(order.date)}</p>
      <p className="order-total">Total: ${order.total.toFixed(2)}</p>
      <Link to={`/orders/${order.id}`} className="btn-primary" style={{ display: 'inline-block', marginTop: 10, padding: '6px 14px', borderRadius: 4 }}>View Order</Link>
    </div>
  )
}

export default OrderCard
