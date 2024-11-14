import { createSlice } from "@reduxjs/toolkit";
const uiSlice=createSlice({
  name:'showingCart',
initialState:{showCart:false},
reducers:{
toggleCart(state){
  state.showCart=!state.showCart;
}
}
}
);
export const uiActions=uiSlice.actions;
export default uiSlice;