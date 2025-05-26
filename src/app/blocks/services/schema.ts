import { Block } from 'payload'

export const Services: Block = {
  slug: 'services',
  labels: {
    singular: 'Services Block',
    plural: 'Services Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
      defaultValue: 'Comprehensive Solutions for Compliance, Carbon Reduction & ESG Performance',
    },
    {
      name: 'services',
      label: 'Services',
      type: 'array',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'icon',
          label: 'Service Icon',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            description: 'SVG icon for the service (optional)',
          },
        },
        {
          name: 'category',
          label: 'Service Category',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'e.g., CSRD Reporting & Double Materiality',
          },
        },
        {
          name: 'title',
          label: 'Service Title',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'e.g., Develop and achieve SBTi-aligned net-zero strategies',
          },
        },
        {
          name: 'description',
          label: 'Service Description',
          type: 'textarea',
          required: true,
          admin: {
            placeholder: 'Brief description of the service...',
          },
        },
        {
          name: 'features',
          label: 'Key Features',
          type: 'array',
          minRows: 1,
          maxRows: 5,
          fields: [
            {
              name: 'feature',
              label: 'Feature',
              type: 'text',
              required: true,
              admin: {
                placeholder: 'e.g., Set corporate climate goals backed by science',
              },
            },
          ],
        },
        {
          name: 'buttonText',
          label: 'Button Text',
          type: 'text',
          defaultValue: 'See how it works',
        },
        {
          name: 'buttonLink',
          label: 'Button Link',
          type: 'text',
          defaultValue: '#',
        },
      ],
      defaultValue: [
        {
          category: 'CSRD Reporting & Double Materiality',
          title: 'Develop and achieve SBTi-aligned net-zero strategies',
          description:
            'We help businesses define, validate, and execute Science-Based Targets (SBTi), ensuring a clear pathway to net-zero emissions and alignment with the Paris Agreement.',
          features: [
            { feature: 'Set corporate climate goals backed by science' },
            { feature: 'Get expert guidance for SBTi validation' },
            { feature: 'Develop long-term decarbonization strategies' },
          ],
          buttonText: 'See how it works',
          buttonLink: '#',
        },
        {
          category: 'GHG Verification & Inventory Management',
          title: 'Accurate Carbon Tracking & Audit-Ready Reporting',
          description:
            'Our GHG Inventory Management service provides end-to-end emissions tracking for Scope 1, 2, & 3, ensuring compliance with ISO 14064, GHG Protocol, and other global standards.',
          features: [
            { feature: 'Measure & verify your carbon footprint' },
            { feature: 'Ensure compliance with SEC Climate Disclosure, CSRD & CDP' },
            { feature: 'Prepare for third-party audits with accurate data' },
          ],
          buttonText: 'See how it works',
          buttonLink: '#',
        },
      ],
    },
  ],
}
