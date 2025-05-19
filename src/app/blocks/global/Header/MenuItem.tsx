'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuItemProps {
  link: string | null | undefined
  label: string | null | undefined
  menuStyle?: 'megamenu' | 'dropdown' | 'none' | null | undefined
  subnav?:
    | Array<{
        link?: string | null | undefined
        label?: string | null | undefined
        id?: string | null | undefined
      }>
    | null
    | undefined
}

export const MenuItem: React.FC<MenuItemProps> = ({ link, label, menuStyle, subnav }) => {
  const pathname = usePathname()
  const isActive = pathname === link

  return (
    <li
      className={`menu-item ${menuStyle === 'megamenu' ? 'has-megamenu' : ''} ${
        menuStyle === 'dropdown' ? 'has-dropdown' : ''
      } ${isActive ? 'active' : ''}`}
    >
      <Link href={link || '#'}>{label || ''}</Link>

      {subnav && menuStyle === 'megamenu' && (
        <div className="megamenu">
          <div className="megamenu-inner">
            <ul className="megamenu-links">
              {subnav.map((subItem) => (
                <li key={subItem.id || subItem.link} className="megamenu-item">
                  <Link href={subItem.link || '#'}>{subItem.label || ''}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {subnav && menuStyle === 'dropdown' && (
        <ul className="dropdown-menu">
          {subnav.map((subItem) => (
            <li key={subItem.id || subItem.link} className="dropdown-item">
              <Link href={subItem.link || '#'}>{subItem.label || ''}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
