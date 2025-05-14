import React from 'react'
import config from '@/payload.config'
import { getPayload } from 'payload'
import Image from 'next/image'
import Link from 'next/link'
import './Header.css'

export default async function HeaderServer() {
  const payload = await getPayload({ config })
  const header = await payload.findGlobal({
    slug: 'header',
  })

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-wrap">
            <Link href="/">
              <Image
                src="/assets/media/sustainzone-logo.svg"
                alt="Logo"
                width={150}
                height={24}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Link>
          </div>

          <nav className="main-navigation">
            <ul className="main-menu">
              {header.nav?.map((item) => (
                <li
                  key={item.link}
                  className={`menu-item ${item.menuStyle === 'megamenu' ? 'has-megamenu' : ''} ${
                    item.menuStyle === 'dropdown' ? 'has-dropdown' : ''
                  }`}
                >
                  <Link href={item.link || '#'}>{item.label}</Link>

                  {item.subnav && item.menuStyle === 'megamenu' && (
                    <div className="megamenu">
                      <div className="megamenu-inner">
                        <ul className="megamenu-links">
                          {item.subnav.map((subItem) => (
                            <li key={subItem.link} className="megamenu-item">
                              <Link href={subItem.link || '#'}>{subItem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {item.subnav && item.menuStyle === 'dropdown' && (
                    <ul className="dropdown-menu">
                      {item.subnav.map((subItem) => (
                        <li key={subItem.link} className="dropdown-item">
                          <Link href={subItem.link || '#'}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-action">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
