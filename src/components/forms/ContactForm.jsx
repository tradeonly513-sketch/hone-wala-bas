import React from 'react'
import PersistentForm from '../common/PersistentForm'

const ContactForm = () => {
  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
  }

  return (
    <div className='bg-gray-900 rounded-2xl p-8 lg:p-10'>
      <h2 className='font-[font2] text-3xl lg:text-4xl uppercase text-[#D3FD50] mb-8'>
        Inquire Now
      </h2>
      
      <PersistentForm 
        formId="contact-inquiry" 
        onSubmit={handleSubmit}
        className='space-y-6'
      >
        <ContactFormFields />
      </PersistentForm>
    </div>
  )
}

const ContactFormFields = ({ formData = {}, onInputChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    if (onInputChange) {
      onInputChange(name, value)
    }
  }

  return (
    <>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
        <input 
          type="text" 
          name="firstName"
          placeholder="First Name *"
          value={formData.firstName || ''}
          onChange={handleChange}
          required
          className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
        />
        <input 
          type="text" 
          name="lastName"
          placeholder="Last Name *"
          value={formData.lastName || ''}
          onChange={handleChange}
          required
          className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
        />
      </div>
      
      <input 
        type="email" 
        name="email"
        placeholder="Email Address *"
        value={formData.email || ''}
        onChange={handleChange}
        required
        className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
      />
      
      <input 
        type="tel" 
        name="phone"
        placeholder="Phone Number"
        value={formData.phone || ''}
        onChange={handleChange}
        className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
      />
      
      <input 
        type="date" 
        name="weddingDate"
        placeholder="Wedding Date *"
        value={formData.weddingDate || ''}
        onChange={handleChange}
        required
        className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
      />
      
      <input 
        type="text" 
        name="venue"
        placeholder="Wedding Venue"
        value={formData.venue || ''}
        onChange={handleChange}
        className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
      />
      
      <select 
        name="package"
        value={formData.package || ''}
        onChange={handleChange}
        className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
      >
        <option value="">Select Package</option>
        <option value="essential">Essential Package</option>
        <option value="premium">Premium Package</option>
        <option value="luxury">Luxury Package</option>
        <option value="custom">Custom Package</option>
      </select>
      
      <textarea 
        name="message"
        placeholder="Tell us about your wedding vision, special requests, or any questions you have..."
        value={formData.message || ''}
        onChange={handleChange}
        rows="5"
        className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300 resize-none'
      />
      
      <button 
        type="submit"
        className='w-full lg:h-16 h-14 bg-[#D3FD50] hover:bg-[#b8e03e] text-black font-[font2] text-xl lg:text-2xl uppercase rounded-lg transition-all duration-300 hover:scale-105'
      >
        Send Inquiry
      </button>
    </>
  )
}

export default ContactForm