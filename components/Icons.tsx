type IconProps = { size?: number; color?: string };

export function ShieldCheck({ size = 15, color = "var(--accent)" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 4 5v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V5l-8-3Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Globe({ size = 15, color = "var(--accent)" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"
        stroke={color}
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function Chevrons({ size = 22, color = "var(--accent)" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="m9 7-5 5 5 5M15 7l5 5-5 5"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Pin({ size = 22, color = "var(--accent)" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s7-5 7-11a7 7 0 0 0-14 0c0 6 7 11 7 11Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}

export function Pulse({ size = 22, color = "var(--accent)" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12h4l2 6 4-12 2 6h6"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Lines({ size = 24, color = "var(--accent)" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 7h16M4 12h16M4 17h10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Check({ size = 26, color = "var(--accent)" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="m5 13 4 4 10-10"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
