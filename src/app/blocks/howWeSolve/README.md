# How We Solve Block for Payload CMS

This block showcases your company's key metrics and benefits with a clean, modern card layout. The block displays 4 static feature cards (24/7 Customer Service, 1/3 The Cost, 30% Emissions Reduction, 50% Faster Reporting) with editable descriptions.

## Features

- Editable section title
- 4 predefined feature cards with:
  - Static titles, values, and icons
  - Editable descriptions through CMS
  - Color-coded design themes
  - Responsive layout

## How to Use

1. When creating a page in Payload CMS, add a "How We Solve" block from the layout options
2. Fill in the fields:
   - **Section Title**: The main heading for the section
   - **24/7 Customer Service Description**: Custom description for the customer service card
   - **1/3 The Cost Description**: Custom description for the cost savings card
   - **30% Emissions Reduction Description**: Custom description for the emissions card
   - **50% Faster Reporting Description**: Custom description for the reporting card

## Technical Implementation

The How We Solve Block consists of several components:

- `schema.ts`: Defines the data structure and admin UI for the block
- `Server.tsx`: The server component that renders the block
- `HowWeSolve.tsx`: The client component that handles the presentation
- Global CSS styles in `styles.css`

## Customization

To customize the appearance:

- Edit the global CSS styles in `/app/(frontend)/styles.css` 
- Modify the theme colors in the `.sz-*` classes to match your brand palette
- Adjust spacing, fonts, and layout through the CSS variables

## Example

Check `example-data.md` for sample content to use when creating your first How We Solve block.
