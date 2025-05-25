# Image Performance Optimization Guide

This project uses Cloudflare R2 for image storage with comprehensive performance optimizations.

## 🚀 Performance Features Implemented

### 1. Next.js Image Optimization
- **WebP & AVIF formats** for modern browsers
- **Responsive images** with multiple device sizes
- **Blur placeholder** for smooth loading experience
- **Lazy loading** by default (priority=false)

### 2. Cloudflare R2 + CDN
- **Multiple image sizes** generated automatically
- **CDN domain support** for faster global delivery
- **Cache headers** set for 1 year on static assets
- **Sharp processing** for optimal image compression

### 3. Generated Image Sizes
- **Thumbnail**: 300x300 (WebP, 80% quality)
- **Card**: 640x480 (WebP, 85% quality)  
- **Tablet**: 1024px width (WebP, 85% quality)
- **Desktop**: 1920px width (WebP, 90% quality)

## 🛠️ Setup Instructions

### 1. Environment Variables
Copy `.env.example` to `.env` and configure:

```bash
# R2 Storage
S3_BUCKET=your-bucket-name
S3_ACCESS_KEY_ID=your-access-key
S3_SECRET_ACCESS_KEY=your-secret-key
S3_ENDPOINT=https://your-account-id.r2.cloudflarestorage.com

# CDN Domain (optional but recommended)
R2_CDN_DOMAIN=https://your-custom-domain.com
```

### 2. Cloudflare R2 Setup
1. Create an R2 bucket in Cloudflare Dashboard
2. Generate API tokens with R2 permissions
3. Set up a custom domain (optional but recommended for best performance)

### 3. Custom Domain Setup (Recommended)
1. Go to Cloudflare R2 → Your Bucket → Settings
2. Add a custom domain
3. Update `R2_CDN_DOMAIN` in your environment variables

## 📊 Performance Improvements

### Before Optimization:
- ❌ Direct R2 URLs (slower global access)
- ❌ Original image sizes (larger file sizes)
- ❌ No format optimization
- ❌ No caching headers

### After Optimization:
- ✅ CDN delivery (faster global access)
- ✅ Multiple responsive sizes
- ✅ WebP/AVIF format support
- ✅ 1-year cache headers
- ✅ Blur placeholders for smooth loading
- ✅ Automatic image optimization

## 🎯 Usage Examples

### Using OptimizedImage Component
```tsx
import OptimizedImage from '@/components/OptimizedImage'

// Basic usage
<OptimizedImage media={media} alt="Description" />

// With specific size
<OptimizedImage 
  media={media} 
  size="tablet" 
  priority={true} // For above-the-fold images
/>

// With custom styling
<OptimizedImage 
  media={media}
  className="custom-class"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Using Utility Functions
```tsx
import { optimizeImageUrl, getImageDimensions } from '@/utils/imageOptimization'

const optimizedUrl = optimizeImageUrl(media, 'desktop')
const { width, height } = getImageDimensions(media, 'tablet')
```

## 🔧 Advanced Configuration

### Custom Image Sizes
Edit `src/collections/Media.ts` to add custom sizes:

```typescript
imageSizes: [
  {
    name: 'hero',
    width: 2400,
    height: 1200,
    formatOptions: {
      format: 'webp',
      options: { quality: 95 }
    }
  }
]
```

### CDN Cache Control
Cache headers are automatically set via middleware for:
- Images: 1 year cache
- Static assets: 1 year cache
- Immutable assets: Forever cache

## 📈 Monitoring Performance

### Check Image Optimization
1. Open Chrome DevTools → Network tab
2. Filter by "Img"
3. Look for WebP format and appropriate sizes
4. Check cache headers (should show 1 year)

### Performance Metrics to Monitor
- **Largest Contentful Paint (LCP)**: Should improve with optimized images
- **First Input Delay (FID)**: Better with lazy loading
- **Cumulative Layout Shift (CLS)**: Stable with proper dimensions

## 🐛 Troubleshooting

### Images Not Loading
1. Check environment variables are set correctly
2. Verify R2 bucket permissions
3. Ensure Next.js remote patterns are configured

### Slow Loading
1. Verify CDN domain is set up
2. Check if images are being served in WebP format
3. Confirm cache headers are being sent

### TypeScript Errors
Make sure to regenerate types after changes:
```bash
npm run generate:types
```

## 📚 Additional Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Cloudflare R2 Documentation](https://developers.cloudflare.com/r2/)
- [Payload CMS Media Optimization](https://payloadcms.com/docs/upload/overview)
