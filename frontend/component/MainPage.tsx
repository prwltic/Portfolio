import React from 'react'

function MainPage() {
  return (
    <section className='bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 min-h-screen flex justify-center items-center font-sans px-4 select-none'>
      <div className='text-center space-y-6 max-w-xl bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 shadow-2xl transition-all duration-300 hover:scale-105'>
        
        {/* Name with elegant tracking and bold weight */}
        <h1 className='text-6xl md:text-7xl font-extrabold text-neutral-900 tracking-tight drop-shadow-sm'>
          PRAWAL
        </h1>
        
        {/* Sub-headline to tell people who you are */}
        <p className='text-lg md:text-xl font-medium text-neutral-800/80 max-w-sm mx-auto leading-relaxed'>
          Creative Developer & Designer building sleek digital experiences.
        </p>
        
        {/* Interactive, sleek CTA Button */}
        <div className='pt-2'>
          <button className='bg-neutral-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-neutral-800 transition-colors duration-200 text-sm tracking-wide active:scale-95 cursor-pointer'>
            Explore My Work
          </button>
        </div>

      </div>
    </section>
  )
}

export default MainPage
