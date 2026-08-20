import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { site, waLink } from "@/config/site";
import { DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export default function Ingredients() {
  return (
    <section className="section section--cream" id="ingredientes">
      <div className="container">
        <div className="section__intro">
          <p className="eyebrow">Composición</p>
          <h2 className="heading">Qué hay dentro importa.</h2>
          <p className="lead">
            Conoce los ingredientes de cada presentación y la información
            disponible sobre su composición antes de decidir.
          </p>
        </div>

        <div className="split">
          <div>
            <p className="lead">
              La información de ingredientes y composición varía según la
              presentación, por eso preferimos compartirla directamente
              contigo en el momento de tu pedido, junto con la guía de
              alimentación correspondiente.
            </p>
            <p className="lead" style={{ marginTop: "1rem" }}>
              Así puedes revisar con calma qué contiene cada producto antes de
              decidir si es el adecuado para tu perro.
            </p>
            <p className="lead" style={{ marginTop: "1rem" }}>
              Si tu perro tiene alguna condición médica, consulta con su
              veterinario antes de hacer un cambio de alimentación.
            </p>
          </div>

          <div>
            <div className="quick-order" style={{ padding: "2rem" }}>
              <div>
                <h3 style={{ color: "#f6f3e8", marginBottom: "0.75rem" }}>
                  Solicita la información de composición
                </h3>
                <p style={{ color: "#cfd7b2" }}>
                  Escríbenos por WhatsApp para recibir la ficha de la
                  presentación que te interesa y resolver cualquier duda.
                </p>
                <Link
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp"
                  style={{ marginTop: "1.25rem" }}
                >
                  <WhatsAppIcon />
                  Consultar por WhatsApp
                </Link>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#b9c39a",
                    marginTop: "1rem",
                  }}
                >
                  Tel. {site.whatsappDisplay}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}