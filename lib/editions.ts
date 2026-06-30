export type Edition = "crypto" | "saas";
export type NavKey = "home" | "crypto" | "mica" | "cases" | "about";

type EditionConfig = {
  base: string;
  bookHref: string;
  integrationsHref: string;
  headerLinks: { href: string; label: string; key: NavKey }[];
  footerLinks: { href: string; label: string }[];
  footerBlurb: string;
};

export const EDITIONS: Record<Edition, EditionConfig> = {
  crypto: {
    base: "/crypto",
    bookHref: "/crypto/about#book",
    integrationsHref: "/crypto/integrations",
    headerLinks: [
      { href: "/crypto", label: "Home", key: "home" },
      { href: "/crypto/integrations", label: "Integrations", key: "crypto" },
      { href: "/crypto/mica", label: "EU & MiCA", key: "mica" },
      { href: "/crypto/cases", label: "Cases", key: "cases" },
      { href: "/crypto/about", label: "About", key: "about" },
    ],
    footerLinks: [
      { href: "/crypto", label: "Home" },
      { href: "/crypto/integrations", label: "Crypto Integrations" },
      { href: "/crypto/mica", label: "Crypto + Fiat in the EU" },
      { href: "/crypto/cases", label: "Case Studies" },
      { href: "/crypto/about", label: "About / Contact" },
    ],
    footerBlurb:
      "Done-for-you crypto + fiat payment integration for crypto-native and Web3 businesses, built on a MiCA-compliant, EU-regulated processor.",
  },
  saas: {
    base: "/saas",
    bookHref: "/saas/about#book",
    integrationsHref: "/saas/integrations",
    headerLinks: [
      { href: "/saas", label: "Home", key: "home" },
      { href: "/saas/integrations", label: "Integrations", key: "crypto" },
      { href: "/saas/mica", label: "EU & MiCA", key: "mica" },
      { href: "/saas/cases", label: "Cases", key: "cases" },
      { href: "/saas/about", label: "About", key: "about" },
    ],
    footerLinks: [
      { href: "/saas", label: "Home" },
      { href: "/saas/integrations", label: "SaaS Integrations" },
      { href: "/saas/mica", label: "Crypto + Fiat for SaaS" },
      { href: "/saas/cases", label: "Case Studies" },
      { href: "/saas/about", label: "About / Contact" },
    ],
    footerBlurb:
      "Done-for-you crypto + fiat payment integration for SaaS and software companies — recurring billing, stablecoin settlement and failed-payment recovery, on a MiCA-compliant, EU-regulated processor.",
  },
};
