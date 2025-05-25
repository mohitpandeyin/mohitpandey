import { withPayload } from '@payloadcms/next/withPayload'
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.S3_ENDPOINT?.replace('https://', '') || '',
        port: '',
        pathname: '/**',
      },
      // Add CDN domain pattern if set
      ...(process.env.R2_CDN_DOMAIN
        ? [
            {
              protocol: 'https',
              hostname: process.env.R2_CDN_DOMAIN.replace('https://', ''),
              port: '',
              pathname: '/**',
            },
          ]
        : []),
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@payloadcms/ui'],
    optimizeCss: true,
  },
  // Optimize builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
}

export default withPayload(withBundleAnalyzer(nextConfig))
