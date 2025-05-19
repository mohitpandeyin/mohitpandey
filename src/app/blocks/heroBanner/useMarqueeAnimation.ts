'use client'

import { useEffect } from 'react'

export const useMarqueeAnimation = () => {
  useEffect(() => {
    // This function will be executed on the client side
    const marqueeContentWraps = document.querySelectorAll('.sz-marquee-content-wrap')
    
    console.log('Marquee wrapper elements found:', marqueeContentWraps.length)
    
    // Define handler functions to avoid anonymous functions in event listeners
    const handleMouseEnter = (event: Event) => {
      const wrap = event.currentTarget as HTMLElement
      const marquees = wrap.querySelectorAll('.marquee')
      marquees.forEach(marquee => {
        (marquee as HTMLElement).style.animationPlayState = 'paused'
      })
    }
    
    const handleMouseLeave = (event: Event) => {
      const wrap = event.currentTarget as HTMLElement
      const marquees = wrap.querySelectorAll('.marquee')
      marquees.forEach(marquee => {
        (marquee as HTMLElement).style.animationPlayState = 'running'
      })
    }

    marqueeContentWraps.forEach(wrap => {
      // Add hover event listeners
      wrap.addEventListener('mouseenter', handleMouseEnter)
      wrap.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      // Cleanup event listeners
      marqueeContentWraps.forEach(wrap => {
        wrap.removeEventListener('mouseenter', handleMouseEnter)
        wrap.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])
}
