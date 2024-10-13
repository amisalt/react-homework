import axios from "axios";
import {useState, useEffect} from 'react'
import { Text } from "react-native-web";
import { styles } from "../styles";

export  function PostsLoader({onLoad}){
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(null)
  useEffect(()=>{
    const fetchPosts = async()=>{
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>res.data)
        onLoad(res)
      }
      catch(e){
        setError(e)
        onLoad([])
      }
      finally{
        setLoading(false)
      }
    }
    fetchPosts()
  }, [onLoad])
  if(loading) return (<Text style={styles.text}>Loading...</Text>)
  if(error) return (<Text style={styles.text}>{error.message}</Text>)
  return null
}