import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "./store";

export function WeatherSearch(){
  let dispatch = useDispatch()
  let [city, setCity] = useState("London")
  let lat = useSelector(state=>state.weather.lat)
  let lon = useSelector(state=>state.weather.lon)
  async function handleWeatherSearch(){
    await dispatch(getWeather(city))
  }

  useEffect(()=>{
    handleWeatherSearch()
  }, [])

  return (
    <View style={{gap:3}}>
      <TextInput value={city}  onChangeText={setCity} placeholder="Enter city" style={styles.input}/>
      <Pressable onPress={handleWeatherSearch} style={styles.input}>
        <Text style={{textAlign:"center"}}>Look up weather</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    width:"95%",
    alignSelf:"center",
    padding:10,
    borderRadius:10,
    paddingHorizontal:14,
    textAlign:"center",
    fontSize:20,
    borderWidth:1,
    borderColor:"black"
  }
})