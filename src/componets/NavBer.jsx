import React,{useState} from 'react'
// import { Link } from 'react-router-dom';

import ASNetworkLogo from './AsneworkLogo';
import NavMobileView from './Nav/NavMobileView';

function NavBer() {

    // const navItems = ['HOME', 'LOGIN', 'SIGNUP', 'ABOUT', 'CONTACT'];
  return (
    <nav className='navbar fixed w-full z-50 top-0 pt-0 lg:pb-1.5 md:pb-1.5 pb-0 lg:rounded-none md:rounded-none rounded-b-xl lg:border-none md:border-none border-b border-gray-700 lg:bg-[#00204f57] md:bg-[#00204f57] bg-[#00204fc1] dark:lg:bg-[#00204f57] dark:md:bg-[#00204f57] dark:bg-[#00204fc1]'>
        <div className='flex justify-between items-center w-full px-4 lg:px-10 md:px-10 py-2'>
            <div>
                <ASNetworkLogo/>
            </div>
             <div className='md:hidden'>
              <NavMobileView/>
             </div>
        </div>
    </nav>
  )
}

export default NavBer;