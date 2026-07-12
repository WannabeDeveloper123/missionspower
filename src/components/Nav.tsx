"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Terry" },
  { href: "/foreword", label: "Foreword" },
  { href: "/endorsements", label: "Endorsements" },
  { href: "/purchase", label: "Purchase" },
  { href: "/connect", label: "Connect" },
  { href: "/faqs", label: "FAQs" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 bg-panel text-gold">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M12 2c.6 2.7 2.1 4.6 4.4 6.1-2.3.6-3.8 2-4.4 4.4-.6-2.4-2.1-3.8-4.4-4.4C10 6.6 11.4 4.7 12 2Z" />
              <path d="M12 12.5c.9 3.4 2.9 5.7 6 7.2-3.1.8-5.1 2.5-6 5.3-.9-2.8-2.9-4.5-6-5.3 3.1-1.5 5.1-3.8 6-7.2Z" opacity=".55" />
            </svg>
          </span>
          <span className="font-serif text-lg leading-tight tracking-wide text-foreground">
            Missions Power
            <span className="block text-xs font-sans font-normal uppercase tracking-[0.25em] text-gold">
              Ministries
            </span>
          </span>
        </Link>

        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm uppercase tracking-wide transition-colors hover:text-gold ${
                pathname === l.href ? "text-gold" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="text-muted md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-panel px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-2 text-sm uppercase tracking-wide ${
                pathname === l.href ? "text-gold" : "text-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
