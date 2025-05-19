import { Block } from 'payload/types'

export const HowWeSolve: Block = {
  slug: 'howWeSolve',
  labels: {
    singular: 'How We Solve Block',
    plural: 'How We Solve Blocks',
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
      defaultValue: 'See how we solve your sustainability challenges',
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      labels: {
        singular: 'Feature',
        plural: 'Features',
      },
      fields: [
        {
          name: 'value',
          label: 'Value',
          type: 'text',
          required: true,
          admin: {
            description: 'The highlighted value (e.g. 24/7, 1/3, 30%, 50%)',
          },
        },
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'textarea',
          required: true,
          admin: {
            description: 'SVG code for the icon',
          },
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'theme',
          label: 'Theme',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Customer Service',
              value: 'customerService',
            },
            {
              label: 'The Cost',
              value: 'theCost',
            },
            {
              label: 'Emissions Reduction',
              value: 'emissionsReduction',
            },
            {
              label: 'Faster Reporting',
              value: 'fasterReporting',
            },
          ],
          defaultValue: 'customerService',
        },
      ],
    },
  ],
}
