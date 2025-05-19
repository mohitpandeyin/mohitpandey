'use client'

import React, { useState } from 'react'

export const MobileMenuToggle: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.classList.toggle('mobile-menu-active')
  }

  return (
    <div
      className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
      onClick={toggleMenu}
      aria-label="Toggle mobile menu"
    >
      <span className="toggle-bar"></span>
      <span className="toggle-bar"></span>
      <span className="toggle-bar"></span>
    </div>
  )
}
