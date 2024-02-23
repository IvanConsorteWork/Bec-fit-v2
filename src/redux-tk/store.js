import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './cartSlice'
import productsReducer from './productsSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartSliceReducer
  },
})