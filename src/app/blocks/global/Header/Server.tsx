import React from 'react'
import config from '@/payload.config'
import { getPayload } from 'payload'
import Image from 'next/image'
import Link from 'next/link'
import './Header.css'
import { MobileMenuToggle } from './MobileMenuToggle'
import { LanguageSelector } from './LanguageSelector'
import { MenuItem } from './MenuItem'

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
                alt="SustainZone Logo"
                width={160}
                height={30}
                style={{ maxWidth: '100%', height: 'auto' }}
                priority
              />
            </Link>
          </div>

          <MobileMenuToggle />

          <nav className="main-navigation">
            <ul className="main-menu">
              {header.nav?.map((item) => (
                <MenuItem
                  key={item.link}
                  link={item.link || '#'}
                  label={item.label}
                  menuStyle={item.menuStyle}
                  subnav={item.subnav}
                />
              ))}
            </ul>
          </nav>
          <div className="header-action">
            <LanguageSelector currentLanguage="en" />
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
