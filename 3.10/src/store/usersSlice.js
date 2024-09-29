import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const userSlice = createSlice({
  name:'user',
  initialState:{
    user:{
      name:"",
      role:"guest",
      password:""
    },
    users:[{
      name:"",
      role:"guest",
      password:""
    },{
      name:"a",
      role:"admin",
      password:"123"
    }]
  },
  reducers:{
    login:(state, action)=>{
      const exUser = state.users.find((user)=>user.name === action.payload.name &&  user.password === action.payload.password)
      if(exUser) state.user = exUser
    },
    addAccount:(state, action)=>{
      if(!state.users.find((user)=>user.name === action.payload.name &&  user.password === action.payload.password))
      state.users.push({...action.payload, role:"user"})
    },
    changeRole:(state, action)=>{
      console.log(state.users[action.payload.index]);
      
      state.users[action.payload.index] = action.payload.user
    }
  }
})

export default userSlice.reducer
export const {login, addAccount, changeRole} = userSlice.actions