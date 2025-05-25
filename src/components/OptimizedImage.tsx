import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'
import { optimizeImageUrl, getImageDimensions } from '@/utils/imageOptimization'

interface OptimizedImageProps {
  media: Media | string
  alt?: string
  size?: 'thumbnail' | 'card' | 'tablet' | 'desktop'
  priority?: boolean
  className?: string
  fill?: boolean
  sizes?: string
  style?: React.CSSProperties
}

export default function OptimizedImage({
  media,
  alt,
  size,
  priority = false,
  className = '',
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
  style,
}: OptimizedImageProps) {
  // Handle string URLs
  if (typeof media === 'string') {
    return (
      <Image
        src={media}
        alt={alt || ''}
        className={className}
        priority={priority}
        fill={fill}
        sizes={sizes}
        style={style}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    )
  }

  // Handle Media objects
  const imageUrl = optimizeImageUrl(media, size)
  const dimensions = getImageDimensions(media, size)
  const imageAlt = alt || media.alt || ''

  const imageProps = fill
    ? {
        fill: true,
        sizes,
      }
    : {
        width: dimensions.width,
        height: dimensions.height,
        sizes,
      }

  return (
    <Image
      src={imageUrl}
      alt={imageAlt}
      className={className}
      priority={priority}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      style={{
        objectFit: 'cover',
        ...style,
      }}
      {...imageProps}
    />
  )
}
