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
          <h1 className="hero__title">
            Nutrición real, preparada para su día a día.
          </h1>
          <p className="hero__text">
            Alimento BARF preparado en porciones prácticas para hacer más
            sencilla la alimentación de tu perro.
          </p>
          <div className="hero__actions">
            <Link
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <WhatsAppIcon />
              Pedir por WhatsApp
            </Link>
            <a href="#producto" className="btn btn--outline">
              Conocer el producto
            </a>
          </div>
          <p className="hero__micro">Atención directa por WhatsApp.</p>
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
            Porciones prácticas
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