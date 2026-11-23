"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { caseStudies } from "@/data/profile";
import SplitHeading from "../SplitHeading";

/**
 * NDA case studies. On wide screens the cards scroll horizontally inside a pinned
 * section; on small screens / reduced motion they're a plain vertical stack.
 */
export default function CaseStudies() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${MOTION_OK} and (min-width: 900px)`, () => {
        const distance = () => track.current!.scrollWidth - window.innerWidth;
        const tween = gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        // Cards tilt in as they enter from the right.
        gsap.utils.toArray<HTMLElement>(".case-card").forEach((card) => {
          gsap.from(card, {
            rotate: 4,
            yPercent: 8,
            scrollTrigger: { trigger: card, containerAnimation: tween, start: "left right", end: "left 55%", scrub: true },
          });
        });
        gsap.to(".case-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: () => `+=${distance()}`, scrub: true },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="cases" className="relative overflow-hidden py-24 min-[900px]:flex min-[900px]:h-[100svh] min-[900px]:flex-col min-[900px]:justify-center min-[900px]:py-0" aria-labelledby="cases-title">
      <div className="container-x mb-12 flex items-end justify-between gap-8">
        <div>
          <p className="eyebrow mb-4">Under NDA</p>
          <SplitHeading className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            <span id="cases-title">
              Complex builds, <span className="serif font-normal text-accent">quietly shipped</span>
            </span>
          </SplitHeading>
        </div>
        <div className="hidden h-px w-48 overflow-hidden bg-line min-[900px]:block" aria-hidden>
          <div className="case-progress h-full origin-left scale-x-0 bg-accent" />
        </div>
      </div>
      <div ref={track} className="flex flex-col gap-6 px-[clamp(1rem,4vw,3rem)] min-[900px]:w-max min-[900px]:flex-row">
        {caseStudies.map((c, i) => (
          <article
            key={c.title}
            className="case-card flex w-full flex-col justify-between gap-10 rounded-3xl border border-line bg-bg-2 p-8 min-[900px]:h-[58vh] min-[900px]:w-[min(42vw,620px)] md:p-10"
          >
            <div>
              <div className="mb-10 flex items-center justify-between text-sm text-muted">
                <span>{c.tag}</span>
                <span className="font-mono">0{i + 1}</span>
              </div>
              <h3 className="mb-5 text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em]">{c.title}</h3>
              <p className="max-w-prose leading-relaxed text-fg/70">{c.text}</p>
            </div>
            <ul className="flex flex-wrap gap-2" aria-label="Stack">
              {c.stack.map((s) => (
                <li key={s} className="rounded-full border border-line px-3 py-1 text-xs text-fg/80">
                  {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
