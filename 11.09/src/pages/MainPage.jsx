import React from 'react'
import MyButton from '../UI/MyButton'
import { useState } from 'react'
export default function MainPage() {
  const [counter, setCounter] = useState(0)
  return (
    <div className='page'>
      <h1>Idk man, look there's basic counter</h1>
      <div className="parent">
        <MyButton onClick={()=>setCounter(counter-1)}>-</MyButton>
        <p>{counter}</p>
        <MyButton onClick={()=>setCounter(counter+1)}>+</MyButton>
      </div>
    </div>
  )
}
