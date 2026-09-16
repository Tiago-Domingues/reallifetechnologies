"use client";

import Link from "next/link";
import { CtaStrip } from "@/components/CtaStrip";
import { HeroCanvas } from "@/components/HeroCanvas";
import { LogoMark } from "@/components/LogoMark";
import { useI18n } from "@/lib/i18n";
import { useModal } from "@/components/ModalProvider";

export default function HomePage() {
  const { t } = useI18n();
  const { openModal } = useModal();

  return (
    <>
      <section className="hero">
        <div className="hero-stage">
          <HeroCanvas />
          <div className="hero-gold" />
        </div>
        <div className="container hero-copy">
          <article className="help-card">
            <h1>{t.hero.howTitle}</h1>
            <p>{t.hero.howBody}</p>
            <Link href="/about" className="btn-ghost">
              {t.hero.play}
            </Link>
          </article>
          <article className="talk-card">
            <h2>{t.hero.talkTitle}</h2>
            <p>{t.hero.talkBody}</p>
            <button type="button" className="btn-gold" onClick={openModal}>
              {t.hero.cta}
            </button>
          </article>
        </div>
        <div className="container hero-mark">
          <LogoMark />
          <span>
            <strong>reallife</strong>
            technologies
          </span>
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
