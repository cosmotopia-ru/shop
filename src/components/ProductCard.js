import React from 'react'

export default function ProductCard({ product, onAdd }) {
  return (<>
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <div className="product-bottom">
          <span className="price">${product.price.toFixed(2)}</span>
          <button className="btn" onClick={() => onAdd(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  </>)
}


