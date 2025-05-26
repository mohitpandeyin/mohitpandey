import { Block } from 'payload'

export const HowSustainzoneWorksBlock: Block = {
  slug: 'howSustainzoneWorks',
  labels: {
    singular: 'How SustainZone Works',
    plural: 'How SustainZone Works Blocks',
  },
  interfaceName: 'HowSustainzoneWorksBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'How SustainZone Works',
      admin: {
        description: 'Main heading for the section',
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      required: false,
      defaultValue: 'Start Your Compliance Journey',
      admin: {
        description: 'Text for the call-to-action button',
      },
    },
    {
      name: 'buttonLink',
      type: 'text',
      required: false,
      defaultValue: '#',
      admin: {
        description: 'URL for the call-to-action button',
      },
    },
    {
      name: 'step1',
      type: 'group',
      label: 'Step 1: Assessment',
      admin: {
        description: 'Configuration for Step 1',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Compliance & Carbon Footprint Assessment',
          admin: {
            description: 'Heading for Step 1',
          },
        },
        {
          name: 'keyPoints',
          type: 'array',
          label: 'Key Points',
          minRows: 1,
          maxRows: 5,
          admin: {
            description: 'Key points for Step 1 (you can add multiple points)',
          },
          fields: [
            {
              name: 'point',
              type: 'text',
              required: true,
            },
          ],
          defaultValue: [
            { point: 'Evaluate current ESG & sustainability practices' },
            { point: 'Identify compliance gaps in CSRD, SEC, or GHG Protocol' },
          ],
        },
      ],
    },
    {
      name: 'step2',
      type: 'group',
      label: 'Step 2: Strategy',
      admin: {
        description: 'Configuration for Step 2',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Sustainability Strategy & Action Plan',
          admin: {
            description: 'Heading for Step 2',
          },
        },
        {
          name: 'keyPoints',
          type: 'array',
          label: 'Key Points',
          minRows: 1,
          maxRows: 5,
          admin: {
            description: 'Key points for Step 2 (you can add multiple points)',
          },
          fields: [
            {
              name: 'point',
              type: 'text',
              required: true,
            },
          ],
          defaultValue: [
            { point: 'Develop comprehensive sustainability roadmap' },
            { point: 'Set science-based targets and milestones' },
          ],
        },
      ],
    },
    {
      name: 'step3',
      type: 'group',
      label: 'Step 3: Implementation',
      admin: {
        description: 'Configuration for Step 3',
      },
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Implementation & Continuous Monitoring',
          admin: {
            description: 'Heading for Step 3',
          },
        },
        {
          name: 'keyPoints',
          type: 'array',
          label: 'Key Points',
          minRows: 1,
          maxRows: 5,
          admin: {
            description: 'Key points for Step 3 (you can add multiple points)',
          },
          fields: [
            {
              name: 'point',
              type: 'text',
              required: true,
            },
          ],
          defaultValue: [
            { point: 'Deploy custom SaaS tools for tracking' },
            { point: 'Generate automated compliance reports' },
          ],
        },
      ],
    },
  ],
}
