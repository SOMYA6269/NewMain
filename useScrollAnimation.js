import { useEffect, useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const elementRef = useRef(null)
  const { 
    threshold = 0.1, 
    rootMargin = '0px',
    animationType = 'fadeUp' // fadeUp, fadeIn, slideLeft, slideRight
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin])

  // Add animation type class
  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    element.classList.add(`scroll-animate-${animationType}`)
    
    return () => {
      element.classList.remove(`scroll-animate-${animationType}`)
    }
  }, [animationType])

  return elementRef
}

export default useScrollAnimation



