import { styles } from "../styles"
import { Pressable, Text } from "react-native"

export function MyButton({onPress, title}){
  return (
    <Pressable style={styles.input} onPress={onPress}>
      <Text style={[styles.text,{textAlign:"center"}]}>{title}</Text>
    </Pressable>
  )
}