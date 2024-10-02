import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from "./assets/logo.png"
import { Button, TextInput } from 'react-native-web';
import { useState } from 'react';
export default function App() {
  let  [name, setName] = useState("");
  let [counter, setCounter] = useState(1)
  let [phone, setPhone] = useState("")
  let [email, setEmail] = useState("")
  let [show, setShow] = useState(false)
  function handleClick(){
    setCounter(counter+counter)
  }
  return (
    <View style={styles.container}>
    {/* //   <Text style={styles.title}>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Image source={logo} style={styles.image}/>
    //   <Button title={'abobus'} onPress={()=>alert('sdaldaldad')}/>
    //   <TextInput value={name} onChangeText={setName}/> */}
      {/* <View style={styles.f}>
        <Text>f</Text>
      </View>
      <View style={styles.m}>
        <Text>m</Text>
      </View>
      <View style={styles.l}>
        <Button title={counter} onPress={handleClick}/>
      </View> */}
      <View style={styles.header}>
        <Image source={logo} style={styles.image}/>
        <Text style={styles.text}>Yayyy</Text>
      </View>
      <View style={styles.form}>
        <TextInput value={name} onChangeText={setName} placeholder='Name' style={styles.input}/>
        <TextInput value={phone} onChangeText={setPhone} placeholder='Phone number' style={styles.input}/>
        <TextInput value={email} onChangeText={setEmail} placeholder='Email' style={styles.input}/>
        <Button title={'Login'} onPress={()=>setShow(true)}/>
      </View>
      <View style={show ? styles.show : styles.none}>
        <Text>Hello, {name}!</Text>
        <Text>📞{phone}</Text>
        <Text>✉️{email}</Text>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  show:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:3
  },
  none:{
    display:"none"
  },
  header:{
    backgroundColor:"pink",
    width:"100%",
    height:70,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
  },
  image:{
    width:70,
    height:70
  },
  text:{
    fontFamily:"monospace",
    fontSize:20,
  },
  form:{
    width:"100%",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:3,
    padding:5
  },
  input:{
    width:"80%",
    height: 30,
    borderWidth:2,
    borderColor:"pink",
    padding:5,
    borderRadius:5,
    fontSize:18
  },
  // f:{
  //   backgroundColor:"pink",
  //   borderWidth:4,
  //   borderTopLeftRadius:20,
  //   borderTopRightRadius:20,
  //   flex:0.3,
  //   width:100,
  //   justifyContent:"center"
  // },
  // l:{
  //   backgroundColor:"salmon",
  //   borderWidth:4,
  //   borderBottomLeftRadius:20,
  //   borderBottomRightRadius:20,
  //   flex:0.3,
  //   width:100,
  //   justifyContent:"center"
  // },
  // m:{
  //   backgroundColor:"beige",
  //   borderWidth:4,
  //   flex:0.3,
  //   width:100,
  //   justifyContent:"center"
  // },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  // title: {
  //   color:"red"
  // },
  // image:{
  //   width: 100,
  //   height:100
  // }
});
