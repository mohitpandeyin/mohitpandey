import React from 'react'
import './styles.css'
import './pageLayout.css'
import HeaderServer from '../blocks/global/Header/Server'
import FooterServer from '../blocks/global/Footer/Server'

export const metadata = {
  description: 'A modern website with beautifully styled components',
  title: 'My Styled Website',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <HeaderServer />
        {children}
        <FooterServer />
      </body>
    </html>
  )
}
