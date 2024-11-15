import { createSlice } from "@reduxjs/toolkit";
const uiSlice=createSlice({
  name:'showingCart',
initialState:{showCart:false,notification:null},
reducers:{
toggleCart(state){
  state.showCart=!state.showCart;
},
showNotificaiton(state,action){
  state.notification={status:action.payload.status,title:action.payload.title,message:action.payload.message};
}
}
}
);
export const uiActions=uiSlice.actions;
export default uiSlice;