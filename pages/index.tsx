import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectvalue } from "@/slices/cartSlice";
import { RootState } from "@/app/store";
import Navbar from "@/components/Navbar";
import CartContainer from "@/components/CartContainer";

export default function Home() {
  const { amount } = useSelector(selectvalue);
  const dispatch = useDispatch();
  return (
    <div className=" ">
      <Navbar />
      <CartContainer />
    </div>
  );
}
