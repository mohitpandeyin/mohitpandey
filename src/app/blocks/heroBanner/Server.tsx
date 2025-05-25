import React from 'react'
import './HeroBanner.css'
import { Media as MediaType } from '@/payload-types'
import HeroBannerClient from './Client'

interface HeroBannerProps {
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  bannerImage:
    | {
        id: string
        alt: string
        url: string
      }
    | MediaType
  showMarquee?: boolean
  marqueeGroup?: {
    marqueeLogos?: Array<{
      logo:
        | {
            id: string
            alt: string
            url: string
          }
        | MediaType
    }>
  }
}

export default function HeroBannerBlockServer({
  title,
  description,
  buttonText,
  buttonLink,
  bannerImage,
  showMarquee,
  marqueeGroup,
}: HeroBannerProps) {
  // Handle banner image
  const imageUrl =
    typeof bannerImage === 'object' && bannerImage?.url ? String(bannerImage.url) : ''
  const imageAlt =
    typeof bannerImage === 'object' && bannerImage?.alt ? String(bannerImage.alt) : ''

  // Extract marquee data from the group
  const marqueeLogos = marqueeGroup?.marqueeLogos || []
  const marqueeText = 'Reporting Frameworks<br/> Adhere to global standards like'

  // Log for debugging
  console.log('HeroBanner props:', {
    showMarquee,
    hasMarqueeGroup: !!marqueeGroup,
    marqueeLogosCount: marqueeLogos.length,
    marqueeText,
    logoUrls: marqueeLogos.map((item) => {
      const logo = item?.logo || {}
      return typeof logo === 'object' && 'url' in logo ? String(logo.url) : 'No URL'
    }),
  })

  // Create the arrow SVG component
  const ArrowRight = () => (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.125 7H14.875"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 1.375L14.875 7L9.25 12.625"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  // Prepare marquee items
  const renderMarqueeItems = () => {
    if (!showMarquee || !marqueeLogos || marqueeLogos.length === 0) return null

    // Create two identical sets of logos for infinite scrolling
    return (
      <div className="sz-marquee-wrapper sz-container">
        <div className="sz-marquee-section">
          <div className="sz-marquee-content-wrap">
            <div className="sz-marquee-content marquee">
              {marqueeLogos.map((item, index) => {
                const logo = item?.logo || {}
                const logoUrl = typeof logo === 'object' && 'url' in logo ? String(logo.url) : ''
                const logoAlt = typeof logo === 'object' && 'alt' in logo ? String(logo.alt) : ''

                return (
                  <div key={`logo-orig-${index}`} className="sz-marquee-item">
                    <img src={logoUrl} alt={logoAlt} className="sz-marquee-img" />
                  </div>
                )
              })}
            </div>
            <div className="sz-marquee-content marquee">
              {marqueeLogos.map((item, index) => {
                const logo = item?.logo || {}
                const logoUrl = typeof logo === 'object' && 'url' in logo ? String(logo.url) : ''
                const logoAlt = typeof logo === 'object' && 'alt' in logo ? String(logo.alt) : ''

                return (
                  <div key={`logo-dup-${index}`} className="sz-marquee-item">
                    <img src={logoUrl} alt={logoAlt} className="sz-marquee-img" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {marqueeText && (
          <p className="sz-marquee-text" dangerouslySetInnerHTML={{ __html: marqueeText }} />
        )}
      </div>
    )
  }

  return (
    <HeroBannerClient>
      <div className="hero-banner">
        <section className="sz-main-banner">
          <div className="sz-banner-content-wrap">
            <div className="sz-container sz-banner-container">
              <div className="sz-banner-content">
                <h1 className="sz-main-banner-title">{title}</h1>
                <p className="sz-main-banner-desc">{description}</p>
                {buttonText && buttonLink && (
                  <a href={buttonLink} className="sz-btn sz-button-primary">
                    <div className="sz-button-wrap">
                      <span>{buttonText}</span>
                    </div>
                    <div className="sz-button-icon-wrap">
                      <ArrowRight />
                    </div>
                  </a>
                )}
              </div>
              <div className="sz-banner-image-wrap">
                <img src={imageUrl} alt={imageAlt || ''} />
              </div>
            </div>
          </div>

          {renderMarqueeItems()}
        </section>
      </div>
    </HeroBannerClient>
  )
}
