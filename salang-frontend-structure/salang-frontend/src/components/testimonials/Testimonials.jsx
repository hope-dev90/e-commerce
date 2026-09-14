import './Testimonials.css'

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Coming from someone who shops local whenever I can, Salang makes it so easy to find sellers near me and actually trust what I'm buying.",
    name: 'Aline Mukamana',
  },
  {
    id: 2,
    quote:
      "Best way I've found to support small makers. I have all my favorite shops saved in one place now!",
    name: 'Eric Niyonsenga',
  },
  {
    id: 3,
    quote: 'This is fantastic for discovering new sellers and keeping track of orders.',
    name: 'Grace Uwase',
  },
]

function Stars() {
  return (
    <div className="testimonial-stars" aria-hidden="true">
      {'★★★★★'.split('').map((star, i) => (
        <span key={i}>{star}</span>
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">
        Our shoppers <span className="testimonials-heart">💛</span> shopping with Salang. Here&apos;s why.
      </h2>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div className="testimonial-card" key={t.id}>
            <p className="testimonial-quote">{t.quote}</p>
            <p className="testimonial-name">{t.name}</p>
            <Stars />
          </div>
        ))}
      </div>

      <div className="testimonials-dots" aria-hidden="true">
        <span />
        <span className="is-active" />
        <span />
      </div>
    </section>
  )
}

export default Testimonials
