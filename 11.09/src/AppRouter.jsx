import React, { useContext } from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import { privateRoutes, publicRoutes } from './router'
import { AuthContext } from './context'
export default function AppRouter() {
  const {isAuth} = useContext(AuthContext)
  return (
    isAuth ? 
    (
      <Routes>
        {privateRoutes.map(route=>(<Route key={route.path} {...route} element={<route.element/>}/>))}
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    ) : 
    (
      <Routes>
        {publicRoutes.map(route=>(<Route key={route.path} {...route} element={<route.element/>}/>))}
        <Route path='*' element={<Navigate to='/auth'/>}/>
      </Routes>
    )
  )
}
