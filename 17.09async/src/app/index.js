import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './reducers/movieReducer'
import userReducer from './reducers/userReducer'
export const store = configureStore({
    reducer:{
        movie:movieReducer,
        user:userReducer
    }
})