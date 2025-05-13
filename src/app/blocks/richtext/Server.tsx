import React from 'react'

export default function RichTextBlockServer({ content }: { content: any }) {
  return <div className="rich-text" dangerouslySetInnerHTML={{ __html: content }} />
}
