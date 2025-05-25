import { Media } from '@/payload-types'

/**
 * Optimizes image URL for Cloudflare R2 with CDN
 */
export function optimizeImageUrl(
  media: Media | string,
  size?: 'thumbnail' | 'card' | 'tablet' | 'desktop',
): string {
  if (typeof media === 'string') {
    return media
  }

  // Use specific size if available
  if (size && media.sizes?.[size]?.url) {
    return replaceWithCDN(media.sizes[size].url)
  }

  // Fall back to original URL
  return replaceWithCDN(media.url || '')
}

/**
 * Replaces R2 endpoint with CDN domain if available
 */
function replaceWithCDN(url: string): string {
  if (!url) return ''

  const cdnDomain = process.env.R2_CDN_DOMAIN
  const r2Endpoint = process.env.S3_ENDPOINT

  if (cdnDomain && r2Endpoint && url.includes(r2Endpoint)) {
    return url.replace(r2Endpoint, cdnDomain)
  }

  return url
}

/**
 * Generates responsive srcSet for Next.js Image
 */
export function generateSrcSet(media: Media): string {
  if (!media.sizes) return ''

  const srcSet: string[] = []

  if (media.sizes.card?.url) {
    srcSet.push(`${replaceWithCDN(media.sizes.card.url)} 640w`)
  }
  if (media.sizes.tablet?.url) {
    srcSet.push(`${replaceWithCDN(media.sizes.tablet.url)} 1024w`)
  }
  if (media.sizes.desktop?.url) {
    srcSet.push(`${replaceWithCDN(media.sizes.desktop.url)} 1920w`)
  }

  return srcSet.join(', ')
}

/**
 * Get optimal image dimensions
 */
export function getImageDimensions(
  media: Media,
  size?: 'thumbnail' | 'card' | 'tablet' | 'desktop',
) {
  if (size && media.sizes?.[size]) {
    return {
      width: media.sizes[size].width || media.width || 1200,
      height: media.sizes[size].height || media.height || 800,
    }
  }

  return {
    width: media.width || 1200,
    height: media.height || 800,
  }
}
