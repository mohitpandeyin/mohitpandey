import React from 'react'
import { ServicesClient } from './Client'
import { ServicesProps } from './types'

const ServicesBlockServer: React.FC<ServicesProps> = ({ title, services }) => {
  return <ServicesClient title={title} services={services} />
}

export default ServicesBlockServer
