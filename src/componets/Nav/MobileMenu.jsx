import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";

function MobileMenu({ scrolled,toggleMenu }) {
  return (
    <>
      <div
        className={`absolute w-full h-[300px] top-[55px] right-0  p-4 rounded shadow-2xl font-bold  ${
          scrolled ? "bg-white text-black " : "bg-[#001f4d]/[50] text-white"
        } md:hidden  z-50 top-0 pt-0 lg:pb-1.5 md:pb-1.5 pb-0 lg:rounded-none md:rounded-none rounded-b-xl lg:border-none md:border-none border-b border-gray-700 lg:bg-[#00204f57] md:bg-[#00204f57] bg-[#00204fc1] dark:lg:bg-[#00204f57] dark:md:bg-[#00204f57] dark:bg-[#00204fc1]`}
      >
        <ul className="flex   justify-center  items-center  space-x-[50px] text-center text-xl font-bold">
          <div className="space-y-5 text-base font-medium  ">
            <li className="hover:text-gray-400  dark:text-gray-200 dark:hover:text-gray-100">
              <Link onClick={toggleMenu} to="/">Home</Link>
            </li>
            <li className="hover:text-gray-400  dark:text-gray-200 dark:hover:text-gray-100">
              <Link onClick={toggleMenu} to="/about">About</Link>
            </li>
            <li className="hover:text-gray-400  dark:text-gray-200 dark:hover:text-gray-100">
              <Link onClick={toggleMenu} to="/offer">
                Offers{" "}
                <span className=" bg-red-600 h-3 w-3 rounded-full px-1.5 py-0.5 text-white text-xs ">
                  1
                </span>
              </Link>
            </li>
          </div>
          <div className="space-y-5 text-base font-medium ">
            <li className="hover:text-gray-400  dark:text-gray-200 dark:hover:text-gray-100">
              <Link onClick={toggleMenu} to="/coverage">Coverge</Link>
            </li>
            <li className="hover:text-gray-400  dark:text-gray-200 dark:hover:text-gray-100">
              <Link onClick={toggleMenu} to="/pricing">Pricing</Link>
            </li>
            <li className="hover:text-gray-400  dark:text-gray-200 dark:hover:text-gray-100">
              <Link onClick={toggleMenu} to="/paybill">Pay Bill</Link>
            </li>
          </div>
        </ul>
        <div className="flex justify-center items-center space-x-6 mt-5 mb-5">
          <NavButton >Quick Pay</NavButton>
          <NavButton>Safe Care</NavButton>
        </div>
        <div>
          <a
            href="/"
            className="whitespace-nowrap text-base font-medium text-blue-400 dark:text-blue-500 hover:text-blue-500 flex items-center justify-center gap-2 mt-4"
          >
            <span
              className={`text-base font-medium ${
                scrolled ? "text-black" : "text-gray-200"
              }`}
            >
              Do you need help?
            </span>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
