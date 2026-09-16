"use client";

import { CtaStrip } from "@/components/CtaStrip";

type CopyBlock = {
  kicker: string;
  title: string;
  lead: string;
  points: readonly string[];
};

export function PillarPage({ copy }: { copy: CopyBlock }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="section-label">{copy.kicker}</p>
          <h1>{copy.title}</h1>
          <p className="lead">{copy.lead}</p>
          <ul className="point-list">
            {copy.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
      <CtaStrip />
    </>
  );
}
