import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import { routes } from './routes'
export function AppRouter() {
  return (
    <Routes>
      {routes.map(route=>(<Route key={route.path} {...route} element={<route.component/>}/>))}
      <Route path="*" element={<Navigate to="/movies"/>}/>
    </Routes>
  )
}
