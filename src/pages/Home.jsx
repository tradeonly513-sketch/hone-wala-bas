import React, { useRef, useContext, useEffect } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import WhyUsSection from '../components/home/WhyUsSection'
import PortfolioSection from '../components/home/PortfolioSection'
import StatsSection from '../components/home/StatsSection'
import ServicesSection from '../components/home/ServicesSection'
import ProcessSection from '../components/home/ProcessSection'
import CTASection from '../components/home/CTASection'
import AboutSection from '../components/home/AboutSection'
import ContactSection from '../components/home/ContactSection'
import Footer from '../components/home/Footer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
  const heroSectionRef = useRef(null)

  useGSAP(() => {
    // Smooth fade-in animation for hero content
    gsap.fromTo('.hero-content', 
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5
      }
    )
  })

  return (
    <div className='text-white relative'>
      {/* Fixed video background */}
      <div className='h-screen w-screen fixed top-0 left-0 z-0'>
        <Video />
        {/* Dark overlay for better text readability */}
        <div className='absolute inset-0 bg-black/30 z-10'></div>
      </div>
      
      {/* Scrollable content */}
      <div className='relative z-20'>
        {/* Hero Section */}
        <div ref={heroSectionRef} className='h-screen w-screen relative pb-5 flex flex-col justify-between hero-content'>
          <HomeHeroText />
          <HomeBottomText />
        </div>
        
        {/* Why Us Section */}
        <WhyUsSection />
        
        {/* Portfolio Section */}
        <PortfolioSection />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Process Section */}
        <ProcessSection />
        
        {/* Call-to-Action Section */}
        <CTASection />
        
        {/* About Us Section */}
        <AboutSection />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  )
}

export default Home