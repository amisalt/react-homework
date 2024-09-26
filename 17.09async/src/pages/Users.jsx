import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { UserCard } from '../components/UserCard'
import MyLoader from "../components/UI/MyLoader"
import { getUsers } from '../app/reducers/userReducer'
export function Users() {
  const dispatch = useDispatch()
  const users = useSelector(state=>state.user.users)
  const loading = useSelector(state=>state.user.loading)
  const error = useSelector(state=>state.user.error)
  useEffect(()=>{
    dispatch(getUsers())
  }, [])
  return (
    <div className='page'>
      {
        !error ? 
          loading ? (
            <MyLoader/>
          ):(
            <>{users.map(mov=>(<UserCard {...mov} key={mov.id}/>))}</>
          )
        : (
          <h3>{error}</h3>
        )
      }
      
    </div>
  )
}