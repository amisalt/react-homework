import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { AuthContext } from './context'
import MyButton from './UI/MyButton'

export default function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  function logout(){
    setIsAuth(false)
    localStorage.setItem('token', JSON.stringify(false))
    console.log(22222222222);
    
  }
  return (
    <nav>
      <Link className='link' to="/">Main</Link>
      <Link className='link' to="/posts">Posts</Link>
      {isAuth ? <Link className='link' to="/auth" onClick={logout}>Log out</Link> : <Link className='link' to="/auth">Log in</Link>}
      {/* <a href="/">Main</a>
      <a href="/posts">Posts</a> */}
    </nav>
  )
}
