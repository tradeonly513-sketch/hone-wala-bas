import React, { useRef, useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const CTASection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Use Intersection Observer for more reliable triggering
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { 
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '50px' // Start 50px before entering viewport
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  // Animate when visible
  useGSAP(() => {
    if (!isVisible) return

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.cta-fade')
      
      // Immediate animation without ScrollTrigger
      gsap.fromTo(
        elements,
        { 
          opacity: 0, 
          y: 40,
          visibility: 'hidden'
        },
        {
          opacity: 1,
          y: 0,
          visibility: 'visible',
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.15,
          delay: 0.1 // Small delay for smoothness
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [isVisible]) // Re-run when visibility changes

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative z-30 flex items-center"
    >
      <div className="container mx-auto lg:px-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="cta-fade font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight" style={{ opacity: 0 }}>
            Ready to Create Magic?
          </h2>

          <p className="cta-fade font-[font1] lg:text-2xl text-xl leading-relaxed text-gray-300 mb-12 lg:max-w-3xl max-w-xl mx-auto" style={{ opacity: 0 }}>
            Transformons votre jour spécial en un chef-d'œuvre cinématographique qui raconte votre histoire unique.
          </p>

          <div className="cta-fade space-y-6 lg:space-y-0 lg:space-x-6 lg:flex lg:justify-center lg:items-center" style={{ opacity: 0 }}>
            <Link
              to="/contact"
              className="lg:border-3 border-2 hover:border-[#D3FD50] hover:bg-[#D3FD50] hover:text-black lg:h-20 h-16 flex items-center justify-center px-12 lg:px-16 border-white rounded-full uppercase transition-all duration-300 cursor-pointer group inline-flex"
            >
              <span className="font-[font2] text-xl lg:text-2xl group-hover:scale-105 transition-transform duration-300">
                Get Started Today
              </span>
            </Link>

            <Link
              to="/projects"
              className="lg:border-3 border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white lg:h-20 h-16 flex items-center justify-center px-12 lg:px-16 rounded-full uppercase transition-all duration-300 cursor-pointer group inline-flex"
            >
              <span className="font-[font2] text-xl lg:text-2xl group-hover:scale-105 transition-transform duration-300">
                View Our Work
              </span>
            </Link>
          </div>

          <div className="cta-fade mt-16 grid lg:grid-cols-3 grid-cols-1 gap-8 text-center" style={{ opacity: 0 }}>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-[font2] text-[#D3FD50]">24h</div>
              <div className="font-[font1] text-sm lg:text-base text-gray-400 uppercase tracking-wide">
                Response Time
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-[font2] text-[#D3FD50]">100%</div>
              <div className="font-[font1] text-sm lg:text-base text-gray-400 uppercase tracking-wide">
                Satisfaction Rate
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-[font2] text-[#D3FD50]">Free</div>
              <div className="font-[font1] text-sm lg:text-base text-gray-400 uppercase tracking-wide">
                Initial Consultation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection