import React from 'react'
import "./assets/Header.css"

export default function Footer({sponsors}) {
  return (
    <footer>
      <section className="logo">
        <img src="https://d1yjjnpx0p53s8.cloudfront.net/onlineshopping.png" alt="Shop Logo"/>
      </section>
      <section className='input' id='sponsors'>
        {sponsors.map((s)=>(<h3 key={s}>{s}</h3>))}
      </section>
    </footer>
  )
}
