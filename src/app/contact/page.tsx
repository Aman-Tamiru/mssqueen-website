import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact MSSQUEEN in ${contact.location}.`,
};

export default function ContactPage() {
  return (
    <main className="bg-black pt-16">
      <ContactSection />
    </main>
  );
}
