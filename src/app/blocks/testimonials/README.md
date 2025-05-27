# Testimonials Block for Payload CMS

This block creates a responsive testimonials carousel showcasing customer reviews and feedback with Swiper.js integration, featuring star ratings, customer photos, company logos, and featured testimonials.

## Features

- **Responsive Swiper Carousel**: Smooth horizontal scrolling with navigation controls and pagination
- **Flexible Testimonial Cards**: Each testimonial can have:
  - Customer quote with quotation mark icon
  - Star rating system (1-5 stars)
  - Customer name, title, and company
  - Optional customer photo
  - Optional company logo
  - Featured testimonial highlighting
- **Professional Design**: Clean card layout with hover effects and gradient backgrounds
- **Auto-play Functionality**: Configurable auto-advance with pause on hover
- **Fully Editable**: All content manageable through Payload CMS
- **Mobile Optimized**: Responsive breakpoints for all devices

## How to Use

1. When creating a page in Payload CMS, add a "Testimonials Block" from the layout options
2. Fill in the fields:
   - **Section Title**: Main heading for the testimonials section
   - **Section Subtitle**: Optional descriptive text below the title
   - **Testimonials Array**: Add multiple testimonial cards with:
     - **Testimonial Quote**: The customer feedback text
     - **Customer Name**: Full name of the reviewer
     - **Customer Title**: Job title/position (optional)
     - **Company Name**: Organization name
     - **Company Logo**: Optional company logo upload
     - **Customer Photo**: Optional profile photo upload
     - **Rating**: Star rating from 1-5 (default: 5)
     - **Featured Testimonial**: Checkbox to highlight important testimonials
   - **Show Navigation Buttons**: Toggle prev/next arrow buttons
   - **Show Pagination Dots**: Toggle pagination indicators
   - **Auto-play Carousel**: Enable automatic slide advancement
   - **Auto-play Delay**: Seconds between auto-advance (3-10 seconds)

## Technical Implementation

The Testimonials Block consists of several components:

- `schema.ts`: Defines the data structure and admin UI for the block
- `Server.tsx`: The server component that passes data to the client component
- `Client.tsx`: Client component with Swiper.js integration for carousel functionality
- `Testimonials.css`: Complete styling including responsive design and hover effects
- `types.ts`: TypeScript interfaces for type safety

The implementation uses:
- **Swiper.js**: For smooth carousel functionality with navigation, pagination, and autoplay
- **Responsive Design**: Adaptive layouts from mobile to desktop
- **Hover Effects**: Enhanced user interaction with card animations
- **Featured System**: Special styling for highlighted testimonials
- **OptimizedImage component**: For efficient image loading

## Dependencies

- **Swiper.js**: Carousel functionality with Navigation, Pagination, and Autoplay modules
- **Next.js**: Server and client components
- **Payload CMS**: Content management
- **OptimizedImage component**: For efficient image loading

## Customization

To customize the appearance:

- Edit `Testimonials.css` for styling modifications
- Adjust Swiper configuration in `Client.tsx` for carousel behavior
- Modify color variables in the CSS to match your brand
- Update breakpoints for different responsive behavior
- Customize star rating colors and featured testimonial styling

## Default Content

The block comes with sample testimonials pre-configured:

1. **Featured Testimonial** - Sarah Johnson (EcoTech Industries)
   - Highlights transformation of sustainability reporting process
   - 5-star rating with featured badge

2. **Michael Chen** (GreenFuture Corp)
   - Focuses on CSRD compliance and platform usability
   - 5-star rating

3. **Emma Williams** (Sustainable Solutions Ltd)
   - Emphasizes measurable results and carbon footprint reduction
   - 5-star rating

You can modify, add, or remove testimonials as needed for your business.

## Responsive Breakpoints

- **Mobile (320px+)**: Single testimonial per view
- **Tablet (768px+)**: 1.5 testimonials per view
- **Desktop (1024px+)**: 2 testimonials per view
- **Large Desktop (1200px+)**: 2.5 testimonials per view

## Example Usage

```typescript
// In your page layout, the testimonials block will automatically render
// All configuration is done through the Payload CMS admin interface
{
  blockType: 'testimonials',
  title: 'What Our Clients Say',
  subtitle: 'Real feedback from companies who have transformed their sustainability journey',
  testimonials: [
    {
      quote: 'SustainZone transformed our sustainability reporting process...',
      customerName: 'Sarah Johnson',
      customerTitle: 'Sustainability Director',
      companyName: 'EcoTech Industries',
      rating: 5,
      featured: true
    }
  ],
  showNavigationButtons: true,
  showPagination: true,
  autoplay: true,
  autoplayDelay: 5
}
```

## Accessibility Features

- Semantic HTML structure with proper roles and labels
- Keyboard navigation support through Swiper.js
- Alt text support for customer photos and company logos
- ARIA labels for star ratings and navigation elements
- High contrast ratios for text readability
