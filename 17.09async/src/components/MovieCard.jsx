import React from 'react'

export function MovieCard({plot, Title, Poster}) {
  return (
    <div className='card'>
      <img src={Poster} alt='>< Sorry, no image here'/>
      <h3>{Title}</h3>
      <p>{plot}</p>
    </div>
  )
}
