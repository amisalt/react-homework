import { View, Text, FlatList, TextInput, Button } from "react-native-web"
import {useState,useEffect} from 'react'
import { styles } from "../styles"
import { Pressable } from "react-native"
import axios from "axios"
export function Post({route}){
  const {body, title, id} = route.params
  console.log(id);
  
  let [comments, setCpmments] = useState([])
  let [newComment, setNewComment] = useState("")
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(null)  
  useEffect(()=>{
    const fetchPosts = async()=>{
      try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res=>res.data)
        setCpmments(res)
      }
      catch(e){
        setError(e)
      }
      finally{
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  function addComment(){
    if(newComment.trim() !== ''){
      const comment={
        body:newComment,
        id:Date.now(),
        myComm:true
      }
      setNewComment("")
      setCpmments([...comments,comment])
    }
  }
  function deleteComment(id){
    setCpmments(comments.filter(comment => comment.id !== id))
  }
  return (
    <View style={styles.containerStart}>
      <View style={styles.post}>
        <Text style={styles.h1}>{title}</Text>
        <Text style={styles.text}>{body}</Text>
      </View>
      <FlatList data={comments} keyExtractor={comm=>comm.id} renderItem={(comm)=>(
        <View style={styles.post}>
          {/* <Text>{comm.name}</Text>   */}
          <Text style={styles.text}>{comm.item.body}</Text>
          {comm.item.myComm && <Pressable style={styles.input} onPress={()=>deleteComment(comm.item.id)}>
            <Text style={styles.text}>Delete Comment</Text>
            </Pressable>}
        </View>
      )} style={{width:"100%"}}/>
      <TextInput value={newComment} onChangeText={setNewComment} placeholder="Type comment..." style={styles.input}/>
      <Pressable style={styles.input} onPress={addComment}>
        <Text style={styles.text}>Post Comment</Text>
      </Pressable>
    </View>
  )
}