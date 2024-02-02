import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "nimadir",
  initialState: {
    data: 0,
  },
  reducers: {
    increment(state, action) {
      state.data = state.data + 1;
    },
    decrement(state, action) {
      state.data = state.data - 1;
    },
    addNumber(state, action) {
      state.data = state.data + +action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement, addNumber } = counterSlice.actions;
