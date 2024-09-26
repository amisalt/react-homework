import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk(
  'user/getUsers',
  async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const  data = await response.json()
    return  data
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState:{
    users:[],
    loading:false,
    error:""
  },
  extraReducers:(builder)=>{
    builder.addCase(getUsers.pending,(state,action)=>{
      state.loading = true
      state.error = ""
      state.users = []
    })
    builder.addCase(getUsers.fulfilled,(state,action)=>{
      state.loading = false
      state.error = ""
      state.users = action.payload
    })
    builder.addCase(getUsers.rejected,(state,action)=>{
      state.loading = false
      state.error = action.error.message
      state.users = []
    })
  }
})

export default userSlice.reducer