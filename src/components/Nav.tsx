"use client";

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
          className="rounded-sm border px-5 py-2.5 text-sm font-semibold duration-300 text-ink"
        >
          {PHONE}
        </a>
      </div>
    </nav>
  );
}