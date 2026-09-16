"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

export function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = window.localStorage.getItem("rlt-cookies");
    if (!choice) setVisible(true);
  }, []);

  if (!visible) return null;

  const choose = (value: "accept" | "reject") => {
    window.localStorage.setItem("rlt-cookies", value);
    setVisible(false);
  };

  return (
    <div className="cookie-banner" role="dialog" aria-label={t.cookies.title}>
      <div>
        <strong>{t.cookies.title}</strong>
        <p>{t.cookies.body}</p>
      </div>
      <div className="cookie-actions">
        <button type="button" className="btn-ghost" onClick={() => choose("reject")}>
          {t.cookies.reject}
        </button>
        <button type="button" className="btn-gold" onClick={() => choose("accept")}>
          {t.cookies.accept}
        </button>
      </div>
    </div>
  );
}
