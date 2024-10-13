import { NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { View, Text, FlatList, TouchableHighlight, TouchableWithoutFeedback } from "react-native-web";
import {useState} from 'react'
import { useSelector } from "react-redux";
import { Help } from "./components/Help";
import { styles } from "./styles";
import { Pressable } from "react-native";

const Stack = createNativeStackNavigator()
export function Navigate(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#C9E4CA' }}}>
        <Stack.Screen name="Bank" component={Main} options={{title:"About", headerTitle:(props)=><Header {...props}/>}}/>
        <Stack.Screen name="Help" component={Help} options={{title:"Main", headerTitle:(props)=><Header {...props}/>}}/>
        <Stack.Screen name="User" component={About} options={{title:"Main", headerTitle:(props)=><Header {...props}/>}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function Header(){
  let username = useSelector(state=>state.user.user.name)
  let navigation = useNavigation()
  let route = useRoute()
  let [routes, setRoutes] = useState([
    route.name !== 'Bank' ? {name:"Ваш счет",  route:"Bank"} :  1,
    route.name !== 'Help' ? {name:"Помощь", route:"Help"} :   1,
    route.name !== 'User' ? {name:username, route:"User"} :   1,
  ].filter(r=>r!==1))
  function redirect(route){
    navigation.navigate(route)
  }
  return (
    <FlatList horizontal={true} data={routes} keyExtractor={(_,index)=>index} renderItem={({item})=><Pressable style={{padding:20}} onPress={()=>redirect(item.route)}><Text style={styles.text}>{item.name}</Text></Pressable>}/>
  )
}