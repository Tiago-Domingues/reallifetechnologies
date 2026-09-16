"use client";

import { CtaStrip } from "@/components/CtaStrip";
import { useI18n } from "@/lib/i18n";

export default function SoftwarePage() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{t.software.kicker}</p>
          <h1>{t.software.title}</h1>
          <p className="lead">{t.software.lead}</p>
          <ul className="point-list">
            {t.software.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
