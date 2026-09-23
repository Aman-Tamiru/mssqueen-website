import type { Metadata } from "next";
import { AuthenticitySection } from "@/components/AuthenticitySection";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Authenticity",
  description:
    "Official MSSQUEEN product authenticity information. Scan the QR associated with your product for official guidance.",
};

export default function AuthenticityPage() {
  return (
    <main className="bg-black pt-28 pb-10">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
        <p className="font-brand text-xs tracking-[0.4em] text-gold uppercase">
          Official Product
        </p>
        <h1 className="mt-4 font-display text-5xl text-gold">Authenticity Information</h1>
        <div className="mx-auto mt-5 h-px w-28 bg-gold" />
        <p className="mt-8 font-body text-xl leading-relaxed text-gold-muted">
          {brand.qrCaption}
        </p>
      </div>
      <AuthenticitySection />
    </main>
  );
}
