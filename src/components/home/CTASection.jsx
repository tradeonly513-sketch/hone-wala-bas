import React, { useRef, useLayoutEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const CTASection = () => {
  const sectionRef = useRef(null)

  // Register plugin outside of useGSAP
  gsap.registerPlugin(ScrollTrigger)

  // Use useLayoutEffect to ensure DOM is painted before animations
  useLayoutEffect(() => {
    // Force ScrollTrigger to recalculate all positions
    ScrollTrigger.refresh()
  }, [])

  useGSAP(() => {
    // Small delay to ensure everything is loaded
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const elements = gsap.utils.toArray('.cta-fade')
        
        // Check if elements exist
        if (!elements.length) return

        // Create timeline with ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',  // Trigger earlier
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            // Force refresh on creation
            onRefresh: () => ScrollTrigger.refresh(),
            // Add markers for debugging (remove in production)
            // markers: true,
          },
        })

        tl.fromTo(
          elements,
          { 
            opacity: 0, 
            y: 40,
            visibility: 'hidden' // Prevent flash
          },
          {
            opacity: 1,
            y: 0,
            visibility: 'visible',
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.15,
            clearProps: 'all' // Clean up inline styles after animation
          }
        )

        // Check if section is already in viewport on load
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // If visible, play animation immediately
          tl.progress(1)
        }

        // Refresh ScrollTrigger after fonts load
        document.fonts.ready.then(() => {
          ScrollTrigger.refresh()
        })

      }, sectionRef)

      return () => {
        ctx.revert()
        clearTimeout(timer)
      }
    }, 100) // 100ms delay

    return () => clearTimeout(timer)
  }, [])

  // Additional refresh on window load
  useLayoutEffect(() => {
    const handleLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', handleLoad)
    
    // Also refresh on resize
    const handleResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative z-30 flex items-center"
    >
      <div className="container mx-auto lg:px-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="cta-fade font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight">
            Ready to Create Magic?
          </h2>

          <p className="cta-fade font-[font1] lg:text-2xl text-xl leading-relaxed text-gray-300 mb-12 lg:max-w-3xl max-w-xl mx-auto">
            Transformons votre jour spécial en un chef-d'œuvre cinématographique qui raconte votre histoire unique.
          </p>

          <div className="cta-fade space-y-6 lg:space-y-0 lg:space-x-6 lg:flex lg:justify-center lg:items-center">
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

          <div className="cta-fade mt-16 grid lg:grid-cols-3 grid-cols-1 gap-8 text-center">
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