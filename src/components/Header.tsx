"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo, Wordmark } from "@/components/Logo";
import { nav } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-black/92 backdrop-blur-md"
          : "bg-black/55 backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3 text-gold" aria-label="MSSQUEEN home">
          <Logo className="h-11 w-11 md:h-12 md:w-12" />
          <span className="h-8 w-px bg-gold/80" aria-hidden="true" />
          <Wordmark />
          <sup className="relative -top-2 text-[9px] text-gold">®</sup>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-brand text-[0.72rem] tracking-[0.28em] uppercase transition-colors ${
                  active ? "text-gold" : "text-gold/70 hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-gold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-[5px]">
            <span className={`block h-px w-6 bg-gold transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-gold transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-gold transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[73px] z-40 bg-black/96 lg:hidden"
        >
          <nav className="flex h-full flex-col items-center justify-center gap-8" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-brand text-xl tracking-[0.35em] text-gold uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
