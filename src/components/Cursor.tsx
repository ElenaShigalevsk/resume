"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK, DESKTOP } from "@/lib/gsap";

/**
 * A blend-mode cursor follower. Elements with data-cursor="Label" grow it into a
 * labelled disc (used on project cards). Only on fine pointers with motion allowed.
 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(`${MOTION_OK} and ${DESKTOP}`, () => {
      const el = ref.current!;
      document.documentElement.classList.add("has-cursor");
      gsap.set(el, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
      const x = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
      const y = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
      let current: string | null = null;

      const move = (e: PointerEvent) => {
        gsap.to(el, { autoAlpha: 1, duration: 0.2, overwrite: "auto" });
        x(e.clientX);
        y(e.clientY);
        const target = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor], a, button");
        const text = target?.dataset.cursor ?? (target ? "" : null);
        if (text === current) return;
        current = text;
        label.current!.textContent = text ?? "";
        gsap.to(el, {
          width: text ? 96 : text === "" ? 44 : 12,
          height: text ? 96 : text === "" ? 44 : 12,
          duration: 0.4,
          ease: "power3.out",
        });
      };
      const leave = () => gsap.to(el, { autoAlpha: 0, duration: 0.2 });

      window.addEventListener("pointermove", move);
      document.addEventListener("pointerleave", leave);
      return () => {
        document.documentElement.classList.remove("has-cursor");
        window.removeEventListener("pointermove", move);
        document.removeEventListener("pointerleave", leave);
      };
    });
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-3 w-3 items-center justify-center rounded-full bg-fg text-[11px] font-medium uppercase tracking-widest text-bg mix-blend-difference [@media(pointer:fine)]:flex"
      style={{ visibility: "hidden" }}
    >
      <span ref={label} />
    </div>
  );
}
