import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BackToHome = () => {
  const location = useLocation()
  
  // Don't show on home page
  if (location.pathname === '/') {
    return null
  }

  return (
    <div className='fixed top-6 left-6 z-50'>
      <Link 
        to='/'
        className='group flex items-center space-x-3 bg-white/90 hover:bg-white backdrop-blur-sm border border-gray-200 hover:border-[#D3FD50] rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
      >
        <span className='text-xl group-hover:scale-110 transition-transform duration-300'>
          ←
        </span>
        <span className='font-[font2] text-sm lg:text-base uppercase text-black group-hover:text-[#D3FD50] transition-colors duration-300'>
          Home
        </span>
      </Link>
    </div>
  )
}

export default BackToHome