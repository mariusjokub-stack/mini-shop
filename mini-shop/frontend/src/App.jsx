import { useEffect, useState } from "react"
import "./App.css"

function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")

const [minPrice, setMinPrice] = useState("")
const [maxPrice, setMaxPrice] = useState("")



  const [showProductsMenu, setShowProductsMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
  }, [])

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCategories(data)
      })
  }, [])

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item._id === product._id
    )

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index)
    setCart(newCart)
  }

  const increaseQuantity = (index) => {
    setCart(
      cart.map((item, i) =>
        i === index
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (index) => {
    setCart(
      cart.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  )

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory


const priceMatch =
  (!minPrice || product.price >= Number(minPrice)) &&
  (!maxPrice || product.price <= Number(maxPrice))


    



    return categoryMatch && priceMatch
  })

  return (
    <div>

      <header>

        {/* PIRMAS HEADER */}
        <div className="top-bar">

          <div className="contact-info">
            📞 +370 600 00000
            &nbsp;&nbsp;
            ✉️ info@bitininkystes.lt
          </div>

         

          <div className="social-icons">
            f&nbsp;&nbsp;◎
          </div>

        </div>


        {/* ANTRAS HEADER */}
      <nav className="nav-first">

  <div className="logo">
    🐝 BITĖ
  </div>

  <div className="search">
    <input
      type="text"
      placeholder="🔍 Ieškoti prekių"
    />
  </div>

  <div className="nav-actions">
    <span title="Patinka">❤️</span>

<span
  title="Krepšelis"
  onClick={() => setShowCart(!showCart)}
  style={{ cursor: "pointer" }}
>
  🛒
</span>


    




    <span title="Bendra suma">
      {total.toFixed(2)} €
    </span>

    <span title="Prisijungimas">👤</span>
  </div>

</nav>
{showCart && (
  <div className="cart-dropdown">

    <h3>🛒 Krepšelis</h3>

    {cart.length === 0 ? (

      <p>Krepšelis tuščias</p>

    ) : (

      cart.map((product, index) => (

        <div key={index}>

          <p>
            {product.title} — {product.price} € × {product.quantity}
          </p>

        </div>

      ))

    )}

    <strong>
      Bendra suma: {total.toFixed(2)} €
    </strong>

  </div>
)}




        {/* TREČIAS HEADER */}

     <nav className="nav-second">

  <div className="products-menu">

    <button
      onClick={() =>
        setShowProductsMenu(!showProductsMenu)
      }
    >
      ☰ PREKĖS IR PRODUKTAI
    </button>

     {showProductsMenu && (
    <div className="products-menu-list">
      {categories.map((category) => (
        <div
          key={category._id}
          onClick={() => {
            setSelectedCategory(category.name)
            setShowProductsMenu(false)
          }}
        >
          {category.name}
        </div>
      ))}
    </div>
  )}
</div>

  







  

  <div className="main-menu">

    <span>Pradinis</span>
    <span>Apie mus</span>
    <span>Kontaktai</span>

  </div>

</nav>

</header>



    <h2>Parduotuvė 🐝</h2>





<div className="shop-layout">

  <aside className="filter-sidebar">
    <h4>Kaina:</h4>


<div className="price-inputs">
  <label>
    Nuo 
    <input
      type="number"
      min="0"
      value={minPrice}
      onChange={(e) => setMinPrice(e.target.value)}
      placeholder="€"
    />
  </label>

  <label>
    Iki 
    <input
      type="number"
      min="0"
      value={maxPrice}
      onChange={(e) => setMaxPrice(e.target.value)}
      placeholder="€"
    />
  </label>
</div>







    <div className="price-slider">
      <div className="slider-line">
        <div className="slider-track"></div>

        <input
          type="range"
          min="0"
          max="1000"
          value={Number(minPrice) || 0}
          onChange={(e) => {
            const value = Number(e.target.value)

            if (value <= Number(maxPrice || 1000)) {
              setMinPrice(String(value))
            }
          }}
        />

        <input
          type="range"
          min="0"
          max="1000"
          value={Number(maxPrice) || 1000}
          onChange={(e) => {
            const value = Number(e.target.value)

            if (value >= Number(minPrice || 0)) {
              setMaxPrice(String(value))
            }
          }}
        />
      </div>
    </div>
  </aside>


  <section className="products-section">
    <div className="products-grid">
      {filteredProducts.map((product) => (
        <div className="product-card" key={product._id}>
          {product.image && (
            <img src={product.image} alt={product.title} />
          )}

          <h3>{product.title}</h3>
          <p>{product.price} €</p>

          <button onClick={() => addToCart(product)}>
            Į krepšelį
          </button>
        </div>
      ))}
    </div>
  </section>
  </div>
</div>
  )
}

export default App;