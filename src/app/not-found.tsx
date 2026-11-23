import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80svh] flex-col justify-center pt-32">
      <p className="eyebrow mb-6">404</p>
      <h1 className="text-[clamp(3rem,10vw,8rem)] font-semibold leading-none tracking-[-0.05em]">
        Page <span className="serif font-normal text-accent">not found</span>
      </h1>
      <Link href="/" className="mt-12 inline-flex w-fit rounded-full bg-fg px-8 py-4 text-bg transition-colors hover:bg-accent">
        Back home
      </Link>
    </section>
  );
}
