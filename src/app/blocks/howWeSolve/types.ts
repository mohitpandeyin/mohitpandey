export type HowWeSolveFeature = {
  value: string
  title: string
  icon: string
  description: string
  theme: 'customerService' | 'theCost' | 'emissionsReduction' | 'fasterReporting'
}

export type HowWeSolveProps = {
  heading: string
  features: HowWeSolveFeature[]
}
