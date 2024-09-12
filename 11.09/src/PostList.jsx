import React from 'react'
import PostItem from './PostItem'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

export default function PostList({posts, deletePost, postPage}) {
  return (
    <div className='posts'>
      <TransitionGroup className='posts'>
        {posts.length > 0 ? 
        posts.map((post)=><CSSTransition classNames='post' key={post.id} timeout={500} ><PostItem post={post} deletePost={deletePost} postPage={postPage}/></CSSTransition>)
        : <h3>There's no posts. Add one!</h3>}
      </TransitionGroup>  
    </div>
  )
}
