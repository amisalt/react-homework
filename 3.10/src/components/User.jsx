import React from 'react'
import { useSelector } from 'react-redux'
export  function User() {
    const users = useSelector(state=>state.user.users)
    const user = useSelector(state=>state.user.user)
    return (
        <div className='form'>
            <h3>User Dash</h3>
            <div className='form'>
                <h4>It's you!</h4>
                <p>{user.name}</p>
                <p>{user.role}</p>
            </div>
            {users.map((user,index)=>(
                <div className="form" key={index}>
                    <p>{user.name}</p>
                    <p>{user.role}</p>
                </div>
            ))}
        </div>
    )
}
