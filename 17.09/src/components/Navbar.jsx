import React from 'react'
import { Link } from 'react-router-dom'
import { privateRoutes } from '../router/routes'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../app/reducers/AuthReducer'
export function Navbar() {
    const isAuth = useSelector(state=>state.auth.isAuth)
    const dispatch = useDispatch()
    function logOutFunc(){
        dispatch(logOut())
    }
    return (
        <header>
            {privateRoutes.map(route=>(<Link to={route.path} className='link' key={route.path}>{route.path}</Link>))}
            {isAuth && (
                <Link to="/auth" onClick={logOutFunc} className='link'>/logOut</Link>
            )}
        </header>
    )
}
