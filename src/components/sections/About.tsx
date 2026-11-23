"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import { profile, stats } from "@/data/profile";

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // Words light up as you scroll through the statement.
        SplitText.create(".about-statement", {
          type: "words",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.words, {
              opacity: 0.15,
              stagger: 0.1,
              ease: "none",
              scrollTrigger: { trigger: ".about-statement", start: "top 80%", end: "bottom 45%", scrub: true },
            }),
        });

        // Count-up numbers.
        gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
          const end = Number(el.dataset.value);
          const obj = { v: 0 };
          gsap.to(obj, {
            v: end,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              el.textContent = Math.round(obj.v).toString();
            },
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="about" className="container-x py-[clamp(6rem,14vw,12rem)]" aria-labelledby="about-title">
      <h2 id="about-title" className="eyebrow mb-10">
        About
      </h2>
      <p className="about-statement max-w-6xl text-[clamp(1.75rem,4.2vw,3.75rem)] font-medium leading-[1.1] tracking-[-0.03em]">
        {profile.about[0]} <span className="serif text-accent">{profile.about[1]}</span>
      </p>
      <dl className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col justify-between gap-10 bg-bg p-6 md:p-8">
            <dt className="order-2 text-sm text-muted">{s.label}</dt>
            <dd className="order-1 text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-none tracking-[-0.05em]">
              <span className="stat-num" data-value={s.value}>
                {s.value}
              </span>
              <span className="text-accent">{s.suffix}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
