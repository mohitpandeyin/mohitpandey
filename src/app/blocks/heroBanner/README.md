# Hero Banner Block for Payload CMS

This block allows you to create a hero banner section with an optional scrolling marquee of logos.

## Features

- Customizable hero title and description
- Optional CTA button with custom text and link
- Banner image upload
- Optional marquee section with partner/client logos using Swiper.js
- Mobile responsive design
- Smooth infinite scrolling marquee with Swiper.js

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
- `Server.tsx`: The main server component that renders the block with Swiper HTML structure
- `Client.tsx`: Client-side component that initializes Swiper.js for marquee functionality
- `HeroBanner.css`: Contains all styling including Swiper-specific styles

The implementation uses Swiper.js for smooth, performant marquee scrolling with:
- Infinite loop functionality
- Auto-play with minimal delay
- Responsive breakpoints
- Touch interaction disabled for continuous scrolling

## Dependencies

- **Swiper.js**: Used for the marquee scrolling functionality
- **Next.js**: Server and client components
- **Payload CMS**: Content management

## Customization

To customize the appearance:

- Edit `HeroBanner.css` for styling (includes Swiper styles)
- Modify Swiper configuration in `Client.tsx` for scrolling behavior
- Adjust breakpoints and spacing in the Swiper configuration

Color variables and responsive breakpoints are defined in the CSS file and can be modified to match your brand requirements.

## Troubleshooting

If the marquee doesn't appear:
- Ensure "Show Marquee Section" is enabled
- Verify you've uploaded at least one logo image
- Check browser console for any JavaScript errors

If animations don't work:
- Ensure you're using the latest version of the component
- Check that the Client component is properly wrapping the content
