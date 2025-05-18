import React from 'react'
import Image from 'next/image'
import './Image.css'

export default function ImageBlockServer({
  image,
}: {
  image: { url: string; alt: string; caption?: string }
}) {
  return (
    <div className="imageContainer">
      <Image
        src={image.url}
        alt={image.alt || ''}
        width={1200}
        height={800}
        className="image centered"
        priority={true}
      />
      {image.caption && <p className="caption">{image.caption}</p>}
    </div>
  )
}
