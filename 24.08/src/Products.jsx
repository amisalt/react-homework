import React from 'react'
import ProductCard from './ProductCard'
import "./assets/Products.css"

export default function Products({products}) {
  return (
    <div className='products'>
      <section>
        <h2>Brand Name</h2>
        <p>{products.length} products</p>
      </section>
      <div className="products-content">
        {products.map(p=>(<ProductCard {...p} />))}
      </div>
    </div>
  )
}
