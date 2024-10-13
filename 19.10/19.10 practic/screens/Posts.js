import { FlatList, View, Text, TouchableOpacity } from "react-native-web";
import { PostsLoader } from "../api/getPost";
import {useState} from 'react'
import { styles } from "../styles";
export function Posts({navigation}){
  let [posts, setPosts] = useState([])
  return (
    <View style={styles.containerStart}>
      <PostsLoader onLoad={setPosts}/>
      <FlatList data={posts} keyExtractor={item=>item.id.toString()} renderItem={({item})=><TouchableOpacity onPress={()=>navigation.navigate('Post',item)} style={styles.post}>
        <Text style={styles.h3}>{item.title}</Text>
        <Text style={styles.text}>{item.body}</Text>
      </TouchableOpacity>} style={{width:"100%"}}/>
      {/* <Text>{JSON.stringify(posts)}</Text> */}
    </View>
  )
}