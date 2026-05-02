import { NextResponse } from 'next/server';

export async function POST(request) {
  const { token } = await request.json();

  if (token) {
    const response = NextResponse.json({ success: true });
    
    // Set an HTTP-only cookie to keep the user logged in
    // Note: In a production app, you should verify this token server-side using firebase-admin
    response.cookies.set('portal_token', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
