'use client'

import React, { useEffect } from 'react'
import { Swiper } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import '../blocks/heroBanner/HeroBanner.css'

export default function TestSimplePage() {
  useEffect(() => {
    console.log('Test page mounted')

    const initSwiper = () => {
      console.log('Initializing Swiper...')
      try {
        // Match the reference configuration exactly (adjusted for v11)
        const swiper = new Swiper('.sz-marquee-swiper', {
          modules: [Autoplay],
          spaceBetween: 56,
          centeredSlides: true,
          speed: 6000,
          autoplay: {
            delay: 1,
            disableOnInteraction: true, // This should be inside autoplay
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
        console.log('Swiper created successfully:', swiper)
        console.log('Autoplay should start automatically')
      } catch (error) {
        console.error('Error creating Swiper:', error)
      }
    }

    // Try multiple times to ensure DOM is ready
    setTimeout(initSwiper, 100)
    setTimeout(initSwiper, 500)
    setTimeout(initSwiper, 1000)
  }, [])

  return (
    <div>
      <h1 style={{ padding: '20px', textAlign: 'center' }}>Simple Marquee Test</h1>

      <div className="sz-marquee-section sz-container" style={{ padding: '40px 20px' }}>
        <div className="swiper sz-marquee-swiper">
          <div className="swiper-wrapper sz-marquee-content">
            <div className="swiper-slide sz-marquee-item">
              <div
                style={{
                  width: '120px',
                  height: '60px',
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                }}
              >
                Logo 1
              </div>
            </div>
            <div className="swiper-slide sz-marquee-item">
              <div
                style={{
                  width: '120px',
                  height: '60px',
                  backgroundColor: '#e0e0e0',
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                }}
              >
                Logo 2
              </div>
            </div>
            <div className="swiper-slide sz-marquee-item">
              <div
                style={{
                  width: '120px',
                  height: '60px',
                  backgroundColor: '#d0d0d0',
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                }}
              >
                Logo 3
              </div>
            </div>
            <div className="swiper-slide sz-marquee-item">
              <div
                style={{
                  width: '120px',
                  height: '60px',
                  backgroundColor: '#c0c0c0',
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                }}
              >
                Logo 4
              </div>
            </div>
            <div className="swiper-slide sz-marquee-item">
              <div
                style={{
                  width: '120px',
                  height: '60px',
                  backgroundColor: '#b0b0b0',
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                }}
              >
                Logo 5
              </div>
            </div>
            <div className="swiper-slide sz-marquee-item">
              <div
                style={{
                  width: '120px',
                  height: '60px',
                  backgroundColor: '#a0a0a0',
                  border: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                }}
              >
                Logo 6
              </div>
            </div>
          </div>
        </div>
        <p className="sz-marquee-title" style={{ textAlign: 'center', marginTop: '20px' }}>
          Test Marquee with Swiper.js
        </p>
      </div>
    </div>
  )
}
