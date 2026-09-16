"use client";

import { CtaStrip } from "@/components/CtaStrip";
import { useI18n } from "@/lib/i18n";

export default function InfrastructurePage() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{t.infrastructure.kicker}</p>
          <h1>{t.infrastructure.title}</h1>
          <p className="lead">{t.infrastructure.lead}</p>
          <ul className="point-list">
            {t.infrastructure.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
