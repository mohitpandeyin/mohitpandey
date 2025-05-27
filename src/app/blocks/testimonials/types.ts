import type { Media } from '@/payload-types'

export interface TestimonialItem {
  id: string
  quote: string
  authorName: string
  companyName?: string | null
  image?: string | Media | null
}

export interface TestimonialsProps {
  title: string
  testimonials: TestimonialItem[] | null
  showNavigationButtons?: boolean | null
  autoplay?: boolean | null
  autoplayDelay?: number | null
}
