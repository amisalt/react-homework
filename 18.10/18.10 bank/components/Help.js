import { View, Text } from "react-native";
import { styles } from "../styles";
import { useState } from "react";
import { FlatList } from "react-native-web";
export function Help({navigation}){
  let [faq, setFaq] = useState([
    {q:"How to put money on my bank account?", a:'Enter amount of money in input below display of your current sum and press "Put money"'},
    {q:"How to take money from my bank account?", a:'Enter amount of money in input below display of your current sum and press "Get money"'},
    {q:"How to look up my account?", a:'It is in вкладка that has your usename written in it'},
    {q:"How to make atomic bomb в домашних условиях?", a:'idk man'}
  ])
  return (
    <View style={styles.container}>
      <FlatList data={faq} keyExtractor={(item)=>item.q} renderItem={({item})=>(
        <View>
          <Text style={styles.h3}>{item.q}</Text> 
          <Text style={styles.text}>{item.a}</Text>
        </View>
      )} style={{width:"100%"}}/>
    </View>
  )
}