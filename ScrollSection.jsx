import { useRef, useEffect } from 'react'

export default function ScrollSection({ 
  children, 
  className = '', 
  animationType = 'fadeUp',
  threshold = 0.1 
}) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const element = sectionRef.current
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
        rootMargin: '0px 0px -50px 0px',
      }
    )

    observer.observe(element)

    // Add animation type class
    element.classList.add(`scroll-animate-${animationType}`)

    return () => {
      if (element) {
        observer.unobserve(element)
        element.classList.remove(`scroll-animate-${animationType}`)
      }
    }
  }, [animationType, threshold])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}



