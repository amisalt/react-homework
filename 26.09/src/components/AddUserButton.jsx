import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/users/usersSlice'
import MyButton from "../UI/MyButton"
export function AddUserButton() {
    const dispatch = useDispatch()
    function handleAddUser(){
        dispatch(addUser())
    } 
    return (
        <MyButton onClick={handleAddUser}>New User</MyButton>
    )
}
