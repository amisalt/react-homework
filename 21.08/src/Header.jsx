import React from 'react'
import logo from "./assets/react.svg"

export default function Header() {
  return (
    <header>
      <img src={logo} className="logo"/>
      <a href="#">About us</a>
      <a href="#">Services</a>
      <a href="#">Pricing</a>
    </header>
  )
}
