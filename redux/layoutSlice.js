import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
    cartisOpen: false,

};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCartOpen: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // const status=state.cartisOpen
      state.cartisOpen= !state.cartisOpen
    },
   


  },


});

export const { setCartOpen } = layoutSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const cartStatus = (state) => state.layout.cartisOpen;



export default layoutSlice.reducer;