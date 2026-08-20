"use client";

import { useMemo, useState } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { site } from "@/config/site";
import { productTypes } from "@/data/products";
import { buildQuickOrderMessage } from "@/lib/whatsapp";

const COUNTS = ["1", "2", "3", "4", "5", "6", "8", "10", "12"];

export default function QuickOrder() {
  const [product, setProduct] = useState(productTypes[0].type);
  const [quantity, setQuantity] = useState("1");

  const message = useMemo(
    () =>
      buildQuickOrderMessage({
        product:
          productTypes.find((p) => p.type === product)?.label ??
          productTypes[0].label,
        presentation: "Por confirmar con BARF Pimpon",
        quantity: `${quantity} ${quantity === "1" ? "paquete" : "paquetes"}`,
      }),
    [product, quantity]
  );

  const wa = useMemo(
    () => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`,
    [message]
  );

  return (
    <section className="section" id="presentaciones">
      <div className="container">
        <div className="quick-order">
          <div>
            <p className="eyebrow">Pedido rápido</p>
            <h2>¿Qué necesitas consultar?</h2>
            <p className="lead">
              Elige el tipo de alimento y la cantidad estimada. Nosotros te
              confirmamos presentaciones, disponibilidad y costo por WhatsApp.
            </p>
          </div>

          <form
            className="quick-order__fields"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(wa, "_blank", "noopener,noreferrer");
            }}
          >
            <div className="field">
              <label htmlFor="qo-product">Producto</label>
              <select
                id="qo-product"
                value={product}
                onChange={(e) => setProduct(e.target.value as "raw" | "cooked")}
              >
                {productTypes.map((p) => (
                  <option key={p.type} value={p.type}>
                    {p.label} — BARF Pimpon
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="qo-quantity">Cantidad estimada</label>
              <select
                id="qo-quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {COUNTS.map((c) => (
                  <option key={c} value={c}>
                    {c} {c === "1" ? "paquete" : "paquetes"}
                  </option>
                ))}
              </select>
            </div>

            <div className="quick-order__result">
              <button type="submit" className="btn btn--whatsapp">
                <WhatsAppIcon />
                Consultar por WhatsApp
              </button>
              <span className="quick-order__hint">
                Los pesos y precios se confirmarán directamente por WhatsApp.
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}