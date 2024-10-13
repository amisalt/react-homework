import { View, Text } from "react-native";
import { Button } from "react-native-web";
import { useSelector } from "react-redux";
import { styles } from "../styles";

export function About({route, navigation}){
  let user = useSelector(state=>state.user.user)
  let money = useSelector(state=>state.user.money)
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{user.name}</Text>
      <Text style={styles.h3}>{money}$</Text>
      <Text style={styles.text}>{user.mail}</Text>
      <Text style={styles.text}>{user.phone}</Text>
      <Text style={styles.text}>{user.address}</Text>
    </View>
  )
}