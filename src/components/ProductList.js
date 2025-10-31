import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ products, onAdd }) {
  return (<>
    <section className="products">
      <div className="container grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  </>)
}


