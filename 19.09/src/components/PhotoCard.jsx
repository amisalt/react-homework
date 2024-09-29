import React from 'react'

export function PhotoCard({title, url, id, albumId}) {
  return (
    <div className='card'>
      <img src={url}/>
      <p>{title}</p>
      <sup>{albumId}-{id}</sup>
    </div>
  )
}
