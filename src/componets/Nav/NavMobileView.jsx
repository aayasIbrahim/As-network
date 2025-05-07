
import { IoIosSunny } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import MobileMenu from './MobileMenu';

function NavMobileView({toggleDarkMode,darkMode,toggleMenu,isOpen}) {
 
  return (
   <>
       <div>
          <div className='md:hidden md:flex space-x-4 items-center   rounded'>
          <button onClick={toggleDarkMode} className=" w-8 h-8 bg-gray-100 rounded-lg dark:bg-slate-800  items-center justify-center 
          transition-all duration-300 focus:outline-none">
        {darkMode ?<FaMoon size={20} className="mx-auto text-gray-500" />  :<IoIosSunny size={20} className="mx-auto " />}
           </button>
       
          <button onClick={toggleMenu} className='md:hidden text-2xl mt-1 text-white '>
         {isOpen? <MdCancel  />: <MdOutlineMenu className='text-white ' />}
          </button>
          </div>
          {isOpen && (
             <MobileMenu/>
          )}
    
             </div>
   
   </>
  )
}

export default NavMobileView