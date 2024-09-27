import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name:"auth",
  initialState:{
    user:{
      name:"",
      password:"",
      role:"guest"
    },
    users:[
      {name:"admin",password:"admin",role:"admin"}
    ]
  },
  reducers:{
    login:(state,action)=>{
      if(action.payload.name.trim() !== "" &&  action.payload.password.trim() !== ""){
      let user = state.users.find((user)=>user.name === action.payload.name && user.password === action.payload.password)
      if(user) state.user = user
      else{
        user = {name:action.payload.name, password:action.payload.password, role:"user"}
        state.users.push(user)
        state.user = user
      }
      }
      console.log(state.users);
      console.log(state.user);
      
    },
    logout:(state,action)=>{
      state.user = {name:"",password:"",role:"guest"}
      console.log(state.user);
      
    }
  }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer