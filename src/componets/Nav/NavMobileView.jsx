
import { IoIosSunny } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


import { FaMoon } from "react-icons/fa6";
import MobileMenu from './MobileMenu';
import { useTheme } from "../../context/ThemeContext";

function NavMobileView({toggleMenu,isOpen,scrolled}) {
   const {theme,toggleTheme}=useTheme()
 
  return (
   <>
       <div>
          <div className='flex justify-center item-center space-x-3 md:hidden md:flex space-x-4 '>
          <button onClick={toggleTheme} className=" w-8 h-8 bg-gray-100 rounded-lg dark:bg-slate-800  items-center justify-center 
          transition-all duration-300 focus:outline-none">
        {theme==='light'? <FaMoon size={18} className="mx-auto text-gray-500" />  :<IoIosSunny size={18} className="mx-auto text-white" />}
        
           </button>
       
          <button onClick={toggleMenu} className={`md:hidden text-2xl dark:text-white ${ scrolled ? "text-black":"text-white"}`}>
         {isOpen? <RxCross2 size={30}/>: <MdOutlineMenu  size={30}  />}
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