import React from 'react'
import "./MyButton.css"

export default function MyButton({children, ...props}) {
  return (
    <button {...props} className='MyButton'>{children}</button>
  )
}
