import React from 'react'
import { HowWeSolve } from './HowWeSolve'
import { HowWeSolveProps } from './types'

const HowWeSolveBlockServer: React.FC<HowWeSolveProps> = ({
  title,
  customerServiceDesc,
  costDesc,
  emissionsDesc,
  reportingDesc,
}) => {
  return (
    <HowWeSolve
      title={title}
      customerServiceDesc={customerServiceDesc}
      costDesc={costDesc}
      emissionsDesc={emissionsDesc}
      reportingDesc={reportingDesc}
    />
  )
}

export default HowWeSolveBlockServer
