import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async ()=>{
    return await axios.get("https://reqres.in/api/users?per_page=12").then(res=> res.data.data)
  }
)

export const login = createAsyncThunk(
  'users/login',
  async ({email, password})=>{
    const token =  await axios.post("https://reqres.in/api/login", {email, password}).then(res=>res.data.token)
    return {email, password, token}
  }
)

const usersSlice = createSlice({
  name:"users",
  initialState:{
    users:[],
    user:{
      email:"",
      password:"",
      token:""
    },
    loading:false,
    error:""
  },
  reducers:{
    addUser:(state,action)=>{
      state.users.push({...action.payload, id:Date.now()})
    },
    deleteUser:(state,action)=>{
      state.users = state.users.filter(user=>user.id !== action.payload)
    },
    logOut:(state,action)=>{
      state.user={
        email:"",
        password:"",
        token:""
      }
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getUsers.pending, (state,action)=>{
      state.loading = true
      state.error=""
    })
    .addCase(getUsers.fulfilled, (state,action)=>{
      state.loading = false
      state.error = ""
      state.users = action.payload
    })
    .addCase(getUsers.rejected, (state, action)=>{
      state.loading = false
      state.error = action.error.message
    })
    .addCase(login.pending, (state,action)=>{
      state.loading = true
      state.error=""
    })
    .addCase(login.fulfilled, (state,action)=>{
      state.loading = false
      state.error = ""
      state.user = action.payload
    })
    .addCase(login.rejected, (state, action)=>{
      state.loading = false
      state.error = action.error.message
    })
  }
})

export const {addUser, deleteUser,logOut} = usersSlice.actions
export default usersSlice.reducer