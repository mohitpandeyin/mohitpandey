'use client'

import { useEffect } from 'react'

export const useMarqueeAnimation = () => {
  useEffect(() => {
    // This function will be executed on the client side
    console.log('Marquee animation effect running')

    // Target the original marquee implementation
    const marqueeContentWraps = document.querySelectorAll('.sz-marquee-content-wrap')
    console.log('Marquee wrapper elements found:', marqueeContentWraps.length)

    // Since our CSS already handles the hover functionality with animation-play-state,
    // we don't need to add event listeners here.
    // The original implementation uses CSS for this:
    // .sz-marquee-content-wrap:hover .marquee { animation-play-state: paused; }

    // Additional enhancements, but keeping the original behavior
    const adjustMarquee = () => {
      const marquees = document.querySelectorAll('.marquee')
      marquees.forEach((marquee) => {
        // Make sure the animation is set correctly
        if (!marquee.style.animation || !marquee.style.animation.includes('marquee')) {
          marquee.style.animation = 'marquee 100s linear infinite'
        }
      })
    }

    // Call once on load
    adjustMarquee()

    // Also adjust on window resize
    window.addEventListener('resize', adjustMarquee)

    return () => {
      window.removeEventListener('resize', adjustMarquee)
    }
  }, [])
}
