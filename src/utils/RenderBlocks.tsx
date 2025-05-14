import CoverBlockServer from '@/app/blocks/cover/Server'
import ImageBlockServer from '@/app/blocks/image/Server'
import RichTextBlockServer from '@/app/blocks/richtext/Server'
import { Page } from '@/payload-types'
import React, { Fragment } from 'react'

const blockComponents = {
  cover: CoverBlockServer,
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
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types */}
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
