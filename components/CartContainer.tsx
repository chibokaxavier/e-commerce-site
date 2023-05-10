import { RootState } from "@/app/store";
import { clearCart } from "@/slices/cartSlice";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};

export interface Cart {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const CartContainer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { cartItems, amount, total } = useSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  if (amount < 1) {
    return (
      <div className="flex flex-col justify-center items-center my-[200px]">
        <h1 className="text-3xl font-bold">YOUR BAG</h1>
        <h2>is Currently Empty</h2>
      </div>
    );
  }

  return (
    <>
      <section className="mx-4">
        <h2 className="text-3xl font-light flex text-center justify-center pt-4">
          YOUR BASKET
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
            <button
              className="font-light uppercase w-[160px] p-2 tracking-widest bg-gray-500 hover:bg-gray-200 transition "
              onClick={handleOpen}
            >
              {" "}
              Clear Cart
            </button>
          </div>
        </footer>
      </section>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              className=""
            >
              Remove All items in your shopping cart ??
            </Typography>
            <div className="flex justify-between mt-10">
              <button
                className="p-2 bg-gray-200 tracking-widest text-sm uppercase text-red-600 hover:bg-red-200"
                onClick={(e) => {
                  dispatch(clearCart());
                  handleClose();
                }}
              >
                Confirm
              </button>
              <button
                className="p-2 bg-gray-200 tracking-widest text-sm uppercase text-green-600 hover:bg-yellow-200"
                onClick={() => {
                  handleClose();
                }}
              >
                Cancel
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

//
export default CartContainer;
