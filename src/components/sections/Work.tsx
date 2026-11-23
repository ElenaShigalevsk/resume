"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { gsap, Flip, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";
import { categories, projects, hostOf, liveUrl, type Category } from "@/data/projects";
import SplitHeading from "../SplitHeading";

const INITIAL = 9;

export default function Work() {
  const root = useRef<HTMLElement>(null);
  const grid = useRef<HTMLUListElement>(null);
  const flipState = useRef<Flip.FlipState | null>(null);
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [expanded, setExpanded] = useState(false);

  const filtered = projects.filter((p) => filter === "All" || p.category === filter);
  const visible = expanded ? filtered : filtered.slice(0, INITIAL);

  const prevHeight = useRef(0);
  const firstRender = useRef(true);
  const batchTriggers = useRef<ScrollTrigger[]>([]);

  // Capture layout before React re-renders, then animate from it (FLIP).
  const capture = () => {
    if (!grid.current) return;
    // From now on Flip owns card animation — drop the pending scroll-in triggers
    // so cards don't get a second, conflicting entrance animation.
    batchTriggers.current.forEach((t) => t.kill());
    batchTriggers.current = [];
    prevHeight.current = grid.current.offsetHeight;
    if (window.matchMedia(MOTION_OK).matches) {
      flipState.current = Flip.getState(grid.current.querySelectorAll(".work-card"));
    }
  };

  useGSAP(
    () => {
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      const ul = grid.current!;
      // Layout changed: pinned sections below must recalc their start/end right away.
      ScrollTrigger.refresh();
      if (!flipState.current) return;

      // Cards stay in the document flow (no `absolute`), and the grid height eases
      // from old to new so the section below never jumps over the cards.
      const newHeight = ul.offsetHeight;
      gsap.fromTo(ul, { height: prevHeight.current, overflow: "clip" }, { height: newHeight, duration: 0.7, ease: "power3.inOut", clearProps: "height,overflow" });
      Flip.from(flipState.current, {
        targets: ul.querySelectorAll(".work-card"),
        duration: 0.7,
        ease: "power3.inOut",
        stagger: 0.02,
        onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, scale: 0.92 }, { autoAlpha: 1, scale: 1, duration: 0.6, delay: 0.2 }),
        onComplete: () => ScrollTrigger.refresh(),
      });
      flipState.current = null;
    },
    { dependencies: [filter, expanded], scope: root },
  );

  // Cards rise in on first scroll into view.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        batchTriggers.current = ScrollTrigger.batch(".work-card", {
          start: "top 92%",
          once: true,
          onEnter: (b) => gsap.from(b, { y: 80, autoAlpha: 0, stagger: 0.08, duration: 1.1 }),
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="work" className="container-x py-[clamp(6rem,12vw,10rem)]" aria-labelledby="work-title">
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-4">Selected work · {projects.length} projects</p>
          <SplitHeading className="text-[clamp(2.5rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
            <span id="work-title">
              Sites I&apos;ve <span className="serif font-normal text-accent">built</span>
            </span>
          </SplitHeading>
        </div>
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
            const active = filter === c;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  if (active) return;
                  capture();
                  setFilter(c);
                }}
                className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${active ? "border-fg bg-fg text-bg" : "border-line hover:border-fg/60"}`}
              >
                {c} <sup className="ml-0.5 opacity-60">{count}</sup>
              </button>
            );
          })}
        </div>
      </div>

      <ul ref={grid} className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <li key={p.slug} className="work-card" data-flip-id={p.slug}>
            <Link href={`/work/${p.slug}`} data-cursor="View" className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-bg-2">
                <Image
                  src={`/work/${p.slug}.webp`}
                  alt={`${p.client} — website screenshot`}
                  fill
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 92vw"
                  placeholder={p.media.blur as `data:image/${string}`}
                  className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                <span className="absolute left-4 top-4 rounded-full bg-bg/70 px-3 py-1 text-xs backdrop-blur-md">{p.category}</span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight">{p.client}</h3>
                <span className="mt-1.5 shrink-0 text-xs text-muted">{liveUrl(p) ? hostOf(p.url) : "Archived"}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-fg/80">{p.title}</p>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{p.description}</p>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length > INITIAL && (
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => {
              capture();
              setExpanded((v) => !v);
            }}
            className="rounded-full border border-line px-8 py-4 transition-colors hover:border-fg"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : `Show all ${filtered.length} projects`}
          </button>
        </div>
      )}
    </section>
  );
}
