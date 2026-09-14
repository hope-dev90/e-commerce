import { useState } from 'react'
import { Link } from 'react-router-dom'
import bracelet from '../../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/bracelet.png'
import bShoe    from '../../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/b-shoe.png'
import purse    from '../../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/purse.png'
import sets     from '../../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/sets.png'
import shoe     from '../../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/shoe.png'
import watch    from '../../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/watch.png'
import Testimonials from '../../components/testimonials/Testimonials.jsx'
import { useCart } from '../../hooks/useCart.js'
import mockProducts from '../../data/mockProducts.js'
import './HomePage.css'

// Each image maps to a product id (same order as mockProducts)
const SLIDE_MAP = [
  { src: bracelet, productId: 1 },
  { src: bShoe,    productId: 2 },
  { src: purse,    productId: 3 },
  { src: sets,     productId: 4 },
  { src: shoe,     productId: 5 },
  { src: watch,    productId: 6 },
]

const COL_A   = [SLIDE_MAP[0], SLIDE_MAP[5]]   // bracelet, watch
const COL_B   = [SLIDE_MAP[1], SLIDE_MAP[2]]   // b-shoe, purse
const COL_C   = [SLIDE_MAP[3], SLIDE_MAP[4]]   // sets, shoe
const TRACK_A = [...COL_A, ...COL_A]
const TRACK_B = [...COL_B, ...COL_B]
const TRACK_C = [...COL_C, ...COL_C]

// ── Product popup modal ──────────────────────────────────────────────
function ProductModal({ product, onClose }) {
  const { addToCart } = useCart()

  if (!product) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal-img-wrap">
          <img src={product.image} alt={product.name} className="modal-img" />
          <span className="modal-category">{product.category}</span>
        </div>

        <div className="modal-body">
          <h3 className="modal-name">{product.name}</h3>
          <p className="modal-desc">{product.description}</p>
          <p className="modal-price">${product.price}</p>
          <div className="modal-actions">
            <Link to={`/products/${product.id}`} className="modal-btn modal-btn--ghost" onClick={onClose}>
              View Details
            </Link>
            <button
              className="modal-btn modal-btn--fill"
              onClick={() => { addToCart(product); onClose() }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Slide card ───────────────────────────────────────────────────────
function SlideCard({ slide, onSelect }) {
  return (
    <div
      className="hero-scroll-card"
      onClick={() => onSelect(slide.productId)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect(slide.productId)}
    >
      <img src={slide.src} alt="" draggable="false" />
    </div>
  )
}

// ── HomePage ─────────────────────────────────────────────────────────
function HomePage() {
  const [activeProduct, setActiveProduct] = useState(null)

  const openModal = (productId) => {
    const p = mockProducts.find(p => p.id === productId)
    setActiveProduct(p || null)
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-inner">

          <div className="hero-content">
            <h1>Shop better with the <span>power of local</span></h1>
            <Link to="/products" className="hero-cta">Start Shopping</Link>
            <div className="hero-rating">
              <div className="hero-stars" aria-hidden="true">★★★★★</div>
              <span className="hero-rating-count">2k+ happy customers</span>
            </div>
            <div className="hero-trust">
              <span>Free shipping</span>
              <span>Secure checkout</span>
              <span>Easy returns</span>
              <span>Local sellers</span>
            </div>
          </div>

          <div className="hero-scroll-mask">
            <div className="hero-scroll-cols">
              <div className="hero-scroll-track track-a">
                {TRACK_A.map((slide, i) => <SlideCard key={i} slide={slide} onSelect={openModal} />)}
              </div>
              <div className="hero-scroll-track track-b">
                {TRACK_B.map((slide, i) => <SlideCard key={i} slide={slide} onSelect={openModal} />)}
              </div>
              <div className="hero-scroll-track track-c">
                {TRACK_C.map((slide, i) => <SlideCard key={i} slide={slide} onSelect={openModal} />)}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── About strip ──────────────────────────────────────────────── */}
      <section className="home-about">
        <p className="home-about-eyebrow">Our Mission</p>
        <h2 className="home-about-headline">
          Empower local makers and shoppers to connect, trade, and thrive together.
        </h2>
        <Link to="/about" className="home-about-cta">Learn More</Link>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <Testimonials />

      {/* ── Product modal ────────────────────────────────────────────── */}
      {activeProduct && (
        <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} />
      )}
    </>
  )
}

export default HomePage
