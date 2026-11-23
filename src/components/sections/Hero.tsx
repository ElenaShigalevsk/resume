"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import { profile } from "@/data/profile";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.set("[data-hero]", { visibility: "visible" });

        const title = SplitText.create(".hero-title", { type: "lines,chars", mask: "lines", linesClass: "split-line" });
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(title.chars, { yPercent: 120, duration: 1.4, stagger: 0.025 })
          .from(".hero-fade", { y: 24, autoAlpha: 0, duration: 1, stagger: 0.1 }, "-=1")
          .from(".hero-orb", { scale: 0.4, autoAlpha: 0, duration: 2.2, ease: "power2.out" }, 0);

        // Scroll-out: content drifts up and dims; the orb grows.
        gsap.to(".hero-inner", {
          yPercent: -18,
          autoAlpha: 0.15,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".hero-orb", {
          scale: 1.6,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });

        // Orb follows the pointer lazily.
        const ox = gsap.quickTo(".hero-orb", "x", { duration: 2, ease: "power3" });
        const oy = gsap.quickTo(".hero-orb", "y", { duration: 2, ease: "power3" });
        const move = (e: PointerEvent) => {
          ox((e.clientX / innerWidth - 0.5) * 160);
          oy((e.clientY / innerHeight - 0.5) * 120);
        };
        window.addEventListener("pointermove", move);
        return () => window.removeEventListener("pointermove", move);
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative flex min-h-[100svh] items-end overflow-hidden pb-[12vh] pt-32" aria-labelledby="hero-title">
      <div
        aria-hidden
        data-hero
        className="hero-orb pointer-events-none absolute right-[-10vw] top-[8vh] h-[70vw] max-h-[780px] w-[70vw] max-w-[780px] rounded-full opacity-70 blur-[90px]"
        style={{ background: "radial-gradient(circle at 30% 30%, var(--accent), transparent 60%), radial-gradient(circle at 70% 70%, var(--accent-2), transparent 55%)" }}
      />
      <div className="hero-inner container-x relative">
        <p data-hero className="hero-fade eyebrow mb-8 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to new projects · {profile.location}
        </p>
        <h1
          id="hero-title"
          data-hero
          className="hero-title text-[clamp(3rem,11vw,10.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
        >
          Frontend &amp;
          <br />
          <span className="serif font-normal text-accent">WordPress</span> developer
        </h1>
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <p data-hero className="hero-fade max-w-xl text-lg leading-relaxed text-fg/75 md:text-xl">
            Hi, I&apos;m {profile.name}. {profile.intro}
          </p>
          <div data-hero className="hero-fade flex flex-wrap items-center gap-4">
              <a href="#work" className="inline-flex h-14 items-center gap-3 rounded-full bg-fg px-8 font-medium text-bg transition-colors hover:bg-accent">
                See my work <span aria-hidden>→</span>
              </a>
              <a href="#contact" className="inline-flex h-14 items-center rounded-full border border-line px-8 transition-colors hover:border-fg">
                Get in touch
              </a>
          </div>
        </div>
      </div>
    </section>
  );
}
