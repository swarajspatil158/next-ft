import { NextResponse } from "next/server";
import { updateSession } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  // Check if current path is exactly "/sign-in"
  if (request.nextUrl.pathname === '/sign-in') {
    // If user is already logged in, redirect to dashboard or home
    const session = request.cookies.get("session")?.value;
    if (session) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    // If not logged in, allow access to sign-in page
    return NextResponse.next();
  }

  // For all other protected routes
  const session = request.cookies.get("session")?.value;
  if (!session) {
    const signInUrl = new URL('/sign-in', request.url);
    return NextResponse.redirect(signInUrl);
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico|public/).*)',
  ],
};