import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ServicesSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo('.services-title',
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
          trigger: '.services-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo('.service-card',
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
          amount: 0.4
        },
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  const services = [
    {
      icon: '🎬',
      title: 'Wedding Cinematography',
      description: 'Cinematic storytelling that captures every precious moment of your special day with artistic flair.',
      features: ['4K Ultra HD', 'Drone Footage', 'Multiple Angles', 'Same-Day Highlights']
    },
    {
      icon: '📸',
      title: 'Photography',
      description: 'Professional wedding photography that preserves memories with stunning visual artistry.',
      features: ['High Resolution', 'RAW Processing', 'Quick Turnaround', 'Online Gallery']
    },
    {
      icon: '✂️',
      title: 'Post-Production',
      description: 'Expert editing and color grading to transform raw footage into cinematic masterpieces.',
      features: ['Color Grading', 'Audio Enhancement', 'Motion Graphics', 'Custom Music']
    },
    {
      icon: '🎵',
      title: 'Live Streaming',
      description: 'Share your special moments with loved ones who cannot attend in person.',
      features: ['HD Quality', 'Multiple Cameras', 'Real-time Streaming', 'Recording Included']
    }
  ]

  return (
    <section id="services" ref={sectionRef} className='min-h-screen bg-white text-black relative z-30'>
      <div className='container mx-auto lg:px-12 px-6 lg:py-24 py-16'>
        <div className='text-center mb-16'>
          <h2 className='services-title font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight'>
            Services
          </h2>
          <p className='font-[font1] lg:text-xl text-lg lg:max-w-3xl max-w-xl mx-auto leading-relaxed text-gray-700'>
            Des services complets pour immortaliser votre mariage avec l'excellence que vous méritez.
          </p>
        </div>

        <div className='services-grid grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12'>
          {services.map((service, index) => (
            <div 
              key={index}
              className='service-card group bg-gray-50 hover:bg-gray-100 rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-2'
            >
              <div className='text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                {service.icon}
              </div>
              
              <div className='space-y-4 mb-6'>
                <h3 className='font-[font2] text-2xl lg:text-3xl uppercase text-black group-hover:text-[#D3FD50] transition-colors duration-300'>
                  {service.title}
                </h3>
                <p className='font-[font1] text-base lg:text-lg leading-relaxed text-gray-600'>
                  {service.description}
                </p>
              </div>

              <ul className='space-y-2'>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center font-[font1] text-sm lg:text-base text-gray-600'>
                    <span className='w-2 h-2 bg-[#D3FD50] rounded-full mr-3 group-hover:scale-125 transition-transform duration-300'></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className='w-0 group-hover:w-full h-1 bg-[#D3FD50] transition-all duration-500 mt-6 rounded-full'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection