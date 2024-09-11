import React, { useState } from 'react'
import "./assets/Products.css"
import MyButton from './UI/MyButton'

export default function ProductCard({name, price,year,brand,image,desc}) {
    const [modal, setModal] = useState(false)
  return (
    <div className='card'>
      <div className="card-contents">
        <img src={image} />
        <h3>{name}</h3>
        <p>{desc}</p>
        <MyButton onClick={()=>setModal(true)}>Show More</MyButton>
      </div>
      {modal && (
      <div className="card-modal">
        <h3>{price}$</h3>
        <p>{brand} - {year}</p>
        <MyButton onClick={()=>setModal(false)}>OK</MyButton>
      </div>)}
    </div>
  )
}
