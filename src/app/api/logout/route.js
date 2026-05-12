import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.redirect(new URL('/logged-out', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));
  
  // Clear the portal_token cookie
  response.cookies.set('portal_token', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/',
  });

  return response;
}
