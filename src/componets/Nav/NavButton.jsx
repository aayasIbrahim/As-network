import React from 'react'

function NavButton({children}) {
  return (
    <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
        {children}
    </button>
  )
}

export default NavButton