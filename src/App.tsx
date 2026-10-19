
import { useState } from 'react';
import './App.css';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Headphone Pro',
    price: 450000,
    image: 'src/assets/headphone.jpg',
    category: 'Audio',
    description: 'Nikmati suara jernih dengan desain premium.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 725000,
    image: 'src/assets/SmartWatch.jpg',
    category: 'Wearable',
    description: 'Temani aktivitasmu dengan gaya modern.',
  },
  {
    id: 3,
    name: 'Camera Vintage',
    price: 1250000,
    image: 'src/assets/CameraVintage.jpg',
    category: 'Photography',
    description: 'Abadikan momen berharga dengan penuh gaya.',
  },
  {
    id: 4,
    name: 'Adidas SL 72 OG',
    price: 580000,
    image: 'src/assets/Adidas.jpg',
    category: 'Fashion',
    description: 'Kenyamanan maksimal untuk setiap langkah.',
  },
  {
    id: 5,
    name: 'Minimalist Bag',
    price: 320000,
    image: 'src/assets/tas.jpg',
    category: 'Accessories',
    description: 'Tas simpel untuk menemani keseharianmu menjalani kegiatan yang menyenangkan.',
  },
  {
    id: 6,
    name: 'Wireless Speaker',
    price: 395000,
    image: 'src/assets/speaker.jpg',
    category: 'Audio',
    description: 'Bawa musik favoritmu ke mana saja.',
  },
  {
    id: 7,
    name: 'AEDLE VK-1 Headphones ',
    price: 180000,
    image: 'src/assets/Design, art, images, and visuals that inspire, incite, and elicit_.jpg',
    category: 'Audio',
    description: 'Lebih dari sekadar headphone, ini adalah pernyataan gaya hidup. Investasikan kenyamanan telinga Anda.',
  },
   {
    id: 8,
    name: ' Sony Alpha 7 IV lensa prime Sony FE 85mm',
    price: 42098000,
    image: 'src/assets/kamera.jpg',
    category: 'Photography',
    description: 'Bawa karya visual Anda ke level tertinggi. Kombinasi sensor kuat Sony A7 IV dan ketajaman bokeh dari Lensa Sony 85mm f/1.8 adalah senjata rahasia untuk foto potret dan komersial yang memukau.',
  },
   {
    id: 9,
    name: 'sepatu golf Nike Air Max 270 G (White/Black) ',
    price: 3400000 ,
    image: 'src/assets/nike.jpg',
    category: 'Fashion',
    description: 'Performa golf terbaik bertemu dengan kenyamanan legendaris. Konstruksi mesh berbalut lapisan fleksibel menjaga kaki Anda tetap kering dan sejuk selama 18 lubang penuh.',
  },
];

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  added: boolean;
  onAdd: () => void;
};

function ProductCard({
  name,
  price,
  image,
  category,
  description,
  added,
  onAdd,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={image} alt={name} />
        <span className="product-category">{category}</span>
      </div>

      <div className="product-info">
        <h3>{name}</h3>
        <p className="product-description">{description}</p>

        <div className="product-bottom">
          <span className="product-price">
            {price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              maximumFractionDigits: 0,
            })}
          </span>

          <button
            className={`add-button ${added ? 'added' : ''}`}
            onClick={onAdd}
            disabled={added}
          >
            {added ? '✓ Added' : '+ Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState('');

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      if (currentCart.some((item) => item.id === product.id)) {
        return currentCart;
      }

      return [...currentCart, product];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPrice = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  const formatPrice = (price: number) =>
    price.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    });

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#">
          <span className="brand-icon">M</span>
          <span>Muntara<span className="brand-accent">list</span></span>
        </a>

        <div className="nav-right">
          <span className="nav-label">YOUR COLLECTION</span>
          <button
            className={`cart-button ${showCart ? 'cart-active' : ''}`}
            onClick={() => setShowCart(!showCart)}
          >
            <span className="cart-icon">🛒</span>
            My Cart
            <span className="cart-count">{cart.length}</span>
          </button>
        </div>
      </header>

      <main className="main-container">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="status-dot" />
              CURATED FOR YOU
            </span>

            <h1 className='warna-text'>
              Find your next
              <br />
              <span>favorite thing.</span>
            </h1>

            <p>
              Produk pilihan dengan desain menarik dan kualitas
              terbaik untuk melengkapi keseharianmu.
            </p>

            <a href="#products" className="explore-button">
              Explore Collection <span>↘</span>
            </a>
          </div>

          <div className="hero-decoration">
          </div>
        </section>

        <section className="collection" id="products">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE SELECTION</span>
              <h2>
                Our Products<span className="brand-accent">.</span>
              </h2>
              <p>Temukan sesuatu yang cocok untukmu.</p>
            </div>

            <label className="search-box">
              <span>⌕</span>
              <input
                type="search"
                placeholder="Cari produk..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          {showCart && (
            <section className="cart-panel">
              <div className="cart-panel-heading">
                <div>
                  <span className="eyebrow">YOUR SELECTION</span>
                  <h3>Shopping Cart</h3>
                </div>

                <button
                  className="close-cart"
                  onClick={() => setShowCart(false)}
                >
                  ✕
                </button>
              </div>

              {cart.length === 0 ? (
                <p className="empty-cart">
                  Keranjangmu masih kosong. Yuk, pilih produk favoritmu!
                </p>
              ) : (
                <>
                  <div className="cart-items">
                    {cart.map((product) => (
                      <div className="cart-item" key={product.id}>
                        <img src={product.image} alt={product.name} />

                        <div className="cart-item-info">
                          <strong>{product.name}</strong>
                          <span>{formatPrice(product.price)}</span>
                        </div>

                        <button
                          className="remove-button"
                          onClick={() => removeFromCart(product.id)}
                        >
                          Hapus
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="cart-total">
                    <span>Total harga</span>
                    <strong>{formatPrice(totalPrice)}</strong>
                  </div>
                </>
              )}
            </section>
          )}

          <div className="results-row">
            <span>
              SHOWING <strong>{filteredProducts.length}</strong> PRODUCTS
            </span>
            <span>01 — {String(filteredProducts.length).padStart(2, '0')}</span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  description={product.description}
                  added={cart.some((item) => item.id === product.id)}
                  onAdd={() => addToCart(product)}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <span>⌕</span>
              <h3>Produk tidak ditemukan</h3>
              <p>Coba gunakan kata kunci yang berbeda.</p>
            </div>
          )}
        </section>

        <footer className="footer">
          <a className="brand footer-brand" href="#">
            <span className="brand-icon">M</span>
            <span>Muntara<span className="brand-accent">list</span></span>
          </a>
          <span>Thoughtfully selected. Simply yours.</span>
          <span>© 2026 MUNTARA LIST</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
