import CoverBlockServer from '@/app/blocks/cover/Server'
import HeroBannerBlockServer from '@/app/blocks/heroBanner/Server'
import HowSustainzoneWorksBlockServer from '@/app/blocks/howSustainzoneWorks/Server'
import HowWeSolveBlockServer from '@/app/blocks/howWeSolve/Server'
import ServicesBlockServer from '@/app/blocks/services/Server'
import TestimonialsBlockServer from '@/app/blocks/testimonials/Server'
import FAQBlockServer from '@/app/blocks/faq/Server'
import WhySustainzoneBlockServer from '@/app/blocks/whySustainzone/Server'
import ImageBlockServer from '@/app/blocks/image/Server'
import RichTextBlockServer from '@/app/blocks/richtext/Server'
import { Page } from '@/payload-types'
import React, { Fragment } from 'react'

const blockComponents = {
  cover: CoverBlockServer,
  heroBanner: HeroBannerBlockServer,
  howSustainzoneWorks: HowSustainzoneWorksBlockServer,
  howWeSolve: HowWeSolveBlockServer,
  services: ServicesBlockServer,
  testimonials: TestimonialsBlockServer,
  faq: FAQBlockServer,
  whySustainzone: WhySustainzoneBlockServer,
  image: ImageBlockServer,
  richtext: RichTextBlockServer,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <section className={`block-section block-${blockType}`} key={index}>
                  <Block {...(block as any)} />
                </section>
              )
            }
          }
          return null
        })}
      </>
    )
  }

  return null
}
