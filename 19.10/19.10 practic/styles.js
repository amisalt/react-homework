import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerCenter:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    gap:10,
    backgroundColor:"#d3f78f"
  },
  containerStart:{
    flex:1,
    alignItems:"center",
    justifyContent:"flex-start",
    gap:10,
    backgroundColor:"#d3f78f"
  },
  text:{
    fontFamily:"monospace",
    fontSize:20,
  },
  h1:{
    fontSize:30,
    fontWeight:"bold"
  },
  h3:{
    fontSize:25,
    fontWeight:"bold",
  },
  input:{
    borderColor:"black",
    padding:7,
    borderWidth:1,
    paddingHorizontal:10,
    backgroundColor:"#f6faf0",
    fontFamily:"monospace",
    fontSize:20
  },
  post:{
    margin:10,
    padding:10,
    backgroundColor:"#f6faf0",
    gap:4
  }
})