import React from 'react'


function Nav() {
  return (
    <nav className=' top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm px-6 py-4 flex justify-between items-center '>
      <span className='font-bold text-neutral-900 tracking-wide text-lg '>
        Home
      </span>
      
      <a
      
        href='https://www.instagram.com/prawal.dahal'
        target="_blank"
        rel="noopener noreferrer"
        className='flex items-center justify-center p-2 rounded-full border border-white/30 bg-white/40 text-neutral-700 hover:text-pink-600 hover:bg-white/60 hover:scale-110 transition-all duration-200 shadow-sm'
        aria-label="Instagram Profile"
      > 
     
     </a>
    </nav>
  )
}
export default Nav




