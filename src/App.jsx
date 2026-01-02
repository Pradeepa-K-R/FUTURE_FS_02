import { useState, useEffect } from 'react';
import Login from "./Login";
import Register from "./Register";
// Note: categories mattum inga irunthu edukrom, products API la irunthu varum
import { categories } from './products'; 
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  
  // Products initial-a empty-a irukkum
  const [products, setProducts] = useState([]); 
  
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); 

  // --- BACKEND API CALL ---
  useEffect(() => {
    // Vercel-oda API folder kitta data kekurom
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  function addToCart(product) {
    setCart([...cart, product]);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  }

  function handleOrder(e) {
    e.preventDefault();
    alert("Order Placed Successfully! 🎉");
    setCart([]);
    setShowCart(false);
    setIsCheckout(false);
    setSelectedCategory(null);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const filteredProducts = products.filter(p => p.category === selectedCategory);

  if (!isLoggedIn) {
    if (showRegister) {
      return (
        <Register
          onRegister={() => setIsLoggedIn(true)}
          goToLogin={() => setShowRegister(false)}
        />
      );
    }
    return (
      <Login
        onLogin={() => setIsLoggedIn(true)}
        goToRegister={() => setShowRegister(true)}
      />
    );
  }

  return (
    <div>
      <nav className="navbar">
        <div className="logo" onClick={() => {
            setShowCart(false);
            setIsCheckout(false);
            setSelectedCategory(null);
          }}>
          {showToast && <div className="toast">✅ Added to cart</div>}
          🛍️ Pradee's <span>Store</span>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button className="cart-btn" onClick={() => {
              setShowCart(!showCart);
              setIsCheckout(false);
            }}>
            {showCart ? "✖ Close" : `🛒 Cart (${cart.length})`}
          </button>
          <button className="cart-btn" onClick={() => {
              setIsLoggedIn(false);
              setShowRegister(false);
              setCart([]);
            }}>
            🚪 Logout
          </button>
        </div>
      </nav>

      {showCart ? (
        <div className="cart-page">
          {isCheckout ? (
            <div>
              <h2 style={{color: "#d633ff"}}>⚡ Express Checkout</h2>
              <p>Total: <strong>₹{total}</strong></p>
              <form onSubmit={handleOrder}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Address" required></textarea>
                <button type="submit" className="checkout-btn">Confirm Order</button>
                <button type="button" onClick={() => setIsCheckout(false)} style={{marginTop: "10px", background: "none", border: "none", cursor: "pointer", color: "#888", width: "100%"}}>Cancel</button>
              </form>
            </div>
          ) : (
            <div>
              <h2>Your Cart 🛒</h2>
              {cart.length === 0 ? <p style={{textAlign: "center", color: "#888"}}>Cart is empty.</p> : (
                <>
                  {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
                        <img src={item.image} alt={item.name} style={{width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover"}} />
                        <div>
                          <strong style={{display: "block", color: "#fff"}}>{item.name}</strong>
                          <span style={{fontSize: "12px", color: "#888"}}>{item.category}</span>
                        </div>
                      </div>
                      <span style={{color: "#d633ff", fontWeight: "bold"}}>₹{item.price}</span>
                    </div>
                  ))}
                  <div style={{marginTop: "20px", textAlign: "right"}}>
                    <h3>Total: <span style={{color: "#d633ff"}}>₹{total}</span></h3>
                    <button className="checkout-btn" onClick={() => setIsCheckout(true)}>Proceed to Checkout ➔</button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="product-container">
          {selectedCategory ? (
            <>
              <button className="back-btn" onClick={() => setSelectedCategory(null)}>
                ⬅ Back to All Categories
              </button>
              
              {/* BACKEND LOADING STATE */}
              {products.length === 0 ? <p style={{color: "white"}}>Loading Products from Backend...</p> : null}

              {filteredProducts.map((item) => (
                <div key={item.id} className="card">
                  <img src={item.image} alt={item.name} className="product-img" />
                  <div className="info">
                    <p className="category">{item.category}</p>
                    <h3>{item.name}</h3>
                    <span className="price">₹{item.price}</span>
                  </div>
                  <button className="add-btn" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </>
          ) : (
            <>
             <h2 style={{gridColumn: "1 / -1", textAlign: "center", color: "#fff", marginBottom: "20px", fontSize: "24px"}}>
               ✨ Select a Category ✨
             </h2>
             {categories.map((cat, index) => (
               <div key={index} className="card" onClick={() => setSelectedCategory(cat.name)} style={{cursor: "pointer", justifyContent: "center", padding: "0", overflow: "hidden"}}>
                 <img src={cat.image} alt={cat.name} style={{width: "100%", height: "200px", objectFit: "cover"}} />
                 <div style={{padding: "20px"}}>
                   <h2 style={{margin: "0", color: "#d633ff"}}>{cat.name}</h2>
                   <p style={{color: "#888", fontSize: "14px"}}>{cat.desc}</p>
                 </div>
               </div>
             ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default App;