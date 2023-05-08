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
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.amount += action.payload;
    },
  },
});

export const selectvalue = (state: RootState) => state.cart;

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
