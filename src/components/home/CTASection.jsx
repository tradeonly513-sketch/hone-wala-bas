import React, { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const CTASection = () => {
  const sectionRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.cta-fade')

      // Start hidden (but only via GSAP, not CSS, so we can override)
      gsap.set(elements, { opacity: 0, y: 40 })

      // Timeline animation
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
          onEnter: () => console.log('CTA entered!'),
        }
      }).to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2
      })

      // ✅ Hard fallback — if in view already, show instantly
      if (sectionRef.current.getBoundingClientRect().top < window.innerHeight) {
        gsap.set(elements, { opacity: 1, y: 0 })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // ✅ Extra fallback: ensure visible after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = sectionRef.current?.querySelectorAll('.cta-fade')
      if (elements) gsap.set(elements, { opacity: 1, y: 0 })
    }, 1500) // 1.5s after mount, guarantee visible
    return () => clearTimeout(timer)
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
