import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, addToCart } from '../app/reducers/itemReducer'
import MyButton from './UI/MyButton'
export function ItemCard({index, item}) {
  const dispatch = useDispatch()
  const role = useSelector(state=>state.auth.user.role)
  function handleDeleteItem(index){
    dispatch(deleteItem(index))
  }
  function handleAddtoCart(item){
    dispatch(addToCart(item))
  }
  return (
    <div className='itemCard'>
      <img src={item.image}/>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Rating: {item.rating}</p>
      {role==='admin'  && <MyButton onClick={()=>handleDeleteItem(index)}>Delete Item</MyButton>}
      <section>
        {role!=='guest' && <MyButton onClick={()=>handleAddtoCart(item)}>Add to Cart</MyButton>}
        <p>{item.price} tenge</p>
      </section>
    </div>
  )
}
