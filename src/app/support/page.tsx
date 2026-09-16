"use client";

import { CtaStrip } from "@/components/CtaStrip";
import { useI18n } from "@/lib/i18n";

export default function SupportPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{t.support.kicker}</p>
          <h1>{t.support.title}</h1>
          <p className="lead">{t.support.lead}</p>
          <ul className="point-list">
            {t.support.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
