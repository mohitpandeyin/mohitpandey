import React from 'react'
import './RichText.css'

// Enhanced rich text renderer for Lexical format
export default function RichTextBlockServer({ content }: { content: any }) {
  // For debugging
  console.log('RichText content:', content)

  if (!content) return <div className="richText">No content</div>

  const renderLexicalNode = (node: any, index: number): React.ReactNode => {
    if (!node) return null

    // Handle different node types
    switch (node.type) {
      case 'paragraph':
        return (
          <p key={index} style={node.format === 'center' ? { textAlign: 'center' } : undefined}>
            {Array.isArray(node.children)
              ? node.children.map((child: any, i: number) => renderLexicalNode(child, i))
              : null}
          </p>
        )

      case 'heading':
        // Dynamically render the appropriate heading level
        if (node.tag === 1) {
          return (
            <h1 key={index}>
              {Array.isArray(node.children)
                ? node.children.map((child: any, i: number) => renderLexicalNode(child, i))
                : null}
            </h1>
          )
        } else if (node.tag === 2) {
          return (
            <h2 key={index}>
              {Array.isArray(node.children)
                ? node.children.map((child: any, i: number) => renderLexicalNode(child, i))
                : null}
            </h2>
          )
        } else if (node.tag === 3) {
          return (
            <h3 key={index}>
              {Array.isArray(node.children)
                ? node.children.map((child: any, i: number) => renderLexicalNode(child, i))
                : null}
            </h3>
          )
        } else if (node.tag === 4) {
          return (
            <h4 key={index}>
              {Array.isArray(node.children)
                ? node.children.map((child: any, i: number) => renderLexicalNode(child, i))
                : null}
            </h4>
          )
        } else if (node.tag === 5) {
          return (
            <h5 key={index}>
              {Array.isArray(node.children)
                ? node.children.map((child: any, i: number) => renderLexicalNode(child, i))
                : null}
            </h5>
          )
        } else {
          return (
            <h6 key={index}>
              {Array.isArray(node.children)
                ? node.children.map((child: any, i: number) => renderLexicalNode(child, i))
                : null}
            </h6>
          )
        }

      case 'list':
        if (node.listType === 'bullet') {
          return (
            <ul key={index}>
              {Array.isArray(node.children)
                ? node.children.map((child: any, i: number) => renderLexicalNode(child, i))
                : null}
            </ul>
          )
        } else {
          return (
            <ol key={index}>
              {Array.isArray(node.children)
                ? node.children.map((child: any, i: number) => renderLexicalNode(child, i))
                : null}
            </ol>
          )
        }

      case 'listitem':
        return (
          <li key={index}>
            {Array.isArray(node.children)
              ? node.children.map((child: any, i: number) => renderLexicalNode(child, i))
              : null}
          </li>
        )

      case 'quote':
        return (
          <blockquote key={index}>
            {Array.isArray(node.children)
              ? node.children.map((child: any, i: number) => renderLexicalNode(child, i))
              : null}
          </blockquote>
        )

      case 'link':
        return (
          <a key={index} href={node.url || '#'} rel="noopener noreferrer" target="_blank">
            {Array.isArray(node.children)
              ? node.children.map((child: any, i: number) => renderLexicalNode(child, i))
              : null}
          </a>
        )

      default:
        // Handle text nodes
        if (node.text !== undefined) {
          let textElement = <>{node.text}</>

          // Apply formatting to text
          if (node.bold) {
            textElement = <strong key={index}>{textElement}</strong>
          }
          if (node.italic) {
            textElement = <em key={index}>{textElement}</em>
          }
          if (node.underline) {
            textElement = <u key={index}>{textElement}</u>
          }
          if (node.strikethrough) {
            textElement = <s key={index}>{textElement}</s>
          }
          if (node.code) {
            textElement = <code key={index}>{textElement}</code>
          }

          return textElement
        }

        // Return null for unknown node types
        return null
    }
  }

  try {
    if (typeof content === 'object' && content?.root?.children) {
      // Render the Lexical content structure
      return (
        <div className="richText">
          {content.root.children.map((node: any, i: number) => renderLexicalNode(node, i))}
        </div>
      )
    } else if (typeof content === 'string') {
      // Handle string content
      return <div className="richText">{content}</div>
    } else {
      // Last resort: just try to show something
      const stringified = JSON.stringify(content, null, 2)
      return (
        <div className="richText">
          {stringified !== '[object Object]' ? stringified : 'Invalid content format'}
        </div>
      )
    }
  } catch (error) {
    console.error('Error rendering rich text content:', error)
    return <div className="richText">Error rendering content</div>
  }
}
