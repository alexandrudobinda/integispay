export function Logo({ size = 28, fontSize = 18 }: { size?: number; fontSize?: number }) {
  return (
    <>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="30" height="30" rx="8" fill="#FFFFFF" stroke="rgba(18,179,154,0.45)" />
        <path
          d="M9 21 L16 7 L23 21"
          stroke="#12B39A"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 16 L20 16" stroke="#7C6CF0" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="logo-word" style={{ fontSize }}>
        Integis<span className="pay">Pay</span>
      </span>
    </>
  );
}
