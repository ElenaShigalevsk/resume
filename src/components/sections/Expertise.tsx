import { skillGroups, keySkills } from "@/data/profile";
import SplitHeading from "../SplitHeading";
import Reveal from "../Reveal";

export default function Expertise() {
  return (
    <section id="expertise" className="container-x py-[clamp(6rem,12vw,10rem)]" aria-labelledby="expertise-title">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow mb-4">Expertise</p>
          <SplitHeading className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            <span id="expertise-title">
              The <span className="serif font-normal text-accent">toolbox</span>
            </span>
          </SplitHeading>
          <p className="mt-8 max-w-md leading-relaxed text-fg/70">
            Pixel-perfect Figma-to-code, accessible markup, performance budgets and clean, reusable component systems — whether the stack is WordPress, Webflow, Shopify or React.
          </p>
          <p className="mt-8 flex items-center gap-3 text-sm text-muted">
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-accent" />
            Core strengths
          </p>
        </div>
        <Reveal as="div" stagger={0.1} className="divide-y divide-line border-y border-line">
          {skillGroups.map((g) => (
            <div key={g.title} className="grid gap-6 py-10 md:grid-cols-[200px_1fr]">
              <div>
                <h3 className="text-lg font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm leading-snug text-muted">{g.note}</p>
              </div>
              <ul className="flex flex-wrap content-start gap-2">
                {g.items.map((s) => {
                  const key = keySkills.has(s);
                  return (
                    <li
                      key={s}
                      className={`rounded-full px-4 py-2 text-sm transition-colors ${
                        key
                          ? "bg-accent/15 font-medium text-fg ring-1 ring-accent/60 hover:bg-accent hover:text-bg"
                          : "bg-bg-2 text-fg/80 ring-1 ring-line hover:bg-fg hover:text-bg"
                      }`}
                    >
                      {key && <span className="sr-only">Core strength: </span>}
                      {s}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
