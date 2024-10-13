import { useSelector } from "react-redux";
import { Image, StyleSheet } from "react-native";
import logo from "./assets/favicon.png"
export function WeatherIcon(){
  let icon = useSelector(state=>state.weather.icon)
  return(
    <Image source={{uri:icon}} style={styles.icon} alt="ayo" defaultSource={logo}/>
  )
}

const styles = StyleSheet.create({
  icon:{
    width:200,
    height:200,
    backgroundColor:"#8fced9"
  }
})