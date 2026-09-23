import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <main className="bg-black pt-28 pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-10 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden border border-gold/25">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="font-brand text-xs tracking-[0.4em] text-gold uppercase">
            MSSQUEEN Collection
          </p>
          <h1 className="mt-4 font-display text-5xl text-gold">{product.name}</h1>
          <div className="mt-5 h-px w-28 bg-gold" />
          <p className="mt-8 font-body text-2xl leading-relaxed text-gold-muted">
            {product.description}
          </p>
          <p className="mt-6 font-body text-xl leading-relaxed text-gold-muted">
            For sizing, availability, and authenticity questions, contact MSSQUEEN
            directly. Scan the QR associated with your pair for official product
            information.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/authenticity" className="btn-gold">
              Authenticity
            </Link>
            <Link href="/contact" className="btn-gold-outline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
