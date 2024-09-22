import { createSlice } from "@reduxjs/toolkit";

const AuthReducer = createSlice({
    name:'auth',
    initialState:{
        isAuth:false,
        login:"jonkler",
        password:"eshkere"
    },
    reducers:{
        logIn:(state,action)=>{
            if(action.payload.login === state.login && action.payload.password === state.password){
                state.isAuth = true
                localStorage.setItem('isAuth', JSON.stringify(state.isAuth))
            }
        },
        logOut:(state,action)=>{
            state.isAuth = false
            localStorage.setItem('isAuth', JSON.stringify(state.isAuth))
        },
        getFromLocalStorage:(state,action)=>{
            state.isAuth = localStorage.getItem('isAuth') ? true : false
        }
    }
})

export default AuthReducer.reducer
export const {logIn, logOut, getFromLocalStorage} = AuthReducer.actions