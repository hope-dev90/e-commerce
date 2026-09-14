import bracelet from '../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/bracelet.png'
import bShoe    from '../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/b-shoe.png'
import purse    from '../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/purse.png'
import sets     from '../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/sets.png'
import shoe     from '../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/shoe.png'
import watch    from '../assets/images/{brand,hero,products,categories,banners,testimonials,icons}/watch.png'

const mockProducts = [
  { id: 1, name: 'Gold Bracelet',    price: 20, stock: 10, category: 'Accessories', description: 'Elegant gold-tone bracelet for everyday wear.',        image: bracelet },
  { id: 2, name: 'Brown Boots',      price: 50, stock: 12, category: 'Footwear',    description: 'Sturdy brown boots built for comfort and style.',       image: bShoe    },
  { id: 3, name: 'Classic Purse',    price: 35, stock: 15, category: 'Bags',        description: 'A timeless purse that goes with any outfit.',           image: purse    },
  { id: 4, name: 'Jewellery Set',    price: 45, stock: 8,  category: 'Accessories', description: 'Complete jewellery set — necklace, earrings & ring.',   image: sets     },
  { id: 5, name: 'Leather Sneakers', price: 50, stock: 12, category: 'Footwear',    description: 'Clean leather sneakers for casual everyday wear.',      image: shoe     },
  { id: 6, name: 'Simple Watch',     price: 30, stock: 7,  category: 'Accessories', description: 'Minimal watch that keeps it classy.',                   image: watch    },
]

export default mockProducts
