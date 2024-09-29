import React from 'react'
import { SearchBar } from './components/SearchBar'
import { Gallery } from './components/Gallery'

export function App() {
  return (
    <div className='body'>
      <header>
        <h2>Gallery</h2>
        <p>explore albums of users across the world</p>
      </header>
      <SearchBar/>
      <Gallery/>
    </div>
  )
}
