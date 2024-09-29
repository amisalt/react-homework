import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, addAccount } from './store/usersSlice'
import { Admin } from './components/Admin'
import { User } from './components/User'
import { Guest } from './components/Guest'
import { withAuth } from './components/PermissionHOC'
const ProtectedAdmin = withAuth(Admin, ['admin'])
const ProtectedUser = withAuth(User, ['user','admin'])
const ProtectedGuest = withAuth(Guest, ['guest','user','admin'])
export function App() {
  const user111 =  useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const handleLogin = (user)=>{
    dispatch(login(user))
    console.log(11111);
    console.log(user111);
    
  }
  function hadleSignin(user){
    dispatch(addAccount(user))
    dispatch(login(user))
  }
  const [login123, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [switchq, setSwitchq] = useState(true)
  return (
    <div>
      <button onClick={()=>setSwitchq(!switchq)}>
        {switchq ? "To Sign In" : "To Log In"}
      </button>
      {
        switchq?(
          <div className='form'>
            <input type="text" value={login123}  onChange={(e)=>setLogin(e.target.value)} placeholder='login123'/>
            <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)}  placeholder='password'/>
            <button onClick={()=>handleLogin({name:login123, password})}>Log In</button>
          </div>
        ):(
          <div className='form'>
            <input type="text" value={login123}  onChange={(e)=>setLogin(e.target.value)} placeholder='login123'/>
            <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)}  placeholder='password'/>
            <button onClick={()=>hadleSignin({name:login123, password})}>Sign In</button>
          </div>
        )
      }
      <ProtectedAdmin/>
      <ProtectedUser/>
      <ProtectedGuest/>
    </div>
  )
}
