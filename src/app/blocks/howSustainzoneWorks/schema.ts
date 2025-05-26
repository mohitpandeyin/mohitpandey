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
      name: 'step1Heading',
      type: 'text',
      required: true,
      defaultValue: 'Compliance & Carbon Footprint Assessment',
      admin: {
        description: 'Heading for Step 1',
      },
    },
    {
      name: 'step1Point1',
      type: 'text',
      required: true,
      defaultValue: 'Evaluate current ESG & sustainability practices',
      admin: {
        description: 'First key point for Step 1',
      },
    },
    {
      name: 'step1Point2',
      type: 'text',
      required: true,
      defaultValue: 'Identify compliance gaps in CSRD, SEC, or GHG Protocol',
      admin: {
        description: 'Second key point for Step 1',
      },
    },
    {
      name: 'step2Heading',
      type: 'text',
      required: true,
      defaultValue: 'Sustainability Strategy & Action Plan',
      admin: {
        description: 'Heading for Step 2',
      },
    },
    {
      name: 'step2Point1',
      type: 'text',
      required: true,
      defaultValue: 'Develop comprehensive sustainability roadmap',
      admin: {
        description: 'First key point for Step 2',
      },
    },
    {
      name: 'step2Point2',
      type: 'text',
      required: true,
      defaultValue: 'Set science-based targets and milestones',
      admin: {
        description: 'Second key point for Step 2',
      },
    },
    {
      name: 'step3Heading',
      type: 'text',
      required: true,
      defaultValue: 'Implementation & Continuous Monitoring',
      admin: {
        description: 'Heading for Step 3',
      },
    },
    {
      name: 'step3Point1',
      type: 'text',
      required: true,
      defaultValue: 'Deploy custom SaaS tools for tracking',
      admin: {
        description: 'First key point for Step 3',
      },
    },
    {
      name: 'step3Point2',
      type: 'text',
      required: true,
      defaultValue: 'Generate automated compliance reports',
      admin: {
        description: 'Second key point for Step 3',
      },
    },
  ],
}
