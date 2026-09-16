"use client";

import { useEffect, useRef } from "react";
import { ContactForm } from "@/components/ContactForm";
import { useI18n } from "@/lib/i18n";
import { useModal } from "@/components/ModalProvider";

export function ContactModal() {
  const { open, closeModal } = useModal();
  const { t } = useI18n();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [closeModal, open]);

  if (!open) return null;

  return (
    <div
      className="modal-scrim"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button ref={closeRef} type="button" className="modal-close" onClick={closeModal} aria-label="Close">
          ×
        </button>
        <p className="section-label">{t.contact.kicker}</p>
        <h2 id="contact-modal-title">{t.contact.title}</h2>
        <p className="lead">{t.contact.lead}</p>
        <ContactForm compact />
      </div>
    </div>
  );
}
