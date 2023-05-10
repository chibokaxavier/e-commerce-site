import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { clearCart } from "@/slices/cartSlice";

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

 function BasicModal() {
  const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
  //   const {clearCart} = useSelector((state:RootState)=>state.cart)
  const dispatch = useDispatch();

  return (
    <div>
      <Button  className="" onClick={handleOpen}>CLEAR CART</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className="">
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
  );
}

export default  BasicModal
