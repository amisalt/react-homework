import React, {useEffect, useMemo} from 'react'
import { useState } from 'react'
import PostList from '../PostList'
import MyButton from '../UI/MyButton'
import MyInput from '../UI/MyInput'
import MySelect from '../UI/MySelect'
import { usePosts } from '../hook/usePosts'
import axios from  'axios'
import MyLoader from '../UI/MyLoader'
const url = "https://jsonplaceholder.typicode.com/posts"

export default function App() {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  function addPost(){
    setPosts(()=>{
      const newPosts = [...posts]
      newPosts.push({
        id:posts.length+1,
        title:`${title}`,
        body:`${body}`
      })
      setTitle("")
      setBody("")
      return newPosts
    })
  }
  function deletePost(id){
    setPosts(posts.filter(post => post.id !== id))
  }
  const [loading,setLoading] = useState(false)
  // empty array - create, mount
  // filled array - update
  // having return func() in func - unmount, destroy
  useEffect(()=>{
    setLoading(true)
    async function getPostsFromURL(){
      setTimeout(async ()=>{
        const response = await axios.get(url)
        setPosts(response.data)
        setLoading(false)
      },1000)
    }
    getPostsFromURL()
  }, [])
  useEffect(()=>{
    console.log(loading);
  }, [loading])
  const [sortOption, setSortOption] = useState('none')
  const [filterOption, setFilterOption] = useState('')
  const filteredPosts = usePosts(posts, sortOption, filterOption)
  
  return (
    <div className='page'>
      <MyInput type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title'/>
      <MyInput type="text" value={body} onChange={(e)=>setBody(e.target.value)} placeholder="Body"/>
      <MyButton onClick={addPost}>Add Post</MyButton>
      <h1>POSTS</h1>
      <MySelect default_={['none','Sorting']} options={[['title','Sort by Title'],['body','Sort by Description']]} value={sortOption} onChange={(e)=>setSortOption(e.target.value)}/>
      <MyInput type="text" value={filterOption} onChange={(e)=>setFilterOption(e.target.value)} placeholder={'Find...'}/>
      {loading ? <div className='loader-box'><MyLoader/></div>: <PostList posts={filteredPosts} deletePost={deletePost}/>}
    </div>
  )
}
