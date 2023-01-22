import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Redirect user to sign_in page if try to visit protected pages without authentication
  const protectedPaths = ["/chat"];
  if (protectedPaths.includes(req.nextUrl.pathname)) {
    if (!session) {
      let redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/sign_in'
      return NextResponse.redirect(redirectUrl);
    }
  }

  // After authenticated, user cannot visit `sign_in` and `sign_up` pages
  const authPaths = ["/sign_in", "/sign_up"];
  if (authPaths.includes(req.nextUrl.pathname)) {
    if (session) {
      let redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/chat'
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}
