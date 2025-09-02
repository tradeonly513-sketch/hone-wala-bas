import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const AboutSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo('.about-title',
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
          trigger: '.about-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo('.about-content',
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.3
        },
        scrollTrigger: {
          trigger: '.about-grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  return (
    <section id="about" ref={sectionRef} className='min-h-screen bg-white text-black relative z-30'>
      <div className='container mx-auto lg:px-12 px-6 lg:py-24 py-16'>
        <div className='text-center mb-16'>
          <h2 className='about-title font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight'>
            About Us
          </h2>
        </div>

        <div className='about-grid max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-16 items-center mb-16'>
            {/* Story Content */}
            <div className='about-content space-y-6'>
              <h3 className='font-[font2] text-3xl lg:text-4xl uppercase text-[#D3FD50] mb-6'>
                Our Story
              </h3>
              <p className='font-[font1] text-lg lg:text-xl leading-relaxed text-gray-700'>
                K72 est née de la passion de capturer l'essence des moments les plus précieux. Depuis 7 ans, nous transformons les mariages en œuvres cinématographiques qui racontent des histoires authentiques et émouvantes.
              </p>
              <p className='font-[font1] text-lg lg:text-xl leading-relaxed text-gray-700'>
                Notre approche unique combine expertise technique et sensibilité artistique pour créer des souvenirs qui traversent le temps et touchent les cœurs.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className='about-content'>
              <div className='aspect-square rounded-2xl overflow-hidden shadow-xl'>
                <img 
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="K72 team at work"
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                />
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 lg:gap-12'>
            <div className='about-content text-center space-y-4'>
              <div className='text-4xl lg:text-5xl mb-4'>🎯</div>
              <h4 className='font-[font2] text-xl lg:text-2xl uppercase text-black'>
                Vision
              </h4>
              <p className='font-[font1] text-base lg:text-lg leading-relaxed text-gray-600'>
                Créer des films de mariage qui transcendent le temps et capturent l'essence de l'amour.
              </p>
            </div>

            <div className='about-content text-center space-y-4'>
              <div className='text-4xl lg:text-5xl mb-4'>💎</div>
              <h4 className='font-[font2] text-xl lg:text-2xl uppercase text-black'>
                Mission
              </h4>
              <p className='font-[font1] text-base lg:text-lg leading-relaxed text-gray-600'>
                Offrir une expérience exceptionnelle et des souvenirs cinématographiques inoubliables.
              </p>
            </div>

            <div className='about-content text-center space-y-4'>
              <div className='text-4xl lg:text-5xl mb-4'>⚡</div>
              <h4 className='font-[font2] text-xl lg:text-2xl uppercase text-black'>
                Values
              </h4>
              <p className='font-[font1] text-base lg:text-lg leading-relaxed text-gray-600'>
                Authenticité, créativité et excellence dans chaque projet que nous entreprenons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection