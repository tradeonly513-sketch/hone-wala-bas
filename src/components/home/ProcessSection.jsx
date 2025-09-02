import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ProcessSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo('.process-title',
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
          trigger: '.process-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo('.process-step',
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.6
        },
        scrollTrigger: {
          trigger: '.process-timeline',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your vision, preferences, and wedding details to understand your unique story.',
      duration: '1-2 hours'
    },
    {
      step: '02',
      title: 'Planning & Preparation',
      description: 'We create a detailed shooting plan, scout locations, and coordinate with your wedding planner.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Wedding Day Coverage',
      description: 'Our team captures every moment with professional equipment and artistic expertise.',
      duration: '8-12 hours'
    },
    {
      step: '04',
      title: 'Post-Production Magic',
      description: 'Expert editing, color grading, and audio enhancement to create your cinematic masterpiece.',
      duration: '4-6 weeks'
    },
    {
      step: '05',
      title: 'Final Delivery',
      description: 'Receive your complete wedding film package with highlights reel and full ceremony footage.',
      duration: 'Digital delivery'
    }
  ]

  return (
    <section id="process" ref={sectionRef} className='min-h-screen bg-gray-50 text-black relative z-30'>
      <div className='container mx-auto lg:px-12 px-6 lg:py-24 py-16'>
        <div className='text-center mb-16'>
          <h2 className='process-title font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight'>
            Our Process
          </h2>
          <p className='font-[font1] lg:text-xl text-lg lg:max-w-3xl max-w-xl mx-auto leading-relaxed text-gray-700'>
            Un processus éprouvé qui garantit des résultats exceptionnels à chaque étape de votre projet.
          </p>
        </div>

        <div className='process-timeline max-w-4xl mx-auto'>
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className='process-step flex items-start mb-12 lg:mb-16 group'
            >
              {/* Step Number */}
              <div className='flex-shrink-0 mr-8'>
                <div className='w-16 h-16 lg:w-20 lg:h-20 bg-[#D3FD50] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <span className='font-[font2] text-xl lg:text-2xl text-black'>
                    {step.step}
                  </span>
                </div>
              </div>

              {/* Step Content */}
              <div className='flex-1 pt-2'>
                <div className='bg-white rounded-2xl p-6 lg:p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1'>
                  <div className='flex justify-between items-start mb-4'>
                    <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-black group-hover:text-[#D3FD50] transition-colors duration-300'>
                      {step.title}
                    </h3>
                    <span className='font-[font1] text-sm lg:text-base text-gray-500 bg-gray-100 px-3 py-1 rounded-full'>
                      {step.duration}
                    </span>
                  </div>
                  <p className='font-[font1] text-base lg:text-lg leading-relaxed text-gray-600'>
                    {step.description}
                  </p>
                  
                  {/* Progress line */}
                  {index < processSteps.length - 1 && (
                    <div className='absolute left-8 lg:left-10 top-20 lg:top-24 w-0.5 h-12 lg:h-16 bg-gray-300 group-hover:bg-[#D3FD50] transition-colors duration-300'></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection