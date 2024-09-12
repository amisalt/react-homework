import React from 'react'

export default function Person({name,age,subject,phone,email, setPeople}) {
  return (
    <div>
      <h3>{name} {age}</h3>
      <p>{subject}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <button onClick={setPeople()}></button>
    </div>
  )
}
