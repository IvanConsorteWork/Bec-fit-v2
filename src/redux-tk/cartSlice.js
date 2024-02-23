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
    decreaseItemQuantity: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload);
      if (existingItem.quantity <= 1) {
        state.cartItems = state.cartItems.filter(item => item.id !== existingItem.id)
      } else {
        existingItem.quantity -= 1
      }
    },
    increaseItemQuantity: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          id: action.payload,
          quantity: 1
        });
      }
    },
  }
})

export const { openCart, closeCart, decreaseItemQuantity, increaseItemQuantity, toggleShowCart } = cartSlice.actions
export default cartSlice.reducer