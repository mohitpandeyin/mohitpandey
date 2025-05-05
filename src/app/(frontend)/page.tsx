import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="home">
      <h1>Welcome to Payload</h1>
      <p>
        This is a simple example of a Next.js app using Payload CMS. You can edit this file at{' '}
        <a href={fileURL} target="_blank">
          {fileURLToPath(import.meta.url)}
        </a>
        . The code is located in the <code>src/app</code> directory.
      </p>
      <p>
        You are logged in as <strong>{user?.email}</strong>. You can view the Payload admin panel at{' '}
        <a href="/admin" target="_blank">
          <strong>/admin</strong>
        </a>
        . You can also view the Payload API at{' '}
        <a href="/api" target="_blank">
          <strong>/api</strong>
        </a>
      </p>
    </div>
  )
}
