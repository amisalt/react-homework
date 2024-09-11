import React, { useState } from 'react'
import "./assets/Offers.css"

export default function Offers({offers}) {
  const [index, setIndex] = useState(0)
  function turnLeft(){
    console.log('left');
    console.log(index)
    if(index === 0) setIndex(offers.length-1)
    else setIndex(index - 1)
  }
  function turnRight(){
    console.log('right');
    console.log(index)
    if(index === offers.length-1) setIndex(0)
    else setIndex(index + 1)
  }
  return (
    <div className='container'>
      <img src={offers[index]} alt="salkjaslfjadlfas" id='offer'/>
      <button onClick={turnLeft} className='offer'></button>
      <button onClick={turnRight} className='offer'></button>
    </div>
  )
}
