import { View, Image, Text } from "react-native";
import { styles } from "../styles";

export function User({route}){
  let {first_name, last_name, email, avatar} = route.params
  return (
    <View style={styles.screenContainerCenter}>
      <Image source={{uri:avatar}} style={styles.userScreenImage}/>
      <Text style={[styles.h1, styles.textAlignCenter]}>{first_name} {last_name}</Text>
      <Text style={[styles.h3, styles.textAlignCenter]}>{email}</Text>
    </View>
  )
}