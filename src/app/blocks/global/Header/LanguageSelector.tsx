'use client'

import React, { useState } from 'react'

interface LanguageOption {
  code: string
  name: string
}

interface LanguageSelectorProps {
  currentLanguage?: string
}

const languages: LanguageOption[] = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
]

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectLanguage = (code: string) => {
    setSelectedLanguage(code)
    setIsOpen(false)
    // In a real implementation, you would update the app's locale/language here
  }

  const getCurrentLanguageName = () => {
    const lang = languages.find((lang) => lang.code === selectedLanguage)
    return lang ? lang.name : 'English'
  }

  return (
    <div className="language-selector">
      <div className="language-selector-toggle" onClick={toggleDropdown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="10" cy="10" r="7.5" />
          <path d="M10 2.5V17.5" />
          <path d="M2.5 10H17.5" />
          <path d="M5 5C5 5 7.5 7.5 10 7.5C12.5 7.5 15 5 15 5" />
          <path d="M5 15C5 15 7.5 12.5 10 12.5C12.5 12.5 15 15 15 15" />
        </svg>
        <span>{getCurrentLanguageName()}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`language-arrow ${isOpen ? 'open' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`language-option ${selectedLanguage === lang.code ? 'selected' : ''}`}
              onClick={() => selectLanguage(lang.code)}
            >
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
