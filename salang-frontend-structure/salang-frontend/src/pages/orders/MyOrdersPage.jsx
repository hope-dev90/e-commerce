import OrderCard from '../../components/order/OrderCard.jsx'
import mockOrders from '../../data/mockOrders.js'
import './MyOrdersPage.css'

function MyOrdersPage() {
  return (
    <div className="page my-orders-page">
      <h1>My Orders</h1>
      <p className="page-desc">Your recent orders.</p>
      {mockOrders.map(o => <OrderCard key={o.id} order={o} />)}
    </div>
  )
}

export default MyOrdersPage
