import { View, Text, Pressable, Alert } from "react-native";
import {useState} from 'react'
import { FlatList, TextInput, TouchableHighlight } from "react-native-web";
import { useDispatch, useSelector } from "react-redux";
import { putMoney, takeMoney } from "../store";
import { styles } from "../styles";
export function Main({navigation}){
  let money = useSelector(state=>state.user.money)
  let dispatch = useDispatch()
  let [sum, setSum] = useState(0)
  function handlePutMoney(){
    if(Number(sum) === +sum) dispatch(putMoney(Number(sum)))
    setSum(0)
  }
  function handleGetMoney(){
    if(Number(sum) === +sum) dispatch(takeMoney(Number(sum)))
    setSum(0)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{money}$</Text>
      <TextInput value={sum} onChange={(e)=>{setSum(e.target.value.replace(/[^0-9]/g, ''))}} style={styles.input}/>
      <Pressable onPress={handlePutMoney} style={styles.input}><Text>Put money</Text></Pressable>
      <Pressable onPress={handleGetMoney} style={styles.input}><Text>Get money</Text></Pressable>
    </View>
  )
}