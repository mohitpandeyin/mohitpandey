import { Block } from 'payload'

export const HeroBanner: Block = {
  slug: 'heroBanner',
  labels: {
    singular: 'Hero Banner',
    plural: 'Hero Banners',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'showMarquee',
          label: 'Show Marquee Section',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            width: '50%',
            style: {
              marginTop: '36px',
            },
          },
        },
      ],
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'buttonText',
          label: 'Button Text',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'buttonLink',
          label: 'Button Link',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'bannerImage',
      label: 'Banner Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'collapsible',
      label: 'Marquee Section',
      admin: {
        condition: (_, siblingData) => Boolean(siblingData?.showMarquee),
      },
      fields: [
        {
          name: 'marqueeGroup',
          type: 'group',
          label: 'Reporting Frameworks',
          fields: [
            {
              name: 'marqueeLogos',
              label: 'RF Logos',
              type: 'array',
              minRows: 1,
              labels: {
                singular: 'Logo',
                plural: 'Logos',
              },
              fields: [
                {
                  name: 'logo',
                  label: 'Logo',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
