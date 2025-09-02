import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const CTASection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo('.cta-content',
      {
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.cta-content',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  return (
    <section id="cta" ref={sectionRef} className='min-h-screen bg-black text-white relative z-30 flex items-center'>
      <div className='container mx-auto lg:px-12 px-6 text-center'>
        <div className='cta-content max-w-4xl mx-auto'>
          <h2 className='font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight'>
            Ready to Create Magic?
          </h2>
          
          <p className='font-[font1] lg:text-2xl text-xl leading-relaxed text-gray-300 mb-12 lg:max-w-3xl max-w-xl mx-auto'>
            Transformons votre jour spécial en un chef-d'œuvre cinématographique qui raconte votre histoire unique.
          </p>

          <div className='space-y-6 lg:space-y-0 lg:space-x-6 lg:flex lg:justify-center lg:items-center'>
            <Link 
              to='/contact'
              className='lg:border-3 border-2 hover:border-[#D3FD50] hover:bg-[#D3FD50] hover:text-black lg:h-20 h-16 flex items-center justify-center px-12 lg:px-16 border-white rounded-full uppercase transition-all duration-300 cursor-pointer group inline-flex'
            >
              <span className='font-[font2] text-xl lg:text-2xl group-hover:scale-105 transition-transform duration-300'>
                Get Started Today
              </span>
            </Link>
            
            <Link 
              to='/projects'
              className='lg:border-3 border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white lg:h-20 h-16 flex items-center justify-center px-12 lg:px-16 rounded-full uppercase transition-all duration-300 cursor-pointer group inline-flex'
            >
              <span className='font-[font2] text-xl lg:text-2xl group-hover:scale-105 transition-transform duration-300'>
                View Our Work
              </span>
            </Link>
          </div>

          <div className='mt-16 grid lg:grid-cols-3 grid-cols-1 gap-8 text-center'>
            <div className='space-y-2'>
              <div className='text-3xl lg:text-4xl font-[font2] text-[#D3FD50]'>24h</div>
              <div className='font-[font1] text-sm lg:text-base text-gray-400 uppercase tracking-wide'>Response Time</div>
            </div>
            <div className='space-y-2'>
              <div className='text-3xl lg:text-4xl font-[font2] text-[#D3FD50]'>100%</div>
              <div className='font-[font1] text-sm lg:text-base text-gray-400 uppercase tracking-wide'>Satisfaction Rate</div>
            </div>
            <div className='space-y-2'>
              <div className='text-3xl lg:text-4xl font-[font2] text-[#D3FD50]'>Free</div>
              <div className='font-[font1] text-sm lg:text-base text-gray-400 uppercase tracking-wide'>Initial Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection