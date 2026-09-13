import { Link } from 'react-router-dom'
import './AdminDashboardPage.css'

function AdminDashboardPage() {
  const stats = [
    { label: 'Total Products', value: 6, link: '/admin/products' },
    { label: 'Total Orders',   value: 5, link: '/admin/orders'   },
    { label: 'Total Customers',value: 10, link: '/admin/customers'},
    { label: 'Messages',       value: 3, link: '/admin/messages' },
  ]

  return (
    <div className="page admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin.</p>
      <div className="dashboard-stats">
        {stats.map(s => (
          <Link to={s.link} key={s.label} className="stat-card">
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AdminDashboardPage
