"use client";

import { ContactForm } from "@/components/ContactForm";
import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <section className="page-hero">
      <div className="container">
        <p className="section-label">{t.contact.kicker}</p>
        <h1>{t.contact.title}</h1>
        <p className="lead">{t.contact.lead}</p>
        <div style={{ height: 28 }} />
        <ContactForm />
      </div>
    </section>
  );
}
