import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black pt-24">
      <div
        className="pointer-events-none absolute inset-0 silk-bg"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-10 top-16 h-[420px] w-[420px] rounded-full border border-gold/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 top-24 h-px w-[42%] bg-gradient-to-r from-gold/80 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-5 pb-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        <div className="max-w-xl pt-6">
          <p className="font-display text-[0.95rem] tracking-[0.22em] text-gold md:text-lg">
            {brand.category.toUpperCase()}
          </p>

          <h1 className="mt-5 font-display text-[3.1rem] leading-[0.92] font-medium text-gold sm:text-6xl md:text-7xl lg:text-[4.75rem]">
            MSSQUEEN
            <span className="mt-1 block">SHOES</span>
          </h1>
          <div className="mt-4 h-px w-44 bg-gold" aria-hidden="true" />

          <p className="mt-8 font-display text-xl leading-snug tracking-[0.06em] text-gold md:text-2xl">
            {brand.authenticityEyebrow.toUpperCase().replace(" INFORMATION", "")}
            <span className="mt-1 block">INFORMATION</span>
          </p>

          <p className="mt-8 max-w-md font-display text-xl leading-relaxed text-gold-soft italic md:text-[1.65rem]">
            {brand.tagline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/collection" className="btn-gold">
              Explore Collection
            </Link>
            <Link href="/authenticity" className="btn-gold-outline">
              Verify Authenticity
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="absolute -inset-6 hidden rounded-[2px] border border-gold/15 lg:block" />
          <div className="hero-frame relative h-[58vh] min-h-[420px] overflow-hidden md:h-[72vh]">
            <Image
              src="/images/hero-shoes.jpg"
              alt="MSSQUEEN black pointed flats with bow detail, gold-tone tips, and branded shoe box"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[78%_42%]"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent lg:w-1/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
