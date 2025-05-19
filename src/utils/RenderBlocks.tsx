import CoverBlockServer from '@/app/blocks/cover/Server'
import HeroBannerBlockServer from '@/app/blocks/heroBanner/Server'
import HowWeSolveBlockServer from '@/app/blocks/howWeSolve/Server'
import ImageBlockServer from '@/app/blocks/image/Server'
import RichTextBlockServer from '@/app/blocks/richtext/Server'
import { Page } from '@/payload-types'
import React, { Fragment } from 'react'
import './renderBlocks.css'

const blockComponents = {
  cover: CoverBlockServer,
  heroBanner: HeroBannerBlockServer,
  howWeSolve: HowWeSolveBlockServer,
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
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <section className={`block-section block-${blockType}`} key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types */}
                  <Block {...block} />
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
