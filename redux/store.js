import { configureStore } from '@reduxjs/toolkit'
import layoutReducer from './layoutSlice'
export const store = configureStore({
  reducer: {layout:layoutReducer},
})