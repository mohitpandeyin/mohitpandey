export type ServiceItem = {
  icon?: string
  category?: string
  title?: string
  description?: string
  features?: Array<{ feature?: string }>
  buttonText?: string
  buttonLink?: string
}

export type ServicesProps = {
  title?: string
  services?: ServiceItem[]
}
