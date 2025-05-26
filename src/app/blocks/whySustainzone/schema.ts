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
      name: 'lcaDescription',
      label: 'Life Cycle Assessment (LCA) & Digital Product Passport Description',
      type: 'textarea',
      required: true,
      defaultValue: 'Track product emissions across the value chain.',
    },
    {
      name: 'sbtiDescription',
      label: 'Science-Based Targets (SBTi) Alignment Description',
      type: 'textarea',
      required: true,
      defaultValue: 'We help businesses define & meet their sustainability goals.',
    },
    {
      name: 'saasToolsDescription',
      label: 'Custom SaaS Tools Description',
      type: 'textarea',
      required: true,
      defaultValue: 'Automate ESG reporting, compliance, and carbon footprint calculations.',
    },
    {
      name: 'carbonAccountingDescription',
      label: 'Complex Carbon Accounting Description',
      type: 'textarea',
      required: true,
      defaultValue: 'Granular Scope 1, 2 & 3 tracking for accurate emissions reporting.',
    },
    {
      name: 'supplyChainDescription',
      label: 'Supply Chain ESG Assessments Description',
      type: 'textarea',
      required: true,
      defaultValue: 'Measure supplier sustainability & drive compliance.',
    },
  ],
}
