import React from 'react'
import "./MyInput.css"

export default function MyInput({type, placeholder, value, onChange}) {
  return (
    <input type={type} className="MyInput" placeholder={placeholder} onChange={onChange} value={value}/>
  )
}
