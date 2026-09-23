import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/content";

export function FeaturedCollection() {
  return (
    <section id="collection" className="bg-black px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-center font-brand text-xs tracking-[0.4em] text-gold uppercase">
          Featured Collection
        </p>
        <h2 className="mt-4 text-center font-display text-4xl text-gold md:text-5xl">
          The Signature Line
        </h2>
        <div className="mx-auto mt-5 h-px w-28 bg-gold" />
        <p className="mx-auto mt-6 max-w-2xl text-center font-body text-xl leading-relaxed text-gold-muted">
          A considered edit of MSSQUEEN silhouettes. Product photography will be
          replaced with official brand images as they become available.
        </p>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <li key={product.slug} className="group">
              <article className="border border-gold/25 bg-[#0b0b0b] transition duration-300 group-hover:border-gold/70">
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-5 py-6">
                  <h3 className="font-display text-2xl text-gold">{product.name}</h3>
                  <p className="mt-3 font-body text-lg leading-relaxed text-gold-muted">
                    {product.description}
                  </p>
                  <Link
                    href={`/collection/${product.slug}`}
                    className="mt-6 inline-flex font-brand text-[0.68rem] tracking-[0.28em] text-gold uppercase after:mt-1 after:block after:h-px after:w-full after:bg-gold after:content-['']"
                  >
                    View Product
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
