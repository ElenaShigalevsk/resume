import media from "./media.json";

export type Category = "WordPress" | "Webflow" | "Frontend";

/**
 * live     — the link still shows my version of the site.
 * archived — the site was later rebuilt by someone else, parked or taken offline;
 *            the screenshot is the only record of my version, so no link is shown.
 */
export type Status = "live" | "archived";

type Media = {
  cover: { w: number; h: number };
  blur: string;
  full?: { w: number; h: number };
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: Category;
  stack: string[];
  /** 2–3 lines: what I built. Written from the screenshots of my version. */
  description: string;
  url?: string;
  status: Status;
  featured?: boolean;
  media: Media;
};

type Raw = Omit<Project, "media">;

const raw: Raw[] = [
  {
    slug: "dguv",
    client: "DGUV · Arbeit & Gesundheit",
    title: "Portal for the German Statutory Accident Insurance",
    category: "WordPress",
    stack: ["WordPress", "Gutenberg", "Custom Post Types", "Bootstrap", "PHP", "JS"],
    description:
      "WordPress theme for DGUV's occupational-safety magazine: an editorial layout with topic sections, article teaser grids and Custom Post Types for content types. Includes site search, an Easy Read (Leichte Sprache) label and a contact form.",
    url: "https://aug.dguv.de",
    status: "live",
    featured: true,
  },
  {
    slug: "surge",
    client: "Surge AI",
    title: "Marketing site for an internet-scale data platform",
    category: "Webflow",
    stack: ["Webflow", "Interactions", "JS"],
    description:
      "Webflow build from Figma: an animated hero with floating product cards, trend-tracking sections and illustrated scroll interactions made with Webflow Interactions. Fully responsive, with a blog section.",
    url: "https://www.surge.ai",
    status: "archived",
    featured: true,
  },
  {
    slug: "ardcontracting",
    client: "ARD Contracting",
    title: "Corporate site for a concrete & telecom construction firm",
    category: "WordPress",
    stack: ["WordPress", "Gutenberg", "Custom Post Types", "PHP", "JS"],
    description:
      "Custom WordPress theme for a construction contractor: services, featured projects and careers built on Custom Post Types and editable in Gutenberg. Scroll-reveal animations, sliders and an embedded Google Map.",
    url: "https://ardcontracting.com",
    status: "live",
    featured: true,
  },
  {
    slug: "heycanopy",
    client: "Canopy",
    title: "Website for a fundraising & investor-relations platform",
    category: "Webflow",
    stack: ["Webflow", "Interactions", "JS"],
    description:
      "Pixel-perfect Webflow site for a fintech product: product-UI showcases, feature grids and diagonal section layouts, with Webflow Interactions for the reveal animations.",
    url: "https://www.heycanopy.com",
    status: "live",
    featured: true,
  },
  {
    slug: "ultimatefloors",
    client: "Ultimate Floors",
    title: "Catalogue & store for a wholesale flooring supplier",
    category: "WordPress",
    stack: ["WooCommerce", "WordPress", "SCSS", "PHP", "JS"],
    description:
      "WooCommerce catalogue for a flooring supplier: collection and product pages, product-feature blocks (waterproof, wear layer), a full-width hero slider and resources section, styled with custom SCSS.",
    url: "https://ultimatefloors.net",
    status: "live",
    featured: true,
  },
  {
    slug: "otherland",
    client: "Other Land",
    title: "Website for a product design agency",
    category: "Webflow",
    stack: ["Webflow", "Finsweet", "JS"],
    description:
      "Webflow site for a product design studio: a case-study grid with category tags, team avatars in the header and service pages, using Finsweet Attributes for the CMS-driven case listings.",
    url: "https://www.otherland.studio",
    status: "archived",
    featured: true,
  },
  {
    slug: "infludata",
    client: "influData",
    title: "Multilingual site for an influencer analytics SaaS",
    category: "WordPress",
    stack: ["WordPress", "Multilingual", "SCSS", "PHP", "JS"],
    description:
      "Multilingual WordPress site for an influencer search tool: platform pages for Instagram, YouTube and TikTok, feature cards, key-number counters, pricing and knowledge pages built around a free-trial funnel.",
    url: "https://infludata.com",
    status: "archived",
  },
  {
    slug: "wr-agency",
    client: "White Rabbit Agency",
    title: "Website for a fashion & beauty PR agency",
    category: "Webflow",
    stack: ["Webflow", "JS"],
    description:
      "Webflow site for a Ukrainian PR agency: a bold monochrome hero, a case grid with press features (Vogue, Elle) and a CMS collection of all cases.",
    url: "https://wr-agency.com",
    status: "live",
  },
  {
    slug: "artyspark",
    client: "Artyspark",
    title: "UX-design talent & research studio",
    category: "Webflow",
    stack: ["Webflow", "Finsweet", "APIs & integrations", "JS"],
    description:
      "German-language Webflow site for a UX-designer staffing studio: a service mega-menu, a video testimonial block and conversion-focused landing sections with a booking CTA. Built with Finsweet components and third-party integrations.",
    url: "https://www.artyspark.io",
    status: "live",
  },
  {
    slug: "dscarwash",
    client: "D&S Car Wash Supply",
    title: "Site for a car wash equipment manufacturer",
    category: "WordPress",
    stack: ["WordPress", "Gutenberg", "Custom Post Types", "SCSS", "PHP"],
    description:
      "Custom WordPress theme with a library of reusable Gutenberg blocks: page header, media + content, accordions, process steps, card grids and CTAs. Equipment categories on Custom Post Types, plus lead forms.",
    url: "https://dscarwash.com",
    status: "live",
  },
  {
    slug: "privatpraxis-roeper",
    client: "Privatpraxis Dr. Röper",
    title: "Website for a private gynaecology practice",
    category: "WordPress",
    stack: ["WordPress", "Gutenberg", "Custom Post Types", "SCSS", "PHP"],
    description:
      "Elegant bilingual (DE/EN) site for a medical practice: a typographic service list, practice and team pages and a floating appointment CTA. Custom theme with Gutenberg blocks and Custom Post Types for services.",
    url: "https://www.privatpraxis-roeper.de",
    status: "archived",
  },
  {
    slug: "metacompliance",
    client: "MetaCompliance",
    title: "Site for a security-awareness training platform",
    category: "WordPress",
    stack: ["WordPress", "WPML", "SCSS", "PHP", "JS"],
    description:
      "Front-end work on a WordPress site served in six languages via WPML: product and industry pages, mega-menu navigation, a video hero and demo-booking CTAs.",
    url: "https://www.metacompliance.com",
    status: "live",
  },
  {
    slug: "more4apps",
    client: "More4apps",
    title: "Product site for Excel-based Oracle ERP data loading",
    category: "WordPress",
    stack: ["WordPress", "SCSS", "PHP", "JS"],
    description:
      "WordPress site for a B2B software vendor: product and solution pages for Oracle EBS and Fusion Cloud, customer logos and review badges, and request-a-demo flows.",
    url: "https://more4apps.com",
    status: "live",
  },
  {
    slug: "red-factory",
    client: "Red Factory",
    title: "Website for a marketing & consulting agency",
    category: "WordPress",
    stack: ["WordPress", "Elementor", "SCSS", "PHP"],
    description:
      "Dark, typographic site for a consulting agency: vertical text accents, service explainer sections and login/sign-up entry points, built in Elementor with custom styling.",
    status: "archived",
  },
  {
    slug: "flagship",
    client: "Flagship",
    title: "Brand & creative studio website",
    category: "WordPress",
    stack: ["WordPress", "GSAP", "SCSS", "PHP", "JS"],
    description:
      "Custom WordPress theme for a creative studio: a minimal typographic layout, studio and work sections with case-study pages, and GSAP-driven motion.",
    url: "https://flagship.agency",
    status: "live",
  },
  {
    slug: "uudetkasinot",
    client: "Uudet Kasinot",
    title: "Finnish casino review & comparison site",
    category: "WordPress",
    stack: ["WordPress", "ACF", "Gutenberg", "Custom Post Types", "SCSS", "PHP"],
    description:
      "Custom WordPress theme for a review site: bonus comparison lists, casino cards with CTAs and a news sidebar. ACF blocks and Custom Post Types for casinos and offers keep everything editable.",
    url: "https://www.uudetkasinot.com",
    status: "live",
  },
  {
    slug: "polivmaster",
    client: "Poliv Master",
    title: "Online store for irrigation & garden supplies",
    category: "WordPress",
    stack: ["WooCommerce", "WordPress", "SCSS", "PHP"],
    description:
      "Online store for automatic irrigation and garden products: category tiles, product sliders with sale badges and ratings, plus services, delivery and blog pages.",
    url: "https://polivmaster.com.ua",
    status: "live",
  },
  {
    slug: "sistersproject",
    client: "Sisters Project",
    title: "Beauty concept store",
    category: "WordPress",
    stack: ["WooCommerce", "WordPress", "SCSS", "PHP"],
    description:
      "Czech beauty concept store on WooCommerce: a promo hero slider, ‘Top picks’ product collections, a brand strip and custom-styled product cards.",
    url: "https://obchod.sistersproject.cz",
    status: "archived",
  },
  {
    slug: "essayhub",
    client: "EssayHub News",
    title: "Standalone news blog for a SaaS product",
    category: "WordPress",
    stack: ["WordPress", "SCSS", "PHP", "JS"],
    description:
      "Separate WordPress blog for EssayHub: article cards with category tags and authors, a category sidebar and a newsletter subscription block.",
    url: "https://news.essayhub.com",
    status: "archived",
  },
  {
    slug: "goodques",
    client: "GoodQues",
    title: "Website for a consumer research company",
    category: "WordPress",
    stack: ["WordPress", "SCSS", "PHP", "JS"],
    description:
      "Editorial site for a research company: a bold typographic intro, scroll-driven storytelling sections and illustrated ‘our approach’ blocks.",
    url: "https://www.goodques.com",
    status: "archived",
  },
  {
    slug: "rebeliron",
    client: "Rebel Iron · GlobalStake",
    title: "Blockchain staking infrastructure company",
    category: "WordPress",
    stack: ["WordPress", "SCSS", "PHP", "JS"],
    description:
      "Dark tech-styled WordPress site for a staking infrastructure provider: a logo-led hero, community-node and services sections and a ‘what makes us’ feature grid.",
    url: "https://rebeliron.com",
    status: "live",
  },
  {
    slug: "strambach",
    client: "Rambo Group",
    title: "Website for a moving company in Munich",
    category: "WordPress",
    stack: ["WordPress", "SCSS", "PHP", "JS"],
    description:
      "Lead-generation site for a moving company: trust badges and Google reviews, partner logos, a step-by-step ‘how your move works’ section and quote-request CTAs.",
    url: "https://strambach-websites.com",
    status: "archived",
  },
  {
    slug: "backlinks",
    client: "Back-links.ch",
    title: "Swiss link-building marketplace",
    category: "WordPress",
    stack: ["WordPress", "SCSS", "PHP", "JS"],
    description:
      "German-language marketplace for SEO backlinks: a service landing with key stats, backlink and link-package catalogues, a cart and a customer account area.",
    url: "https://back-links.ch",
    status: "archived",
  },
  {
    slug: "utvendigrenhold",
    client: "Utvendig Renhold",
    title: "Exterior cleaning services in Norway",
    category: "WordPress",
    stack: ["WordPress", "Elementor", "SCSS", "PHP"],
    description:
      "Service site for a cleaning company: facade and roof service menus, a price list, a seasonal promo bar and ‘free quote’ CTAs, built with Elementor Pro and custom CSS.",
    url: "https://utvendigrenhold.no",
    status: "live",
  },
  {
    slug: "virginislandscharterboat",
    client: "Virgin Islands Charter Boat",
    title: "Yacht charter search & booking site",
    category: "WordPress",
    stack: ["WordPress", "SCSS", "PHP", "JS"],
    description:
      "Charter company site with a video hero, a boat search filtered by yacht type, guests, price and size, and a charter inquiry flow.",
    url: "https://virginislandscharterboat.com",
    status: "live",
  },
  {
    slug: "iso",
    client: "Donnerkeil Fotoagentur",
    title: "Architectural photography agency",
    category: "WordPress",
    stack: ["WordPress", "SCSS", "PHP", "JS"],
    description:
      "Conversion-focused landing for a photography agency: a ‘quote within an hour’ offer, benefit list, review and award badges, and sticky contact widgets.",
    url: "https://iso-k.de",
    status: "live",
  },
  {
    slug: "click2order",
    client: "Click2Order",
    title: "QR-code menu & contactless ordering system",
    category: "WordPress",
    stack: ["WordPress", "SCSS", "PHP", "JS"],
    description:
      "Product site for restaurant software: a QR-code hero, features, benefits and pricing sections, with direct entry points to the demo and the admin panel.",
    url: "https://click2order.ch",
    status: "live",
  },
  {
    slug: "hairball",
    client: "Hairball",
    title: "NetSuite commerce-operations consultancy",
    category: "WordPress",
    stack: ["WordPress", "SCSS", "PHP", "JS"],
    description:
      "Site for a NetSuite consultancy: services, integrations and products menus, and a hero illustrating marketplace connectors (Shopify, Amazon).",
    url: "https://hairball.io",
    status: "archived",
  },
  {
    slug: "intel-ledger",
    client: "Intel Ledger",
    title: "Tax & insurance consulting firm",
    category: "WordPress",
    stack: ["WordPress", "SCSS", "PHP", "JS"],
    description:
      "Clean, gradient-accented site for a consulting firm: tax and insurance service pages, a blog, account login and a language switcher.",
    status: "archived",
  },
  {
    slug: "integral",
    client: "Integral Safe",
    title: "Cybersecurity company",
    category: "WordPress",
    stack: ["WordPress", "SCSS", "PHP", "JS"],
    description:
      "Dark, 3D-styled site for a cybersecurity firm: a ‘Protect | Detect | Respond’ hero, solutions, FAQ and vacancies pages, plus a client login.",
    status: "archived",
  },
  {
    slug: "cafedelites",
    client: "Cafe Delites",
    title: "High-traffic recipe blog",
    category: "WordPress",
    stack: ["WordPress", "WP Recipe Maker", "SCSS", "PHP"],
    description:
      "Theme work for a popular food blog: a search-first hero, a recipe index and recipe cards powered by WP Recipe Maker, in a warm editorial style.",
    status: "archived",
  },
  {
    slug: "fitness",
    client: "EvoGym · pet project",
    title: "Fitness club landing page",
    category: "Frontend",
    stack: ["React", "TypeScript", "Vite"],
    description:
      "Responsive landing built from scratch with React, TypeScript and Vite: a benefits section, a class showcase, a membership CTA and single-page navigation.",
    url: "https://fitness.dialen.com.ua",
    status: "archived",
  },
  {
    slug: "banking",
    client: "LightCode · pet project",
    title: "Landing for a personal finance app",
    category: "Frontend",
    stack: ["Tailwind CSS", "JS"],
    description:
      "Dark gradient landing with 3D illustrations, a three-step onboarding section, testimonials and pricing — utility-first with Tailwind CSS.",
    url: "https://banking.dialen.com.ua",
    status: "archived",
  },
  {
    slug: "lift",
    client: "LIFT Labs · pet project",
    title: "Landing for a startup accelerator programme",
    category: "Frontend",
    stack: ["HTML", "CSS", "JS"],
    description:
      "Hand-coded multi-section landing: about, purpose & history, key numbers and photo collages, with no framework — plain HTML, CSS and JavaScript.",
    url: "https://lift.dialen.com.ua",
    status: "archived",
  },
  {
    slug: "cas-dashboard",
    client: "CAS Application",
    title: "Compliance dashboard UI",
    category: "Frontend",
    stack: ["Tailwind CSS", "HTML"],
    description:
      "Admin interface for a compliance app: a task table with filters, statuses and assignees, sidebar navigation and bulk actions, built with Tailwind CSS.",
    url: "https://dashboard.dialen.com.ua",
    status: "archived",
  },
];

const m = media as Record<string, Media>;

// Featured first, then live projects, then archived ones — order otherwise preserved.
const rank = (p: Raw) => (p.featured ? 0 : p.status === "live" ? 1 : 2);
export const projects: Project[] = raw
  .map((p, i) => ({ p, i }))
  .sort((a, b) => rank(a.p) - rank(b.p) || a.i - b.i)
  .map(({ p }) => ({ ...p, media: m[p.slug] }));

export const categories: ("All" | Category)[] = ["All", "WordPress", "Webflow", "Frontend"];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/** Public link only for sites that still show my version. */
export const liveUrl = (p: Project) => (p.status === "live" ? p.url : undefined);

export const hostOf = (url?: string) => (url ? new URL(url).hostname.replace(/^www\./, "") : "");
