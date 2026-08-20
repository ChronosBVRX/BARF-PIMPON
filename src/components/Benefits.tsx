import { nutritionClaims } from "@/data/nutritionClaims";
import { Zap, Dumbbell, Sparkles, FlaskConical, Gem, HeartHandshake } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  energy: Zap,
  muscle: Dumbbell,
  "skin-coat": Sparkles,
  vitamins: FlaskConical,
  minerals: Gem,
  complete: HeartHandshake,
};

export default function Benefits() {
  return (
    <section className="section section--cream benefits" id="beneficios">
      <div className="container">
        <div className="benefits__header">
          <p className="eyebrow">Por qué BARF Pimpon</p>
          <h2 className="benefits__title">Nutrición que va más allá de los ingredientes.</h2>
          <p className="benefits__intro">
            Cada fórmula combina ingredientes seleccionados con un aporte de vitaminas, minerales, aminoácidos y ácidos grasos
            Omega pensado para acompañar la alimentación diaria de tu perro.
          </p>
          <p className="benefits__note">
            Los beneficios descritos corresponden a nutrientes que forman parte de la formulación y cuentan con respaldo
            científico confirmado por el propietario. No sustituyen la valoración de un médico veterinario.
          </p>
        </div>

        <div className="benefits__grid">
          {nutritionClaims.map((claim) => {
            const Icon = iconMap[claim.id] ?? Sparkles;
            return (
              <article key={claim.id} className="benefit">
                <div className="benefit__icon" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <div className="benefit__content">
                  <h3 className="benefit__title">{claim.title}</h3>
                  <p className="benefit__nutrients">{claim.nutrients.join(" · ")}</p>
                  <p className="benefit__statement">{claim.statement}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="benefits__foot">
          <div className="benefits__foot-card">
            <h4>Una fórmula completa y balanceada</h4>
            <p>
              Diseñada para aportar diferentes nutrientes importantes dentro de su alimentación diaria. El sellado al vacío y la
              conservación congelada ayudan a mantener el producto protegido hasta su utilización.
            </p>
          </div>
          <div className="benefits__foot-card benefits__foot-card--muted">
            <h4>Respaldo y transparencia</h4>
            <p>
              La arquitectura del sitio permite asociar a cada beneficio su documentación —análisis, ficha técnica o referencias—
              cuando el propietario decida hacerla pública. No se inventan estudios ni se atribuye aval veterinario sin
              confirmación directa de un MVZ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
