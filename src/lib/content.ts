export const brand = {
  name: "MSSQUEEN",
  productLine: "MSSQUEEN SHOES",
  category: "Premium Women's Shoes",
  tagline: "Elegance in every step, Confidence in every you.",
  footerLine: "MSSQUEEN SHOES  |  ELEGANCE IN EVERY STEP",
  authenticityEyebrow: "Official Product Authenticity Information",
  qrCaption:
    "This QR code connects you to the official MSSQUEEN Shoes information page. For questions about authenticity or inquiries, please contact us directly using the information below.",
};

export const contact = {
  email: "mssqueenshoes@gmail.com",
  phone: "+251 920 237 030",
  phoneHref: "tel:+251920237030",
  location: "Addis Ababa, Ethiopia-Around Mesalemiya",
  socials: [
    { label: "Instagram", href: "https://instagram.com/your-mssqueen-handle" },
    { label: "Facebook", href: "https://facebook.com/your-mssqueen-page" },
    { label: "TikTok", href: "https://tiktok.com/@your-mssqueen-handle" },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/custom-design", label: "Custom Design" },
  { href: "/about", label: "About" },
  { href: "/authenticity", label: "Authenticity" },
  { href: "/contact", label: "Contact" },
] as const;

export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    slug: "signature-bow-flat",
    name: "Signature Pointed Bow Flat",
    description:
      "A pointed silhouette with a refined bow, gold-tone tips, and a textured geometric pattern — the MSSQUEEN signature profile in sleek black.",
    image: "/images/hero-shoes.jpg",
    imageAlt: "MSSQUEEN black pointed flats with bow and gold-tone tips",
  },
  {
    slug: "patent-evening-flat",
    name: "Studded Slip-On Slippert",
    description:
      "An easy slip-on shoe with soft fabric, gold studs, and a cute buckle strap — simple, stylish, and comfortable all day.",
    image:
      "/images/Studded-Slip-On-Slippert.jpg",
    imageAlt: "Placeholder image of elegant black womens heels",
  },
  {
    slug: "classic-pointed-pump",
    name: "Studded Open-Toe Slipper",
    description:
      "An easy open-toe slip-on shoe with soft fabric, gold studs, and two comfortable straps — light, stylish, and perfect for everyday wear.",
    image:
      "/images/Studded-Open-Toe-Slipper.jpg",
    imageAlt: "Placeholder image of black pointed womens shoes",
  },
  {
    slug: "soft-ballet-slipper",
    name: "Bow Toe-Ring Slide",
    description:
      "An easy toe-ring slide with a stylish bow detail and a comfortable flat sole — light, elegant, and perfect for everyday wear.",
    image:
      "/images/Bow-Toe-Ring-Slide.jpg",
    imageAlt: "Placeholder image of black ballet-style womens shoes",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
