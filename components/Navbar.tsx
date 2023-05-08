import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-200 flex justify-between">
      <div className="flex justify-start items-center p-4">
        <img src="./logo.png" alt="" className="mr-4" />
        <span className="font-bold uppercase text-xl">Frutta</span>
      </div>
      <div className=" mr-4 items-center flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <div className="bg-black text-white rounded-full absolute top-3 right-3 h-6 w-6">
          <span className="flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
