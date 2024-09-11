import React, { useState } from 'react'
import "./assets/Header.css"
import MyInput from './UI/MyInput'
import MyButton from './UI/MyButton'

export default function Header() {
  const [city, setCity] = useState('')
  const [cityDisplay, setCityDisplay] = useState('')
  return (
    <header>
      <section className="logo">
        <img src="https://d1yjjnpx0p53s8.cloudfront.net/onlineshopping.png" alt="Shop Logo"/>
        <h3>{cityDisplay}</h3>
      </section>
      {cityDisplay.trim() === '' && (
        <section className="input">
          <MyInput type='text' value={city} onChange={(e)=>setCity(e.target.value)}/>
          <MyButton onClick={()=>setCityDisplay(city)}>Choose City</MyButton>
          </section>
      )}
    </header>
  )
}
