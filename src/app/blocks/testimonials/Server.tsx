import React from 'react'
import { TestimonialsClient } from './Client'
import type { TestimonialsBlock, Media } from '@/payload-types' // Added Media
import { TestimonialsProps, TestimonialItem } from './types'

type TestimonialsBlockServerProps = TestimonialsBlock

export default function TestimonialsBlockServer(props: TestimonialsBlockServerProps) {
  const {
    showNavigationButtons,
    autoplay,
    autoplayDelay,
    testimonials: rawTestimonials,
    ...rest
  } = props

  const clientProps: TestimonialsProps = {
    ...rest,
    title: rest.title || '', // Ensure title is a string
    testimonials: rawTestimonials
      ? rawTestimonials
          .filter((t): t is Omit<typeof t, 'id'> & { id: string } => typeof t.id === 'string') // Type guard to ensure id is string
          .map(
            (t): TestimonialItem => ({
              id: t.id, // Now t.id is definitely a string
              quote: t.quote || '', // Fallback for quote
              authorName: t.authorName || '', // Fallback for authorName
              companyName: t.companyName,
              image: t.image as Media | string | null | undefined, // Ensure type compatibility
            }),
          )
      : null,
    showNavigationButtons: showNavigationButtons ?? undefined,
    autoplay: autoplay ?? undefined,
    autoplayDelay: autoplayDelay ?? undefined,
  }

  return <TestimonialsClient {...clientProps} />
}
