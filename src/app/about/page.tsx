"use client";

import { CtaStrip } from "@/components/CtaStrip";
import { useI18n } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{t.about.kicker}</p>
          <h1>{t.about.title}</h1>
          <p className="lead">{t.about.lead}</p>
          <div className="facts">
            {t.about.facts.map((fact) => (
              <div key={fact.v} className="fact">
                <b>{fact.k}</b>
                <span>{fact.v}</span>
              </div>
            ))}
          </div>
          <p className="lead">{t.about.body}</p>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
