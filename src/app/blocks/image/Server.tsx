import React from 'react'
import OptimizedImage from '@/components/OptimizedImage'
import './Image.css'
import { Media } from '@/payload-types'

interface ImageProps {
  image: Media | { url: string; alt: string; caption?: string; width?: number; height?: number }
}

export default function ImageBlockServer({ image }: ImageProps) {
  // Handle both Media objects and plain objects
  const caption = typeof image === 'object' && 'caption' in image ? image.caption : undefined

  return (
    <div className="imageContainer">
      <OptimizedImage
        media={image as Media}
        size="desktop"
        priority={false}
        className="image centered"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      />
      {caption && <p className="caption">{caption}</p>}
    </div>
  )
}
