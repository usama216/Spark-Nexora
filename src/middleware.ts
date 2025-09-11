import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the route is protected (admin routes)
  if (pathname.startsWith('/admin')) {
    // For client-side authentication, we'll let the admin page handle the redirect
    // The middleware will just pass through and let React handle the auth check
    return NextResponse.next();
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
};
