import { useState } from "react";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

export default function Navbar() {
  const [isopen, setIsopen] = useState(false);

  return (
    <div className="backdrop-blur-sm bg-white/30 fixed flex flex-col lg:flex-row justify-between items-center py-2 px-4 mx-auto z-10 w-full">
      <div className="flex flex-row gap-20 justify-between items-center ">
        <NavLink to="/" className="">
          <img
            className="h-10 lg:h-20"
            src="./src/assets/baliklogo.png"
            alt=""
          />
        </NavLink>
        <NavLink to="/" className="text-[20px] md:text-[23px] lg:text-[50px]">
          <h1 className="font-primary text-prime1">Balik Coffe</h1>
        </NavLink>
        <div>
          <button
            onClick={() => setIsopen(!isopen)}
            className="block lg:hidden"
          >
            <i className={`${!isopen ? "ri-menu-line" : "ri-close-line"}`}></i>
          </button>
        </div>
      </div>

      <div
        className={`${
          isopen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row justify-between gap-4 p-4  `}
      >
        <a
          href="#"
          className="block px-4 lg:py-2 font-secondary font-bold text-[20px] lg:text-[25px] hover:bg-second1 hover:bg-opacity-80 hover:text-white my-2 rounded-full"
        >
          About
        </a>
        <a
          href="#"
          className="block px-4 lg:py-2 font-secondary font-bold text-[20px] lg:text-[25px] hover:bg-second1 hover:bg-opacity-80 hover:text-white my-2 rounded-full"
        >
          Menu
        </a>
        <a
          href="#"
          className="block px-4 lg:py-2 font-secondary font-bold text-[20px] lg:text-[25px] hover:bg-second1 hover:bg-opacity-80 hover:text-white my-2 rounded-full"
        >
          Order
        </a>
        <a
          href="#"
          className="block px-4 lg:py-2 font-secondary font-bold text-[20px] lg:text-[25px] hover:bg-second1 hover:bg-opacity-80 hover:text-white my-2 rounded-full"
        >
          Admin
        </a>
      </div>
    </div>
  );
}
