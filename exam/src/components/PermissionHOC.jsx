import React from 'react'
import {useSelector} from "react-redux"

export const withAuth = (Component, allowedRoles)=>{
  return ()=>{
    const user = useSelector(state=>state.auth.user)
    if(allowedRoles.includes(user.role)){
      return <Component/>
    }else{
      return (<></>)
    }
  }
}
