import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,

  },
  reducers: {
    addToCart(state, action) {
      const find = state.cart.find((item)=> item.idMeal === action.payload.idMeal);
      if(find){
        find.quantity += 1
      }else{
        state.cart.push({...action.payload, quantity: 1});
      }
    },

    removeToCart(state,action){
      const find = state.cart.find((item)=> item.idMeal === action.payload.idMeal);
      if(find && find.quantity > 1){
        find.quantity -=1;
      }else{
        state.cart = state.cart.filter((item)=> item.idMeal !== action.payload.idMeal )
      }
    },

    clearCart(state, action){
      state.cart = []
    },
  },
});

export default cartSlice.reducer;
export const { addToCart,removeToCart, clearCart } = cartSlice.actions;


