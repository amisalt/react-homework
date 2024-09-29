import React, { useEffect, useMemo, useState } from 'react'
import MyInput from "./UI/MyInput"
import MyButton from "./UI/MyButton"
import MyLoader from "./UI/MyLoader"
import { TodoItem } from './TodoItem'
import {TodoHistoryItem} from "./TodoHistoryItem"
export function App() {
  const [todos, setTodos] = useState([])
  const [deletedTodos, setDeletedTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")
  const [getting, setGetting] = useState(false)
  const [loading, setLoading] = useState(false)
  const getTodos = ()=>{
    setGetting(true)
    setTimeout(()=>{
      const storedTodos = JSON.parse(localStorage.getItem('todos')) || []
      setTodos(storedTodos)
      setGetting(false)
    }, 4000)
  }
  const loadTodos = (todolist)=>{
    setLoading(true)
    setTimeout(()=>{
      localStorage.setItem('todos',JSON.stringify(todolist))
      setLoading(false)
    }, 2000)
  }
  const getDeletedTodos = ()=>{
    setGetting(true)
    setTimeout(()=>{
      const storedTodos = JSON.parse(localStorage.getItem('deletedTodos')) || []
      setDeletedTodos(storedTodos)
      setGetting(false)
    }, 4000)
  }
  const loadDeletedTodos = (todoList)=>{
    setLoading(true)
    setTimeout(()=>{
      localStorage.setItem('deletedTodos',JSON.stringify(todoList))
      setLoading(false)
    }, 2000)
  }
  useEffect(()=>{
    getTodos()
    getDeletedTodos()
  },[])
  const addTodo = ()=>{
    if(newTodo.trim() === '') return
    const newTodos = [...todos, {id:Date.now(), todo:newTodo, completed:false}]
    setTodos(newTodos)
    loadTodos(newTodos)
    setNewTodo("")
  }
  const toggleStatus = (index)=>{
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
    loadTodos(newTodos)
  }
  const changeTodo = (index, todo)=>{
    const newTodos = [...todos]
    newTodos[index].todo = todo
    setTodos(newTodos)
    loadTodos(newTodos)
  }
  const deleteTodo = (id)=>{
    const newTodos = [...todos].filter(todo => todo.id !== id)
    const todo = [...todos].filter(todo => todo.id === id)
    console.log(todo);
    
    const newDeletedTodos = [...deletedTodos, ...todo]
    console.log(deletedTodos);
    
    setTodos(newTodos)
    loadTodos(newTodos)
    setDeletedTodos(newDeletedTodos)
    loadDeletedTodos(newDeletedTodos)
  }
  const deleteTodoPermanently = (id)=>{
    const newDeletedTodos = [...deletedTodos].filter(todo => todo.id !== id)
    setDeletedTodos(newDeletedTodos)
    loadDeletedTodos(newDeletedTodos)
  }
  const restoreTodo = (todo)=>{
    const newTodos = [...todos, todo]
    const newDeletedTodos = [...deletedTodos].filter(todoo => todoo.id !== todo.id)
    setDeletedTodos(newDeletedTodos)
    setTodos(newTodos)
    loadDeletedTodos(newDeletedTodos)
    loadTodos(newTodos)
  }
  return (
    <div className='container' style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"99vw", minHeight:"100vh"}}>
      <div className="todoList">
        <h1>TODOLIST</h1>
        <MyInput type="text" value={newTodo} onChange = {(e)=>setNewTodo(e.target.value)}/>
        <MyButton onClick={addTodo}>Add</MyButton>
        <ul>
          {getting ? (
            <div style={{width:"100px", height:"100px"}}>
              <MyLoader/>
            </div>
          ) :
          (
            <>{todos.length > 0 ? (
            <>{todos.map((todo,index)=>(<li><TodoItem {...todo} key={todo.id} deleteTodo={deleteTodo} toggleStatus={toggleStatus} index={index} changeTodo={changeTodo} /></li>))}</>) : (
              <h3>No posts</h3>
            )}</>
          )
          }
        </ul>
      </div>
      <div className="sidebar">
        {getting ? (
          <div style={{width:"100px", height:"100px"}}>
            <MyLoader/>
          </div>
        ) :
        (
          <div>
            {deletedTodos.length > 0 ? (
            <>{deletedTodos.map(todo=>(<li><TodoHistoryItem {...todo} key={todo.id} deleteTodo={deleteTodoPermanently} restoreTodo={restoreTodo}/></li>))}</>):(
              <h3>No history</h3>
            )}
            </div>
        )
        }
      </div>
      {loading && (<h3 style={{position:"fixed", bottom:"0px",right:"0px"}}>Loading your data in DB...</h3>)}
    </div>
  )
}
