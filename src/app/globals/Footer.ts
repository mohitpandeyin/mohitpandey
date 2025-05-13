import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Slug',
          type: 'text',
        },
      ],
    },
    {
      name: 'socials',
      label: 'Socials',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
        },
      ],
    },
    {
      name: 'footerText',
      label: 'Footer Text',
      type: 'textarea',
      required: false,
    },
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'text',
      required: false,
    },
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      required: false,
    },
    {
      name: 'phone',
      label: 'Phone',
      type: 'text',
      required: false,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      required: false,
    },
    {
      name: 'additionalInfo',
      label: 'Additional Info',
      type: 'textarea',
      required: false,
    },
  ],
}
