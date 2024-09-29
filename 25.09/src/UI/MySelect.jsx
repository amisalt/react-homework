import React from 'react'
import "./MySelect.css"

export default function MySelect({options, default_, onChange, value}) {
  return (
    <select onChange={onChange} className='MySelect' value={value}>
        <option selected disabled value={default_[0]}>{default_[1]}</option>
        {options.map((opt, index)=>(<option value={opt[0]} key={index}>{opt[1]}</option>))}
      </select>
  )
}
