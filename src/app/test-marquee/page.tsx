import React from 'react'
import HeroBannerBlockServer from '../blocks/heroBanner/Server'

export default function TestMarqueePage() {
  // Test data to verify marquee functionality
  const testData = {
    title: 'Test Hero Banner',
    description: 'This is a test page to verify the marquee Swiper functionality',
    buttonText: 'Test Button',
    buttonLink: '/',
    bannerImage: {
      id: 'test',
      alt: 'Test Image',
      url: '/assets/media/sustainzone-banner.svg',
    },
    showMarquee: true,
    marqueeGroup: {
      marqueeLogos: [
        {
          logo: {
            id: 'logo1',
            alt: 'Logo 1',
            url: '/assets/media/sustainzone-logo.svg',
          },
        },
        {
          logo: {
            id: 'logo2',
            alt: 'Logo 2',
            url: '/assets/media/goals-logo.svg',
          },
        },
      ],
    },
  }

  return (
    <div>
      <h1>Marquee Test Page</h1>
      <HeroBannerBlockServer {...testData} />
    </div>
  )
}
