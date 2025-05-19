# Hero Banner Block for Payload CMS

This block allows you to create a hero banner section with an optional scrolling marquee of logos.

## Features

- Customizable hero title and description
- Optional CTA button with custom text and link
- Banner image upload
- Optional marquee section with partner/client logos
- Mobile responsive design
- Pause-on-hover functionality for marquee

## How to Use

1. When creating a page in Payload CMS, add a "Hero Banner" block from the layout options
2. Fill in the required fields:
   - Title: The main heading for your hero section
   - Description: Subtext that appears below the title
   - Banner Image: Upload an image to display in the hero section

3. Optional fields:
   - Button Text: Text for the call-to-action button
   - Button Link: URL where the button should link to
   - Show Marquee Section: Toggle to enable/disable the logo marquee
   
4. If the marquee section is enabled, you can configure:
   - Marquee Text: A label for the marquee section (e.g., "Our Partners")
   - Marquee Logos: Upload multiple logo images that will scroll horizontally

## Technical Implementation

The Hero Banner consists of several components:

- `schema.ts`: Defines the data structure and admin UI for the block
- `Server.tsx`: The main server component that renders the block
- `Client.tsx`: Client-side component that enables interactive features
- `Marquee.tsx`: Dedicated component for the marquee functionality
- `useMarqueeAnimation.js`: Hook that manages marquee animations
- CSS files for styling

The implementation uses a hybrid approach with Server Components for static content and Client Components for interactive elements like the marquee animation.

## Customization

To customize the appearance:

- Edit `HeroBanner.css` for the main banner styling
- Edit `Marquee.css` for the marquee-specific styling

Color variables are defined at the top of the CSS files and can be modified to match your brand colors.

## Troubleshooting

If the marquee doesn't appear:
- Ensure "Show Marquee Section" is enabled
- Verify you've uploaded at least one logo image
- Check browser console for any JavaScript errors

If animations don't work:
- Ensure you're using the latest version of the component
- Check that the Client component is properly wrapping the content
