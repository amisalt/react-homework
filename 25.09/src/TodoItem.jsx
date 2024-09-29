import React, { useEffect, useState } from 'react'
import MyButton from './UI/MyButton'
import MyInput from './UI/MyInput';

export function TodoItem({todo,completed, toggleStatus, deleteTodo, id, index, changeTodo}) {
    const [newTodo, setNewTodo] = useState(todo)
    const [toggleEdit, settoggleEdit] = useState(false)
  return (
    <div className={completed?"completed todo":"todo"}>
        {!toggleEdit ? (
            <h3 onClick={()=>settoggleEdit(true)}>{newTodo}</h3>
        ) : (
            <MyInput type="text" onChange={(e)=>setNewTodo(e.target.value)} value={newTodo} onKeyDown={(e)=>{if(e.key=="Enter"){changeTodo(index, newTodo);settoggleEdit(false)}}}/>
        )}
        <MyButton onClick={()=>toggleStatus(index)}>Toggle</MyButton>
        <MyButton onClick={()=>deleteTodo(id)}>Delete</MyButton>
    </div>
  )
}
