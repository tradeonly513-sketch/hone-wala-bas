import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

// 🔹 Import same video lists as in Projects page
const teasers = [
  { videoId: 'dQw4w9WgXcQ' },
  { videoId: 'jNQXAC9IVRw' },
  { videoId: 'M7lc1UVf-VE' },
  { videoId: 'ZZ5LpwO-An4' },
  { videoId: 'kJQP7kiw5Fk' },
  { videoId: 'tgbNymZ7vqY' },
  { videoId: 'L_jWHffIx5E' },
  { videoId: 'fJ9rUzIMcZQ' },
  { videoId: 'QH2-TGUlwu4' },
  { videoId: 'nfWlot6h_JM' },
  { videoId: 'hFZFjoX2cGg' }
]

const highlights = [
  { videoId: 'ScMzIvxBSi4' },
  { videoId: 'CevxZvSJLk8' },
  { videoId: 'kffacxfA7G4' },
  { videoId: 'qeMFqkcPYcg' },
  { videoId: 'SQoA_wjmE9w' },
  { videoId: 'ZbZSe6N_BXs' },
  { videoId: 'HEXWRTEbj1I' },
  { videoId: 'U9t-slLl69E' },
  { videoId: 'iik25wqIuFo' },
  { videoId: 'C0DPdy98e4c' },
  { videoId: 'YQHsXMglC9A' },
  { videoId: 'AdUw5RdyZxI' },
  { videoId: 'hTWKbfoikeg' },
  { videoId: 'NUYvbT6vTPs' },
  { videoId: 'RgKAFK5djSk' },
  { videoId: 'uelHwf8o7_U' },
  { videoId: 'EhxJLojIE_o' },
  { videoId: 'KQ6zr6kCPj8' },
  { videoId: 'MtN1YnoL46Q' },
  { videoId: 'sOnqjkJTMaA' }
]

const PortfolioSection = () => {
  const sectionRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  const allVideos = [...teasers, ...highlights] // merge both lists

  useGSAP(() => {
    // Fade/slide in section
    gsap.fromTo('.portfolio-showcase',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.portfolio-showcase',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Slide videos from left → right
    gsap.fromTo('.video-card',
      { opacity: 0, x: -100, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: { amount: 0.6 },
        scrollTrigger: {
          trigger: '.video-showcase-grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="min-h-screen bg-gray-50 text-black relative z-30"
    >
      <div className="container mx-auto lg:px-12 px-6 lg:py-24 py-16">
        <div className="portfolio-showcase">
          {/* Video Showcase */}
          <div className="video-showcase-grid mb-16">
            <div className="flex gap-6 lg:gap-8 overflow-x-auto scrollbar-hide pb-4">
              {allVideos.map((video, index) => (
                <div 
                  key={index}
                  className="video-card group flex-shrink-0 w-80 lg:w-96 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 relative"
                >
                  <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0`}
                      title={`Portfolio video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Portfolio Button */}
          <div className="text-center">
            <Link 
              to="/projects"
              className="lg:border-3 border-2 hover:border-[#D3FD50] hover:bg-[#D3FD50] hover:text-black lg:h-20 h-16 flex items-center justify-center px-12 lg:px-16 border-black rounded-full uppercase transition-all duration-300 cursor-pointer group inline-flex"
            >
              <span className="font-[font2] text-xl lg:text-2xl group-hover:scale-105 transition-transform duration-300">
                View Our Portfolio
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
