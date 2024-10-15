import { useEffect, useState } from "react";
import { Pressable, TextInput, View, Text } from "react-native";
import { styles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, login } from "../store/usersSlice";
import { MyButton } from "../components/MyButton";

export function Login({navigation}){
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let token = useSelector(state=>state.users.user.token)

  useEffect(()=>{
    dispatch(getUsers())
  }, [])

  useEffect(()=>{
    if(token) navigation.navigate("Users")
    setEmail("")
    setPassword("")
  }, [token])

  let dispatch = useDispatch()
  function handleLogin(){
    if(email.trim() !== '' &&  password.trim() !== ''){
      dispatch(login({email, password}))
    }
  }
  return (
    <View style={styles.screenContainerCenter}>
      <View style={styles.form}>
        <Text style={styles.h1}>Users Database</Text>
        <TextInput value={email} placeholder="Email..." onChangeText={setEmail} style={styles.input}/>
        <TextInput value={password} placeholder="Password..." onChangeText={setPassword} style={styles.input}/>
        <MyButton title="Log In" onPress={handleLogin}/>
      </View>
    </View>
  )
}