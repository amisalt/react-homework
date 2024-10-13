import { StyleSheet, Text, View, Image, Animated, Pressable} from 'react-native';
import { ActivityIndicator, Button, ImageBackground, ProgressBar, ScrollView, Switch, TextInput, TouchableWithoutFeedback, FlatList, SectionList, CheckBox } from 'react-native-web';
import { useState, useRef, useEffect } from 'react';
import { TouchableHighlight } from 'react-native';
import { Provider } from 'react-redux';


export default function App() {
  let [todos, setTodos] = useState([
    {id:1, name:"Todo1", desc:"Desc1", completed:false},
    {id:2, name:"Todo2", desc:"Desc2", completed:true},
    {id:3, name:"Todo3", desc:"Desc3", completed:false},
    {id:4, name:"Todo4", desc:"Desc4", completed:true},
    {id:5, name:"Todo5", desc:"Desc5", completed:false},
  ].sort((a,b)=>{
    if(a.completed && !b.completed) return 1
    if(!a.completed && b.completed) return -1
    return 0
  }))
  let [newTodo, setNewTodo] = useState("")
  let [newTodoDesc, setNewTodoDesc] = useState("")
  function addTodo(){
    if(newTodo.trim() !== "" && newTodoDesc.trim() !== "") setTodos([...todos, {id:todos.length+1, name:newTodo, desc:newTodoDesc}].sort((a,b)=>{
      if(a.completed && !b.completed) return 1
      if(!a.completed && b.completed) return -1
      return 0
    }))
  }
  function deleteTodo(id){
    setTodos(todos.filter(todo=>todo.id!==id).sort((a,b)=>{
      if(a.completed && !b.completed) return 1
      if(!a.completed && b.completed) return -1
      return 0
    }))
  }
  function toggleStatus(id){
    setTodos(todos.map(todo=>{
      if(todo.id===id) return {...todo, completed:!todo.completed}
      return todo
    }).sort((a,b)=>{
      if(a.completed && !b.completed) return 1
      if(!a.completed && b.completed) return -1
      return 0
    }))
  }
  function renderItem({item}){
    return(
    <View style={[styles.todo,  item.completed ? styles.completed : styles.notCompleted]}>
      <Text style={styles.h3}>{item.name}</Text>
      <Text style={styles.text}>{item.desc}</Text>
      <Pressable style={styles.input}  onPress={()=>toggleStatus(item.id)}>
        <Text style={[styles.text, {textAlign:"center"}]}>Complete</Text>
      </Pressable>
      <Pressable style={styles.input}  onPress={()=>deleteTodo(item.id)}>
        <Text style={[styles.text, {textAlign:"center"}]}>Delete</Text>
      </Pressable>
    </View>)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>To-Do List</Text>
      <TextInput placeholder='New To-Do...' onChangeText={setNewTodo} style={styles.input}/>
      <TextInput placeholder='New To-Do description...' onChangeText={setNewTodoDesc} multiline={true} style={styles.input} value={newTodoDesc}/>
      <Pressable style={styles.input} onPress={addTodo}>
        <Text style={[styles.text, {textAlign:"center"}]}>Add To-Do</Text>
      </Pressable>
      <FlatList data={todos} renderItem={renderItem} keyExtractor={item=>item.id} style={{width:"100%"}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dffa9b',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap:5
  },
  h1:{
    fontSize: 40,
    fontWeight:"bold",
    color:"#3c4f0d"
  },
  h3:{
    fontSize: 25,
    fontWeight:"bold",
    color:"#3c4f0d"
  },
  text:{
    fontSize: 20,
    color:"#3c4f0d"
  },
  todo:{
    width:"95%",
    padding:10,
    borderRadius:10,
    backgroundColor:"#f2fcd7",
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    gap:2,
    marginVertical:5,
    borderWidth:2,
    borderColor:"#3c4f0d"
  },
  input:{
    width:"95%",
    alignSelf:"center",
    padding:10,
    paddingHorizontal:10,
    backgroundColor:"#f2fcd7",
    borderRadius:10,
    fontSize:20,
    borderWidth:1,
    borderColor:"#3c4f0d",
    color:"#3c4f0d"
  },
  completed:{
    opacity:0.5
  },
  notCompleted:{
    opacity:1
  }
});