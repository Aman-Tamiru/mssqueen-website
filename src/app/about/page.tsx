import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { BrandValues } from "@/components/BrandValues";

export const metadata: Metadata = {
  title: "About",
  description:
    "MSSQUEEN is a premium women's footwear brand. Elegance in every step, confidence in every you.",
};

export default function AboutPage() {
  return (
    <main className="bg-black pt-16">
      <AboutSection />
      <BrandValues />
    </main>
  );
}
