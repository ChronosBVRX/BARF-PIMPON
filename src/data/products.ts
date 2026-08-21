export type ProductVariant = {
  weight: "500 g" | "1 kg";
  price: number;
};

export type Product = {
  id: string;
  name: string;
  preparation: "Crudo" | "Cocido";
  variants: ProductVariant[];
  available: boolean;
  image: string;
  images: string[];
  imageAlt: string;
};

export const products: Product[] = [
  {
    id: "pollo-arroz-crudo",
    name: "Pollo + arroz",
    preparation: "Crudo",
    variants: [
      { weight: "500 g", price: 17.5 },
      { weight: "1 kg", price: 35 },
    ],
    available: true,
    image: "/products/pollo.webp",
    images: ["/products/pollo.webp"],
    imageAlt: "Paquete de alimento BARF Pimpon de pollo",
  },
  {
    id: "pollo-arroz-vegetales-crudo",
    name: "Pollo + arroz + vegetales",
    preparation: "Crudo",
    variants: [
      { weight: "500 g", price: 22.5 },
      { weight: "1 kg", price: 45 },
    ],
    available: true,
    image: "/products/pollo.webp",
    images: ["/products/pollo.webp"],
    imageAlt: "Paquete de alimento BARF Pimpon de pollo con vegetales",
  },
  {
    id: "pollo-res-vegetales-crudo",
    name: "Pollo + res + vegetales",
    preparation: "Crudo",
    variants: [
      { weight: "500 g", price: 25 },
      { weight: "1 kg", price: 50 },
    ],
    available: true,
    image: "/products/pollo-res.webp",
    images: ["/products/pollo-res.webp", "/products/pollo-res-2.webp"],
    imageAlt: "Presentación de alimento BARF Pimpon de pollo y res",
  },
  {
    id: "pollo-arroz-cocido",
    name: "Pollo + arroz",
    preparation: "Cocido",
    variants: [
      { weight: "500 g", price: 32.5 },
      { weight: "1 kg", price: 65 },
    ],
    available: true,
    image: "/products/pollo.webp",
    images: ["/products/pollo.webp"],
    imageAlt: "Paquete de alimento BARF Pimpon cocido de pollo",
  },
  {
    id: "pollo-arroz-vegetales-cocido",
    name: "Pollo + arroz + vegetales",
    preparation: "Cocido",
    variants: [
      { weight: "500 g", price: 32.5 },
      { weight: "1 kg", price: 65 },
    ],
    available: true,
    image: "/products/pollo.webp",
    images: ["/products/pollo.webp"],
    imageAlt: "Paquete de alimento BARF Pimpon cocido de pollo con vegetales",
  },
  {
    id: "pollo-res-vegetales-cocido",
    name: "Pollo + res + vegetales",
    preparation: "Cocido",
    variants: [
      { weight: "500 g", price: 32.5 },
      { weight: "1 kg", price: 65 },
    ],
    available: true,
    image: "/products/pollo-res.webp",
    images: ["/products/pollo-res.webp", "/products/pollo-res-2.webp"],
    imageAlt: "Segunda vista del alimento BARF Pimpon de pollo y res",
  },
];

export const crudoProducts = products.filter((p) => p.preparation === "Crudo");
export const cocidoProducts = products.filter((p) => p.preparation === "Cocido");

export const currencyFormatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatPrice(price: number): string {
  return `${currencyFormatter.format(price)}`;
}

export function priceToCents(price: number): number {
  return Math.round(price * 100);
}

export function centsToPrice(cents: number): number {
  return cents / 100;
}

export function formatCents(cents: number): string {
  return currencyFormatter.format(cents / 100);
}
