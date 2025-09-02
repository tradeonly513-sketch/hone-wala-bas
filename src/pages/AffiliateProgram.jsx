import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/common/PageWrapper'

const AffiliateProgram = () => {
  const benefits = [
    {
      icon: '💰',
      title: '15% Lifetime Commission',
      description: 'Earn 15% commission on every client you refer, for the lifetime of their relationship with us.'
    },
    {
      icon: '🎯',
      title: 'High Conversion Rate',
      description: 'Our premium services and proven track record ensure high conversion rates for your referrals.'
    },
    {
      icon: '📊',
      title: 'Real-Time Tracking',
      description: 'Monitor your referrals and earnings with our comprehensive affiliate dashboard.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: 'Get personalized support from our affiliate team to maximize your earning potential.'
    }
  ]

  const requirements = [
    'Active social media presence or professional network',
    'Alignment with our brand values and quality standards',
    'Commitment to promoting our services authentically',
    'Minimum of 1 referral every 6 months to maintain active status'
  ]

  const faqItems = [
    {
      question: 'How do I get paid?',
      answer: 'Commissions are paid monthly via bank transfer or PayPal, with a minimum payout threshold of €100.'
    },
    {
      question: 'When do I receive my commission?',
      answer: 'Commissions are paid 30 days after the client\'s final payment to ensure completed transactions.'
    },
    {
      question: 'Can I refer international clients?',
      answer: 'Yes! We work with clients worldwide and provide remote consultation and planning services.'
    },
    {
      question: 'Is there a limit to how much I can earn?',
      answer: 'No limits! The more qualified referrals you bring, the more you earn. Top affiliates earn €5,000+ monthly.'
    }
  ]

  return (
    <PageWrapper className='bg-white text-black'>
      <div className='container mx-auto lg:px-12 px-6 py-24'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <h1 className='font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight'>
              Affiliate Program
            </h1>
            <p className='font-[font1] lg:text-xl text-lg lg:max-w-3xl max-w-xl mx-auto leading-relaxed text-gray-700'>
              Rejoignez notre programme d'affiliation et gagnez des commissions en recommandant nos services de vidéographie de mariage premium.
            </p>
          </div>

          {/* Commission Highlight */}
          <div className='text-center mb-16'>
            <div className='bg-[#D3FD50] rounded-2xl p-8 lg:p-12 inline-block'>
              <h2 className='font-[font2] text-4xl lg:text-6xl uppercase text-black mb-4'>
                15% Lifetime
              </h2>
              <p className='font-[font1] text-xl lg:text-2xl text-black'>
                Commission Rate
              </p>
            </div>
          </div>

          {/* Program Overview */}
          <section className='mb-16'>
            <h2 className='font-[font2] text-3xl lg:text-4xl uppercase text-black mb-8 text-center'>
              Program Overview
            </h2>
            <div className='bg-gray-50 rounded-2xl p-8 lg:p-12'>
              <p className='font-[font1] text-lg lg:text-xl leading-relaxed text-gray-700 text-center'>
                Our affiliate program is designed for wedding professionals, influencers, and anyone with connections in the wedding industry. 
                Earn substantial commissions by referring couples to our premium wedding videography services.
              </p>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className='mb-16'>
            <h2 className='font-[font2] text-3xl lg:text-4xl uppercase text-black mb-12 text-center'>
              Program Benefits
            </h2>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12'>
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className='group bg-gray-50 hover:bg-gray-100 rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-2'
                >
                  <div className='text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                    {benefit.icon}
                  </div>
                  
                  <div className='space-y-4'>
                    <h3 className='font-[font2] text-2xl lg:text-3xl uppercase text-black group-hover:text-[#D3FD50] transition-colors duration-300'>
                      {benefit.title}
                    </h3>
                    <p className='font-[font1] text-base lg:text-lg leading-relaxed text-gray-600'>
                      {benefit.description}
                    </p>
                  </div>

                  <div className='w-0 group-hover:w-full h-1 bg-[#D3FD50] transition-all duration-500 mt-6 rounded-full'></div>
                </div>
              ))}
            </div>
          </section>

          {/* Requirements */}
          <section className='mb-16'>
            <h2 className='font-[font2] text-3xl lg:text-4xl uppercase text-black mb-8 text-center'>
              Eligibility Requirements
            </h2>
            <div className='bg-gray-50 rounded-2xl p-8 lg:p-12'>
              <ul className='space-y-4'>
                {requirements.map((requirement, index) => (
                  <li key={index} className='flex items-start space-x-4'>
                    <span className='w-6 h-6 bg-[#D3FD50] rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
                      <span className='text-black text-sm font-bold'>{index + 1}</span>
                    </span>
                    <p className='font-[font1] text-lg leading-relaxed text-gray-700'>
                      {requirement}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Sign-up Process */}
          <section className='mb-16'>
            <h2 className='font-[font2] text-3xl lg:text-4xl uppercase text-black mb-8 text-center'>
              How to Join
            </h2>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-6 lg:gap-8'>
              {[
                { step: '01', title: 'Apply', desc: 'Submit your application with your background and referral strategy' },
                { step: '02', title: 'Review', desc: 'Our team reviews your application within 48 hours' },
                { step: '03', title: 'Approval', desc: 'Receive your unique affiliate link and marketing materials' },
                { step: '04', title: 'Earn', desc: 'Start referring clients and earning 15% lifetime commissions' }
              ].map((item, index) => (
                <div key={index} className='text-center space-y-4'>
                  <div className='w-16 h-16 bg-[#D3FD50] rounded-full flex items-center justify-center mx-auto'>
                    <span className='font-[font2] text-xl text-black'>{item.step}</span>
                  </div>
                  <h3 className='font-[font2] text-xl uppercase text-black'>{item.title}</h3>
                  <p className='font-[font1] text-base leading-relaxed text-gray-600'>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className='mb-16'>
            <h2 className='font-[font2] text-3xl lg:text-4xl uppercase text-black mb-8 text-center'>
              Frequently Asked Questions
            </h2>
            <div className='space-y-6'>
              {faqItems.map((faq, index) => (
                <div key={index} className='bg-gray-50 rounded-xl p-6 lg:p-8'>
                  <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4'>
                    {faq.question}
                  </h3>
                  <p className='font-[font1] text-lg leading-relaxed text-gray-700'>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* AmouraWorks Branding */}
          <section className='mb-16'>
            <div className='bg-black rounded-2xl p-8 lg:p-12 text-center'>
              <h3 className='font-[font2] text-3xl lg:text-4xl uppercase text-[#D3FD50] mb-6'>
                Powered by AmouraWorks
              </h3>
              <p className='font-[font1] text-lg lg:text-xl text-gray-300 leading-relaxed mb-8'>
                Notre programme d'affiliation est géré par AmouraWorks, garantissant des paiements fiables, un suivi transparent et un support professionnel.
              </p>
              <div className='inline-flex items-center space-x-4'>
                <div className='w-12 h-12 bg-[#D3FD50] rounded-full flex items-center justify-center'>
                  <span className='font-[font2] text-black text-xl'>A</span>
                </div>
                <span className='font-[font2] text-2xl lg:text-3xl text-white uppercase'>
                  AmouraWorks
                </span>
              </div>
            </div>
          </section>

          {/* Contact for Affiliates */}
          <section className='mb-16'>
            <h2 className='font-[font2] text-3xl lg:text-4xl uppercase text-black mb-8 text-center'>
              Affiliate Support
            </h2>
            <div className='bg-gray-100 rounded-xl p-6 lg:p-8 text-center'>
              <p className='font-[font1] text-lg text-gray-700 mb-4'>
                Questions about the affiliate program? Our dedicated team is here to help.
              </p>
              <div className='space-y-2'>
                <p className='font-[font1] text-lg text-gray-700'>
                  <strong>Email:</strong> affiliates@amouraworks.com
                </p>
                <p className='font-[font1] text-lg text-gray-700'>
                  <strong>Response Time:</strong> Within 24 hours
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className='text-center'>
            <Link 
              to='/contact'
              className='lg:border-3 border-2 hover:border-[#D3FD50] hover:bg-[#D3FD50] hover:text-black lg:h-16 h-12 flex items-center justify-center px-12 lg:px-16 border-black rounded-full uppercase transition-all duration-300 cursor-pointer group inline-flex'
            >
              <span className='font-[font2] text-lg lg:text-xl group-hover:scale-105 transition-transform duration-300'>
                Apply Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default AffiliateProgram