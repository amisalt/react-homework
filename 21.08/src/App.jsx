// import React from 'react'
// import "./App.css"
// import Child from "./Child.jsx"
// import User from "./User.jsx"

// export default function App() {
//   const string = "sdksld"
//   const func = (val)=>{
//     return val+"!!!"
//   }
//   function reverse(val){
//     return val.split("").reverse().join("")
//   }
//   function dateEven(){
//     const date = new Date(2024, 7, 14, 19, 19, 19, 19)
//     const weekdays = ["Mon",'Tue','Wed','Thu','Fri',"Sat",'Sun']
//     if(date.getDate()%2 === 0) return [date.getMonth()+1, date.getFullYear()]
//     else return [weekdays[date.getDay()-1], date.getDate()]
//   }
//   const bool = false
//   const users = [
//     {id:1, name:'ayo1', age:1},
//     {id:2, name:'ayo2', age:2},
//     {id:3, name:'ayo3', age:3},
//     {id:4, name:'ayo4', age:4},
//     {id:5, name:'ayo5', age:5},
//     {id:6, name:'ayo6', age:6},
//     {id:7, name:'ayo7', age:7},
//     {id:8, name:'ayo8', age:8},
//     {id:9, name:'ayo9', age:9},
//     {id:10, name:'ayo10', age:10},
//   ]
//   return (
//     <div>
//       <p>{string}</p>
//       <p>{func(string)}</p>
//       <p>{reverse(string)}</p>
//       <p>{dateEven()[0]}.{dateEven()[1]}</p>
//       {bool && (<p>alo</p>)}
//       {bool ? (<p>yes</p>) : (<p>no</p>)}
//       <Child str={string} message='idk man' />
//       {users.map((user)=><User user={user} key={user.id}/>)}
//     </div>
//   )
// }
// import React from 'react'
// import Section from "./Section.jsx"
// import { useState } from 'react'
// import "./App.css"

// export default function App() {
//   const items = [
//     {id:1, category:"clothes", name:"item1", price:Math.ceil(Math.random()*1000)},
//     {id:2, category:"clothes", name:"item2", price:Math.ceil(Math.random()*1000)},
//     {id:3, category:"clothes", name:"item3", price:Math.ceil(Math.random()*1000)},
//     {id:4, category:"clothes", name:"item4", price:Math.ceil(Math.random()*1000)},
//     {id:5, category:"clothes", name:"item5", price:Math.ceil(Math.random()*1000)},
//     {id:6, category:"shoes", name:"item6", price:Math.ceil(Math.random()*1000)},
//     {id:7, category:"shoes", name:"item7", price:Math.ceil(Math.random()*1000)},
//     {id:8, category:"shoes", name:"item8", price:Math.ceil(Math.random()*1000)},
//     {id:9, category:"shoes", name:"item9", price:Math.ceil(Math.random()*1000)},
//     {id:10, category:"shoes", name:"item10", price:Math.ceil(Math.random()*1000)},
//     {id:11, category:"accessories", name:"item11", price:Math.ceil(Math.random()*1000)},
//     {id:12, category:"accessories", name:"item12", price:Math.ceil(Math.random()*1000)},
//     {id:13, category:"accessories", name:"item13", price:Math.ceil(Math.random()*1000)},
//     {id:14, category:"accessories", name:"item14", price:Math.ceil(Math.random()*1000)},
//     {id:15, category:"accessories", name:"item15", price:Math.ceil(Math.random()*1000)},
//     {id:16, category:"makeup", name:"item16", price:Math.ceil(Math.random()*1000)},
//     {id:17, category:"makeup", name:"item17", price:Math.ceil(Math.random()*1000)},
//     {id:18, category:"makeup", name:"item18", price:Math.ceil(Math.random()*1000)},
//     {id:19, category:"makeup", name:"item19", price:Math.ceil(Math.random()*1000)},
//     {id:20, category:"makeup", name:"item20", price:Math.ceil(Math.random()*1000)},
//   ]
//   const [currentCategory, setCategory] = useState("clothes") 
//   // function setCategory(cat){currentCategory = cat}
//   return (
//     <div className='main'>
//       <header>
//         <button onClick={()=>setCategory((currentCategory)=>currentCategory='clothes')}>Clothes</button>
//         <button onClick={()=>setCategory((currentCategory)=>currentCategory='shoes')}>Shoes</button>
//         <button onClick={()=>setCategory((currentCategory)=>currentCategory='accessories')}>Accessories</button>
//         <button onClick={()=>setCategory((currentCategory)=>currentCategory='makeup')}>Makeup</button>
//       </header>
//       <main>
//         <Section category={currentCategory} items={items.filter(item=>item.category===currentCategory)}/>
//       </main>
//     </div>
//   )
// }
import React from 'react'
import Header from './Header.jsx'
import Library from './Library.jsx'
import Footer from './Footer.jsx'

export default function App() {
  const bookList = [
    {id:1, name:"Book1", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:2, name:"Book2", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:3, name:"Book3", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:4, name:"Book4", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:5, name:"Book5", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:6, name:"Book6", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:7, name:"Book7", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:8, name:"Book8", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:9, name:"Book9", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:10, name:"Book10", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:11, name:"Book11", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:12, name:"Book12", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:13, name:"Book13", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:14, name:"Book14", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:15, name:"Book15", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:16, name:"Book16", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:17, name:"Book17", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:18, name:"Book18", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:19, name:"Book19", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
    {id:20, name:"Book20", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt libero aut blanditiis iste incidunt quas, deserunt excepturi accusamus nobis.", img:"https://th.bing.com/th/id/OIP.215d_s0pA2jB7NJtSJQU5wHaKZ?rs=1&pid=ImgDetMain"},
  ]
  return (
    <div className="lib">
      <Header/>
      <Library bookList={bookList} />
      <Footer/>
    </div>
  )
}
