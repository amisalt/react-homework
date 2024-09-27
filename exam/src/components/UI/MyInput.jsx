import React from 'react'
import "./MyInput.css"

export default function MyInput({...props}) {
  return (
    <input className="MyInput" {...props}/>
  )
}
