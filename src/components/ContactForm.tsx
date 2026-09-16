"use client";

import { useState } from "react";
import { CONTACT_EMAIL, HQ_ADDRESS } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function ContactForm() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <div className="contact-layout">
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <label>
          {t.contact.name}
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          {t.contact.email}
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          {t.contact.company}
          <input name="company" autoComplete="organization" />
        </label>
        <label>
          {t.contact.message}
          <textarea name="message" rows={5} required />
        </label>
        <button type="submit" className="btn-gold" disabled={sent}>
          {sent ? t.contact.sent : t.contact.send}
        </button>
      </form>
      <aside className="contact-aside">
        <div>
          <span>{t.contact.addressLabel}</span>
          <p>{HQ_ADDRESS}</p>
        </div>
        <div>
          <span>{t.contact.emailLabel}</span>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </div>
      </aside>
    </div>
  );
}
