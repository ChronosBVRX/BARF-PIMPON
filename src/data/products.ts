export type ProductVariant = {
  weight: "500 g" | "1 kg";
  price: number | null;
};

export type Product = {
  id: string;
  name: string;
  preparation: "Crudo" | "Cocido";
  variants: ProductVariant[];
  available: boolean;
};

export const products: Product[] = [
  {
    id: "pollo-arroz-crudo",
    name: "Pollo + arroz",
    preparation: "Crudo",
    variants: [
      { weight: "500 g", price: null },
      { weight: "1 kg", price: 35 },
    ],
    available: true,
  },
  {
    id: "pollo-arroz-vegetales-crudo",
    name: "Pollo + arroz + vegetales",
    preparation: "Crudo",
    variants: [
      { weight: "500 g", price: null },
      { weight: "1 kg", price: 45 },
    ],
    available: true,
  },
  {
    id: "pollo-res-vegetales-crudo",
    name: "Pollo + res + vegetales",
    preparation: "Crudo",
    variants: [
      { weight: "500 g", price: null },
      { weight: "1 kg", price: 50 },
    ],
    available: true,
  },
  {
    id: "pollo-arroz-cocido",
    name: "Pollo + arroz",
    preparation: "Cocido",
    variants: [
      { weight: "500 g", price: null },
      { weight: "1 kg", price: 65 },
    ],
    available: true,
  },
  {
    id: "pollo-arroz-vegetales-cocido",
    name: "Pollo + arroz + vegetales",
    preparation: "Cocido",
    variants: [
      { weight: "500 g", price: null },
      { weight: "1 kg", price: 65 },
    ],
    available: true,
  },
  {
    id: "pollo-res-vegetales-cocido",
    name: "Pollo + res + vegetales",
    preparation: "Cocido",
    variants: [
      { weight: "500 g", price: null },
      { weight: "1 kg", price: 65 },
    ],
    available: true,
  },
];

export const crudoProducts = products.filter((p) => p.preparation === "Crudo");
export const cocidoProducts = products.filter((p) => p.preparation === "Cocido");

export const currencyFormatter = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0,
});

export function formatPrice(price: number | null): string {
  if (price === null) return "Consultar";
  return `${currencyFormatter.format(price)} MXN`.replace("$", "$");
}
