import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const PortfolioSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  // First 5 videos from the portfolio page
  const featuredVideos = [
    { 
      videoId: 'dQw4w9WgXcQ',
      title: 'Sarah & Michael',
      subtitle: 'Château Wedding'
    },
    { 
      videoId: 'jNQXAC9IVRw',
      title: 'Emma & James',
      subtitle: 'Garden Ceremony'
    },
    { 
      videoId: 'M7lc1UVf-VE',
      title: 'Sophie & David',
      subtitle: 'Beach Wedding'
    },
    { 
      videoId: 'ZZ5LpwO-An4',
      title: 'Marie & Antoine',
      subtitle: 'Vineyard Celebration'
    },
    { 
      videoId: 'kJQP7kiw5Fk',
      title: 'Lisa & Thomas',
      subtitle: 'City Hall Romance'
    }
  ]

  useGSAP(() => {
    gsap.fromTo('.portfolio-showcase',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.portfolio-showcase',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo('.video-card',
      {
        opacity: 0,
        x: 30,
        scale: 0.95
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.3
        },
        scrollTrigger: {
          trigger: '.video-showcase-grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  return (
    <section id="portfolio" ref={sectionRef} className='min-h-screen bg-gray-50 text-black relative z-30'>
      <div className='container mx-auto lg:px-12 px-6 lg:py-24 py-16'>
        <div className='portfolio-showcase'>
          {/* Video Showcase Grid */}
          <div className='video-showcase-grid mb-16'>
            <div className='flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide pb-4'>
              {featuredVideos.map((video, index) => (
                <div 
                  key={index}
                  className='video-card group flex-shrink-0 w-80 lg:w-96 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105'
                >
                  {/* Video Container */}
                  <div className='relative aspect-video bg-black rounded-2xl overflow-hidden'>
                    <iframe
                      className='absolute top-0 left-0 w-full h-full'
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0`}
                      title={`${video.title} - ${video.subtitle}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                    
                    {/* Subtle overlay for better text readability */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
                  </div>
                  
                  {/* Video Info */}
                  <div className='absolute bottom-0 left-0 right-0 p-6 space-y-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent'>
                    <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-black group-hover:text-[#D3FD50] transition-colors duration-300'>
                    <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-white group-hover:text-[#D3FD50] transition-colors duration-300'>
                      {video.title}
                    </h3>
                    <p className='font-[font1] text-base lg:text-lg text-gray-300'>
                      {video.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Portfolio Button */}
          <div className='text-center'>
            <Link 
              to='/projects'
              className='lg:border-3 border-2 hover:border-[#D3FD50] hover:bg-[#D3FD50] hover:text-black lg:h-20 h-16 flex items-center justify-center px-12 lg:px-16 border-black rounded-full uppercase transition-all duration-300 cursor-pointer group inline-flex'
            >
              <span className='font-[font2] text-xl lg:text-2xl group-hover:scale-105 transition-transform duration-300'>
                View Our Portfolioo
              </span>
            </Link>
          </div>
        </div>
      </div>
    )
    )
    }
    </section>
  )
}

export default PortfolioSection