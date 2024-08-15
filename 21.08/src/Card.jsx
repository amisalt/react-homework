import React from 'react'

export default function Card({name, desc, img}) {
  return (
    <div className='book'>
        <img src={img}/>
        <h3>{name}</h3>
        <p>{desc}</p>
        <button>Read</button>
    </div>
  )
}
