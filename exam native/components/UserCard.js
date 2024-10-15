import { Image, Text, Pressable, View } from "react-native";
import { styles } from "../styles";
import { MyButton } from "./MyButton";

export function UserCard({user, handleLookProfile, handleDeleteUser}){
  return (
    <View style={styles.userCard}>
      <Image source={{uri:user.avatar}} style={styles.userCardImage}/>
      <Text style={styles.h3}>{user.first_name}</Text>
      <MyButton title="Look Profile" onPress={()=>handleLookProfile(user)}/>
      <MyButton title="Delete User" onPress={()=>handleDeleteUser(user.id)}/>
    </View>
  )
}