"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";
import { marquee } from "@/data/profile";

/** Infinite tech-stack ticker; scroll velocity speeds it up and flips direction. */
export default function Marquee() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const loop = gsap.to(".marquee-track", { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
        let dir = 1;
        ScrollTrigger.create({
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            if (self.direction !== dir) dir = self.direction;
            const v = gsap.utils.clamp(-6, 6, self.getVelocity() / 250);
            gsap.to(loop, { timeScale: dir * (1 + Math.abs(v)), duration: 0.3, overwrite: true });
            gsap.to(loop, { timeScale: dir, duration: 1.2, delay: 0.3 });
          },
        });
      });
    },
    { scope: root },
  );

  const row = [...marquee, ...marquee];
  return (
    <div ref={root} className="relative overflow-hidden border-y border-line py-6" aria-label="Technologies">
      <div className="marquee-track flex w-max">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
            {row.map((t, i) => (
              <li key={i} className="flex items-center whitespace-nowrap px-6 text-[clamp(1.5rem,4vw,3.25rem)] font-medium tracking-tight">
                <span className={i % 2 ? "serif text-fg/60" : ""}>{t}</span>
                <span className="ml-12 text-accent" aria-hidden>
                  ✦
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
