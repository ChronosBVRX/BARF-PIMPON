import Image from "next/image";
import Link from "next/link";
import { Snowflake, ShoppingBag } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { waLink } from "@/config/site";
import { DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__kicker">Alimentación natural para perros</p>
          <h1 className="hero__title">Nutrición real para todos los días.</h1>
          <p className="hero__text">
            Fórmulas de pollo y res con vitaminas, minerales, aminoácidos y
            ácidos grasos Omega, disponibles crudas o cocidas y en presentaciones
            prácticas de 500 g y 1 kg.
          </p>
          <div className="hero__actions">
            <a href="#productos" className="btn btn--primary">
              Ver fórmulas y precios
            </a>
            <Link
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <WhatsAppIcon />
              Pedir por WhatsApp
            </Link>
          </div>
          <p className="hero__micro">
            Sellado al vacío · Conservación congelada · Atención directa por WhatsApp
          </p>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            <Image
              src="/brand/brand-mark.webp"
              alt="Marca ilustrada de BARF Pimpon: perro con ramas verdes sobre fondo crema"
              width={500}
              height={605}
              priority
              sizes="(min-width: 960px) 45vw, 90vw"
            />
          </div>
          <div className="hero__float hero__float--tl">
            <ShoppingBag size={18} />
            Sellado al vacío
          </div>
          <div className="hero__float hero__float--br">
            <Snowflake size={18} />
            Conservación congelada
          </div>
        </div>
      </div>
    </section>
  );
}