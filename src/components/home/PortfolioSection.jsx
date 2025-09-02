import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const PortfolioSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo('.portfolio-cta',
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
          trigger: '.portfolio-cta',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  return (
    <section id="portfolio" ref={sectionRef} className='min-h-screen bg-gray-50 text-black relative z-30'>
      <div className='container mx-auto lg:px-12 px-6 lg:py-24 py-16'>
        <div className='text-center'>
          <h2 className='portfolio-cta font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight'>
            Our Portfolio
          </h2>
          <p className='portfolio-cta font-[font1] lg:text-xl text-lg lg:max-w-3xl max-w-xl mx-auto leading-relaxed text-gray-700 mb-12'>
            Découvrez notre travail exceptionnel et laissez-vous inspirer par notre approche unique de la vidéographie de mariage.
          </p>
          
          <div className='portfolio-cta inline-flex items-center'>
            <Link 
              to='/projects'
              className='lg:border-3 border-2 hover:border-[#D3FD50] hover:bg-[#D3FD50] hover:text-black lg:h-20 h-16 flex items-center justify-center px-12 lg:px-16 border-black rounded-full uppercase transition-all duration-300 cursor-pointer group'
            >
              <span className='font-[font2] text-xl lg:text-2xl group-hover:scale-105 transition-transform duration-300'>
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