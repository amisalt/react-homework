import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./screens/Login";
import { Users } from "./screens/Users";
import { User } from "./screens/User";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, Pressable, Text } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "./store/usersSlice";
import { AddUser } from "./screens/AddUser";

const Stack = createNativeStackNavigator()
export function Navigate(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:"#e9d8a5"}}}>
        <Stack.Screen name="Login" component={Login} options={{title:"Log In", headerShown:false}}/>
        <Stack.Screen name="Users" component={Users} options={{title:"Users", headerTitle:(props)=><Header {...props}/>, headerLeft:()=>null}}/>
        <Stack.Screen name="User" component={User} options={{title:"User",  headerTitle:(props)=><Header {...props}/>}}/>
        <Stack.Screen name="AddForm" component={AddUser} options={{title:"Add User",  headerTitle:(props)=><Header {...props}/>}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function Header(){
  let navigation = useNavigation()
  let route = useRoute()
  let dispatch = useDispatch()
  let [routes, setRoutes] = useState([
    route.name !== 'Login' ? {name:"Log Out",  route:"Login"} :  1,
    route.name !== 'Users' ? {name:"Users", route:"Users"} :   1,
    route.name !== 'AddForm' ? {name:"Add User", route:"AddForm"} : 1
  ].filter(r=>r!==1))
  function redirect(route){
    if(route === 'Login') dispatch(logOut())
    navigation.navigate(route)
  }
  return (
    <FlatList horizontal={true} data={routes} keyExtractor={(_,index)=>index} renderItem={({item})=>
    <Pressable style={{padding:20}} onPress={()=>redirect(item.route)}>
      <Text style={styles.text}>{item.name}</Text>
    </Pressable>}/>
  )
}