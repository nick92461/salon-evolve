"use client";

import { useState} from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#stylists", label: "Stylists" },
  { href: "/#visit", label: "Visit" },
  { href: "/booking", label: "Book" },
  { href: "/careers", label: "Careers" }
];

const PHONE = "(609) 390-9220";
const PHONE_HREF = "tel:+16093909220";

export default function Nav() {
  /*
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 40);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  */

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 flex h-[76px] items-center justify-between px-6 duration-300 sm:px-12 bg-linen"
    >
      <a
        href="/"
        className={`font-display text-xl duration-300 text-ink`}
      >
        Salon Evolve
      </a>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm duration-300 text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={PHONE_HREF}
          className="hidden md:inline rounded-sm border px-5 py-2.5 text-sm font-semibold duration-300 text-ink"
        >
          {PHONE}
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-ink"></span>
          <span className="block h-0.5 w-6 bg-ink"></span>
          <span className="block h-0.5 w-6 bg-ink"></span>
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-[76px] left-0 right-0 md:hidden flex flex-col bg-linen border-t border-ink/10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-sm text-ink border-b border-ink/10"
              >
                {link.label}
              </Link>
              
            ))}
            <a
              href={PHONE_HREF}
              className="px-6 py-4 text-sm text-ink border-b border-ink/10"
            >
              {PHONE}
            </a>
        </div>
      )}
    </nav>
  );
}