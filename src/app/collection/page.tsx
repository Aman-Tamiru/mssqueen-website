import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Collection",
  description: "The MSSQUEEN featured collection — premium women's shoes.",
};

export default function CollectionPage() {
  return (
    <main className="bg-black pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <p className="font-brand text-xs tracking-[0.4em] text-gold uppercase">Collection</p>
        <h1 className="mt-4 font-display text-5xl text-gold">The Signature Line</h1>
        <div className="mt-5 h-px w-28 bg-gold" />
        <p className="mt-6 max-w-2xl font-body text-xl text-gold-muted">
          Browse the current MSSQUEEN edit. Names and photography can be replaced
          with official product assets when they are ready.
        </p>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2">
          {products.map((product) => (
            <li key={product.slug}>
              <article className="border border-gold/25 bg-[#0b0b0b] transition hover:border-gold/70">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-6 py-7">
                  <h2 className="font-display text-3xl text-gold">{product.name}</h2>
                  <p className="mt-3 font-body text-xl text-gold-muted">{product.description}</p>
                  <Link href={`/collection/${product.slug}`} className="btn-gold-outline mt-6 inline-flex">
                    View Product
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
