import {configureStore} from "@reduxjs/toolkit"
import itemReducer from "./reducers/itemReducer"
import authReducer from "./reducers/authReducer"

export const store = configureStore({
  reducer:{
    item:itemReducer,
    auth:authReducer
  }
})