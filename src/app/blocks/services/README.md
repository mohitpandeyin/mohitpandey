# Services Block for Payload CMS

This block creates a responsive services carousel showcasing your company's service offerings with detailed information, key features, and call-to-action buttons.

## Features

- **Responsive Swiper Carousel**: Smooth horizontal scrolling with navigation controls
- **Flexible Service Cards**: Each service can have:
  - Custom icon (optional SVG upload)
  - Service category/type
  - Title and description
  - Multiple key features with checkmarks
  - Custom button text and link
- **Professional Design**: Clean card layout with hover effects
- **Fully Editable**: All content manageable through Payload CMS
- **Mobile Optimized**: Responsive breakpoints for all devices

## How to Use

1. When creating a page in Payload CMS, add a "Services Block" from the layout options
2. Fill in the fields:
   - **Section Title**: Main heading for the services section
   - **Services Array**: Add multiple service cards with:
     - **Service Icon**: Optional SVG icon upload
     - **Service Category**: Type/category of service (e.g., "CSRD Reporting & Double Materiality")
     - **Service Title**: Main title for the service
     - **Service Description**: Detailed description of what the service offers
     - **Key Features**: Array of bullet points highlighting key benefits
     - **Button Text**: Custom call-to-action text (default: "See how it works")
     - **Button Link**: URL for the call-to-action button

## Technical Implementation

The Services Block consists of several components:

- `schema.ts`: Defines the data structure and admin UI for the block
- `Server.tsx`: The server component that passes data to the client component
- `Client.tsx`: Client component with Swiper.js integration for carousel functionality
- `Services.css`: Complete styling including responsive design
- `types.ts`: TypeScript interfaces for type safety

The implementation uses:
- **Swiper.js**: For smooth carousel functionality with navigation
- **Responsive Design**: Adaptive layouts for different screen sizes
- **Hover Effects**: Enhanced user interaction with subtle animations
- **Optimized Images**: Smart image loading for icons

## Dependencies

- **Swiper.js**: Carousel functionality
- **Next.js**: Server and client components
- **Payload CMS**: Content management
- **OptimizedImage component**: For efficient image loading

## Customization

To customize the appearance:

- Edit `Services.css` for styling modifications
- Adjust Swiper configuration in `Client.tsx` for carousel behavior
- Modify color variables in the CSS to match your brand
- Update breakpoints for different responsive behavior

## Default Content

The block comes with sample services pre-configured:

1. **CSRD Reporting & Double Materiality**
   - SBTi-aligned net-zero strategies
   - Features: Climate goals, SBTi validation, decarbonization strategies

2. **GHG Verification & Inventory Management**
   - Carbon tracking and audit-ready reporting
   - Features: Carbon footprint measurement, compliance, audit preparation

You can modify, add, or remove services as needed for your business.

## Example Usage

```typescript
// Example service configuration
{
  category: "Carbon Accounting",
  title: "Comprehensive Carbon Footprint Analysis",
  description: "End-to-end carbon accounting services...",
  features: [
    { feature: "Scope 1, 2, and 3 emissions tracking" },
    { feature: "Industry-specific emission factors" },
    { feature: "Real-time dashboard and reporting" }
  ],
  buttonText: "Learn More",
  buttonLink: "/services/carbon-accounting"
}
```
