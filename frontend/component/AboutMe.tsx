import React from 'react'
import Image from 'next/image'

function AboutMe() {
  return (
    <div className='flex justify-start items-center min-h-screen px-10 gap-6'>
      <img src="Profile.jpeg"
      className='w-125 h-125' />
   <p className='text-xl font-bold text-gray-900 leading-snug'>
        Hello, I am a Computer Science student at DWIT & Frontend Developer.
        <br /><br />
        I build web applications with a focus on clean code, seamless user experiences, and efficient performance.
        <br /><br />
        Powered by caffeine, driven by open-source, and proudly running Arch Linux.
      </p>
   </div>
  )
}

export default AboutMe


