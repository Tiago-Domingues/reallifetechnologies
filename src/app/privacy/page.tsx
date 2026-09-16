"use client";

import { useI18n } from "@/lib/i18n";

export default function PrivacyPage() {
  const { t } = useI18n();
  return (
    <section className="page-hero">
      <div className="container">
        <p className="section-label">{t.privacy.kicker}</p>
        <h1>{t.privacy.title}</h1>
        <p className="lead">{t.privacy.body}</p>
      </div>
    </section>
  );
}
