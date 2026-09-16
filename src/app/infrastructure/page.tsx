"use client";

import { PillarPage } from "@/components/PillarPage";
import { useI18n } from "@/lib/i18n";

export default function InfrastructurePage() {
  const { t } = useI18n();
  return <PillarPage copy={t.infrastructure} />;
}
