import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Animate footer content
    gsap.fromTo('.footer-content',
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
          trigger: '.footer-content',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  const quickLinks = [
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Affiliates', href: '#affiliates' }
  ]

  return (
    <footer ref={footerRef} className='bg-black text-white relative z-30'>
      <div className='container mx-auto lg:px-12 px-6 lg:py-20 py-12'>
        {/* Main CTA Section */}
        <div className='text-center mb-16 footer-content'>
          <h2 className='font-[font2] lg:text-[6vw] text-5xl uppercase mb-8 leading-tight'>
            Let's Talk About Your Project
          </h2>
          <div className='inline-flex items-center'>
            <button className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] hover:bg-[#D3FD50] hover:text-black lg:h-16 h-12 flex items-center px-8 lg:px-12 border-white rounded-full uppercase transition-all duration-300 cursor-pointer group'>
              <span className='font-[font2] text-lg lg:text-xl group-hover:scale-105 transition-transform duration-300'>
                Inquire Now
              </span>
            </button>
          </div>
        </div>

        {/* Footer Information Grid */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 mb-12'>
          {/* Quick Links */}
          <div className='footer-content space-y-4'>
            <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-6'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('portfolio')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className='font-[font1] text-base lg:text-lg text-gray-300 hover:text-[#D3FD50] transition-colors duration-300 hover:underline text-left'
                >
                  Our Portfolio0
                </button>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className='font-[font1] text-base lg:text-lg text-gray-300 hover:text-[#D3FD50] transition-colors duration-300 hover:underline'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy"
                  className='font-[font1] text-base lg:text-lg text-gray-300 hover:text-[#D3FD50] transition-colors duration-300 hover:underline'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service"
                  className='font-[font1] text-base lg:text-lg text-gray-300 hover:text-[#D3FD50] transition-colors duration-300 hover:underline'
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/affiliate-program"
                  className='font-[font1] text-base lg:text-lg text-gray-300 hover:text-[#D3FD50] transition-colors duration-300 hover:underline'
                >
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Address */}
          <div className='footer-content space-y-4'>
            <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-6'>
              Address
            </h3>
            <div className='font-[font1] text-base lg:text-lg text-gray-300 leading-relaxed'>
              <p>22 ruelle du Clerc</p>
              <p>59126, Linselles</p>
              <p>(France)</p>
            </div>
          </div>

          {/* Hours of Operation */}
          <div className='footer-content space-y-4'>
            <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-6'>
              Hours
            </h3>
            <div className='font-[font1] text-base lg:text-lg text-gray-300 space-y-2'>
              <p>M–F: 9am – 7pm (UTC+1)</p>
              <p>Saturday & Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className='footer-content space-y-4'>
            <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-6'>
              Contact
            </h3>
            <div className='font-[font1] text-base lg:text-lg text-gray-300'>
              <a 
                href="mailto:contact@amouraworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:text-[#D3FD50] transition-colors duration-300 hover:underline'
              >
                contact@amouraworks.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className='border-t border-gray-800 pt-8'>
          <div className='text-center'>
            <p className='font-[font1] text-sm lg:text-base text-gray-500'>
              © 2025 Amoura Works. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer