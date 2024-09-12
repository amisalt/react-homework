import React, { useContext, useEffect, useState } from 'react'
import MyInput from '../UI/MyInput'
import MyButton from '../UI/MyButton'
import { AuthContext } from '../context'
import { Link } from 'react-router-dom'
export default function AuthPage() {
    const [modeLog, setModeLog] = useState(true)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    useEffect(()=>{
        console.log(modeLog);
    },[modeLog])
    const {setIsAuth, isAuth, users, setUsers} = useContext(AuthContext)
    function loginCheck(){
      if(users.filter(user => user.login === login && user.password === password).length === 1){
        setIsAuth(true)
        localStorage.setItem('token', JSON.stringify(true))
      }
    }
    function signinCheck(){
      if(users.filter(user=>user.login === login && user.password === password).length === 0){
        setUsers([...users, {login,password}])
        setIsAuth(true)
        localStorage.setItem('token', JSON.stringify(true))
      }
    }
  return (
    <div className='page'>
      <div className="parent">
        <MyButton onClick={()=>setModeLog(true)} disabled={modeLog}>Log In</MyButton>
        <MyButton onClick={()=>setModeLog(false)} disabled={!modeLog}>Sign In</MyButton>
      </div>
      {modeLog ? (
      <div className="form">
        <h2>Log Into Account</h2>
        <MyInput type="text" placeholder='Login' value={login} onChange={(e)=>setLogin(e.target.value)}/>
        <MyInput type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Link to='/posts' className='form-link'><MyButton onClick={loginCheck}>Log In</MyButton></Link>
      </div>) : 
      (<div className="form">
        <h2>Sign In New Account</h2>
        <MyInput type="text" placeholder='Login' value={login} onChange={(e)=>setLogin(e.target.value)}/>
        <MyInput type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <Link to='/posts' className='form-link'><MyButton onClick={signinCheck}>Sign In</MyButton></Link>
      </div>)}
    </div>
  )
}
