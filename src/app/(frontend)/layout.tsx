import React from 'react'
import './styles.css'
import './utilities.css'
import './pageLayout.css'
import HeaderServer from '../blocks/global/Header/Server'
import FooterServer from '../blocks/global/Footer/Server'

export const metadata = {
  title: 'Sustainzone ltd | Sustainable Change with ESG Strategies & Carbon Reduction',
  description:
    'Achieve your sustainability goals and reduce your carbon footprint with Sustainzone expert guidance. Sustainzone pioneers sustainable change with advanced ESG strategies and impactful carbon reduction solutions.',
  keywords:
    'Sustainzone, sustainable change, ESG strategies, carbon reduction, sustainability goals, carbon footprint, environmental impact, green solutions, eco-friendly initiatives, corporate sustainability, carbon reduction efforts, advanced ESG, sustainability expertise',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        <HeaderServer />
        {children}
        <FooterServer />
      </body>
    </html>
  )
}
