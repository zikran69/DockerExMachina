import baliklogo from "../../assets/baliklogo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "remixicon/fonts/remixicon.css";

export default function Navbar() {
  const [isopen, setIsopen] = useState(false);

  return (
    <div className="backdrop-blur-sm bg-white/30 fixed flex flex-col lg:flex-row justify-between items-center py-2 px-4 mx-auto w-full z-10">
      <div className="flex flex-row gap-20 justify-between items-center ">
        <NavLink to="/" className="">
          <img className="h-10 lg:h-20" src={baliklogo} alt="" />
        </NavLink>
        <div
          to="#"
          className="text-[20px] md:text-[23px] lg:text-[50px] lg:ml-[250px]"
        >
          <h1 className="font-primary text-stone-700">Balik Coffe</h1>
        </div>
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
        } lg:flex flex-col lg:flex-row justify-between gap-4 p-4 `}
      >
        <Link
          to="Body"
          className="block px-4 lg:py-2 font-secondary font-bold text-[20px] lg:text-[25px] hover:bg-amber-800 hover:bg-opacity-80 hover:text-white my-2 rounded-full"
        >
          Menu
        </Link>
        <Link
          to="About"
          className="block px-4 lg:py-2 font-secondary font-bold text-[20px] lg:text-[25px] hover:bg-amber-800 hover:bg-opacity-80 hover:text-white my-2 rounded-full"
        >
          About
        </Link>
        <NavLink
          to={"/Order"}
          className="block px-4 lg:py-2 font-secondary font-bold text-[20px] lg:text-[25px] hover:bg-amber-800 hover:bg-opacity-80 hover:text-white my-2 rounded-full"
        >
          Order
        </NavLink>
      </div>
    </div>
  );
}
