'use client'

import { useEffect, useRef } from 'react'
import { Swiper } from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'
import { TestimonialsProps } from './types'
import OptimizedImage from '@/components/OptimizedImage'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import './Testimonials.css'

export const TestimonialsClient: React.FC<TestimonialsProps> = ({
  title,
  testimonials,
  showNavigationButtons = true,
  autoplay = false,
  autoplayDelay = 5,
}) => {
  const swiperRef = useRef<HTMLDivElement>(null)

  // Handle case where testimonials is null or undefined
  const testimonialsArray = testimonials || []

  useEffect(() => {
    if (swiperRef.current && testimonialsArray.length > 0) {
      const swiper = new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: testimonialsArray.length > 1,
        modules: [Navigation, Autoplay],
        navigation:
          showNavigationButtons && testimonialsArray.length > 1
            ? {
                nextEl: '.sz-testimonial-btn-next',
                prevEl: '.sz-testimonial-btn-prev',
              }
            : false,
        autoplay:
          autoplay && testimonialsArray.length > 1
            ? {
                delay: (autoplayDelay || 5) * 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false,
      })

      return () => {
        swiper.destroy()
      }
    }
  }, [testimonialsArray.length, showNavigationButtons, autoplay, autoplayDelay])

  // Don't render if no testimonials
  if (testimonialsArray.length === 0) {
    return null
  }

  // Previous arrow icon to match your HTML exactly
  const prevIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
      <path d="M19.168 7H1.97656" stroke="currentColor" strokeWidth="2"></path>
      <path
        d="M8.08906 13.1117L1.97656 6.99922L8.08906 0.886719"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
    </svg>
  )

  // Next arrow icon to match your HTML exactly
  const nextIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
      <path d="M0.832031 7H18.0234" stroke="currentColor" strokeWidth="2"></path>
      <path
        d="M11.9109 13.1117L18.0234 6.99922L11.9109 0.886719"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
    </svg>
  )

  // Quote icon to match your HTML exactly
  const quoteSvgIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
      <path
        opacity="0.2"
        d="M0 28V15.8304C0 11.6749 1.18885 8.21201 3.66563 5.34276C6.04334 2.4735 9.01548 0.692582 12.483 0V5.63957C8.42105 7.22262 6.43963 10.3887 6.43963 15.3357H12.483V28H0ZM19.517 28V15.8304C19.517 11.6749 20.7059 8.21201 23.1827 5.34276C25.5604 2.4735 28.5325 0.692582 32 0V5.63957C27.9381 7.22262 25.9567 10.3887 25.9567 15.3357H32V28H19.517Z"
        fill="black"
      />
    </svg>
  )

  return (
    <section className="sz-testimonial-section sz-section">
      <div className="sz-container">
        {title && <h3 className="sz-testimonial-heading">{title}</h3>}
        <div className="sz-testimonial-wrapper">
          <div ref={swiperRef} className="swiper sz-testimonial-swiper">
            <div className="swiper-wrapper">
              {testimonialsArray?.map((testimonial) => (
                <div key={testimonial.id} className="swiper-slide">
                  <div className="sz-testimonial-item">
                    {testimonial.image && (
                      <div className="sz-testimonial-image-wrap">
                        <OptimizedImage
                          media={testimonial.image}
                          alt={`${testimonial.authorName}'s photo`}
                          className="sz-testimonial-image"
                        />
                      </div>
                    )}
                    <div className="sz-testimonial-content">
                      <div>
                        {quoteSvgIcon}
                        <h6 className="sz-testimonial-quote">{testimonial.quote}</h6>
                      </div>
                      <div className="sz-testiomonial-author">
                        <p className="sz-author-name">{testimonial.authorName}</p>
                        {testimonial.companyName && (
                          <p className="sz-company-name">{testimonial.companyName}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {showNavigationButtons && testimonialsArray.length > 1 && (
              <div className="sz-testimonial-slider-nav">
                <div className="sz-testimonial-btn-prev sz-slider-btn">{prevIcon}</div>
                <div className="sz-testimonial-btn-next sz-slider-btn">{nextIcon}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
