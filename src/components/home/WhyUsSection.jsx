import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';

const WhyUsSection = () => {
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Animate section title
    gsap.fromTo(
      '.why-us-title',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.why-us-title',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate intro text
    gsap.fromTo(
      '.intro-text',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.intro-text',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate benefit cards with stagger
    gsap.fromTo(
      '.benefit-card',
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: {
          amount: 0.4,
        },
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  const benefits = [
    {
      icon: '⚡',
      title: 'Creative Spark',
      description:
        'We ignite the creative process with innovative thinking that transforms brands into memorable experiences.',
    },
    {
      icon: '🎯',
      title: 'Strategic Focus',
      description:
        'Every decision is made with long-term brand building in mind, ensuring sustainable growth and influence.',
    },
    {
      icon: '🔥',
      title: 'Authentic Friction',
      description:
        'We create the right tension that generates emotion and builds genuine connections with your audience.',
    },
    {
      icon: '💎',
      title: 'Unfiltered Honesty',
      description:
        'We tell you what needs to be said and do what needs to be done, ensuring transparent partnerships.',
    },
  ];

  return (
    <section
      id="why-us"
      className="min-h-screen bg-white text-black relative z-30"
    >
      <div className="container mx-auto lg:px-12 px-6 lg:py-24 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="why-us-title font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight">
          Get to Know the Amoura Promise
          </h2>
          <p className="intro-text font-[font1] lg:text-xl text-lg lg:max-w-3xl max-w-xl mx-auto leading-relaxed text-gray-700">
            Creative • Reliable • Timely
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 lg:max-w-6xl max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group bg-gray-50 hover:bg-gray-100 rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-6xl lg:text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-[font2] text-2xl lg:text-3xl uppercase text-black group-hover:text-[#D3FD50] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="font-[font1] text-base lg:text-lg leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="w-0 group-hover:w-full h-1 bg-[#D3FD50] transition-all duration-500 mt-6 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
