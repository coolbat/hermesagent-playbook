import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  defaultLocale,
  getLocaleFromPathname,
  getLocalePrefix,
  isLocale,
  localeCookieName,
  localeHeaderName,
  stripLocalePrefix,
  type Locale,
} from "@/lib/i18n";

const bypassPrefixes = ["/_next", "/api", "/images"];
const bypassExact = new Set([
  "/favicon.ico",
  "/icon.svg",
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/opengraph-image",
  "/twitter-image",
]);

function shouldBypass(pathname: string) {
  if (bypassExact.has(pathname)) {
    return true;
  }

  if (pathname.startsWith("/opengraph-image/") || pathname.startsWith("/twitter-image/")) {
    return true;
  }

  return bypassPrefixes.some((prefix) => pathname.startsWith(prefix));
}

function withLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(localeCookieName, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const preferredCookie = request.cookies.get(localeCookieName)?.value;
  const preferredLocale = isLocale(preferredCookie) ? preferredCookie : defaultLocale;

  if (shouldBypass(pathname)) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const target = new URL(`${getLocalePrefix(preferredLocale)}${search}`, request.url);
    return withLocaleCookie(NextResponse.redirect(target), preferredLocale);
  }

  const localeFromPath = getLocaleFromPathname(pathname);

  if (!localeFromPath) {
    const target = new URL(`${getLocalePrefix(preferredLocale)}${pathname}${search}`, request.url);
    return withLocaleCookie(NextResponse.redirect(target), preferredLocale);
  }

  const rewrittenPath = stripLocalePrefix(pathname);
  const headers = new Headers(request.headers);
  headers.set(localeHeaderName, localeFromPath);

  const rewriteUrl = new URL(`${rewrittenPath}${search}`, request.url);
  const response = NextResponse.rewrite(rewriteUrl, {
    request: {
      headers,
    },
  });

  return withLocaleCookie(response, localeFromPath);
}

export const config = {
  matcher: ["/((?!.*\\..*).*)", "/", "/robots.txt", "/sitemap.xml", "/llms.txt"],
};
