# FAQ Block

A flexible FAQ (Frequently Asked Questions) block for Payload CMS with accordion functionality.

## Features

- **Accordion UI**: Click to expand/collapse FAQ items
- **Smooth Animations**: CSS transitions for opening/closing
- **Responsive Design**: Mobile-friendly layout
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **TypeScript Support**: Full type safety
- **Server/Client Components**: Optimized for Next.js

## Schema Fields

- `title` (string, required): Main heading for the FAQ section
- `subtitle` (string, optional): Supporting text below the title
- `faqs` (array, required): List of FAQ items
  - `question` (string, required): The question text
  - `answer` (string, required): The answer content

## Usage

The FAQ block is automatically registered in Payload CMS and can be added to any page through the blocks field.

## Styling

The component uses CSS classes with the `faq-` prefix. Customize the appearance by modifying `FAQ.css`.

## Components

- `Server.tsx`: Server-side component wrapper
- `Client.tsx`: Client-side interactive component with accordion functionality
- `schema.ts`: Payload CMS field configuration
- `types.ts`: TypeScript interface definitions
