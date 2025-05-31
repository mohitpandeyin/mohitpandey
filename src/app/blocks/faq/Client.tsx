'use client'

import React, { useState } from 'react'
import './FAQ.css'

interface FAQItem {
  id?: string
  question: string
  answer: string
}

interface FAQClientProps {
  title: string
  subtitle?: string
  faqs: FAQItem[]
}

const FAQClient: React.FC<FAQClientProps> = ({ title, subtitle, faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <section className="faq-section">
      <div className="container faq-inner-wrapper">
        <div className="faq-header">
          <h2 className="faq-title">{title}</h2>
          {subtitle && <p className="faq-subtitle">{subtitle}</p>}
        </div>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={faq.id || index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3v10M3 8h10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQClient
