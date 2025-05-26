import React from 'react'

interface ButtonProps {
  text: string
  href?: string
  variant?: 'primary' | 'white'
  onClick?: () => void
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  text,
  href,
  variant = 'primary',
  onClick,
  className = '',
}) => {
  // Create the arrow SVG component
  const ArrowRight = () => (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.125 7H14.875"
        stroke={variant === 'white' ? '#1C1100' : 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.25 1.375L14.875 7L9.25 12.625"
        stroke={variant === 'white' ? '#1C1100' : 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const buttonClasses = `sz-btn sz-button-${variant} ${className}`

  const buttonContent = (
    <>
      <div className="sz-button-wrap">
        <span>{text}</span>
      </div>
      <div className="sz-button-icon-wrap">
        <ArrowRight />
      </div>
    </>
  )

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {buttonContent}
      </a>
    )
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {buttonContent}
    </button>
  )
}
