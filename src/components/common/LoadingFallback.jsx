import React from 'react'

const LoadingFallback = () => {
  return (
    <div className='min-h-screen bg-white flex items-center justify-center'>
      <div className='text-center space-y-4'>
        <div className='w-16 h-16 border-4 border-[#D3FD50] border-t-transparent rounded-full animate-spin mx-auto'></div>
        <p className='font-[font2] text-xl uppercase text-gray-600'>Loading...</p>
      </div>
    </div>
  )
}

export default LoadingFallback