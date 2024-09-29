import React from 'react'
import MyButton from './UI/MyButton'

export function TodoHistoryItem({todo,completed, deleteTodo, id, restoreTodo}) {
  return (
    <div>
        <h3>{todo}</h3>
        <MyButton onClick={()=>restoreTodo({todo, completed, id})}>Restore</MyButton>
        <MyButton onClick={()=>deleteTodo(id)}>Delete</MyButton>
    </div>
  )
}
