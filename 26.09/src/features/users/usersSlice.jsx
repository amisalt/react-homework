import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async()=>{
        const response = await fetch('https://dummyjson.com/users')
        const data =  await response.json()
        return data.users
    }
)
export const addUser = createAsyncThunk(
    'users/addUser',
    async()=>{
        const response = await fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: 'Coal',
                lastName: 'Ovi',
                age: Math.random()*100,
                address:{
                    state:"Alabama"
                },
            })
        })
        const data = await response.json()
        return {...data, id:Date.now()}
    }
)
export const editUser = createAsyncThunk(
    'users/editUser',
    async({id, firstName}, thunkAPI)=>{
        const response = await fetch(`https://dummyjson.com/users/${id}`, {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName
            })
        })
        const data = await response.json()
        return data
    }
)
const initialState = {
    users:[],
    loading:false,
    error:null,
}

const usersReducer = createSlice({
    name:"users",
    initialState,
    reducers:{
        sort:(state,action)=>{
            if(action.payload === 1){
                state.users.sort((a,b)=>a.age-b.age)
            }else if(action.payload === -1){
                state.users.sort((a,b)=>b.age-a.age)
            }
        }
        // sortUsers:(state)
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending, (state,action)=>{
            state.loading = true
            state.error = null
        })
        .addCase(fetchUsers.fulfilled, (state,action)=>{
            state.loading = false
            state.error = null
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message
        })
        .addCase(addUser.pending, (state, action)=>{
            state.loading=true
            state.error=""
        })
        .addCase(addUser.fulfilled, (state,action)=>{
            state.error=""
            state.loading=false
            state.users.push(action.payload)
        })
        .addCase(addUser.rejected, (state, action)=>{
            state.loading=false
            state.error = action.error.message
        })
        .addCase(editUser.pending, (state, action)=>{
            state.loading=true
            state.error=""
        })
        .addCase(editUser.fulfilled, (state,action)=>{
            state.error=""
            state.loading=false
            const index = state.users.findIndex(user=>user.id === action.payload.id)
            const newUsers = [...state.users]
            newUsers[index] = action.payload
            state.users = newUsers
        })
        .addCase(editUser.rejected, (state, action)=>{
            state.loading=false
            state.error = action.error.message
        })
    }
})

export default usersReducer.reducer
export const {sort} = usersReducer.actions