import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Generate at least 16 cryptographically secure random bytes from crypto.getRandomValues()
  const nonceBytes = new Uint8Array(16);
  crypto.getRandomValues(nonceBytes);
  const nonce = Buffer.from(nonceBytes).toString("base64");

  const isDev = process.env.NODE_ENV !== "production";
  const scriptSrc = isDev
    ? `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval';`
    : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic';`;

  // Construct Content-Security-Policy with nonce
  // Includes 'strict-dynamic' and 'unsafe-inline' fallback to ensure compatibility with Next.js client chunks
  const cspHeader = `
    default-src 'self';
    ${scriptSrc}
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://images.unsplash.com;
    font-src 'self' data:;
    connect-src 'self' https://api.telegram.org;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  // Clone request headers to propagate nonce to server components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", cspHeader);

  // Create response
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set Security Headers on the response
  response.headers.set("Content-Security-Policy", cspHeader);
  response.headers.set("x-nonce", nonce);
  response.headers.set("Strict-Transport-Security", "max-age=31536000");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=()"
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for static assets:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.svg, images, robots.txt, sitemap.xml
     */
    {
      source:
        "/((?!_next/static|_next/image|favicon.svg|images|robots.txt|sitemap.xml|.*\\.(?:jpg|jpeg|gif|png|webp|svg|ico)$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
