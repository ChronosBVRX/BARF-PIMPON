import { ShieldCheck, Snowflake, PackageCheck } from "lucide-react";

export default function VacuumSealed() {
  return (
    <section className="section vacuum" id="sellado">
      <div className="container">
        <div className="vacuum__grid">
          <div className="vacuum__copy">
            <p className="eyebrow">Presentación</p>
            <h2>Sellado al vacío y conservación congelada.</h2>
            <p className="lead">
              Cada porción se entrega sellada al vacío para facilitar su conservación y mantener el producto protegido hasta su
              utilización. Se mantiene congelado siguiendo las instrucciones que acompañan tu pedido.
            </p>

            <ul className="vacuum__list">
              <li>
                <span className="vacuum__list-icon" aria-hidden="true">
                  <PackageCheck size={18} />
                </span>
                <div>
                  <strong>Sellado al vacío</strong>
                  <span>Mayor frescura, mejor higiene y protección durante almacenamiento y manipulación.</span>
                </div>
              </li>
              <li>
                <span className="vacuum__list-icon" aria-hidden="true">
                  <Snowflake size={18} />
                </span>
                <div>
                  <strong>Producto congelado</strong>
                  <span>Mantener congelado de acuerdo con las instrucciones de conservación de cada presentación.</span>
                </div>
              </li>
              <li>
                <span className="vacuum__list-icon" aria-hidden="true">
                  <ShieldCheck size={18} />
                </span>
                <div>
                  <strong>Dos presentaciones</strong>
                  <span>500 g y 1 kg, en línea BARF cruda y en alternativa cocida — misma fórmula, distinta preparación.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="vacuum__visual" aria-hidden="true">
            <div className="vacuum__card">
              <div className="vacuum__card-label">Empaque</div>
              <div className="vacuum__card-title">Sellado al vacío</div>
              <p className="vacuum__card-text">Conservación congelada · Porciones prácticas</p>
            </div>
            <div className="vacuum__card vacuum__card--accent">
              <div className="vacuum__card-label">Disponible</div>
              <div className="vacuum__card-title">Crudo y cocido</div>
              <p className="vacuum__card-text">Pollo + arroz · Con vegetales · Con res</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
