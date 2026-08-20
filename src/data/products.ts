export type ProductType = "raw" | "cooked";

export type Product = {
  id: string;
  name: string;
  type: ProductType;
  description: string;
  weight?: string;
  price?: number;
  image?: string;
  available: boolean;
  verified: boolean;
};

export const products: Product[] = [
  {
    id: "barf-pimpon-raw",
    name: "Alimento BARF Pimpon",
    type: "raw",
    description:
      "Alimento preparado con ingredientes naturales, en porciones prácticas para conservar congelado.",
    available: true,
    verified: false,
  },
];

export const productTypes: { type: ProductType; label: string }[] = [
  { type: "raw", label: "Alimento crudo" },
  { type: "cooked", label: "Alimento cocido" },
];