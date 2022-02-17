import { useState, useEffect } from 'react'

const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setState(entry.isIntersecting)
        }, { rootMargin }
      )

      element && observer.observe(element.current)

      return () => {
        if (element.current) {
          observer.unobserve(ref.current)
        }
        setState(false)
      }
    }, [])

    return isVisible
}

export { useIntersection }