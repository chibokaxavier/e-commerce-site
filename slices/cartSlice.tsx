import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/app/store'

export interface CartState {
  cartItems:[],
  amount:number,
  total:number,
  isLoading:Boolean
}

const initialState: CartState = {
  cartItems:[],
  amount:0,
  total:0,
  isLoading:true

}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const selectvalue = (state: RootState) => state.cart.amount

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer