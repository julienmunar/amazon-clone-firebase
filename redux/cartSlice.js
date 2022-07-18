import { createSlice } from '@reduxjs/toolkit'


initialState={
    addedItems:[],
    total:0
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state,action) => {

        // FIlter addItems by Id, if ID not present add the new item, else, add +1 in id.qty
      state.value += 1
    },
    removeItem: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
    DecreaseNumberItem: (state) => {
      state.value -= 1
    },
    IncrementNumberItem: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { addItem,removeItem, DecreaseNumberItem, IncrementNumberItem } = counterSlice.actions



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value

export default cartSlice.reducer
