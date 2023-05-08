import { removeItem,increase, decrease } from "@/slices/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
export interface Cart {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
  const { amount, id, title, category, price, img, desc } = item;
  return (
    <div className=" pt-4 flex justify-between">
      <div className=" flex">
        <div className="h-[100px] w-[75px]">
          <img src={img} alt={title} className="h-full w-full" />
        </div>
        <div className="ml-[80px]">
          <span className="capitalize">{title}</span>
          <p className="text-gray-500">${price}</p>
          <button className="bg-red-600  p-2 rounded-md text-white uppercase " onClick={()=>{dispatch(removeItem(id))}}>
            Remove
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  ">
        <svg onClick={()=>{dispatch(increase(id))}}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
        <span>{amount}</span>
        <svg onClick={()=>{
            if (amount ===1 ) {
               dispatch(removeItem(id)) 
               return;
            }
            dispatch(decrease(id))}}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default CartItem;
