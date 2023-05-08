import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";
import cartItems from "@/cartItems";

export interface CartState {
  cartItems: any;
  amount: number;
  total: number;
  isLoading: Boolean;
}

const initialState: CartState = {
  cartItems: cartItems,
  amount: 2,
  total: 0,
  isLoading: true,
};

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
  },
});

export const selectvalue = (state: RootState) => state.cart;

// Action creators are generated for each case reducer function
export const { increment, decrement, removeItem, increase,decrease, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
