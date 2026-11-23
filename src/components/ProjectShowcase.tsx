"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

/**
 * A browser frame pinned to the viewport while the full-page screenshot inside
 * scrolls with the page — like watching someone scroll the live site.
 * Without motion it's simply a tall, natively scrollable frame.
 */
export default function ProjectShowcase({ slug, client, full }: { slug: string; client: string; full: { w: number; h: number } }) {
  const root = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from(frame.current, {
          y: 120,
          scale: 0.94,
          autoAlpha: 0,
          duration: 1.4,
          ease: "expo.out",
          delay: 0.2,
        });
        const travel = () => img.current!.offsetHeight - frame.current!.clientHeight;
        gsap.to(img.current, {
          y: () => -travel(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            // Scroll distance proportional to screenshot length, capped.
            end: () => `+=${Math.min(travel() * 0.8, 6000)}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="flex h-[100svh] items-center py-6" aria-label={`${client} full page preview`}>
      <div className="container-x h-full">
        <div ref={frame} className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg-2 shadow-[0_40px_120px_-40px_rgba(255,107,139,0.35)]">
          <div className="flex h-10 shrink-0 items-center gap-2 border-b border-line px-4" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="relative flex-1 overflow-y-auto motion-safe:overflow-hidden" data-lenis-prevent>
            <div ref={img} className="will-change-transform">
              <Image
                src={`/work/${slug}-full.webp`}
                alt={`${client} — full page screenshot`}
                width={full.w}
                height={full.h}
                sizes="(min-width: 1440px) 1340px, 94vw"
                className="block h-auto w-full"
                preload
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
