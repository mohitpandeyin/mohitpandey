// filepath: /Users/mohit-15993/sites/mohitpandey/src/app/(frontend)/[slug]/page.tsx

import config from '@payload-config'
import { getPayload } from 'payload'
import React, { cache } from 'react'

import type { Page as PageType } from '../../../payload-types'

import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/utils/RenderBlocks'

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug)

  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  })

  return result.docs?.[0] || null
})

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
  })

  return pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'index'
    })
    .map(({ slug }) => ({ slug }))
}

export default async function Page({ params }: { params: Promise<{ slug?: string }> }) {
  const { slug = 'index' } = await params
  const page: PageType | null = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return notFound()
  }

  return (
    <main className="page-wrapper">
      <RenderBlocks blocks={page.layout} />
    </main>
  )
}
