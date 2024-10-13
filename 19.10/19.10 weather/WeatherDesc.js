import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export function WeatherDesc(){
  let temperature = useSelector(state=>state.weather.temperature)
  let  weather = useSelector(state=>state.weather.weather)
  return (
    <View style={{gap:3}}>
      <Text style={styles.h1}>{temperature}°C</Text>
      <Text style={styles.h3}>{weather}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  h1:{
    fontSize: 40,
    fontWeight:"bold",
    textAlign:"center"
  },
  h3:{
    fontSize:30,
    fontWeight:"bold",
    textAlign:"center"
  }
})