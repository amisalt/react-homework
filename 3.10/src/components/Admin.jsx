import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { changeRole } from '../store/usersSlice'
export function Admin() {
    const dispatch = useDispatch()
    const users = useSelector((state)=>state.user.users)
    function changeRole1(index, user, role){
        dispatch(changeRole({index, user:{...user, role}}))
    }
    return (
        <div className='form'>
            <h3>Admin Panel</h3>
            {users.map((user,index)=>(
                <div className="form" key={index}>
                    <p>{user.name}</p>
                    <p>{user.password}</p>
                    <select value={user.role} onChange={(e)=>changeRole1(index, user, e.target.value)}>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <option value="guest">Guest</option>
                    </select>
                </div>
            ))}
        </div>
    )
}
