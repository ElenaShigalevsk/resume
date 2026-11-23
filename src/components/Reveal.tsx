"use client";

import { useRef, type ElementType, type ReactNode, type ComponentPropsWithoutRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  /** Animate direct children one after another instead of the wrapper. */
  stagger?: number;
  y?: number;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<T>, "children">;

/** Fade/slide content in when it enters the viewport. */
export default function Reveal<T extends ElementType = "div">({
  as,
  children,
  stagger,
  y = 40,
  delay = 0,
  ...rest
}: Props<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const targets = stagger ? ref.current!.children : ref.current;
        gsap.from(targets, {
          y,
          autoAlpha: 0,
          duration: 1.1,
          delay,
          stagger: stagger ?? 0,
          scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}
