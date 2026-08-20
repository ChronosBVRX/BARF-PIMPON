import { site } from "@/config/site";

export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "Hola, vi BARF Pimpon en su sitio web y quisiera consultar disponibilidad.";

export function buildQuickOrderMessage(params: {
  product: string;
  presentation: string;
  quantity: string;
}): string {
  const lines = [
    "Hola, vi BARF Pimpon en su sitio web.",
    "",
    "Quiero consultar:",
    "",
    `Producto: ${params.product}`,
    `Presentación: ${params.presentation}`,
    `Cantidad: ${params.quantity}`,
    "",
    "¿Me comparten disponibilidad y costo?",
  ];
  return lines.join("\n");
}

export function buildOrderMessage(params: {
  product: string;
  preparation: "Crudo" | "Cocido";
  presentation: "500 g" | "1 kg";
  quantity: number;
}): string {
  return [
    "Hola, vi BARF Pimpon en su sitio web y quiero hacer un pedido.",
    "",
    `Producto: ${params.product}`,
    `Preparación: ${params.preparation}`,
    `Presentación: ${params.presentation}`,
    `Cantidad: ${params.quantity}`,
    "",
    "¿Me confirman disponibilidad?",
  ].join("\n");
}
