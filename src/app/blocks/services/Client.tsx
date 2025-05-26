'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ServicesProps } from './types'
import OptimizedImage from '@/components/OptimizedImage'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import './Services.css'

export const ServicesClient: React.FC<ServicesProps> = ({ title, services }) => {
  const checkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none">
      <path d="M0.59375 6.45312L5.72655 11.5859" stroke="#00B5BA" strokeWidth="1.6" />
      <path d="M13.0273 1.17969L8.57812 6.78284" stroke="#00B5BA" strokeWidth="1.6" />
      <path
        d="M4.96875 6.45269L9.5484 11.0666L17.3992 1.17969"
        stroke="#00B5BA"
        strokeWidth="1.6"
      />
    </svg>
  )

  const prevIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
      <path d="M19.168 7H1.97656" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8.08906 13.1117L1.97656 6.99922L8.08906 0.886719"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )

  const nextIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
      <path d="M0.832031 7H18.0234" stroke="currentColor" strokeWidth="2" />
      <path
        d="M11.9109 13.1117L18.0234 6.99922L11.9109 0.886719"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )

  const defaultIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip0_43_8412)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.833333 0C0.373096 0 0 0.373096 0 0.833333V15.8333C0 16.2936 0.373096 16.6667 0.833333 16.6667H8.54333C8.40625 16.134 8.33333 15.5755 8.33333 15C8.33333 13.8281 8.63567 12.7268 9.16667 11.77V7.5H10.8333V9.7955C11.9747 8.88058 13.4234 8.33333 15 8.33333V5C15 4.77898 14.9122 4.56703 14.7559 4.41074L10.5892 0.244077C10.433 0.0877975 10.221 0 10 0H0.833333ZM9.16667 1.66667V5.83333H13.3333L9.16667 1.66667ZM2.5 4.16667V12.5H4.16667V4.16667H2.5ZM5.83333 12.5V8.75H7.5V12.5H5.83333ZM15 20C17.7614 20 20 17.7614 20 15C20 14.3597 19.8797 13.7475 19.6603 13.1848L15.5892 17.2559C15.2638 17.5813 14.7362 17.5813 14.4107 17.2559L12.7441 15.5892L13.9226 14.4107L15 15.4882L18.7712 11.7169C17.8546 10.6649 16.5049 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z"
          fill="#009CA0"
        />
      </g>
      <defs>
        <clipPath id="clip0_43_8412">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )

  return (
    <section className="sz-services-section sz-section">
      <div className="sz-container">
        <div className="sz-section-title-wrap">
          <h3 className="sz-service-title">{title}</h3>
          <div className="sz-slider-nav">
            <div className="sz-slider-btn swiper-button-prev">{prevIcon}</div>
            <div className="sz-slider-btn swiper-button-next">{nextIcon}</div>
          </div>
        </div>
        <div className="swiper mySwiper">
          <Swiper
            modules={[Navigation]}
            slidesPerView={2.2}
            spaceBetween={30}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
            }}
            className="sz-services-swiper"
          >
            {services?.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="sz-service-card-wrap">
                  <div className="sz-service-card-header">
                    {service.icon ? (
                      <OptimizedImage
                        media={service.icon}
                        alt={`${service.category} icon`}
                        size="thumbnail"
                      />
                    ) : (
                      defaultIcon
                    )}
                    <p className="sz-service-head-title">{service.category}</p>
                  </div>
                  <div className="sz-service-card-content">
                    <div className="sz-service-card-inner">
                      <h4 className="sz-service-card-title">{service.title}</h4>
                      <p className="sz-service-card-desc">{service.description}</p>
                      {service.features && service.features.length > 0 && (
                        <div className="sz-services-points-wrap">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="sz-services-keypoint">
                              {checkIcon}
                              <p className="sz-service-keypoint-text">{feature.feature}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <a href={service.buttonLink || '#'} className="sz-button-secondary">
                      {service.buttonText || 'See how it works'}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
