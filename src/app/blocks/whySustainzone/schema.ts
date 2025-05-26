import { Block } from 'payload'

export const WhySustainzone: Block = {
  slug: 'whySustainzone',
  labels: {
    singular: 'Why Sustainzone Block',
    plural: 'Why Sustainzone Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
      defaultValue: 'Why Choose SustainZone',
    },
    {
      name: 'expertiseDescription',
      label: 'Expertise & Experience Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Our team of ESG experts and sustainability professionals brings years of experience in compliance, carbon accounting, and environmental reporting.',
    },
    {
      name: 'technologyDescription',
      label: 'Advanced Technology Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Leverage cutting-edge AI and machine learning tools to automate data collection, analysis, and reporting for maximum accuracy and efficiency.',
    },
    {
      name: 'complianceDescription',
      label: 'Comprehensive Compliance Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Stay ahead of evolving regulations with our comprehensive coverage of CSRD, SEC Climate Disclosure, GHG Protocol, and other frameworks.',
    },
    {
      name: 'supportDescription',
      label: 'Dedicated Support Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Get personalized guidance from our sustainability experts throughout your compliance journey with 24/7 support and consultation.',
    },
    {
      name: 'integrationsDescription',
      label: 'Seamless Integrations Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'Connect with your existing systems and data sources through our robust API and pre-built integrations with popular business tools.',
    },
  ],
}
