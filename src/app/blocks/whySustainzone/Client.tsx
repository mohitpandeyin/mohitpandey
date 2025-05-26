'use client'

import React from 'react'
import { WhySustainzoneProps } from './types'
import { Button } from '@/components/ui'
import './WhySustainzone.css'

export const WhySustainzoneClient: React.FC<WhySustainzoneProps> = ({
  title,
  lcaDescription,
  sbtiDescription,
  saasToolsDescription,
  carbonAccountingDescription,
  supplyChainDescription,
}) => {
  // First row items (2 items)
  const firstRowItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="24"
          viewBox="0 0 18 24"
          fill="none"
        >
          <path
            d="M12 19V23.328C12.1476 23.2314 12.2862 23.1216 12.414 23L17 18.414C17.1216 18.2862 17.2314 18.1476 17.328 18H13C12.8687 18 12.7386 18.0259 12.6173 18.0761C12.496 18.1264 12.3858 18.2 12.2929 18.2929C12.2 18.3857 12.1264 18.496 12.0761 18.6173C12.0259 18.7386 12 18.8687 12 19ZM4.5 5.5H6V7H4.5V5.5Z"
            fill="white"
          />
          <path
            d="M16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H10V19C10 18.2044 10.3161 17.4413 10.8787 16.8787C11.4413 16.3161 12.2044 16 13 16H18V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0ZM3 4.75C3 4.55109 3.07902 4.36032 3.21967 4.21967C3.36032 4.07902 3.55109 4 3.75 4H6.75C6.94891 4 7.13968 4.07902 7.28033 4.21967C7.42098 4.36032 7.5 4.55109 7.5 4.75V10H6V8.5H4.5V10H3V4.75ZM7 18H3V16H7V18ZM13 14H3V12H13V14ZM13 10H9V8H13V10Z"
            fill="white"
          />
        </svg>
      ),
      heading: 'Life Cycle Assessment (LCA) & Digital Product Passport',
      description: lcaDescription || 'Track product emissions across the value chain.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 4L10 0V10C9.7165 10 9.4464 10.1203 9.2567 10.331L0.25672 20.331C-0.0074574 20.6246 -0.0741464 21.0461 0.0865196 21.4068C0.24718 21.7676 0.60511 22 1.00002 22H21C21.3949 22 21.7529 21.7676 21.9135 21.4068C22.0742 21.0461 22.0075 20.6246 21.7433 20.331L12.7433 10.331C12.5537 10.1203 12.2835 10 12 10V7L18 4ZM7.68533 15.0667L10.4454 12H11.5547L14.3147 15.0667L11 17L7.68533 15.0667Z"
            fill="white"
          />
        </svg>
      ),
      heading: 'Science-Based Targets (SBTi) Alignment',
      description:
        sbtiDescription || 'We help businesses define & meet their sustainability goals.',
    },
  ]

  // Second row items (3 items)
  const secondRowItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
        >
          <path
            d="M2.78 5.982C1.69549 7.27054 1.11083 8.90629 1.13286 10.5903C1.15489 12.2744 1.78215 13.8943 2.9 15.154L0 18.58L1.527 19.871L4.427 16.438C5.85139 17.3376 7.55362 17.6904 9.21822 17.431C10.8828 17.1715 12.397 16.3174 13.48 15.027C16.035 12.011 16.736 3.946 16.965 0C13.73 0.877 5 3.357 2.78 5.982ZM4.9 14.332C3.88643 13.4738 3.25475 12.2486 3.14357 10.9251C3.0324 9.60172 3.45082 8.28826 4.307 7.273C5.557 5.8 10.869 3.847 14.729 2.7L4.9 14.332Z"
            fill="white"
          />
        </svg>
      ),
      heading: 'Custom SaaS Tools',
      description:
        saasToolsDescription ||
        'Automate ESG reporting, compliance, and carbon footprint calculations.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0V20.5C0 21.3284 0.67157 22 1.5 22H22V19H3V0H0ZM15.9779 12.7211C18.7591 10.5966 20.9676 7.58728 22.3909 4.0615L19.6091 2.9385C18.3637 6.02351 16.4632 8.5752 14.1568 10.3371C11.8551 12.0953 9.2388 13.0009 6.60054 13H5V16H6.6C9.9442 16.0011 13.1922 14.8491 15.9779 12.7211Z"
            fill="white"
          />
        </svg>
      ),
      heading: 'Complex Carbon Accounting',
      description:
        carbonAccountingDescription ||
        'Granular Scope 1, 2 & 3 tracking for accurate emissions reporting.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
        >
          <path
            d="M1.5 14H4.5C4.5 14 5.5 14 5.5 15V17C5.5 17 5.5 18 4.5 18H1.5C1.5 18 0.5 18 0.5 17V15C0.5 15 0.5 14 1.5 14Z"
            fill="white"
          />
          <path
            d="M8.5 7H11.5C11.5 7 12.5 7 12.5 8V17C12.5 17 12.5 18 11.5 18H8.5C8.5 18 7.5 18 7.5 17V8C7.5 8 7.5 7 8.5 7Z"
            fill="white"
          />
          <path
            d="M15.5 0H18.5C18.5 0 19.5 -7.15256e-08 19.5 1V17C19.5 17 19.5 18 18.5 18H15.5C15.5 18 14.5 18 14.5 17V1C14.5 1 14.5 0 15.5 0Z"
            fill="white"
          />
        </svg>
      ),
      heading: 'Supply Chain ESG Assessments',
      description: supplyChainDescription || 'Measure supplier sustainability & drive compliance.',
    },
  ]

  return (
    <section className="sz-why-us-section sz-section">
      <div className="sz-container sz-why-us-container">
        {title && <h3 className="sz-why-us-title">{title}</h3>}
        <div className="sz-why-us-content-wrap">
          {/* First row with 2 items */}
          <div className="sz-why-us-content-row">
            {firstRowItems.map((item, index) => (
              <React.Fragment key={index}>
                <div>
                  {item.icon}
                  <h4 className="sz-why-us-heading">{item.heading}</h4>
                  <p className="sz-why-us-desc">{item.description}</p>
                </div>
                {index < firstRowItems.length - 1 && <span className="sz-divider"></span>}
              </React.Fragment>
            ))}
          </div>

          {/* Second row with 3 items */}
          <div className="sz-why-us-content-row">
            {secondRowItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="sz-why-us-item-wrap">
                  {item.icon}
                  <h4 className="sz-why-us-heading">{item.heading}</h4>
                  <p className="sz-why-us-desc">{item.description}</p>
                </div>
                {index < secondRowItems.length - 1 && <span className="sz-divider"></span>}
              </React.Fragment>
            ))}
          </div>

          <Button className="mx-auto" text="Get a Free Consultation" href="#" variant="white" />
        </div>
      </div>
    </section>
  )
}
