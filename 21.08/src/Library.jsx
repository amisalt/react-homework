import React from 'react'
import Card from './Card.jsx'

export default function Library({bookList}) {
  return (
    <main>
      <section>
        <h1>Super Cool Library</h1>
        <h3>of {bookList.length} books!</h3>
      </section>
      <div className='books'>
        {bookList.map(book=>(<Card name={book.name} desc={book.desc} img={book.img} key={book.id} />))}
      </div>
    </main>
  )
}
