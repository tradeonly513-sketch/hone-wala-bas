import React from 'react'
import PageWrapper from '../components/common/PageWrapper'

const PrivacyPolicy = () => {
  return (
    <PageWrapper className='bg-white text-black'>
      <div className='container mx-auto lg:px-12 px-6 py-24'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='font-[font2] lg:text-6xl text-4xl uppercase mb-8 leading-tight'>
            Privacy Policy
          </h1>
          
          <div className='font-[font1] text-sm text-gray-500 mb-12'>
            Last updated: January 15, 2025
          </div>

          <div className='space-y-12'>
            {/* Introduction */}
            <section className='space-y-4'>
              <h2 className='font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50]'>
                Introduction
              </h2>
              <p className='font-[font1] text-lg leading-relaxed text-gray-700'>
                At K72 Wedding Videography, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services or visit our website.
              </p>
            </section>

            {/* Information We Collect */}
            <section className='space-y-4'>
              <h2 className='font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50]'>
                Information We Collect
              </h2>
              <div className='space-y-4'>
                <h3 className='font-[font2] text-xl uppercase text-black'>Personal Information</h3>
                <ul className='font-[font1] text-lg leading-relaxed text-gray-700 space-y-2 list-disc list-inside'>
                  <li>Name, email address, and phone number</li>
                  <li>Wedding date and venue information</li>
                  <li>Communication preferences and special requests</li>
                  <li>Payment and billing information</li>
                </ul>
                
                <h3 className='font-[font2] text-xl uppercase text-black mt-6'>Technical Information</h3>
                <ul className='font-[font1] text-lg leading-relaxed text-gray-700 space-y-2 list-disc list-inside'>
                  <li>IP address and browser information</li>
                  <li>Website usage patterns and preferences</li>
                  <li>Device information and screen resolution</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className='space-y-4'>
              <h2 className='font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50]'>
                How We Use Your Information
              </h2>
              <ul className='font-[font1] text-lg leading-relaxed text-gray-700 space-y-2 list-disc list-inside'>
                <li>To provide and improve our wedding videography services</li>
                <li>To communicate with you about your project and appointments</li>
                <li>To process payments and manage billing</li>
                <li>To send you updates about our services (with your consent)</li>
                <li>To comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section className='space-y-4'>
              <h2 className='font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50]'>
                Data Protection & Security
              </h2>
              <p className='font-[font1] text-lg leading-relaxed text-gray-700'>
                We implement industry-standard security measures to protect your personal information. Your data is encrypted during transmission and stored securely. We regularly review and update our security practices to ensure your information remains protected.
              </p>
            </section>

            {/* Your Rights */}
            <section className='space-y-4'>
              <h2 className='font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50]'>
                Your Rights
              </h2>
              <p className='font-[font1] text-lg leading-relaxed text-gray-700 mb-4'>
                Under applicable data protection laws, you have the right to:
              </p>
              <ul className='font-[font1] text-lg leading-relaxed text-gray-700 space-y-2 list-disc list-inside'>
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your data</li>
                <li>Data portability and withdrawal of consent</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className='space-y-4'>
              <h2 className='font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50]'>
                Contact Us
              </h2>
              <p className='font-[font1] text-lg leading-relaxed text-gray-700'>
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className='bg-gray-100 rounded-xl p-6 space-y-2'>
                <p className='font-[font1] text-lg text-gray-700'>
                  <strong>Email:</strong> privacy@amouraworks.com
                </p>
                <p className='font-[font1] text-lg text-gray-700'>
                  <strong>Address:</strong> 22 ruelle du Clerc, 59126, Linselles (France)
                </p>
                <p className='font-[font1] text-lg text-gray-700'>
                  <strong>Response Time:</strong> Within 30 days of your request
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default PrivacyPolicy