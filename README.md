# Olena Shyhalevska — Portfolio

Next.js 16 (App Router, Cache Components) · GSAP 3.15 (ScrollTrigger, SplitText, Flip) · Lenis · Tailwind CSS 4 · Vercel.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start   # production check
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** the repo. Framework preset is detected automatically (Next.js), no build settings needed.
3. **Settings → Environment Variables**: `NEXT_PUBLIC_SITE_URL = https://resume.dialen.com.ua` (used for canonical URLs, sitemap, OG tags).
4. **Settings → Domains**: add `resume.dialen.com.ua` and point the DNS record to Vercel (CNAME `cname.vercel-dns.com`).
5. Optional: enable **Analytics** and **Speed Insights** in the project tabs — the components are already wired in `layout.tsx`.

Or from the CLI: `npx vercel` (preview) and `npx vercel --prod`.

## Editing content

| What | Where |
|---|---|
| Name, contacts, intro, stats, skills, experience, NDA case studies | `src/data/profile.ts` |
| Projects (titles, stack, links, order, featured) | `src/data/projects.ts` |
| Project screenshots | `public/work/<slug>.webp` (cover 16:10) and `<slug>-full.webp` (full page) |
| Image sizes & blur placeholders | `src/data/media.json` (regenerate when adding images) |
| CV | `public/Olena-Shyhalevska-CV.pdf` |

## Technical notes

- **Static by default**: home and all 35 project pages are prerendered at build time (`generateStaticParams`) → served from Vercel's CDN.
- **Images**: source PNGs (113 MB) were pre-compressed to WebP (9 MB); `next/image` then serves AVIF/WebP at responsive widths with blur placeholders.
- **Animation**: all GSAP code runs inside `useGSAP` (auto-cleanup) and `gsap.matchMedia`, so `prefers-reduced-motion` users get a static, fully readable site with native scrolling. Heavy effects (pinned horizontal scroll, custom cursor, magnetic buttons) are desktop/fine-pointer only.
- **Smooth scroll**: Lenis is driven by `gsap.ticker` so it shares one RAF loop with ScrollTrigger.
- **SEO**: metadata + Open Graph per page, generated OG image, `sitemap.xml`, `robots.txt`, JSON-LD `Person`.
- **A11y**: skip link, semantic landmarks, focus-visible styles, `aria-pressed` filters, real links and buttons.
