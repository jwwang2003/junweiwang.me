import { useState, useEffect } from 'react'

const useInteraction = (element: React.RefObject<HTMLInputElement>, rootMargin: string) => {
  const [isVisible, setState] = useState<Boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      }, { rootMargin }
    )

    if(element.current)
      element && observer.observe(element.current)

    return() => {
      if(element.current)
        observer.unobserve(element.current)
      
        setState(false)
    }
  }, [element, rootMargin])

  return isVisible
}