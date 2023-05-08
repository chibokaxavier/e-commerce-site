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
    <section className="mx-4">
      <h2 className="text-3xl font-light flex text-center justify-center pt-4">
        YOUR BAG
      </h2>
      <div className="">
        {cartItems.map((item: Cart) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <footer className="py-4">
        <hr />
        <h4 className="pt-6 text-xl font-light flex justify-between  items-center">
          TOTAL <span className="ml-4">${total}</span>
        </h4>
        <div className="flex justify-center items-center">
        <button className="font-light uppercase w-[160px] p-2 tracking-widest bg-gray-500 hover:bg-gray-200 transition "> Clear Cart</button>
        </div>
        
      </footer>
    </section>
  );
};

//
export default CartContainer;
