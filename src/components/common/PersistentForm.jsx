import React, { useState, useEffect } from 'react'
import { saveFormData, loadFormData, clearFormData } from '../../utils/persistenceHelpers'

const PersistentForm = ({ formId, onSubmit, children, className = '' }) => {
  const [formData, setFormData] = useState({})

  // Load saved form data on mount
  useEffect(() => {
    const savedData = loadFormData(formId)
    if (savedData && Object.keys(savedData).length > 0) {
      setFormData(savedData)
    }
  }, [formId])

  // Save form data whenever it changes
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      saveFormData(formId, formData)
    }
  }, [formData, formId])

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(formData)
    }
    // Clear saved data after successful submission
    clearFormData(formId)
    setFormData({})
  }

  // Clone children and inject form props
  const enhancedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        formData,
        onInputChange: handleInputChange
      })
    }
    return child
  })

  return (
    <form onSubmit={handleSubmit} className={className}>
      {enhancedChildren}
    </form>
  )
}

export default PersistentForm