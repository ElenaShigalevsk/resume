"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { profile } from "@/data/profile";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#cases", label: "Cases" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const ref = useRef<HTMLElement>(null);

  // Hide on scroll down, reveal on scroll up.
  useGSAP(
    () => {
      const show = gsap.quickTo(ref.current, "yPercent", { duration: 0.4, ease: "power2.out" });
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (self.scroll() < 120) return show(0);
          show(self.direction === 1 ? -110 : 0);
        },
      });
    },
    { scope: ref },
  );

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-bg/90 to-bg/0"
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex items-baseline gap-1 text-lg font-semibold tracking-tight" aria-label="Home">
          <span>Olena</span>
          <span className="serif text-accent transition-transform duration-500 group-hover:rotate-12">S.</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="relative text-fg/80 transition-colors hover:text-fg after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100">
              {n.label}
            </Link>
          ))}
        </nav>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent hover:bg-accent hover:text-bg"
          >
            Download CV <span aria-hidden>↓</span>
          </a>
      </div>
    </header>
  );
}
