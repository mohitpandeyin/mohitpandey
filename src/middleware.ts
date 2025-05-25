import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Add cache headers for static assets from R2
  if (
    request.nextUrl.pathname.includes('/media/') ||
    request.nextUrl.href.includes(process.env.S3_ENDPOINT || '') ||
    request.nextUrl.href.includes(process.env.R2_CDN_DOMAIN || '')
  ) {
    const response = NextResponse.next()

    // Cache images for 1 year
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    response.headers.set('Expires', new Date(Date.now() + 31536000000).toUTCString())

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
