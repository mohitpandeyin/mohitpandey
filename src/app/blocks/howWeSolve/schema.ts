import { Block } from 'payload'

export const HowWeSolve: Block = {
  slug: 'howWeSolve',
  labels: {
    singular: 'How We Solve Block',
    plural: 'How We Solve Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
      defaultValue: 'See our net-zero emission data how we slove',
    },
    {
      name: 'customerServiceDesc',
      label: '24/7 Customer Service Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Get continuous assistance to keep your sustainability journey on track, day or night.',
    },
    {
      name: 'costDesc',
      label: '1/3 The Cost Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Reduce sustainability program costs by one-third compared to traditional approaches.',
    },
    {
      name: 'emissionsDesc',
      label: '30% Emissions Reduction Description',
      type: 'textarea',
      required: true,
      defaultValue: 'Achieve measurable carbon reduction within the first year.',
    },
    {
      name: 'reportingDesc',
      label: '50% Faster Reporting Description',
      type: 'textarea',
      required: true,
      defaultValue: 'Our platform cuts report generation time in half, accelerating compliance.',
    },
  ],
}
