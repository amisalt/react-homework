import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text:{
    fontSize: 20,
    color:"#006275",
    fontFamily:"monospace"
  },
  h3:{
    fontSize: 30,
    fontWeight:"bold",
    color:"#006275",
    fontFamily:"monospace",
    marginVertical:5,
    width:"95%"
  },
  h1:{
    fontSize: 40,
    fontWeight:"bold",
    color:"#006275",
    fontFamily:"monospace",
    marginVertical:7,
    width:"95%"
  },
  input:{
    width:"95%",
    alignSelf:"center",
    padding:10,
    paddingHorizontal:13,
    borderWidth:2,
    borderColor:"#006275",
    backgroundColor:"#e9d8a5",
    color:"#006275",
    fontSize:20,
    fontFamily:"monospace"
  },
  idk:{
    marginVertical:5
  },
  textAlignCenter:{
    textAlign:"center"
  },
  userCard:{
    width:"90%",
    padding:10,
    alignSelf:"center",
    gap:3,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:3,
    borderColor:"#006275",
    marginVertical:5,
    width:325
  },
  userCardImage:{
    width:280,
    height:280,
    backgroundColor:"#93d2bd"
  },
  userScreenImage:{
    width:322,
    height:322,
    backgroundColor:"#93d2bd"
  },
  form:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    maxWidth:320
  },
  screenContainerStart:{
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#93d2bd',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap:10
  },
  screenContainerCenter:{
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#93d2bd',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10
  }
})