import { LogoMark } from "@/components/LogoMark";

type BrandLockupProps = {
  variant?: "mono" | "color";
};

export function BrandLockup({ variant = "mono" }: BrandLockupProps) {
  return (
    <span className={`brand-lockup brand-lockup--${variant}`}>
      <LogoMark variant={variant} />
      <span className="brand-wordmark">
        <strong>reallife</strong>
        <em>technologies</em>
      </span>
    </span>
  );
}
