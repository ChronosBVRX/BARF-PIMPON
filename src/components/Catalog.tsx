"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { crudoProducts, cocidoProducts, currencyFormatter } from "@/data/products";
import { buildOrderMessage } from "@/lib/whatsapp";
import { site } from "@/config/site";

type CardProps = {
  id: string;
  name: string;
  preparation: "Crudo" | "Cocido";
  variants: { weight: "500 g" | "1 kg"; price: number | null }[];
  image: string;
  images: string[];
  imageAlt: string;
};

function ProductCard({ name, preparation, variants, image, images, imageAlt }: CardProps) {
  const [variantIdx, setVariantIdx] = useState(1);
  const [qty, setQty] = useState(1);
  const [imgIdx, setImgIdx] = useState(0);
  const variant = variants[variantIdx];
  const price = variant.price;
  const total = price !== null ? price * qty : null;
  const mainImage = images[imgIdx] ?? image;

  const message = useMemo(
    () =>
      buildOrderMessage({
        product: name,
        preparation,
        presentation: variant.weight,
        quantity: qty,
      }),
    [name, preparation, variant.weight, qty]
  );

  const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <article className="catalog-card">
      <div className="catalog-card__media">
        <Image
          src={mainImage}
          alt={imageAlt}
          width={900}
          height={675}
          sizes="(min-width: 1100px) 30vw, (min-width: 760px) 45vw, 90vw"
        />
        <span className={`catalog-card__badge catalog-card__badge--${preparation === "Crudo" ? "raw" : "cooked"}`}>
          {preparation === "Crudo" ? "Alimento crudo" : "Alimento cocido"}
        </span>
        {images.length > 1 && (
          <div className="catalog-card__thumbs" role="group" aria-label={`Vistas de ${name}`}>
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`catalog-card__thumb ${i === imgIdx ? "catalog-card__thumb--active" : ""}`}
                onClick={() => setImgIdx(i)}
                aria-label={`Vista ${i + 1} de ${name}`}
                aria-pressed={i === imgIdx}
              >
                <Image src={src} alt="" width={64} height={48} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="catalog-card__body">
        <h3 className="catalog-card__name">{name}</h3>
        <p className="catalog-card__prep">{preparation === "Crudo" ? "BARF crudo" : "Opción cocida"}</p>

        <div className="catalog-card__variants" role="group" aria-label={`Presentación para ${name} ${preparation}`}>
          {variants.map((v, i) => (
            <button
              key={v.weight}
              type="button"
              className={`catalog-card__variant ${i === variantIdx ? "catalog-card__variant--active" : ""}`}
              onClick={() => setVariantIdx(i)}
              aria-pressed={i === variantIdx}
              aria-label={`${v.weight}${v.price !== null ? ` ${currencyFormatter.format(v.price)}` : " precio por confirmar"}`}
            >
              {v.weight}
            </button>
          ))}
        </div>

        <div className="catalog-card__price">
          <span className="catalog-card__price-weight">{variant.weight}</span>
          {price !== null ? (
            <span className="catalog-card__price-value">{currencyFormatter.format(price)} MXN</span>
          ) : (
            <span className="catalog-card__price-pending">Precio por confirmar</span>
          )}
          {price !== null && qty > 1 && total !== null && (
            <span className="catalog-card__price-total">
              {qty} × {currencyFormatter.format(price)} = {currencyFormatter.format(total)} MXN
            </span>
          )}
        </div>

        <div className="catalog-card__qty">
          <label htmlFor={`qty-${name}-${preparation}`.replace(/\s+/g, "-")}>Cantidad</label>
          <div className="catalog-card__qty-controls">
            <button
              type="button"
              className="catalog-card__qty-btn"
              onClick={() => setQty((n) => Math.max(1, n - 1))}
              aria-label="Disminuir cantidad"
            >
              −
            </button>
            <span className="catalog-card__qty-value" aria-live="polite">
              {qty}
            </span>
            <button
              type="button"
              className="catalog-card__qty-btn"
              onClick={() => setQty((n) => Math.min(12, n + 1))}
              aria-label="Aumentar cantidad"
            >
              +
            </button>
          </div>
        </div>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--whatsapp catalog-card__cta"
          aria-label={`Pedir ${name} ${preparation} ${variant.weight} por WhatsApp`}
        >
          <WhatsAppIcon />
          Pedir por WhatsApp
        </a>
        {price === null && (
          <p className="catalog-card__hint">El precio de 500 g se confirma por WhatsApp.</p>
        )}
      </div>
    </article>
  );
}

export default function Catalog() {
  return (
    <section className="section" id="productos">
      <div className="container">
        <div className="section__intro">
          <p className="eyebrow">Catálogo</p>
          <h2>Elige la fórmula ideal para tu perro.</h2>
          <p className="lead">
            Seis presentaciones en dos líneas — BARF crudo y opciones cocidas — en 500 g y 1 kg. Elige presentación y cantidad y
            cierra tu pedido directo por WhatsApp.
          </p>
        </div>

        <div className="catalog-group">
          <div className="catalog-group__head">
            <h3 className="catalog-group__title">BARF crudo</h3>
            <p className="catalog-group__desc">Fórmulas en crudo, listas para conservar congeladas.</p>
          </div>
          <div className="catalog-grid">
            {crudoProducts.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                preparation={p.preparation}
                variants={p.variants}
                image={p.image}
                images={p.images}
                imageAlt={p.imageAlt}
              />
            ))}
          </div>
        </div>

        <div className="catalog-group catalog-group--cooked">
          <div className="catalog-group__head">
            <h3 className="catalog-group__title">Opciones cocidas</h3>
            <p className="catalog-group__desc">Las mismas tres fórmulas, preparadas cocidas.</p>
          </div>
          <div className="catalog-grid">
            {cocidoProducts.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                name={p.name}
                preparation={p.preparation}
                variants={p.variants}
                image={p.image}
                images={p.images}
                imageAlt={p.imageAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
