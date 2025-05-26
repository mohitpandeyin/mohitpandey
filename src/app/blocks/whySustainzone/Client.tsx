'use client'

import React from 'react'
import { WhySustainzoneProps } from './types'
import './WhySustainzone.css'

export const WhySustainzoneClient: React.FC<WhySustainzoneProps> = ({
  title,
  expertiseDescription,
  technologyDescription,
  complianceDescription,
  supportDescription,
  integrationsDescription,
}) => {
  // Static items with editable descriptions
  const staticItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 4L24.47 12.94L34 14.15L27 21.02L28.94 30.5L20 25.77L11.06 30.5L13 21.02L6 14.15L15.53 12.94L20 4Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      ),
      heading: 'Expertise & Experience',
      description:
        expertiseDescription ||
        'Our team of ESG experts and sustainability professionals brings years of experience in compliance, carbon accounting, and environmental reporting.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 2C10.6 2 3 9.6 3 19S10.6 36 20 36 37 28.4 37 19 29.4 2 20 2ZM20 32C12.8 32 7 26.2 7 19S12.8 6 20 6 33 11.8 33 19 27.2 32 20 32Z"
            fill="currentColor"
            opacity="0.9"
          />
          <circle cx="20" cy="19" r="4" fill="currentColor" />
        </svg>
      ),
      heading: 'Advanced Technology',
      description:
        technologyDescription ||
        'Leverage cutting-edge AI and machine learning tools to automate data collection, analysis, and reporting for maximum accuracy and efficiency.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M8 10H32V34H8V10ZM10 12V32H30V12H10ZM12 14H28V16H12V14ZM12 18H28V20H12V18ZM12 22H24V24H12V22Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      ),
      heading: 'Comprehensive Compliance',
      description:
        complianceDescription ||
        'Stay ahead of evolving regulations with our comprehensive coverage of CSRD, SEC Climate Disclosure, GHG Protocol, and other frameworks.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 7C13.4 7 8 12.4 8 19S13.4 31 20 31 32 25.6 32 19 26.6 7 20 7ZM20 29C14.5 29 10 24.5 10 19S14.5 9 20 9 30 13.5 30 19 25.5 29 20 29Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path d="M20 12V20L25 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      heading: 'Dedicated Support',
      description:
        supportDescription ||
        'Get personalized guidance from our sustainability experts throughout your compliance journey with 24/7 support and consultation.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M8 8V32H32V8H8ZM10 10H30V30H10V10ZM14 14V18H18V14H14ZM20 14V18H24V14H20ZM26 14V18H30V14H26ZM14 20V24H18V20H14ZM20 20V24H24V20H20ZM26 20V24H30V20H26Z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      ),
      heading: 'Seamless Integrations',
      description:
        integrationsDescription ||
        'Connect with your existing systems and data sources through our robust API and pre-built integrations with popular business tools.',
    },
  ]

  return (
    <section className="sz-why-us-section sz-section">
      <div className="sz-container sz-why-us-container">
        <div className="sz-why-us-content-wrap">
          {title && <h3 className="sz-why-us-title">{title}</h3>}

          <div className="sz-why-us-content-row">
            {staticItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="sz-why-us-item-wrap">
                  <div className="sz-why-us-icon">{item.icon}</div>
                  <h4 className="sz-why-us-heading">{item.heading}</h4>
                  <p className="sz-why-us-desc">{item.description}</p>
                </div>

                {/* Add divider between items, but not after the last item */}
                {index < staticItems.length - 1 && <div className="sz-divider"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
