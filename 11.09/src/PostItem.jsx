import React from 'react'
import MyButton from './UI/MyButton'
import {useNavigate} from 'react-router-dom'

export default function PostItem({post, deletePost, className, postPage}) {
  const navigate = useNavigate()
  function openPost(id){
    navigate(`/posts/${id}`)
  }
  return (
    <div className={`postItem ${className}`}>
      <h3>{post.title ? post.title : post.name}</h3>
      {postPage && (<p>{post.email}</p>)}
      <p>{post.body}</p>
      {!postPage && <MyButton onClick={()=>openPost(post.id)}>Open</MyButton>}
      {deletePost && <MyButton onClick={()=>deletePost(post.id)}>Delete {postPage?'Comment':'Post'}</MyButton>}
    </div>
  )
}
