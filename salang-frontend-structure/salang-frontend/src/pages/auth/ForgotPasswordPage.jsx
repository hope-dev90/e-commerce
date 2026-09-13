import { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

function ForgotPasswordPage() {
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="page auth-page">
      <div className="auth-card">
        <h1>Forgot Password</h1>
        {sent ? (
          <p style={{ color: 'green' }}>Reset link sent to {email}.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="auth-form">
            <label>Email<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required /></label>
            <button type="submit" className="btn-primary">Send Reset Link</button>
          </form>
        )}
        <p className="auth-links"><Link to="/login">Back to Login</Link></p>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
