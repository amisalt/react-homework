import React from 'react'
import { Header } from './components/Header'
import { ItemSection } from './components/ItemSection'
import { Footer } from './components/Footer'
export function App() {
  return (
    <div className='body'>
      <Header/>
      <ItemSection/>
      <Footer/>
    </div>
  )
}
