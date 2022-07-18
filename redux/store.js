import { configureStore } from '@reduxjs/toolkit'
import layoutReducer from './layoutSlice'
import cartReducer from './cartSlice'
export const store = configureStore({
  reducer: {
    layout:layoutReducer,
    cart:cartReducer
  }
})