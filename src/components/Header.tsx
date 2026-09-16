"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { BrandLockup } from "@/components/BrandLockup";

export function Header() {
  const { t, locale, setLocale } = useI18n();
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

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <Link href="/" className="brand" aria-label="Real Life Technologies">
        <BrandLockup variant="mono" />
      </Link>

      <nav className="nav-links" aria-label="Primary">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "is-current" : undefined}
          >
            {t.nav[item.key]}
          </Link>
        ))}
        <div className="lang-switch" role="group" aria-label="Language">
          <button
            type="button"
            className={locale === "pt" ? "is-on" : undefined}
            onClick={() => setLocale("pt")}
          >
            PT
          </button>
          <button
            type="button"
            className={locale === "en" ? "is-on" : undefined}
            onClick={() => setLocale("en")}
          >
            EN
          </button>
        </div>
      </nav>

      <button
        type="button"
        className="nav-menu"
        aria-expanded={open}
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      {open ? (
        <div className="mobile-nav">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-current" : undefined}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <div className="lang-switch">
            <button type="button" className={locale === "pt" ? "is-on" : undefined} onClick={() => setLocale("pt")}>
              PT
            </button>
            <button type="button" className={locale === "en" ? "is-on" : undefined} onClick={() => setLocale("en")}>
              EN
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
