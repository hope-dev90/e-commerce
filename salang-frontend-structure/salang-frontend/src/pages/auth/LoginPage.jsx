import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'
import './LoginPage.css'

function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email)
    navigate('/')
  }

  return (
    <div className="page auth-page">
      <div className="auth-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>Email<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required /></label>
          <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required /></label>
          <button type="submit" className="btn-primary">Login</button>
        </form>
        <p className="auth-links"><Link to="/forgot-password">Forgot password?</Link></p>
        <p className="auth-links">Don&apos;t have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default LoginPage
