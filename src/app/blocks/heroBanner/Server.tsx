import React from 'react'
import './HeroBanner.css'
import { Media as MediaType } from '@/payload-types'
import HeroBannerClient from './Client'
import { Button } from '@/components/ui'

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
  // Handle banner image with optimization
  const imageUrl =
    typeof bannerImage === 'object' && bannerImage?.url
      ? process.env.R2_CDN_DOMAIN
        ? String(bannerImage.url).replace(process.env.S3_ENDPOINT || '', process.env.R2_CDN_DOMAIN)
        : String(bannerImage.url)
      : ''
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

  // Prepare marquee items for Swiper
  const renderMarqueeItems = () => {
    if (!showMarquee || !marqueeLogos || marqueeLogos.length === 0) {
      console.log('Marquee not shown:', {
        showMarquee,
        hasMarqueeLogos: !!marqueeLogos,
        logoCount: marqueeLogos?.length,
      })

      // Add some test slides for development if no logos are provided
      if (showMarquee) {
        const testSlides = []
        for (let i = 0; i < 10; i++) {
          testSlides.push(
            <div key={`test-slide-${i}`} className="swiper-slide sz-marquee-item">
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
                Logo {i + 1}
              </div>
            </div>,
          )
        }

        console.log('Using test slides:', testSlides.length)

        return (
          <div className="sz-marquee-section sz-container">
            <div className="swiper sz-marquee-swiper">
              <div className="swiper-wrapper sz-marquee-content">{testSlides}</div>
            </div>
            {marqueeText && (
              <p
                className="sz-marquee-title"
                dangerouslySetInnerHTML={{ __html: marqueeText.replace('<br/>', '<br>') }}
              />
            )}
          </div>
        )
      }

      return null
    }

    // Create marquee items for Swiper
    const marqueeItems: React.ReactElement[] = []

    // Create enough slides for smooth infinite scroll (duplicate the logos multiple times)
    for (let i = 0; i < 5; i++) {
      // Increased from 3 to 5 for more slides
      marqueeLogos.forEach((item, index) => {
        const logo = item?.logo || {}
        const logoUrl = typeof logo === 'object' && 'url' in logo ? String(logo.url) : ''
        const logoAlt = typeof logo === 'object' && 'alt' in logo ? String(logo.alt) : ''

        if (logoUrl) {
          // Only add slides with valid URLs
          marqueeItems.push(
            <div key={`swiper-slide-${i}-${index}`} className="swiper-slide sz-marquee-item">
              <img src={logoUrl} alt={logoAlt} className="sz-marquee-img" draggable="false" />
            </div>,
          )
        }
      })
    }

    console.log('Generated marquee items:', marqueeItems.length)

    return (
      <div className="sz-marquee-section sz-container">
        <div className="swiper sz-marquee-swiper">
          <div className="swiper-wrapper sz-marquee-content">{marqueeItems}</div>
        </div>
        {marqueeText && (
          <p
            className="sz-marquee-title"
            dangerouslySetInnerHTML={{ __html: marqueeText.replace('<br/>', '<br>') }}
          />
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
                  <Button text={buttonText} href={buttonLink} variant="primary" />
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
