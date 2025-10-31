import { useMemo, useState, useCallback } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const products = useMemo(() => ([
    { id: 1, title: "Soft Cotton Towel", price: 19.99, image: "https://images.unsplash.com/photo-1604335399105-a0d7f9e3a908?w=600&q=80" },
    { id: 2, title: "Ceramic Vase", price: 29.50, image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=600&q=80" },
    { id: 3, title: "Scented Candle", price: 15.00, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80" },
    { id: 4, title: "Throw Pillow", price: 22.00, image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=600&q=80" }
  ]), [])

  const [cart, setCart] = useState([]) // [{product, qty}]

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((it) => it.product.id === product.id)
      if (existing) {
        return prev.map((it) => it.product.id === product.id ? { ...it, qty: it.qty + 1 } : it)
      }
      return [...prev, { product, qty: 1 }]
    })
  }, [])

  const changeQty = useCallback((productId, qty) => {
    setCart((prev) => prev.map((it) => it.product.id === productId ? { ...it, qty } : it))
  }, [])

  const removeItem = useCallback((productId) => {
    setCart((prev) => prev.filter((it) => it.product.id !== productId))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const cartCount = cart.reduce((sum, it) => sum + it.qty, 0)

  return (<>
    <Header cartCount={cartCount} />
    <main>
      <ProductList products={products} onAdd={addToCart} />
      <Cart items={cart} onQtyChange={changeQty} onRemove={removeItem} onClear={clearCart} />
    </main>
    <Footer />
  </>);
}

export default App;
