import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    displayCart: (state) => {
      state.isOpen === false ? state.isOpen = true : false
    },
    addCartItem: (state, payload) => {
      
    }
  }
})