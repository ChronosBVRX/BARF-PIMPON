import { Package, Snowflake, MessagesSquare, FileCheck } from "lucide-react";

const ITEMS = [
  {
    icon: Package,
    title: "Porciones prácticas",
    text: "Alimento porcionado para usar conforme lo necesitas.",
  },
  {
    icon: Snowflake,
    title: "Conservación congelada",
    text: "Se mantiene congelado hasta el momento de servirlo.",
  },
  {
    icon: FileCheck,
    title: "Ingredientes claros",
    text: "Te compartimos la información de cada presentación.",
  },
  {
    icon: MessagesSquare,
    title: "Atención directa",
    text: "Pedidos y dudas directamente por WhatsApp.",
  },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Ventajas">
      <div className="container">
        <div className="trust-strip__grid">
          {ITEMS.map((it) => (
            <div className="trust-card" key={it.title}>
              <div className="trust-card__icon">
                <it.icon aria-hidden="true" />
              </div>
              <div>
                <h3 className="trust-card__title">{it.title}</h3>
                <p className="trust-card__text">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}