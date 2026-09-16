"use client";

import { PillarPage } from "@/components/PillarPage";
import { useI18n } from "@/lib/i18n";

export default function ConsultingPage() {
  const { t } = useI18n();
  return <PillarPage copy={t.consulting} />;
}
