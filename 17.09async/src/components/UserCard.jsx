import React from 'react'

export function UserCard({name, username, email, phone, website}) {
  return (
    <div className='card'>
      <h3>@{username} - {name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  )
}
