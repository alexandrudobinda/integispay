"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

type NavKey = "home" | "crypto" | "mica" | "cases" | "about";

const LINKS: { href: string; label: string; key: NavKey }[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/crypto-integrations", label: "Crypto Integrations", key: "crypto" },
  { href: "/eu-mica", label: "EU & MiCA", key: "mica" },
  { href: "/case-studies", label: "Case Studies", key: "cases" },
  { href: "/contact", label: "About", key: "about" },
];

export function Header({ active }: { active: NavKey }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const mq = window.matchMedia("(max-width: 860px)");
    const apply = () => {
      setIsMobile(mq.matches);
      setOpen(false);
    };
    apply();
    mq.addEventListener("change", apply);

    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", apply);
    };
  }, []);

  const showMenu = isMobile && open;

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-bar">
        <Link href="/" className="logo">
          <Logo />
        </Link>

        <nav className="nav-desktop">
          {LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`nav-link ${l.key === active ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact#book" className="nav-cta">
            Book a call
          </Link>
        </nav>

        <div className="nav-mobile">
          <Link href="/contact#book" className="nav-cta-sm">
            Book a call
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="hamburger"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {showMenu && (
        <nav className="mobile-menu">
          {LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={l.key === active ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
