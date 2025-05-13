import { Cover } from '@/app/blocks/cover/schema'
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
      blocks: [Cover, Image, RichText],
      required: true,
    },
  ],
}
