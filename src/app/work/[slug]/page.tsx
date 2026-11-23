import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { projects, getProject, hostOf, liveUrl } from "@/data/projects";
import ProjectShowcase from "@/components/ProjectShowcase";
import SplitHeading from "@/components/SplitHeading";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const description = p.description;
  return {
    title: p.client,
    description,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { title: p.client, description, images: [{ url: `/work/${p.slug}.webp`, width: p.media.cover.w, height: p.media.cover.h }] },
  };
}

// The static shell (skeleton) renders instantly on navigation; every known slug
// is still fully prerendered via generateStaticParams.
export default function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <Suspense fallback={<ProjectSkeleton />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

function ProjectSkeleton() {
  return (
    <div className="container-x pt-36" aria-busy="true">
      <div className="mb-10 h-4 w-24 rounded bg-bg-2" />
      <div className="h-[clamp(2.75rem,8vw,7.5rem)] w-2/3 rounded-2xl bg-bg-2" />
      <div className="mt-12 h-24 border-t border-line" />
      <div className="aspect-[16/10] rounded-3xl bg-bg-2" />
    </div>
  );
}

async function ProjectContent({ params }: { params: PageProps<"/work/[slug]">["params"] }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.indexOf(p);
  const next = projects[(i + 1) % projects.length];

  return (
    <article className="pt-36">
      <header className="container-x">
        <Link href="/#work" className="eyebrow mb-10 inline-flex items-center gap-2 transition-colors hover:text-fg">
          <span aria-hidden>←</span> All work
        </Link>
        <SplitHeading as="h1" className="max-w-6xl text-[clamp(2.75rem,8vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.045em]">
          {p.client}
        </SplitHeading>
        <Reveal as="div" stagger={0.08} className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="eyebrow mb-2">Project</p>
            <p className="text-lg font-medium leading-relaxed text-fg">{p.title}</p>
            <p className="mt-3 max-w-2xl leading-relaxed text-fg/70">{p.description}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Type</p>
            <p>{p.category}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Live site</p>
            {liveUrl(p) ? (
              <a href={p.url} target="_blank" rel="noopener" className="underline decoration-line underline-offset-4 hover:decoration-accent">
                {hostOf(p.url)} ↗
              </a>
            ) : (
              <p className="text-sm leading-relaxed text-muted">Archived — the site has since been redesigned or taken offline. The screenshot shows my version.</p>
            )}
          </div>
          <ul className="flex flex-wrap gap-2 md:col-span-4" aria-label="Stack">
            {p.stack.map((s) => (
              <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-fg/80">
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </header>

      {p.media.full ? (
        <ProjectShowcase slug={p.slug} client={p.client} full={p.media.full} />
      ) : (
        <div className="container-x my-24">
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line">
            <Image src={`/work/${p.slug}.webp`} alt={`${p.client} — website screenshot`} fill sizes="(min-width: 1440px) 1340px, 94vw" placeholder={p.media.blur as `data:image/${string}`} preload className="object-cover object-top" />
          </div>
        </div>
      )}

      <Link href={`/work/${next.slug}`} data-cursor="Next" className="group block border-t border-line">
        <div className="container-x flex items-center justify-between gap-8 py-20">
          <div>
            <p className="eyebrow mb-3">Next project</p>
            <p className="text-[clamp(2rem,6vw,5rem)] font-semibold leading-none tracking-[-0.04em] transition-colors group-hover:text-accent">{next.client}</p>
          </div>
          <span aria-hidden className="text-[clamp(2rem,6vw,5rem)] transition-transform duration-500 group-hover:translate-x-4">
            →
          </span>
        </div>
      </Link>
    </article>
  );
}
