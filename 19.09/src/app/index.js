import {configureStore} from '@reduxjs/toolkit'
import photoReducer from "./photoReducer"
export const store = configureStore({
  reducer:{
    photo:photoReducer
  }
})