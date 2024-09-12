// import React from 'react'
// import { useState } from 'react'

// export default function App() {
//   const [list, setList] = useState(['qw','qqwe','q'])
//   function deleteItem(index){
//     setList(()=>{
//       const newList = [...list]
//       newList.splice(index, 1)
//       return newList
//     })
//   }
//   function addQwe(){
//     setList(()=>{
//       const newList = [...list]
//       newList.push('qwe')
//       return newList
//     })
//   }
//   return (
//     <div>
//       {list.map((string, index)=>(<p key={index}>{string} <button onClick={()=>deleteItem(index)}>delete</button></p>))}
//       <button onClick={addQwe}>Add qwe</button>
//     </div>
//   )
// }



import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter'
import { AuthContext } from './context'
export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [users, setUsers] = useState([{login:"admin", password:"kek"}])
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('token')) === true){
      setIsAuth(true)
    }
  }, [])
  return (
    <div className='main'>
      <AuthContext.Provider value={{isAuth, setIsAuth, users, setUsers}}>
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  )
}



// - - - - - - - - - - - - - - - - - - - - - - - - - HOMEWORKKK - - - - - - - - - - - - - - - - - - - - - - - - -
// import React from 'react'
// import { useState } from 'react'
// import { useRef } from 'react'
// import People from './People'

// export default function App() {
//   const [students, setStudents] = useState([
//     {name:"Pupa Zalupa1", age:21, subject:"REACT 20", phone:"+77079908291", email:"pupaZalupa1@gmail.com", id:0},
//     {name:"Pupa Zalupa2", age:22, subject:"REACT 20", phone:"+77079908292", email:"pupaZalupa2@gmail.com", id:1},
//     {name:"Pupa Zalupa3", age:23, subject:"REACT 20", phone:"+77079908293", email:"pupaZalupa3@gmail.com", id:2},
//   ])
//   const [teachers, setTeachers] = useState([
//     {name:"Zalupa Pupa1", age:21, subject: "REACT", phone:"+77079908291", email:"zalupaPupa1@gmail.com", id:0},
//     {name:"Zalupa Pupa2", age:22, subject: "REACT", phone:"+77079908292", email:"zalupaPupa2@gmail.com", id:1},
//     {name:"Zalupa Pupa4", age:24, subject: "REACT", phone:"+77079908294", email:"zalupaPupa4@gmail.com", id:2},
//   ])
//   const teachersRef = useRef(false)
//   const studentsRef = useRef(true)
//   return (
//     <div className='parent'>
//       <section>
//         <span>
//           <input type="radio" name="section" id="students" ref={studentsRef}/>
//           <label htmlFor="students">Students</label>
//         </span>
//         <span>
//           <input type="radio" name="section" id="teachers" ref={teachersRef}/>
//           <label htmlFor="teachers">Teachers</label>
//         </span>
//       </section>
//       {/* {studentsRef.current.value ?  : teachersRef.current.value ?  : (<div className='main'>Oopsie!</div>)} */}
//       {teachersRef.current.value && <People people={teachers} setPeople={setTeachers}/>}
//       {studentsRef.current.value && <People people={students} setPeople={setStudents}/>}
//     </div>
//   )
// }


