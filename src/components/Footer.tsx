import Link from "next/link";
import { Logo, Wordmark } from "@/components/Logo";
import { brand, contact, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-10">
        <div>
          <Link href="/" className="flex items-center gap-3 text-gold" aria-label="MSSQUEEN home">
            <Logo className="h-10 w-10" />
            <span className="h-7 w-px bg-gold/80" aria-hidden="true" />
            <Wordmark className="text-sm tracking-[0.4em]" />
          </Link>
          <p className="mt-6 max-w-xs font-body text-lg leading-relaxed text-gold-muted">
            {brand.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-brand text-xs tracking-[0.32em] text-gold uppercase">Navigation</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-lg text-gold-muted transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-brand text-xs tracking-[0.32em] text-gold uppercase">Contact</h2>
          <ul className="mt-5 space-y-3 font-body text-lg text-gold-muted">
            <li>
              <a className="hover:text-gold" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href={contact.phoneHref}>
                {contact.phone}
              </a>
            </li>
            <li>{contact.location}</li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-5">
            {contact.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="font-brand text-[0.65rem] tracking-[0.28em] text-gold/80 uppercase hover:text-gold"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-center md:flex-row md:text-left">
          <p className="font-brand text-[0.65rem] tracking-[0.28em] text-gold uppercase">
            {brand.footerLine}
          </p>
          <p className="font-body text-sm text-gold-muted">
            © {new Date().getFullYear()} MSSQUEEN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
