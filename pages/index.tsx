import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  selectvalue,
  calculateTotal,
  getCartItems,
} from "@/slices/cartSlice";
import { RootState } from "@/app/store";
import Navbar from "@/components/Navbar";
import CartContainer from "@/components/CartContainer";
import { useEffect } from "react";
import { Modal } from "@mui/material";
import BasicModal from "@/components/Modal";

export default function Home() {
  const { amount, cartItems,isLoading } = useSelector(selectvalue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if(isLoading){
    return <div className="text-3xl"> Loading.................</div>
  }
  return (
    <div className=" ">
      <Navbar />
      <CartContainer />
    </div>
  );
}
