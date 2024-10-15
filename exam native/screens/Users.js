import { FlatList, TextInput, View } from "react-native";
import { styles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { UserCard } from "../components/UserCard";
import { deleteUser } from "../store/usersSlice";
import { useMemo, useState } from "react";

export function Users({navigation}){
  let users = useSelector(state=>state.users.users)
  let [search, setSearch] = useState("")
  let dispatch = useDispatch()
  function handleLookProfile(user){
    navigation.navigate("User", user)
  }
  function handleDeleteUser(id){
    dispatch(deleteUser(id))
  }
  let usersDisplay = useMemo(()=>{
    if(search.trim() !== ''){
      return users.filter(({first_name})=>{
        return first_name.toLowerCase().includes(search.toLowerCase())
      })
    }
    return users
  }, [users, search])
  return (
    <View style={styles.screenContainerStart}>
      <TextInput value={search}  onChangeText={setSearch} placeholder="Search By Name" style={[styles.input, styles.idk]} />
      <FlatList style={{width:"100%"}} contentContainerStyle={{flexDirection:"row", flexWrap:"wrap", alignItems:"center", justifyContent:"center", gap:10}} data={usersDisplay} keyExtractor={item=>item.id} renderItem={({item})=><UserCard handleLookProfile={handleLookProfile} user={item} handleDeleteUser={handleDeleteUser}/>}/>
    </View>
  )
}