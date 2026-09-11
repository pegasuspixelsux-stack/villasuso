/**
 * Static site configuration. Replace the placeholder contact details with the
 * real ones before launch — see the `TODO` markers.
 */
export const SITE = {
  name: "Gonzalo Villasuso",
  legalName: "Automotora Gonzalo Villasuso",
  city: "Punta del Este",
  region: "Punta del Este, Uruguay",
  tagline: "Vehículos seleccionados BMW, MINI y Mazda.",

  brands: ["BMW", "MINI", "Mazda"] as string[],

  whatsappNumber: "59894438600",
  phoneDisplay: "094 438 600",
  phoneInternational: "+598 94 438 600",
  email: "automotoragvillasuso@gmail.com",

  address: "Av. Roosevelt Parada 8, Punta del Este",
  // TODO: confirm opening hours.
  hours: "Lun–Vie 9–19 · Sáb 9–13",
  mapsQuery: "Av. Roosevelt Parada 8, Punta del Este, Uruguay",

  // TODO: confirm real Instagram, Facebook and TikTok accounts.
  instagramHandle: "gonzalovillasuso",
  instagramUrl: "https://instagram.com/gonzalovillasuso",
  facebookUrl: "https://facebook.com/gonzalovillasuso",
  tiktokUrl: "https://tiktok.com/@gonzalovillasuso",
} as const;

export function waLink(message: string, number: string = SITE.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// Leading "/" so these resolve correctly from any route (home included) —
// Nav and Footer are shared across the homepage and vehicle detail pages.
export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#unidades", label: "Unidades" },
  { href: "/#herramientas", label: "Financiación" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
] as const;
