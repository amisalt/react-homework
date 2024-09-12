import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MyLoader from '../UI/MyLoader'
import PostItem from '../PostItem'
import PostList from '../PostList'
const url = "https://jsonplaceholder.typicode.com/posts"

export default function PostPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        async function getPost(id) {
            setTimeout(async ()=>{
                const response = await axios.get(url+`/${id}`)
                setPost(response.data)
                const responseComments = await axios.get(url+`/${id}/comments`)
                setComments(responseComments.data)
                setLoading(false)
            }, 1000)
        }
        getPost(params.postId)
    }, [])
    function deleteComment(id){
        setComments(comments.filter(com=>com.id!==id))
    }
  return (
    <div className='page'>
      {loading ? <div className='loader-box'><MyLoader/></div>: (
        <div className="posts">
            <PostItem post={post} className='postItem-main' postPage={true}/>
            <h2>Comments:</h2>
            <PostList posts={comments} postPage={true} deletePost={deleteComment}/>
        </div>
      )}
    </div>
  )
}
