"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export function CtaStrip() {
  const { t } = useI18n();
  return (
    <section className="cta-strip">
      <div className="container">
        <h2>{t.ctaStrip.title}</h2>
        <p>{t.ctaStrip.body}</p>
        <Link href="/contact" className="btn-gold">
          {t.ctaStrip.action}
        </Link>
      </div>
    </section>
  );
}
