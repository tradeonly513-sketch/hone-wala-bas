// Utility functions for managing state persistence

export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.warn('Failed to save to localStorage:', error)
  }
}

export const loadFromLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.warn('Failed to load from localStorage:', error)
    return defaultValue
  }
}

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.warn('Failed to remove from localStorage:', error)
  }
}

// Form data persistence
export const saveFormData = (formId, formData) => {
  saveToLocalStorage(`form_${formId}`, formData)
}

export const loadFormData = (formId) => {
  return loadFromLocalStorage(`form_${formId}`, {})
}

export const clearFormData = (formId) => {
  removeFromLocalStorage(`form_${formId}`)
}

// Scroll position persistence
export const saveScrollPosition = (path) => {
  saveToLocalStorage(`scroll_${path}`, window.scrollY)
}

export const loadScrollPosition = (path) => {
  return loadFromLocalStorage(`scroll_${path}`, 0)
}

// Animation state management
export const setAnimationCompleted = (animationId) => {
  saveToLocalStorage(`animation_${animationId}`, true)
}

export const isAnimationCompleted = (animationId) => {
  return loadFromLocalStorage(`animation_${animationId}`, false)
}