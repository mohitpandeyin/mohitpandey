import React from 'react'
import Image from 'next/image'
import './Image.css'
import { Media } from '@/payload-types'

interface ImageProps {
  image: Media | { url: string; alt: string; caption?: string; width?: number; height?: number }
}

export default function ImageBlockServer({ image }: ImageProps) {
  // Handle both Media objects and plain objects
  const imageUrl = typeof image === 'object' && 'url' in image ? image.url || '' : ''
  const imageAlt = typeof image === 'object' && 'alt' in image ? image.alt || '' : ''
  const caption = typeof image === 'object' && 'caption' in image ? image.caption : undefined
  const width = typeof image === 'object' && 'width' in image ? image.width : 1200
  const height = typeof image === 'object' && 'height' in image ? image.height : 800

  // Use CDN URL if available
  const optimizedUrl =
    process.env.R2_CDN_DOMAIN &&
    process.env.S3_ENDPOINT &&
    imageUrl.includes(process.env.S3_ENDPOINT)
      ? imageUrl.replace(process.env.S3_ENDPOINT, process.env.R2_CDN_DOMAIN)
      : imageUrl

  return (
    <div className="imageContainer">
      <Image
        src={optimizedUrl}
        alt={imageAlt}
        width={width || 1200}
        height={height || 800}
        className="image centered"
        priority={false}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        style={{ objectFit: 'cover' }}
      />
      {caption && <p className="caption">{caption}</p>}
    </div>
  )
}
