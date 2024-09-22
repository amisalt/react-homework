import React, { useState } from 'react'
import MyInput from '../../../lesson3/src/UI/MyInput'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../app/reducers/AuthReducer'
import MyButton from '../../../lesson3/src/UI/MyButton'
import { Link } from 'react-router-dom'
export function AuthPage() {
    const dispatch = useDispatch()
    const [userLogin, setUserLogin] = useState("")
    const [userPassword, setUserPassword] = useState("")
    function logInFunc(){
        dispatch(logIn({login:userLogin, password:userPassword}))
    }
    return (
        <div className='page'>
            <form>
                <MyInput type="text" placeholder="/login" value={userLogin} onChange={(e)=>setUserLogin(e.target.value)}/>
                <MyInput type="password" placeholder=".password" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} />
                <Link onClick={logInFunc} to="/content"><MyButton >/logIn</MyButton></Link>
            </form>
        </div>
    )
}
