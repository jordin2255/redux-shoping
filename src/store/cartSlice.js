import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
  name:'updatingCart',
  initialState:{cartValue:0},
  reducers:{
    increaseCartValue(state){
      state.cartValue=state.cartValue+1;
    },
    decreaseCartValue(state){
      state.cartValue=state.cartValue-1;
    }
  }
});
export const cartActions=cartSlice.actions;
export default cartSlice;