import React, { useRef, useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const StatsSection = () => {
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  
  // Configurable stats data for easy editing
  const statsData = [
    {
      number: 2000,
      suffix: '+',
      label: 'Wedding projects completed',
      icon: '💍'
    },
    {
      number: 150,
      suffix: '+',
      label: 'Happy Videographers',
      icon: '🎥'
    },
    {
      number: 8,
      suffix: '',
      label: 'Editors in our team',
      icon: '✂️'
    },
    {
      number: 7,
      suffix: ' yrs',
      label: 'Post-production experience',
      icon: '🏆'
    }
  ]

  gsap.registerPlugin(ScrollTrigger)

  // Counter animation function
  const animateCounter = (element, finalNumber, duration = 2) => {
    const counter = { value: 0 }
    
    gsap.to(counter, {
      value: finalNumber,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        element.textContent = Math.floor(counter.value).toLocaleString()
      }
    })
  }

  useGSAP(() => {
    // Animate section title
    gsap.fromTo('.stats-title',
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
          trigger: '.stats-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Animate stat cards with stagger
    gsap.fromTo('.stat-card',
      {
        opacity: 0,
        y: 40,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.3
        },
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 75%',
          toggleActions: 'play none none none',
          onEnter: () => {
            if (!hasAnimated) {
              // Trigger counter animations
              setTimeout(() => {
                document.querySelectorAll('.counter-number').forEach((counter, index) => {
                  animateCounter(counter, statsData[index].number, 2.5)
                })
                setHasAnimated(true)
              }, 400)
            }
          }
        }
      }
    )
  }, [hasAnimated])

  return (
    <section id="stats" ref={sectionRef} className='min-h-screen bg-gray-50 text-black relative z-30'>
      <div className='container mx-auto lg:px-12 px-6 lg:py-24 py-16'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='stats-title font-[font2] lg:text-[6vw] text-5xl uppercase mb-8 leading-tight'>
            A Few Stats About Us
          </h2>
        </div>

        {/* Stats Grid */}
        <div className='stats-grid grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 lg:max-w-5xl max-w-3xl mx-auto'>
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className='stat-card group bg-white hover:bg-gray-100 rounded-2xl p-8 lg:p-12 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 text-center'
            >
              {/* Icon */}
              <div className='text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                {stat.icon}
              </div>
              
              {/* Number */}
              <div className='mb-4'>
                <span className='counter-number font-[font2] text-4xl lg:text-5xl text-[#D3FD50] group-hover:text-black transition-colors duration-300'>
                  0
                </span>
                <span className='font-[font2] text-4xl lg:text-5xl text-[#D3FD50] group-hover:text-black transition-colors duration-300'>
                  {stat.suffix}
                </span>
              </div>
              
              {/* Label */}
              <p className='font-[font1] text-lg lg:text-xl leading-relaxed text-gray-700 group-hover:text-gray-900 transition-colors duration-300'>
                {stat.label}
              </p>

              {/* Hover accent line */}
              <div className='w-0 group-hover:w-full h-1 bg-[#D3FD50] transition-all duration-500 mt-6 rounded-full mx-auto'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection