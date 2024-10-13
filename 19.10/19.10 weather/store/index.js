import { configureStore } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

async function getLatLon(city){
  return await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=1b6abad437b87b371b984c79b638f9ce`).then(res=>res.data).then(data=>data[0])
}

export const getWeather = createAsyncThunk(
  'weather/weather',
  async (city)=>{
    let {lat, lon} = await getLatLon(city)
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1b6abad437b87b371b984c79b638f9ce`).then(res=>res.data).then(data=>{
      return {
        "temperature":Math.round(data.main.temp-273.15),
        "weather":data.weather[0].description,
        "icon":`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      }
    })
  }
)

const weatherSlice = createSlice({
  name: "weather",
  initialState:{
    weather:"",
    temperature:"",
    icon:"",
    loading:false,
    error:null
  },
  extraReducers:(builder)=>{
    builder.addCase(getWeather.pending, (state)=>{
      state.loading = true;
      state.error = null;
    })
    .addCase(getWeather.fulfilled, (state, action)=>{
      state.loading = false;
      state.error =  null
      state.weather = action.payload.weather;
      state.temperature = action.payload.temperature;
      state.icon = action.payload.icon
      console.log(state.weather, state.temperature, state.icon)
    })
    .addCase(getWeather.rejected, (state, action)=>{
      state.loading = false;
      state.error = action.error.message
    })
  }
})

export const store = configureStore({
  reducer:{
    "weather":weatherSlice.reducer
  }
})