import React from 'react'
import './RichText.css'

export default function RichTextBlockServer({ content }: { content: string }) {
  return <div className="richText" dangerouslySetInnerHTML={{ __html: content }} />
}
