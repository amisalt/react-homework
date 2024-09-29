import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { fetchUsers, sort, editUser } from '../features/users/usersSlice'
import { AddUserButton } from './AddUserButton'
import MySelect from "../UI/MySelect"
export function UserList() {
    const dispatch = useDispatch()
    const {users, loading, error} = useSelector(state=>state.users)
    const [filters, setFilters] = useState([])
    const [usersDisplay, setUsersDispaay] = useState([])
    const [filt, setFilt] = useState("default")
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    useEffect(()=>{
        dispatch(sort())
        setUsersDispaay(users)
    },[loading])
    useEffect(()=>{        
        const newFilters = []
        for(let user of users){
            if(!newFilters.includes(user.address.state)) newFilters.push(user.address.state)
        }
        setFilters(newFilters)
    },[users])
    function filterUsers(){
        setUsersDispaay(users.filter(user=>{
            if(filt!=='default') return user.address.state === filt
            return true
        }))
    }
    useEffect(filterUsers, [filt,users])
    
    return (
        <ul>
            <AddUserButton/>
            <MySelect options={filters.map(filter=>[filter,filter])} default_={['default','choose filter']} value={filt} onChange={(e)=>setFilt(e.target.value)}/>
            <>{usersDisplay.length === 0 ? (
                <li>No users</li>
            ) : (
                <>{usersDisplay.map(user=><input key={user.id} placeholder={user.firstName} onKeyDown={(e)=>{if(e.key==='Enter'){dispatch(editUser({id:user.id, firstName:e.target.value}));e.target.value = ""}}}/>)}</>
            )}</>
        </ul>
    )
}
