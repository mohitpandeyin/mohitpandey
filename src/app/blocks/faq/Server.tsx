import React from 'react'
import { FAQProps } from './types'
import FAQClient from './Client'

const FAQServer: React.FC<FAQProps> = ({ title, subtitle, faqs }) => {
  if (!faqs || faqs.length === 0) {
    return null
  }

  return <FAQClient title={title} subtitle={subtitle} faqs={faqs} />
}

export default FAQServer
