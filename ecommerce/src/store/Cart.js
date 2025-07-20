import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;

      // Find existing item by productId
      const existingItem = state.items.find(item => item.productId === productId);

      if (existingItem) {
        // If found, increase quantity
        existingItem.quantity += quantity;
      } else {
        // If not found, add new item
        state.items.push({ productId, quantity });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
