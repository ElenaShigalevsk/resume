export const profile = {
  name: "Olena Shyhalevska",
  shortName: "Olena",
  role: "Frontend & WordPress Developer",
  location: "Ukraine · Remote worldwide",
  email: "shigalevsk@gmail.com",
  telegram: "elena_shigalevsk",
  linkedin: "https://www.linkedin.com/in/elena-shyhalevskaya-44360910a/",
  cv: "/Olena-Shyhalevska-CV.pdf",
  intro:
    "I build fast, pixel-perfect websites and interfaces — from custom WordPress themes and WooCommerce stores to headless Next.js frontends and Webflow builds.",
  about: [
    "7+ years turning Figma layouts into production websites for agencies, product companies and enterprise clients across Europe and the US.",
    "My sweet spot is where design meets logic: complex layouts, dynamic components, API integrations, custom checkout flows, multilingual and RTL sites — delivered with Lighthouse scores in the 90s.",
  ],
} as const;

export const stats = [
  { value: 7, suffix: "+", label: "years in commercial development" },
  { value: 70, suffix: "+", label: "websites delivered" },
  { value: 40, suffix: "%", label: "faster builds with reusable ACF modules" },
  { value: 95, suffix: "", label: "Lighthouse performance on delivered sites" },
] as const;

/** Core strengths — highlighted in the Expertise block. */
export const keySkills = new Set([
  "WordPress",
  "WooCommerce",
  "ACF Pro",
  "Headless WordPress",
  "Webflow",
  "React",
  "Next.js",
  "PHP",
  "Pixel-perfect Figma → code",
  "Core Web Vitals",
]);

export const skillGroups = [
  {
    title: "CMS & E‑commerce",
    note: "Custom themes, blocks and plugins built for editors.",
    items: ["WordPress", "WooCommerce", "ACF Pro", "Gutenberg blocks", "Headless WordPress", "Custom themes & plugins", "WPML", "Webflow", "Shopify / Liquid", "Elementor", "HubSpot", "OpenCart"],
  },
  {
    title: "Frontend",
    note: "Component-driven UIs and motion.",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Nuxt", "Vue", "Redux Toolkit", "GSAP", "HTML5", "SCSS", "Tailwind CSS", "Material UI", "Bootstrap", "jQuery"],
  },
  {
    title: "Backend & APIs",
    note: "Integrations that move real data and money.",
    items: ["PHP", "WP REST API", "Custom Post Types", "Laravel Blade", "Node.js", "Google Maps API", "Google Sheets API", "UPS / InPost APIs", "OAuth", "Payment gateways & CRM"],
  },
  {
    title: "Quality & Delivery",
    note: "What clients actually notice.",
    items: ["Pixel-perfect Figma → code", "Responsive & cross-browser", "Accessibility", "Core Web Vitals", "Lighthouse 85–95+", "Technical SEO", "i18n & RTL", "Lazy loading & code splitting", "Image optimization", "Caching"],
  },
  {
    title: "Tooling & Analytics",
    note: "From local build to production.",
    items: ["Git · GitHub / GitLab / Bitbucket", "Vite", "Webpack", "Gulp", "npm / Yarn", "Docker", "Vercel", "cPanel", "CI/CD", "Google Analytics", "PageSpeed Insights"],
  },
] as const;

export const marquee = ["WordPress", "Next.js", "React", "WooCommerce", "Webflow", "Shopify", "TypeScript", "GSAP", "ACF", "Gutenberg", "Headless CMS", "Tailwind"];

export const experience = [
  {
    period: "2026 — now",
    company: "SMART-UI",
    role: "Frontend Developer",
    text: "Headless WordPress with Next.js / Nuxt, Gutenberg blocks on ACF, Shopify stores on Liquid, CRM & payment integrations, Lighthouse 85–95+.",
  },
  {
    period: "2024 — 2026",
    company: "Academy SMART",
    role: "Frontend Developer",
    text: "React / Next.js applications and custom WordPress themes, animated Figma-to-code layouts, WooCommerce checkout and dynamic product logic.",
  },
  {
    period: "2022 — 2024",
    company: "Develux",
    role: "WordPress Developer",
    text: "Reusable ACF component systems, Custom Post Types and taxonomies, features on jQuery, Vue.js and Laravel Blade.",
  },
  {
    period: "2018 — 2022",
    company: "Freelance",
    role: "Frontend Developer",
    text: "40+ commercial websites, landing pages and stores for international clients on WordPress, WooCommerce, Webflow and custom PHP.",
  },
] as const;

/** NDA projects — described without screenshots or client names. */
export const caseStudies = [
  {
    tag: "Government · NDA",
    title: "Transportation portal",
    text: "A large multilingual government platform with full RTL layout, a service directory on Google Maps with cached geocoding and map/list sync, custom REST endpoints for search and document indexing, PDF export and multi-step service flows.",
    stack: ["WordPress", "ACF", "CPT", "WPML / RTL", "Google Maps API", "REST API"],
  },
  {
    tag: "E-commerce · NDA",
    title: "Multi-currency EU store",
    text: "GEO-based country detection, EU VAT rules and a synchronised front/back price recalculation. Custom checkout, AJAX filters and shipping-dependent totals.",
    stack: ["WooCommerce", "PHP", "WPML", "VAT logic", "AJAX"],
  },
  {
    tag: "Automation · NDA",
    title: "Shipping label robot",
    text: "A custom plugin that buys InPost ShipX labels automatically, plus a UPS integration with OAuth, label recovery and structured JSON payloads that speeds up order processing.",
    stack: ["PHP", "WooCommerce", "UPS API", "InPost API", "OAuth"],
  },
  {
    tag: "Headless · NDA",
    title: "Interactive map UI",
    text: "WordPress as a headless CMS behind a Next.js frontend: real-time polygon filtering on a map, PDF generation from the DOM and cross-origin iframe communication via postMessage.",
    stack: ["Next.js", "React", "Headless WP", "postMessage", "PDF"],
  },
] as const;
