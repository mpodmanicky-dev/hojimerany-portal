export interface NavRoute {
  label: string;
  href: string;
  description?: string;
}

export const NAV_ROUTES: NavRoute[] = [
  { label: "Domov", href: "/" },
  { label: "Produkty", href: "/produkty" },
  { label: "Hojenie", href: "/hojenie" },
  { label: "Sprievodca", href: "/sprievodca" },
];

