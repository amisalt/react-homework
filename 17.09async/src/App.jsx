import React from 'react'
import { SearchBar } from './components/SearchBar'
import {BrowserRouter} from 'react-router-dom'
import { Movies } from './pages/Movies'
import { AppRouter } from './router/AppRouter'
export function App() {
  return (
    <BrowserRouter>
    <div className='main'>
      <SearchBar/>
      <AppRouter/>
    </div>
    </BrowserRouter>
  )
}
