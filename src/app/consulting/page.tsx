"use client";

import { CtaStrip } from "@/components/CtaStrip";
import { useI18n } from "@/lib/i18n";

export default function ConsultingPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{t.consulting.kicker}</p>
          <h1>{t.consulting.title}</h1>
          <p className="lead">{t.consulting.lead}</p>
          <ul className="point-list">
            {t.consulting.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
