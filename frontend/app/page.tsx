import React from 'react'
import MainPage from '@/component/MainPage'
import AboutMe from '@/component/AboutMe'
import Nav from '@/component/Nav'
function page() {
  return (
    <div>
      <Nav/>
      <MainPage/>
      <AboutMe/>
    </div>
  )
}

export default page
