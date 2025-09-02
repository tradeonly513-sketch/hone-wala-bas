import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full relative'>
        {/* Fallback image for when video fails to load */}
        <img 
          className='h-full w-full object-cover absolute inset-0' 
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Creative workspace background"
        />
        
        {/* Main video with native loop handling */}
        <video 
          className='h-full w-full object-cover relative z-10' 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          onError={(e) => {
            // Hide video on error, fallback image will show
            e.target.style.display = 'none';
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default Video