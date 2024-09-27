import React, { useEffect, useState } from 'react'
import MyInput from "./UI/MyInput"
import MyButton from "./UI/MyButton"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../app/reducers/authReducer'
import { filterItems} from '../app/reducers/itemReducer'
import { LoginModal } from './LoginModal'
import { CartModal } from './CartModal'
import "./Header.css"
export function Header() {
  const dispatch = useDispatch()
  const username = useSelector(state=>state.auth.user.name)
  const [search, setSearch] = useState("")
  const [loginModal, setLoginModal] = useState(false)
  const [cartModal, setCartModal] = useState(false)
  useEffect(()=>{
    dispatch(filterItems(search))
  }, [search])
  function handleLogin(){
    setLoginModal(true)
  }
  function  handleLogout(){
    dispatch(logout())
  }


  return (
    <header>
      <img src="https://cdn-icons-png.flaticon.com/512/9725/9725722.png" alt="logo" className="logo" />
      <MyInput type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Pizza..."/>
      <section>
        <h4>{username}</h4>
        {username && <MyButton onClick={()=>setCartModal(true)}>Cart</MyButton>}
        <MyButton onClick={!username?handleLogin:handleLogout}>{username?"Log Out":"Log In"}</MyButton>
      </section>
      {loginModal&&<LoginModal setModal={setLoginModal}/>}
      {cartModal&&<CartModal setModal={setCartModal}/>}
    </header>
  )
}

