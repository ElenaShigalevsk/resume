// Canonical URL: set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://resume.dialen.com.ua).
// Falls back to Vercel's production domain, then localhost for dev.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
