'use client'

import React, { useEffect } from 'react'
import { useMarqueeAnimation } from './useMarqueeAnimation'

export default function HeroBannerClient({ children }: { children: React.ReactNode }) {
  // Initialize the marquee animation with the hook
  useMarqueeAnimation()

  // Add a log to confirm the client component is rendering
  useEffect(() => {
    console.log('HeroBannerClient component mounted')

    // Add a check for marquee elements after mounting
    setTimeout(() => {
      const marqueeElements = document.querySelectorAll('.sz-marquee-content-wrap')
      const marqueeContents = document.querySelectorAll('.marquee')
      console.log('Found marquee elements after timeout:', {
        wrappers: marqueeElements.length,
        contents: marqueeContents.length,
      })
    }, 1000)
  }, [])

  return <div className="hero-banner-client-wrapper">{children}</div>
}
