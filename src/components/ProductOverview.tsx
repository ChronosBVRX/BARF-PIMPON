import Image from "next/image";
import { Check } from "lucide-react";

export default function ProductOverview() {
  return (
    <section className="section" id="producto">
      <div className="container">
        <div className="split">
          <div className="media-frame" style={{ aspectRatio: "1 / 1" }}>
            <Image
              src="/brand/logo-lockup.webp"
              alt="Logotipo de BARF Pimpon con el lema Nutrición real, vida feliz"
              width={640}
              height={428}
              sizes="(min-width: 880px) 45vw, 90vw"
            />
          </div>

          <div>
            <p className="eyebrow">El producto</p>
            <h2 className="heading">Comida real, sin complicar tu rutina.</h2>
            <p className="lead">
              BARF Pimpon ofrece alimento preparado para perros en
              presentaciones prácticas para conservar congeladas y utilizar
              conforme las necesitas. Cada porción se prepara con ingredientes
              naturales, evitando la comida procesada de una sola vez.
            </p>
            <ul className="chip-list">
              <li>
                <Check aria-hidden="true" />
                <div>
                  <strong>Fácil de almacenar</strong>
                  <span>
                    Se mantiene en el congelador y se descongela cuando tu
                    perro va a comer.
                  </span>
                </div>
              </li>
              <li>
                <Check aria-hidden="true" />
                <div>
                  <strong>Compra directa</strong>
                  <span>
                    Haces tu pedido por WhatsApp y confirmas disponibilidad y
                    costo sin intermediarios.
                  </span>
                </div>
              </li>
              <li>
                <Check aria-hidden="true" />
                <div>
                  <strong>Ingredientes comunicados</strong>
                  <span>
                    Te compartimos la información de composición de cada
                    presentación antes de decidir.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}