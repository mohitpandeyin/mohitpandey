import React from 'react'

export default function RichTextBlockServer({ content }: { content: string }) {
  return <div className="rich-text" dangerouslySetInnerHTML={{ __html: content }} />
}
