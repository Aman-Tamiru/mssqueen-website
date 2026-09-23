import Link from "next/link";
import { brand } from "@/lib/content";
import { QrMark } from "@/components/QrMark";

export function AuthenticitySection() {
  return (
    <section id="authenticity" className="bg-black px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl border border-gold/25 px-6 py-14 md:px-14 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-brand text-xs tracking-[0.4em] text-gold uppercase">
              Authenticity
            </p>
            <h2 className="mt-4 font-display text-4xl text-gold md:text-5xl">
              Authentic MSSQUEEN Products
            </h2>
            <div className="mt-5 h-px w-28 bg-gold" />
            <p className="mt-8 font-body text-xl leading-relaxed text-gold-muted">
              MSSQUEEN provides official product authenticity information so
              customers can confirm they are viewing the brand&apos;s own guidance.
              Look for the QR code associated with your product, then scan it for
              official information.
            </p>
            <p className="mt-5 font-body text-xl leading-relaxed text-gold-muted">
              {brand.qrCaption}
            </p>
            <Link href="/authenticity" className="btn-gold mt-10 inline-flex">
              Scan for Official Information
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center border border-gold/20 bg-[#0b0b0b] px-8 py-10 text-center">
            <QrMark className="h-44 w-44 text-gold" />
            <p className="mt-6 font-brand text-xs tracking-[0.32em] text-gold uppercase">
              Scan for Official Information
            </p>
            <p className="mt-3 max-w-xs font-body text-lg text-gold-muted">
              Use the QR code associated with the product to access official
              MSSQUEEN information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
