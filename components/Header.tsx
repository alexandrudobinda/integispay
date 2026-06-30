"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { EDITIONS, type Edition, type NavKey } from "@/lib/editions";

export function Header({ edition, active }: { edition: Edition; active: NavKey }) {
  const cfg = EDITIONS[edition];
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const mq = window.matchMedia("(max-width: 980px)");
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
        {/* Logo always links to the Welcome selector */}
        <Link href="/" className="logo">
          <Logo />
        </Link>

        <nav className="nav-desktop">
          {cfg.headerLinks.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`nav-link ${l.key === active ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href={cfg.bookHref} className="nav-cta">
            Book a call
          </Link>
        </nav>

        <div className="nav-mobile">
          <Link href={cfg.bookHref} className="nav-cta-sm">
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
          {cfg.headerLinks.map((l) => (
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
