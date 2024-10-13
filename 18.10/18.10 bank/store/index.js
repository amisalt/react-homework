import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState:{
    user:{
    name:"Ami",
    mail:"amdksjdsk@gmail.com",
    phone:"+7skdlsdsdls",
    address:"skdsdkl Street 23"},
    money:1000000
  },
  reducers:{
    putMoney:(state,action)=>{
      state.money+=action.payload
    },
    takeMoney:(state,action)=>{
      state.money-=action.payload
    }
  }
})

export const store = configureStore({
  reducer:{
    user:userSlice.reducer
  }
})

export const  {putMoney,takeMoney} = userSlice.actions;
