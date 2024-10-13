import { TextInput, View, Text, Button, Pressable } from "react-native";
import {useState} from 'react'
import { styles } from "../styles";
export function Login({navigation}){
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  function onsubmit(){
    if(email.trim() !== '' && password.trim() !==''){
      console.log(email, password);
      navigation.navigate('Posts')
    }
  }
  return (
    <View style={styles.containerCenter}>
      <Text style={[styles.text, styles.h1]}>Log In</Text>
      <TextInput value={email}  onChangeText={setEmail} placeholder="Email" style={styles.input} />
      <TextInput  value={password} onChangeText={setPassword} placeholder="Password" style={styles.input}/>
      <Pressable onPress={onsubmit} style={styles.input}>
        <Text style={styles.text}>Submit</Text>
      </Pressable>
    </View>
  )
}