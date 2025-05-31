export interface FAQItem {
  id?: string
  question: string
  answer: string
}

export interface FAQProps {
  title: string
  subtitle?: string
  faqs: FAQItem[]
  blockType: 'faq'
  blockName?: string
}
