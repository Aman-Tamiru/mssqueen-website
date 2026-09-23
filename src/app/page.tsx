import { Hero } from "@/components/Hero";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { AboutSection } from "@/components/AboutSection";
import { AuthenticitySection } from "@/components/AuthenticitySection";
import { BrandValues } from "@/components/BrandValues";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCollection />
      <AboutSection />
      <AuthenticitySection />
      <BrandValues />
      <ContactSection />
    </main>
  );
}
