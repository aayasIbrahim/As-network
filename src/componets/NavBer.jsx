import React,{useState} from 'react'
// import { Link } from 'react-router-dom';
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { MdOutlineMenu } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import ASNetworkLogo from './AsneworkLogo';

function NavBer() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    // const navItems = ['HOME', 'LOGIN', 'SIGNUP', 'ABOUT', 'CONTACT'];
  return (
    <nav className='navbar fixed w-full z-50 top-0 pt-0 lg:pb-1.5 md:pb-1.5 pb-0 lg:rounded-none md:rounded-none rounded-b-xl lg:border-none md:border-none border-b border-gray-700 lg:bg-[#00204f57] md:bg-[#00204f57] bg-[#00204fc1] dark:lg:bg-[#00204f57] dark:md:bg-[#00204f57] dark:bg-[#00204fc1] "'>
        <div className='container flex justify-between  p-3'>
            <div>
                <ASNetworkLogo/>
            </div>
       <div>
          <div className='md:hidden md:flex space-x-4 items-center   rounded'>
          <button onClick={toggleDarkMode} className='text-white p-2 rounded'>
        {darkMode ?<BsToggleOff size={30}/>  :<BsToggleOn size={30}/>}
           </button>
       
          <button onClick={toggleMenu} className='md:hidden text-3xl text-white '>
         {isOpen? <MdCancel />: <MdOutlineMenu color='text-white' />}
          </button>
          </div>
          {isOpen && (
            <div className='absolute w-full top-27 right-0 bg-gray-800 text-white p-4 rounded shadow-lg md:hidden'>
                <ul className='flex   justify-center  items-center  space-x-8 '>
                  <div className='space-y-5'>
                  <li><a href="/">Home</a></li>
                    <li><a href="/login">About</a></li>
                    <li><a href="/signup">Offers <span>1</span></a></li>
                  </div>
                    <div className='space-y-5'>
                    <li><a href="/about">Coverge</a></li>
                    <li><a href="/contact">Pricing</a></li>
                    <li><a href="/contact">Pay Bill</a></li>
                    </div>
                </ul>
               
            </div>
          )}
    
       </div>
        </div>
    </nav>
  )
}

export default NavBer;