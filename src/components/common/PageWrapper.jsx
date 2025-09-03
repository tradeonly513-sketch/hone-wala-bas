// src/components/common/PageWrapper.jsx
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/all'

/**
 * PageWrapper ensures ScrollTrigger animations always refresh
 * when a new page loads or route changes.
 */
const PageWrapper = ({ children, className }) => {
  useEffect(() => {
    // ✅ Refresh GSAP ScrollTrigger after mount
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 200)
  }, [])

  return <div className={className}>{children}</div>
}

export default PageWrapper
