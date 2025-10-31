import React, { useEffect, useRef } from 'react'

export default function Cart({ items, onQtyChange, onRemove, onClear, isOpen, onClose }) {
  const closeButtonRef = useRef(null)
  const previouslyFocusedRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedRef.current = document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null

      if (closeButtonRef.current) {
        closeButtonRef.current.focus()
      }
    } else if (previouslyFocusedRef.current) {
      previouslyFocusedRef.current.focus()
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  const total = items.reduce((sum, it) => sum + it.product.price * it.qty, 0)

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (<>
    <div className="cart-overlay" onClick={handleOverlayClick}>
      <div
        className="cart-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="cart-modal-header">
          <h2 id="cart-title">Your cart</h2>
          <button
            type="button"
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
            ref={closeButtonRef}
          >
            ×
          </button>
        </div>
        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <p className="muted">Cart is empty.</p>
            </div>
          ) : (
            <>
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
                      <button onClick={() => onQtyChange(product.id, Math.max(1, qty - 1))} aria-label={`Decrease quantity of ${product.title}`}>
                        −
                      </button>
                      <span>{qty}</span>
                      <button onClick={() => onQtyChange(product.id, qty + 1)} aria-label={`Increase quantity of ${product.title}`}>
                        +
                      </button>
                    </div>
                    <div className="cart-subtotal">${(product.price * qty).toFixed(2)}</div>
                    <button className="link" onClick={() => onRemove(product.id)}>
                      Remove
                    </button>
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
            </>
          )}
        </div>
      </div>
    </div>
  </>)
}


