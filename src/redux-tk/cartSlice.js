import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    toggleShowCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  }
})

export const { openCart, closeCart, toggleShowCart } = cartSlice.actions
export default cartSlice.reducer