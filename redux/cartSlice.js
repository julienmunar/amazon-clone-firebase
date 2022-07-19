import { Summarize } from '@mui/icons-material'
import { createSlice } from '@reduxjs/toolkit'


let initialState={
    addedItems:[],
    total:0
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state,action) => {

      // Declare the targetCart, and the immutable actualCart
      let newcart 
      let actualcart=state.addedItems 
      //FIND IF ARTICLE EXISTS
      const currentAddedItems=actualcart.find(item => item.id === action.payload.id)
      
      if (currentAddedItems){
        const FilteredAddedItem= actualcart.filter(item => item.id !== action.payload.id)
        newcart = [...FilteredAddedItem, {id: currentAddedItems.id, title:currentAddedItems.title, amount: currentAddedItems.amount +1 , price:currentAddedItems.price, image:currentAddedItems.image}]
        state.addedItems=newcart
      }
      else {
        newcart = [...state.addedItems,{id: action.payload.id, title:action.payload.title, amount:1 , price:action.payload.price, image:action.payload.image}]
        state.addedItems=newcart
      }
    },
    removeItem: (state,action) => {
           // Declare the targetCart, and the immutable actualCart
            console.log(action.payload)
           let actualCart=state.addedItems
           const FilteredRemovedItem=actualCart.filter(item => item.id !== action.payload)
           state.addedItems=FilteredRemovedItem

             

      },
    OnChangeNumberItem: (state,action) => {
        console.log(action.payload)
        let actualcart=state.addedItems 
        const currentAddedItems=actualcart.find(item => item.id === action.payload.id)
        const FilteredAddedItem= actualcart.filter(item => item.id !== action.payload.id)
        const newcart = [...FilteredAddedItem, {id: currentAddedItems.id, title:currentAddedItems.title, amount: action.payload.amount, price:currentAddedItems.price, image:currentAddedItems.image}]
        state.addedItems=newcart
    },

  },
})

export const { addItem,removeItem, OnChangeNumberItem } = cartSlice.actions



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = (state) => state.cart.addedItems

export default cartSlice.reducer
