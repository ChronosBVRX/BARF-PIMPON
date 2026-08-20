import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { waLink } from "@/config/site";
import { DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="contacto">
      <div className="container">
        <div className="final-cta__inner">
          <h2>Haz tu pedido directamente por WhatsApp.</h2>
          <p>
            Consulta presentaciones, disponibilidad y zonas de entrega para tu
            dirección.
          </p>
          <Link
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--cream"
          >
            <WhatsAppIcon />
            Consultar disponibilidad
          </Link>
        </div>
      </div>
    </section>
  );
}