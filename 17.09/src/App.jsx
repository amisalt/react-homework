import React, { useEffect } from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { AppRouter } from './router/AppRouter'
import { useDispatch } from 'react-redux'
import { getFromLocalStorage } from './app/reducers/AuthReducer'
export function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getFromLocalStorage())
  },[dispatch])
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar/>
        <AppRouter/>
      </div>
    </BrowserRouter>
  )
}
