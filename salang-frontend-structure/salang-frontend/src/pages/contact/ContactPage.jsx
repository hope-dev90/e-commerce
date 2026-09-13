import { useState } from 'react'
import './ContactPage.css'

function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page contact-page">
      <h1>Contact Us</h1>
      <p>Send us a message and we will get back to you.</p>
      {sent ? (
        <p className="success-msg">Message sent! We will be in touch soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name<input type="text" placeholder="Your name" required /></label>
          <label>Email<input type="email" placeholder="Your email" required /></label>
          <label>Subject<input type="text" placeholder="Subject" required /></label>
          <label>Message<textarea rows={4} placeholder="Your message" required /></label>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      )}
    </div>
  )
}

export default ContactPage
