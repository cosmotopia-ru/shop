import React from 'react'

export default function Cart({ items, onQtyChange, onRemove, onClear }) {
  const total = items.reduce((sum, it) => sum + it.product.price * it.qty, 0)

  if (items.length === 0) {
    return (<>
      <section className="cart">
        <div className="container">
          <h2>Your cart</h2>
          <p className="muted">Cart is empty.</p>
        </div>
      </section>
    </>)
  }

  return (<>
    <section className="cart">
      <div className="container">
        <h2>Your cart</h2>
        <div className="cart-table">
          {items.map(({ product, qty }) => (
            <div key={product.id} className="cart-row">
              <div className="cart-item">
                <img src={product.image} alt={product.title} />
                <div>
                  <div className="title">{product.title}</div>
                  <div className="muted">${product.price.toFixed(2)}</div>
                </div>
              </div>
              <div className="cart-qty">
                <button onClick={() => onQtyChange(product.id, Math.max(1, qty - 1))}>-</button>
                <span>{qty}</span>
                <button onClick={() => onQtyChange(product.id, qty + 1)}>+</button>
              </div>
              <div className="cart-subtotal">${(product.price * qty).toFixed(2)}</div>
              <button className="link" onClick={() => onRemove(product.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          <button className="btn ghost" onClick={onClear}>Clear cart</button>
          <div className="cart-total">
            <span>Total:</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </section>
  </>)
}


