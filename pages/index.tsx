import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectvalue,
  calculateTotal,
} from "@/slices/cartSlice";
import { RootState } from "@/app/store";
import Navbar from "@/components/Navbar";
import CartContainer from "@/components/CartContainer";
import { useEffect } from "react";

export default function Home() {
  const { amount, cartItems } = useSelector(selectvalue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div className=" ">
      <Navbar />
      <CartContainer />
    </div>
  );
}
