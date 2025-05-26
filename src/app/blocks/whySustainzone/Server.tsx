import React from 'react'
import { WhySustainzoneClient } from './Client'
import { WhySustainzoneProps } from './types'

const WhySustainzoneBlockServer: React.FC<WhySustainzoneProps> = (props) => {
  return <WhySustainzoneClient {...props} />
}

export default WhySustainzoneBlockServer
