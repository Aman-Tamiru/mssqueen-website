import Link from "next/link";
import { brand } from "@/lib/content";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#070707] px-5 py-24 md:px-10">
      <div className="pointer-events-none absolute inset-0 silk-bg opacity-70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="font-brand text-xs tracking-[0.4em] text-gold uppercase">The Brand</p>
          <h2 className="mt-4 font-display text-4xl text-gold md:text-5xl">MSSQUEEN</h2>
          <div className="mt-5 h-px w-28 bg-gold" />
          <div className="mt-8 space-y-5 font-body text-xl leading-relaxed text-gold-muted">
            <p>
              MSSQUEEN is a premium women&apos;s footwear brand. Each pair is presented
              with a composed, elegant silhouette — designed to feel refined in both
              presence and detail.
            </p>
            <p>
              The house identity is quiet luxury: black, gold, and a considered
              pointed form. {brand.tagline}
            </p>
            <p>
              Official product information, including authenticity guidance, is
              available through MSSQUEEN channels so customers can verify they are
              engaging with the brand directly.
            </p>
          </div>
          <Link href="/about" className="btn-gold-outline mt-10 inline-flex">
            About MSSQUEEN
          </Link>
        </div>

        <blockquote className="border border-gold/30 px-8 py-12 text-center md:px-12">
          <p className="font-display text-3xl leading-snug text-gold italic md:text-4xl">
            “{brand.tagline}”
          </p>
          <p className="mt-8 font-brand text-xs tracking-[0.35em] text-gold uppercase">
            {brand.productLine}
          </p>
        </blockquote>
      </div>
    </section>
  );
}
