import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";
import cartItems from "@/cartItems";
import { Console } from "console";

export interface CartState {
  cartItems: any;
  amount: number;
  total: number;
  isLoading: Boolean;
}

const url = "https://course-api.com/react-useReducer-cart-project";
const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
 return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      console.log(action);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount - 1;
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      console.log(amount);
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers:{
    [getCartItems.pending]:(state) =>{
      state.isLoading= true
    },
    [getCartItems.fulfilled]:(state,action) =>{
      console.log(action.payload);
      state.isLoading= false
      state.cartItems= action.payload
    },
    [getCartItems.pending]:(state) =>{
      state.isLoading= false
    }
  }
});

export const selectvalue = (state: RootState) => state.cart;

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  removeItem,
  increase,
  decrease,
  calculateTotal,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
