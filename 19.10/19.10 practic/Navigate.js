import { NavigationContainer, useNavigation,  useRoute  } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FlatList, TouchableHighlight, Text } from "react-native-web";
import {useState} from 'react'
import { Posts } from "./screens/Posts";
import { Post } from "./screens/Post";
import { Login } from "./screens/Login";
import { styles } from "./styles";

const Stack = createNativeStackNavigator()
export function Navigate(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{title:"Login", headerShown:false}}/>
        <Stack.Screen name="Posts" component={Posts} options={{title:"Posts", headerTitle:(props)=><Header {...props}/>}}/>
        <Stack.Screen name="Post" component={Post} options={{title:"Post", headerTitle:(props)=><Header {...props}/>}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function Header(){
  let navigation = useNavigation()
  let route = useRoute()
  let [routes, setRoutes] = useState([
    route.name !== 'Posts' ? {name:"Posts",  route:"Posts"} :  1,
    // route.name !== 'Post' ? {name:"Post", route:"Post"} :   1,
    route.name !== 'Login' ? {name:"Log Out", route:"Login"} :   1,
  ].filter(r=>r!==1))
  function redirect(route){
    navigation.navigate(route)
  }
  return (
    <FlatList horizontal={true} data={routes} keyExtractor={(_,index)=>index} renderItem={({item})=>(
    <TouchableHighlight style={{padding:20}} onPress={()=>redirect(item.route)}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableHighlight>)}/>
  )
}