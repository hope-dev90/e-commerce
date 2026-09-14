import { Link } from 'react-router-dom'
import './AboutPage.css'

function AboutPage() {
  return (
    <section className="about-mission">
      <p className="about-eyebrow">Our Mission</p>
      <h2 className="about-headline">
        Empower local makers and shoppers to connect, trade, and thrive
        together.
      </h2>
      <Link to="/products" className="about-cta">
        Start Shopping
      </Link>
    </section>
  )
}

export default AboutPage