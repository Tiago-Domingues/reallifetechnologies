"use client";

import { useI18n } from "@/lib/i18n";
import { useModal } from "@/components/ModalProvider";

export function CtaStrip() {
  const { t } = useI18n();
  const { openModal } = useModal();
  return (
    <section className="cta-strip">
      <div className="container">
        <h2>{t.ctaStrip.title}</h2>
        <p>{t.ctaStrip.body}</p>
        <button type="button" className="btn-gold" onClick={openModal}>
          {t.ctaStrip.action}
        </button>
      </div>
    </section>
  );
}
