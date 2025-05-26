'use client'

import React from 'react'
import { HowSustainzoneWorksProps } from './types'
import './HowSustainzoneWorks.css'

export const HowSustainzoneWorksClient: React.FC<HowSustainzoneWorksProps> = ({
  title,
  buttonText,
  buttonLink,
  step1,
  step2,
  step3,
}) => {
  const steps = [
    {
      count: 'STEP: 1',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5546 2.66602H8.0026C7.29536 2.66602 6.61708 2.94697 6.11699 3.44706C5.61689 3.94716 5.33594 4.62544 5.33594 5.33268V26.666C5.33594 27.3733 5.61689 28.0515 6.11699 28.5516C6.61708 29.0517 7.29536 29.3327 8.0026 29.3327H24.0026C24.7098 29.3327 25.3881 29.0517 25.8882 28.5516C26.3883 28.0515 26.6693 27.3733 26.6693 26.666V8.78068L20.5546 2.66602ZM9.33594 15.9993H20.0026V18.666H9.33594V15.9993ZM22.6693 23.9993H9.33594V21.3327H22.6693V23.9993ZM18.6693 10.666V3.99935L25.3359 10.666H18.6693Z"
            fill="#170801"
          />
        </svg>
      ),
      heading: step1?.heading || 'Compliance & Carbon Footprint Assessment',
      points: step1?.keyPoints?.map((item) => item.point) || [
        'Evaluate current ESG & sustainability practices',
        'Identify compliance gaps in CSRD, SEC, or GHG Protocol',
      ],
    },
    {
      count: 'STEP: 2',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.0759 23.7755C28.2585 23.6537 28.4082 23.4888 28.5117 23.2953C28.6152 23.1017 28.6693 22.8857 28.6693 22.6662V3.99955C28.6693 3.75816 28.6038 3.52129 28.4798 3.3142C28.3557 3.10712 28.1778 2.9376 27.965 2.82372C27.7521 2.70984 27.5124 2.65587 27.2712 2.66759C27.0301 2.6793 26.7967 2.75624 26.5959 2.89022L19.4079 7.69022L13.5013 2.96488C13.274 2.7937 13.0002 2.6956 12.7159 2.68355C12.4385 2.67618 12.165 2.75035 11.9293 2.89688L3.92927 8.23022C3.74765 8.35139 3.59857 8.5153 3.49511 8.70756C3.39166 8.89983 3.337 9.11456 3.33594 9.33288V27.9995C3.3359 28.2409 3.4014 28.4778 3.52544 28.6849C3.64948 28.892 3.82741 29.0615 4.04025 29.1754C4.25309 29.2893 4.49285 29.3432 4.73396 29.3315C4.97507 29.3198 5.20847 29.2429 5.40927 29.1089L12.5973 24.3089L18.5039 29.0342C18.6999 29.191 18.9361 29.2893 19.1854 29.3179C19.4347 29.3464 19.687 29.304 19.9133 29.1955L28.0759 23.7755ZM6.0026 10.0462L11.3359 6.49022V21.9569L6.0026 25.5129V10.0462ZM26.0026 21.9529L20.6693 25.5075V10.0462L26.0026 6.49022V21.9529Z"
            fill="#170801"
          />
        </svg>
      ),
      heading: step2?.heading || 'Sustainability Strategy & Action Plan',
      points: step2?.keyPoints?.map((item) => item.point) || [
        'Develop comprehensive sustainability roadmap',
        'Set science-based targets and milestones',
      ],
    },
    {
      count: 'STEP: 3',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6693 8V0H13.3359V8H18.6693V0H21.3359V8H25.3359C26.0723 8 26.6693 8.59696 26.6693 9.33333V16C26.6693 21.4844 22.6318 25.9395 17.3359 26.586V32H14.6693V26.586C9.37338 25.9395 5.33594 21.4844 5.33594 16V9.33333C5.33594 8.59696 5.9329 8 6.66927 8H10.6693Z"
            fill="#170801"
          />
        </svg>
      ),
      heading: step3?.heading || 'Implementation & Continuous Monitoring',
      points: step3?.keyPoints?.map((item) => item.point) || [
        'Deploy custom SaaS tools for tracking',
        'Generate automated compliance reports',
      ],
    },
  ]

  // Checkmark SVG for bullet points
  const CheckmarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M1.59375 10.4531L6.72655 15.5859" stroke="#00B5BA" strokeWidth="1.6" />
      <path d="M14.0273 5.17969L9.57812 10.7828" stroke="#00B5BA" strokeWidth="1.6" />
      <path
        d="M5.96875 10.4527L10.5484 15.0666L18.3992 5.17969"
        stroke="#00B5BA"
        strokeWidth="1.6"
      />
    </svg>
  )

  return (
    <section className="sz-work-section sz-section">
      <div className="sz-container sz-work-container">
        <div className="sz-work-content-wrap">
          <h3 className="sz-work-title">{title || 'How SustainZone Works'}</h3>
          {buttonText && (
            <a href={buttonLink || '#'} className="sz-btn sz-button-primary">
              <div className="sz-button-wrap">
                <span>{buttonText}</span>
              </div>
              <div className="sz-button-icon-wrap">
                <img
                  src="/assets/media/arrow-right.svg"
                  alt="Arrow Right"
                  className="sz-arrow-right"
                />
              </div>
            </a>
          )}
        </div>
        <div className="sz-work-steps-wrap">
          {steps.map((step, index) => (
            <div key={index} className="sz-work-step">
              <span className="sz-step-count">{step.count}</span>
              <div className="sz-step-head">
                {step.icon}
                <h4 className="sz-work-step-heading">{step.heading}</h4>
              </div>
              <div className="sz-steps-keypoint-wrap">
                {step.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="sz-steps-keypoint">
                    <CheckmarkIcon />
                    <p className="sz-step-keypoint-text">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
