'use client'

import React, { useEffect } from 'react'
import { Swiper } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function HeroBannerClient({ children }: { children: React.ReactNode }) {
  // Initialize Swiper for marquee
  useEffect(() => {
    console.log('HeroBannerClient component mounted')

    let swiperInstance: any = null
    let retryCount = 0
    const maxRetries = 20

    // Function to initialize marquee swiper
    const initializeMarqueeSwiper = () => {
      if (retryCount >= maxRetries) {
        console.log('Max retries reached, giving up')
        return
      }

      const marqueeElement = document.querySelector('.sz-marquee-swiper')
      if (marqueeElement) {
        console.log('Initializing marquee swiper')

        // Check if there are slides
        const slides = marqueeElement.querySelectorAll('.swiper-slide')
        console.log('Number of slides found:', slides.length)

        if (slides.length === 0) {
          console.log('No slides found, retrying...', `attempt ${retryCount + 1}/${maxRetries}`)
          retryCount++
          setTimeout(initializeMarqueeSwiper, 200)
          return
        }

        try {
          swiperInstance = new Swiper('.sz-marquee-swiper', {
            modules: [Autoplay],
            spaceBetween: 56,
            centeredSlides: true,
            speed: 6000,
            autoplay: {
              delay: 1,
              disableOnInteraction: true,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: false,
            breakpoints: {
              320: {
                spaceBetween: 20,
              },
              768: {
                spaceBetween: 30,
              },
              1024: {
                spaceBetween: 56,
              },
            },
          })

          console.log('Swiper instance created successfully:', swiperInstance)
        } catch (error) {
          console.error('Error creating Swiper instance:', error)
        }
      } else {
        console.log(
          'Marquee swiper element not found, retrying...',
          `attempt ${retryCount + 1}/${maxRetries}`,
        )
        retryCount++
        setTimeout(initializeMarqueeSwiper, 200)
      }
    }

    // Try to initialize immediately, then retry with increasing delays
    initializeMarqueeSwiper()

    // Also try after specific delays to ensure all elements are rendered
    const timeoutId1 = setTimeout(initializeMarqueeSwiper, 1000)
    const timeoutId2 = setTimeout(initializeMarqueeSwiper, 2000)

    return () => {
      clearTimeout(timeoutId1)
      clearTimeout(timeoutId2)
      if (swiperInstance && swiperInstance.destroy) {
        swiperInstance.destroy(true, true)
      }
    }
  }, [])

  return <div className="hero-banner-client-wrapper">{children}</div>
}
