import { Cover } from '@/app/blocks/cover/schema'
import { HeroBanner } from '@/app/blocks/heroBanner/schema'
import { HowSustainzoneWorksBlock } from '@/app/blocks/howSustainzoneWorks/schema'
import { HowWeSolve } from '@/app/blocks/howWeSolve/schema'
import { Services } from '@/app/blocks/services/schema'
import { TestimonialsBlock } from '@/app/blocks/testimonials/schema'
import { WhySustainzone } from '@/app/blocks/whySustainzone/schema'
import { Image } from '@/app/blocks/image/schema'
import { RichText } from '@/app/blocks/richtext/schema'

import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      blocks: [
        Cover,
        HeroBanner,
        HowSustainzoneWorksBlock,
        HowWeSolve,
        Services,
        TestimonialsBlock,
        WhySustainzone,
        Image,
        RichText,
      ],
      required: true,
    },
  ],
}
