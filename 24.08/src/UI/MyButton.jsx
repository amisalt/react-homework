import React from 'react'
import "./MyButton.css"

export default function MyButton({children, onClick}) {
  return (
    <button onClick={onClick} className='MyButton'>{children}</button>
  )
}
