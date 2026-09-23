import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mssqueen.example"),
  title: {
    default: "MSSQUEEN | Premium Women's Shoes",
    template: "%s | MSSQUEEN",
  },
  description:
    "MSSQUEEN — premium women's shoes. Elegance in every step, confidence in every you. Official product authenticity information.",
  openGraph: {
    title: "MSSQUEEN | Premium Women's Shoes",
    description:
      "Official MSSQUEEN footwear house. Elegance in every step, confidence in every you.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${playfair.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full bg-black text-gold antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
