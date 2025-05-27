import { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonials Block',
    plural: 'Testimonials Blocks',
  },
  interfaceName: 'TestimonialsBlock',
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
      defaultValue: 'Helping Global Businesses Achieve Sustainability Success',
      admin: {
        description: 'Main heading for the testimonials section',
      },
    },
    {
      name: 'testimonials',
      label: 'Testimonials',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'quote',
          label: 'Quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'authorName',
          label: 'Author Name',
          type: 'text',
          required: true,
        },
        {
          name: 'companyName',
          label: 'Company Name',
          type: 'text',
        },
        {
          name: 'image',
          label: 'Author Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'showNavigationButtons',
      label: 'Show Navigation Buttons',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'autoplay',
      label: 'Autoplay',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'autoplayDelay',
      label: 'Autoplay Delay (ms)',
      type: 'number',
      defaultValue: 3000,
      admin: {
        condition: (_, siblingData) => siblingData.autoplay,
      },
    },
  ],
}
