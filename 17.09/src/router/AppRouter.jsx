import React from 'react'
import { useSelector } from 'react-redux'
import { publicRoutes, privateRoutes } from './routes'
import { Navigate, Route, Routes } from 'react-router-dom'
export function AppRouter() {
    const isAuth = useSelector(state=>state.auth.isAuth)
    return (
        isAuth?(
            <Routes>
                {privateRoutes.map(route=>(<Route key={route.path} {...route} element={<route.element/>}/>))}
                <Route path="*" element={<Navigate to="/content"/>}/>
            </Routes>
        ):(
            <Routes>
                {publicRoutes.map(route=>(<Route key={route.path} {...route} element={<route.element/>}/>))}
                <Route path='*' element={<Navigate to="/auth"/>}/>
            </Routes>
        )
    )
}
