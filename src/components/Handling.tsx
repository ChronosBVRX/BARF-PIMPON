import Image from "next/image";

export default function Handling() {
  const steps = [
    {
      title: "Conservar congelado",
      text: "Mantén el producto congelado hasta el momento de utilizarlo.",
    },
    {
      title: "Descongelar en refrigeración",
      text: "Pasa la porción al refrigerador antes de servirla. No descongeles a temperatura ambiente.",
    },
    {
      title: "Lavarse las manos",
      text: "Lava tus manos después de manipular el alimento.",
    },
    {
      title: "Lavar recipientes y utensilios",
      text: "Lava los platos y utensilios utilizados antes de guardarlos.",
    },
    {
      title: "Limpiar las superficies",
      text: "Limpia las superficies donde se preparó o sirvió el alimento.",
    },
    {
      title: "Evitar contaminación cruzada",
      text: "No mezcles el alimento con otros productos que estén abiertos.",
    },
    {
      title: "Fuera del alcance de los niños",
      text: "Mantén el producto en un lugar seguro, fuera del alcance de los niños.",
    },
    {
      title: "Uso para alimentación animal",
      text: "Este producto está destinado a la alimentación de perros.",
    },
  ];

  return (
    <section className="section" id="conservacion">
      <div className="container">
        <div className="section__intro">
          <p className="eyebrow">Conservación y manejo</p>
          <h2 className="heading">Conservación y manejo</h2>
          <p className="lead">
            La manipulación adecuada ayuda a mantener el producto en buenas
            condiciones y reduce riesgos de contaminación.
          </p>
        </div>

        <div className="split" style={{ marginBottom: "3.5rem" }}>
          <div className="chip-list">
            <p className="lead" style={{ marginBottom: "1rem" }}>
              El alimento se entrega congelado para conservarse en las mejores
              condiciones hasta que lo uses.
            </p>
          </div>
          <div
            className="media-frame"
            style={{ aspectRatio: "4 / 3", maxWidth: 520 }}
          >
            <Image
              src="/brand/brand-mark.webp"
              alt="Ilustración de la mascota de BARF Pimpon"
              width={500}
              height={605}
              sizes="(min-width: 880px) 40vw, 90vw"
            />
          </div>
        </div>

        <ol className="steps">
          {steps.map((s, i) => (
            <li className="step" key={i}>
              <div>
                <span className="step__title">{s.title}</span>
                <span className="step__text">{s.text}</span>
              </div>
            </li>
          ))}
        </ol>

        <p className="lead" style={{ marginTop: "2.5rem" }}>
          Las indicaciones específicas de temperatura y tiempos de cada
          presentación se comparten con tu pedido por WhatsApp.
        </p>
      </div>
    </section>
  );
}