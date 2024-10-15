import { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "../styles";
import { MyButton } from "../components/MyButton";
import { useDispatch } from "react-redux";
import { addUser } from "../store/usersSlice";

export function AddUser(){
  let dispatch = useDispatch()
  let [email, setEmail] = useState("")
  let [first_name, setFirstName] = useState("")
  let [last_name, setLastName] = useState("")
  let avatar = "https://reqres.in/img/faces/1-image.jpg"
  function handleAddUser(){
    if(email.trim() !== '' &&  first_name.trim() !== '' && last_name.trim() !== ''){
      dispatch(addUser({email, first_name, last_name, avatar}))
    }
  }
  return (
    <View style={styles.screenContainerCenter}>
      <View style={styles.form}>
        <Text style={styles.h1}>Add User Form</Text>
        <TextInput value={email} placeholder="Email..." onChangeText={setEmail} style={styles.input}/>
        <TextInput value={first_name} placeholder="First Name..." onChangeText={setFirstName} style={styles.input}/>
        <TextInput value={last_name} placeholder="Last Name..." onChangeText={setLastName} style={styles.input}/>
        <MyButton title="Add User" onPress={handleAddUser}/>
      </View>
    </View>
  )
}