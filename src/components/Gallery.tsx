import Image from "next/image";

const photos = [
  {
    src: "/products/pollo.webp",
    alt: "Paquete de alimento BARF Pimpon de pollo",
    caption: "Fórmula de pollo",
  },
  {
    src: "/products/pollo-res.webp",
    alt: "Presentación de alimento BARF Pimpon de pollo y res",
    caption: "Pollo y res — vista principal",
  },
  {
    src: "/products/pollo-res-2.webp",
    alt: "Segunda vista del alimento BARF Pimpon de pollo y res",
    caption: "Pollo y res — segunda vista",
  },
];

export default function Gallery() {
  return (
    <section className="section gallery" id="galeria">
      <div className="container">
        <div className="section__intro">
          <p className="eyebrow">Producto real</p>
          <h2>Tal como llega a tu hogar.</h2>
          <p className="lead">
            Empaque sellado al vacío, porciones de 500 g y 1 kg. Fotografías reales del producto; cada fórmula mantiene la misma
            presentación y conservación.
          </p>
        </div>

        <div className="gallery__grid">
          <figure className="gallery__item gallery__item--large">
            <Image src={photos[1].src} alt={photos[1].alt} width={900} height={675} sizes="(min-width: 880px) 55vw, 90vw" />
            <figcaption>{photos[1].caption}</figcaption>
          </figure>
          <div className="gallery__column">
            <figure className="gallery__item">
              <Image src={photos[0].src} alt={photos[0].alt} width={900} height={675} sizes="(min-width: 880px) 28vw, 90vw" />
              <figcaption>{photos[0].caption}</figcaption>
            </figure>
            <figure className="gallery__item">
              <Image src={photos[2].src} alt={photos[2].alt} width={900} height={675} sizes="(min-width: 880px) 28vw, 90vw" />
              <figcaption>{photos[2].caption}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
