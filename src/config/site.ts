export const site = {
  brandName: "BARF Pimpon",
  brandShortName: "Pimpon",
  legalName: "BARF Pimpon",
  tagline: "Nutrición real, vida feliz",
  descriptor: "Alimento natural para tu mascota",
  description:
    "Conoce BARF Pimpon, sus presentaciones, ingredientes, conservación y opciones de pedido directo por WhatsApp.",

  whatsapp: "524433553656",
  whatsappDisplay: "443 355 3656",

  email: null as string | null,
  phone: "443 355 3656",

  address: null as string | null,
  city: null as string | null,
  state: null as string | null,
  country: "México",
  serviceAreas: [] as string[],

  openingHours: null as string | null,

  facebook: null as string | null,
  instagram: null as string | null,
  tiktok: null as string | null,
  mapsUrl: null as string | null,

  products: [] as { id: string; name: string; type: "raw" | "cooked" }[],
  prices: {} as Record<string, number>,
  currency: "MXN",
  deliveryInformation: null as string | null,
} as const;

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WA_MESSAGE =
  "Hola, vi BARF Pimpon en su sitio web y quisiera consultar disponibilidad.";