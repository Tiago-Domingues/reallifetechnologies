type LogoMarkProps = {
  variant?: "mono" | "color";
};

const FEATHERS = [
  "M5.2 21.6C18.8 6.4 41.2 1.2 77.2 11.4c-2.6 3.6-5.8 5.4-10.2 4.6C43.6 8.2 24.8 12.4 11.6 24.8c-2.4-1.2-4.6-2.2-6.4-3.2z",
  "M4.4 30.4C17.2 16.2 38.4 11.6 72.2 21.6c-2.4 3.4-5.4 5.1-9.4 4.4C41.2 18.6 23.6 22.2 11 33.6c-2.2-1.2-4.4-2.2-6.6-3.2z",
  "M4.8 38.8C16.8 25.8 36.4 22.2 64.8 31.8c-2.2 3.2-5 4.8-8.6 4.2C37.2 29.2 21.6 32.2 11.4 41.6c-2.2-1-4.4-1.9-6.6-2.8z",
];

const COLOR = ["#efc44a", "#e44578", "#3aafd4"];

export function LogoMark({ variant = "mono" }: LogoMarkProps) {
  return (
    <svg className={`logo-mark logo-mark--${variant}`} viewBox="0 0 80 48" aria-hidden="true">
      {FEATHERS.map((d, i) => (
        <path key={i} d={d} fill={variant === "color" ? COLOR[i] : "currentColor"} />
      ))}
    </svg>
  );
}
