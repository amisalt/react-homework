import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../app/reducers/itemReducer'
import MyButton from './UI/MyButton'
export function CartModal({setModal}) {
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.item.cart)
  function handleAddCart(item){
    dispatch(addToCart(item))
  }
  function handleRemoveFromCart(index){
    dispatch(removeFromCart(index))
  }
  const totalSum = useMemo(()=>{
    let sum = 0
    for(let pos of cart){
      sum += pos.price*pos.quantity
    }
    return sum
  }, [cart])
  function makeOrder(){
    alert(`You made order on ${totalSum} tenge`)
  }
  return (
    <div className='modal'>
      <h1>Cart</h1>
      <ul>
        {
          cart.map((item,index)=>(
            <li key={item.id}>
              <p>{item.name}</p>
              <section>
                <p>{item.price}</p>
                <section>
                  <MyButton onClick={()=>handleRemoveFromCart(index)}>-</MyButton>
                  <p>{item.quantity}</p>
                  <MyButton onClick={()=>handleAddCart(item)}>+</MyButton>
                </section>
              </section>
            </li>
          ))
        }
      </ul>
      <section>
        <h3>{totalSum} tenge</h3>
        <MyButton onClick={makeOrder}>Order</MyButton>
      </section>
      <MyButton onClick={()=>setModal(false)}>Close Window</MyButton>
    </div>
  )
}
