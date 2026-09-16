"use client";

import Link from "next/link";
import { CtaStrip } from "@/components/CtaStrip";
import { HeroCanvas } from "@/components/HeroCanvas";
import { useI18n } from "@/lib/i18n";

export default function HomePage() {
  const { t } = useI18n();

  return (
    <>
      <section className="hero">
        <HeroCanvas />
        <div className="hero-gold" />
        <div className="container hero-copy">
          <div>
            <p className="hero-kicker">{t.hero.kicker}</p>
            <h1>{t.hero.title}</h1>
          </div>
          <div className="stack">
            <article className="help-card">
              <h2>{t.hero.howTitle}</h2>
              <p>{t.hero.howBody}</p>
              <Link href="/about" className="btn-ghost">
                {t.hero.play}
              </Link>
            </article>
            <article className="talk-card">
              <h2>{t.hero.talkTitle}</h2>
              <p>{t.hero.talkBody}</p>
              <div className="hero-actions">
                <Link href="/contact" className="btn-gold">
                  {t.hero.cta}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-label reveal">{t.pillars.label}</p>
          <h2 className="reveal">{t.pillars.title}</h2>
          <div className="pillar-grid">
            {t.pillars.items.map((item) => (
              <Link key={item.href} href={item.href} className="pillar reveal">
                <span>{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust">
        <div className="container">
          <p className="section-label reveal">{t.trust.label}</p>
          <div className="trust-row reveal">
            {t.trust.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <p className="trust-note">{t.trust.note}</p>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
