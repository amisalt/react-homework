import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import MyInput from './UI/MyInput'
import MyButton from './UI/MyButton'
import { login } from '../app/reducers/authReducer'
export function LoginModal({setModal}) {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  function closeModal(){
    setModal(false)
  }
  function handleLogin(){
    dispatch(login({name,password}))
    closeModal()
  }
  return (
    <div className='modal'>
      <h1>Authorization</h1>
      <MyInput type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="login..."/>
      <MyInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password..."/>
      <MyButton onClick={handleLogin}>Log In</MyButton>
      <MyButton onClick={closeModal}>Close Window</MyButton>
    </div>
  )
}
