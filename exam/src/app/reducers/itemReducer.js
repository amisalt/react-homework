import { createSlice } from "@reduxjs/toolkit";

function sortItems(items){
  return items.sort((a, b) => a.rating - b.rating)
}

const itemSlice = createSlice({
  name:"item",
  initialState:{
    items:[
      {
        id:Date.now(),
        name:"Pepperoni",
        description:"Just ordibnary pepperoni",
        price:2000,
        rating:4.5,
        image:"https://image.similarpng.com/very-thumbnail/2022/03/Pepperoni-Pizza-on-transparent-background-PNG.png"
      },
      {
        id: 1,
        name: "Margherita",
        description: "Classic pizza with fresh mozzarella, tomatoes, and basil leaves.",
        price: 8.99*500,
        image: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png',
        rating: Math.round(Math.random()*10)
      },
      {
        id: 2,
        name: "Pepperoni",
        description: "A delicious pizza topped with spicy pepperoni, mozzarella, and tomato sauce.",
        price: 9.99*500,
        image: 'https://png.pngtree.com/png-clipart/20230928/original/pngtree-pepperoni-pizza-isolated-with-clipping-path-png-image_13007895.png',
        rating: Math.round(Math.random()*10)
      },
      {
        id: 3,
        name: "BBQ Chicken",
        description: "Pizza topped with BBQ sauce, grilled chicken, red onions, and cilantro.",
        price: 10.99*500,
        image: 'https://static.vecteezy.com/system/resources/previews/036/497/987/non_2x/ai-generated-savoring-the-flavorful-layers-of-bbq-chicken-pizza-on-transparent-background-free-png.png',
        rating: Math.round(Math.random()*10)
      },
      {
        id: 4,
        name: "Vegetarian",
        description: "A healthy choice with fresh bell peppers, mushrooms, onions, olives, and spinach.",
        price: 9.49*500,
        image: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png',
        rating: Math.round(Math.random()*10)
      },
      {
        id: 5,
        name: "Four Cheese",
        description: "A rich blend of mozzarella, cheddar, parmesan, and gorgonzola cheeses.",
        price: 10.49*500,
        image: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png',
        rating: Math.round(Math.random()*10)
      },
      {
        id: 6,
        name: "Hawaiian",
        description: "A tropical delight with ham, pineapple, mozzarella, and tomato sauce.",
        price: 9.79*500,
        image: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png',
        rating: Math.round(Math.random()*10)
      },
      {
        id: 7,
        name: "Meat Lover's",
        description: "Loaded with pepperoni, sausage, bacon, ham, and beef.",
        price: 11.49*500,
        image: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png',
        rating: Math.round(Math.random()*10)
      },
      {
        id: 8,
        name: "Buffalo Chicken",
        description: "Spicy buffalo chicken with mozzarella, blue cheese crumbles, and ranch dressing.",
        price: 10.99*500,
        image: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png',
        rating: Math.round(Math.random()*10)
      },
      {
        id: 9,
        name: "Four Cheese",
        description: "A rich blend of mozzarella, cheddar, parmesan, and gorgonzola cheeses.",
        price: 10.49*500,
        image: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png',
        rating: Math.round(Math.random()*10)
      },
      {
        id: 10,
        name: "Hawaiian",
        description: "A tropical delight with ham, pineapple, mozzarella, and tomato sauce.",
        price: 9.79*500,
        image: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png',
        rating: Math.round(Math.random()*10)
      },
      {
        id: 11,
        name: "Meat Lover's",
        description: "Loaded with pepperoni, sausage, bacon, ham, and beef.",
        price: 11.49*500,
        image: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png',
        rating: Math.round(Math.random()*10)
      },
      {
        id: 12,
        name: "Buffalo Chicken",
        description: "Spicy buffalo chicken with mozzarella, blue cheese crumbles, and ranch dressing.",
        price: 10.99*500,
        image: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png',
        rating: Math.round(Math.random()*10)
      }
      
    ],
    itemsDisplay:[
    ],
    cart:[
    ]
  },
  reducers:{
    filterItems:(state,action)=>{
      state.itemsDisplay = state.items.filter(item=>item.name.includes(action.payload))
      console.log(state.itemsDisplay);
      
    },
    addToCart:(state,action)=>{
      let position = state.cart.findIndex((item)=>item.id === action.payload.id)
      if(position === -1){
        state.cart.push({...action.payload, quantity:1})
      }else{
        state.cart[position].quantity += 1
      }
      console.log(JSON.stringify(state.cart))
      
    },
    removeFromCart:(state,action)=>{
      if(state.cart[action.payload].quantity === 1){
        state.cart.splice(action.payload, 1)
      }
      else{
        state.cart[action.payload].quantity -= 1
      }
      console.log(state.cart)
    },
    addItem:(state,action)=>{
      let item = state.items.find((item)=>item.name===action.payload.name)
      if(!item) state.items.push(action.payload)
      state.items = sortItems(state.items)
      state.itemsDisplay = [...state.items]
      console.log(state.items);
      console.log(state.itemsDisplay);
    },
    deleteItem:(state,action)=>{
      state.items.splice(action.payload, 1)
      state.items = sortItems(state.items)
      state.itemsDisplay = [...state.items]
      console.log(state.items);
      console.log(state.itemsDisplay);
    }
  }
})

export const  {addToCart, removeFromCart, addItem, deleteItem, filterItems} = itemSlice.actions
export default itemSlice.reducer;
