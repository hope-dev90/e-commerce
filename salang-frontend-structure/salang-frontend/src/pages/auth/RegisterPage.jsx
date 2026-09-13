import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginPage.css'

function RegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <div className="page auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>Username<input type="text" value={form.username} onChange={set('username')} placeholder="Your username" required /></label>
          <label>Email<input type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" required /></label>
          <label>Password<input type="password" value={form.password} onChange={set('password')} placeholder="Password" required /></label>
          <button type="submit" className="btn-primary">Register</button>
        </form>
        <p className="auth-links">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default RegisterPage
