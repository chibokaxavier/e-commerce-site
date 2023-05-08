import { RootState } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export interface Cart {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector(
    (state: RootState) => state.cart
  );
  if (amount < 1) {
    return (
      <div className="flex flex-col justify-center items-center my-[200px]">
        <h1 className="text-3xl font-bold">YOUR BAG</h1>
        <h2>is Currently Empty</h2>
      </div>
    );
  }

  return (
    <div>
      {cartItems.map((item: Cart) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

//
export default CartContainer;
