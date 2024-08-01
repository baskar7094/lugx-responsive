import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../material.jsx";
export default function Navbar() {
  return (
    <div>
      <nav className=" grid grid-cols-2 md:flex  justify-between items-center px-10 py-5 lg:px-10 lg:py-5 ">
        <Link to="/" className="">
          <img src={logo} alt="...." className="w-32 sm:w-40 lg:w-40 h-auto" />
        </Link>
        <button className=" md:hidden ring-2 shadow-2xl ring-slate-200 px-2 w-12  sm:w-16  ml-auto rounded-md bg-slate-200">
          <span>
            <i className="fas fa-list "></i>
          </span>
        </button>
        <div className=" hidden md:flex">
          <ul className=" text-white  capitalize md:flex md:flex-wrap md:gap-5 lg:gap-8 my-3 md:my-0  w-full  ">
            <li>
              <Link
                to={"/"}
                className="text-xl lg:text-2xl hover:border-b-2 border-b-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="text-xl lg:text-2xl hover:border-b-2 border-b-white"
              >
                our shop
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="text-xl lg:text-2xl hover:border-b-2 border-b-white"
              >
                product details
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="text-xl lg:text-2xl hover:border-b-2 border-b-white"
              >
                contact us
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="text-xl lg:text-2xl hover:border-b-2 border-b-white"
              >
                sign in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
