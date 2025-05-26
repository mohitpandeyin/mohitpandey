import React from 'react'
import { HowSustainzoneWorksClient } from './Client'
import { HowSustainzoneWorksProps } from './types'

const HowSustainzoneWorksBlockServer: React.FC<HowSustainzoneWorksProps> = (props) => {
  return <HowSustainzoneWorksClient {...props} />
}

export default HowSustainzoneWorksBlockServer
