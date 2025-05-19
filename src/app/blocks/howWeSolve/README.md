# How We Solve Block for Payload CMS

This block allows you to showcase your company's key metrics, features, or benefits in a visually appealing card layout format.

## Features

- Customizable section heading
- Up to 4 feature cards with:
  - Prominent value/statistic display
  - Customizable icons (SVG)
  - Title and description
  - Color theme options for each card

## How to Use

1. When creating a page in Payload CMS, add a "How We Solve" block from the layout options
2. Fill in the required fields:
   - Heading: The main title for the section
   - Features: Add up to 4 feature cards with the following information:
     - Value: The prominent statistic or value (e.g., "24/7", "30%", "1/3")
     - Title: A short title for the feature
     - Icon: SVG code for the icon
     - Description: A brief description of the feature or benefit
     - Theme: Select a color theme for the card

## Technical Implementation

The How We Solve Block consists of several components:

- `schema.ts`: Defines the data structure and admin UI for the block
- `Server.tsx`: The server component that renders the block
- `HowWeSolve.tsx`: The client component that handles the presentation
- `index.module.css`: Styling for the component

## Customization

To customize the appearance:

- Edit `index.module.css` for styling adjustments
- Modify the theme colors in the CSS file to match your brand palette

## Example

Check `example-data.md` for sample content to use when creating your first How We Solve block.
