import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('portal_token');
  const { pathname } = request.nextUrl;

  // If trying to access portal and not authenticated, redirect to login
  if (pathname.startsWith('/portal') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If already authenticated and trying to access login, redirect to portal
  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/portal', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/portal/:path*', '/login'],
};
