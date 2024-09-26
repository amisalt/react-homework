import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { APIKEY } from '../APIKEY'
export const getMovies = createAsyncThunk(
    'movie/getMovies',
    async (search, thunkAPI)=>{
        const response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${search.search}&r=json&page=${search.page}`)
        const data = await response.json()
        const totalPages = Math.ceil(Number(data["totalResults"])/10)
        const movies = data.Search
        for(let mov of  movies){
            const res = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${mov.imdbID}`)
            const dat = await res.json()
            mov['plot'] = dat["Plot"]
        }
        return {movies, totalPages}
    }
)
const movieReducer = createSlice({
    name:'movie',
    initialState:{
        movies:[],
        totalPages:0,
        loading:false,
        error:""
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getMovies.pending, (state, action)=>{
            state.loading = true
            state.error = ""
            state.totalPages = 0
            state.movies = []
        })
        .addCase(getMovies.fulfilled, (state,action)=>{
            state.loading = false
            state.error = ""
            state.movies = action.payload.movies
            state.totalPages = action.payload.totalPages
            console.log(state.totalPages);
            
        })
        .addCase(getMovies.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message
            state.totalPages = 0
            state.movies = []
            console.log(state.error);
        })
    }
})

export default movieReducer.reducer
