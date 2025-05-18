import React from 'react'
import config from '@/payload.config'
import { getPayload } from 'payload'
import Image from 'next/image'
import Link from 'next/link'
import './Footer.css'

export default async function FooterServer() {
  const payload = await getPayload({ config })
  const footer = await payload.findGlobal({
    slug: 'footer',
  })

  const currentYear = new Date().getFullYear()
  const copyright =
    footer.copyright?.replace('{year}', currentYear.toString()) ||
    `© ${currentYear} All Rights Reserved`

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            {footer.logo && (
              <Link href="/">
                <Image
                  src="/assets/media/sustainzone-logo-white.svg"
                  alt="Logo"
                  width={180}
                  height={30}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Link>
            )}
            {footer.footerText && <p className="footer-text">{footer.footerText}</p>}
          </div>

          {footer.nav && footer.nav.length > 0 && (
            <nav className="footer-nav">
              <ul className="footer-menu">
                {footer.nav.map((item, index) => (
                  <li key={`nav-${index}`}>
                    <Link href={item.link || '#'}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="footer-contact">
            <ul className="contact-info">
              {footer.address && <li>{footer.address}</li>}
              {footer.phone && <li>Phone: {footer.phone}</li>}
              {footer.email && <li>Email: {footer.email}</li>}
            </ul>

            {footer.socials && footer.socials.length > 0 && (
              <div className="footer-social">
                <ul className="social-links">
                  {footer.socials.map((social, index) => (
                    <li key={`social-${index}`}>
                      <Link href={social.url || '#'} target="_blank" rel="noopener noreferrer">
                        {social.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">{copyright}</div>
          {footer.additionalInfo && <div className="additional-info">{footer.additionalInfo}</div>}
        </div>
      </div>
    </footer>
  )
}
