import { Link } from 'react-router-dom'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="page not-found-page">
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/" className="btn-primary" style={{ display: 'inline-block', marginTop: 16, padding: '8px 18px', borderRadius: 4 }}>Go Home</Link>
    </div>
  )
}

export default NotFoundPage
