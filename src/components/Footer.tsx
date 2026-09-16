"use client";

import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";
import { useI18n } from "@/lib/i18n";
import { LogoMark } from "@/components/LogoMark";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <LogoMark />
          <div>
            <strong>reallife</strong>
            <span>technologies</span>
          </div>
        </div>
        <p className="footer-note">{t.footer.rights}</p>
        <div className="footer-links">
          <Link href="/privacy">{t.footer.privacy}</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}
