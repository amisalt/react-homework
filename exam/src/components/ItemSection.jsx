import React from 'react'
import { useSelector } from 'react-redux'
import { ItemCard } from './ItemCard'
import MyButton from './UI/MyButton'
import "./ItemSection.css"
export function ItemSection() {
  const items = useSelector(state=>state.item.itemsDisplay)
  const role = useSelector(state=>state.auth.user.role)
  return (
    <div className='main'>
      {role === 'admin' && <MyButton>Add Item</MyButton>}
      <div className='mainContent'>
        {items.map((item,index)=><ItemCard index={index} item={item} key={index}/>)}
      </div>
    </div>
  )
}
