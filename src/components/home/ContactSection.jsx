import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const ContactSection = () => {
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.contact-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Info blocks animation
      gsap.fromTo(
        '.contact-info',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      // ✅ fallback if already visible (desktop on load)
      if (sectionRef.current.getBoundingClientRect().top < window.innerHeight) {
        gsap.to('.contact-title, .contact-info', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          overwrite: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/s111khar', icon: '📷' },
    { name: 'Facebook', url: 'https://facebook.com/k72wedding', icon: '📘' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/k72wedding', icon: '💼' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative z-30"
    >
      <div className="container mx-auto lg:px-12 px-6 lg:py-24 py-16">
        <div className="text-center mb-16">
          <h2 className="contact-title font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight">
            Get In Touch
          </h2>
          <p className="font-[font1] lg:text-xl text-lg lg:max-w-3xl max-w-xl mx-auto leading-relaxed text-gray-300">
            The first step to your perfect film is a simple hello. Reach out to us today :)
          </p>
        </div>

        <div className="contact-grid grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="contact-info space-y-4">
              <h3 className="font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50]">
                Contact Details
              </h3>
              <div className="space-y-3 font-[font1] text-lg lg:text-xl text-gray-300">
                <p>📧 contact@amouraworks.com</p>
                <p>📍 22 ruelle du Clerc, 59126, Linselles (France)</p>
                <p>🕒 M–F: 9am – 7pm (UTC+1)</p>
              </div>
            </div>

            <div className="contact-info space-y-4">
              <h3 className="font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50]">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-800 hover:bg-[#D3FD50] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <span className="text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-info">
              <div className="bg-gray-900 rounded-2xl p-6 lg:p-8">
                <h4 className="font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4">
                  Quick Response Guarantee
                </h4>
                <p className="font-[font1] text-base lg:text-lg text-gray-300 leading-relaxed">
                  We respond to all inquiries within 24 hours. Your project deserves our immediate attention.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="contact-info">
            <div className="bg-gray-900 rounded-2xl p-8 lg:p-10">
              <h3 className="font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50] mb-8">
                Quick Inquiry
              </h3>

              <form className="space-y-6">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300"
                />

                <input
                  type="date"
                  placeholder="Wedding Date"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300"
                />

                <textarea
                  placeholder="Tell us about your wedding vision..."
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full lg:h-14 h-12 bg-[#D3FD50] hover:bg-[#b8e03e] text-black font-[font2] text-lg lg:text-xl uppercase rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
