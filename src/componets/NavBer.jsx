import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa6";
import { IoIosSunny } from "react-icons/io";
import ASNetworkLogo from "./AsneworkLogo";
import NavMobileView from "./Nav/NavMobileView";
import NavButton from "./Nav/NavButton";
import { useTheme } from "../context/ThemeContext";

function NavBer() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Offer", path: "/offer" },
    { name: "Coverage", path: "/coverage" }, 
    { name: "Pricing", path: "/pricing" },
    { name: "Pay Bill", path: "/paybill" },
  ];

  return (
    <nav
      className={`navbar fixed w-full z-50 top-0 pt-0 lg:pb-1.5 md:pb-1.5 pb-0 lg:rounded md:rounded rounded-b-xl lg:border md:border border-b border-gray-700 md:border-gray-300 ${
        scrolled ? "bg-white" : "lg:bg-[#00204f57] bg-[#00204fc1]"
      } dark:lg:bg-[#00204f57] dark:md:bg-[#00204f57] dark:bg-[#00204fc1] ${
        scrolled ? " bg-white md:bg-white" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center w-full px-4 lg:px-10 md:px-10 py-2">
        <div>
          <ASNetworkLogo scrolled={scrolled} />
        </div>
        
        <div className="md:hidden">
          <NavMobileView
            toggleMenu={toggleMenu}
            isOpen={isOpen}
            theme={theme}
            toggleTheme={toggleTheme}
            scrolled={scrolled}
          />
        </div>

        <ul className="hidden md:flex lg:flex justify-center items-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`${
                item.name === "Offer" &&
                "rounded-lg lg:px-1 md:px-0 px-0 lg:border text-base font-medium lg:border-gray-500 lg:dark:border-gray-500 dark:text-gray-200 dark:hover:text-gray-100"
              }`}
            >
              <Link
                to={item.path}
                className={`font-base font-medium ${
                  scrolled ? "text-black" : "text-white hover:text-gray-400"
                } dark:text-gray-200 dark:hover:text-gray-100 flex m-4`}
              >
                {item.name}
                {item.name === "Offer" && (
                  <span className="bg-red-600 h-5 w-5 rounded-full px-1.5 py-0.5 text-white text-xs">
                    1
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex lg:flex justify-center items-center space-x-6">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 bg-gray-100 rounded-lg dark:bg-slate-800 items-center justify-center transition-all duration-300 focus:outline-none"
          >
            {theme === "light" ? (
              <FaMoon size={20} className="mx-auto text-gray-500" />
            ) : (
              <IoIosSunny size={20} className="text-white mx-auto" />
            )}
          </button>
          <NavButton>Quick Pay</NavButton>
          <NavButton>Safe Care</NavButton>
        </div>
      </div>
    </nav>
  );
}

export default NavBer;
