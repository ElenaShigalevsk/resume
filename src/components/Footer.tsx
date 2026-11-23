"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";
import { profile } from "@/data/profile";

export default function Footer() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        SplitText.create(".cta-title", {
          type: "chars",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.chars, {
              yPercent: 100,
              rotate: 8,
              autoAlpha: 0,
              stagger: 0.02,
              duration: 1,
              ease: "back.out(1.6)",
              scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
            }),
        });
        gsap.from(".cta-sub", { y: 30, autoAlpha: 0, stagger: 0.1, scrollTrigger: { trigger: root.current, start: "top 65%", once: true } });
      });
    },
    { scope: root },
  );

  const links = [
    { label: "Email", href: `mailto:${profile.email}`, text: profile.email },
    { label: "Telegram", href: `https://t.me/${profile.telegram}`, text: `@${profile.telegram}` },
    { label: "LinkedIn", href: profile.linkedin, text: "Olena Shyhalevska" },
  ];

  return (
    <footer ref={root} id="contact" className="relative overflow-hidden border-t border-line pt-[clamp(6rem,12vw,10rem)]">
      <div className="container-x">
        <p className="eyebrow cta-sub mb-6">Contact</p>
        <h2 className="cta-title text-[clamp(3rem,12vw,11rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
          Let&apos;s build
          <br />
          <span className="serif font-normal text-accent">something good.</span>
        </h2>
        <div className="cta-sub mt-14 flex flex-wrap items-center gap-6">
            <a href={`mailto:${profile.email}`} className="inline-flex h-16 items-center gap-3 rounded-full bg-accent px-10 text-lg font-medium text-bg transition-colors hover:bg-fg">
              Write me <span aria-hidden>↗</span>
            </a>
          <a href={profile.cv} target="_blank" rel="noopener" className="underline decoration-line underline-offset-8 transition-colors hover:decoration-accent">
            Download CV (PDF)
          </a>
        </div>
        <ul className="cta-sub mt-24 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {links.map((l) => (
            <li key={l.label} className="bg-bg">
              <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="group flex items-center justify-between gap-4 p-6 transition-colors hover:bg-bg-2 md:p-8">
                <span>
                  <span className="eyebrow block">{l.label}</span>
                  <span className="mt-2 block break-all text-lg">{l.text}</span>
                </span>
                <span aria-hidden className="text-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-between gap-4 py-10 text-sm text-muted md:flex-row">
          <span>{profile.name} · {profile.location}</span>
          <span>Built with Next.js, GSAP &amp; Lenis · Hosted on Vercel</span>
        </div>
      </div>
    </footer>
  );
}
