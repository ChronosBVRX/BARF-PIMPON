import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { site, waLink } from "@/config/site";
import { DEFAULT_WA_MESSAGE } from "@/lib/whatsapp";

const NAV = [
  { href: "#producto", label: "Producto" },
  { href: "#ingredientes", label: "Ingredientes" },
  { href: "#presentaciones", label: "Presentaciones" },
  { href: "#conservacion", label: "Conservación" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="site-footer" data-testid="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Image
              src="/brand/logo-header.webp"
              alt={site.brandName}
              width={560}
              height={375}
              sizes="400px"
            />
            <p className="site-footer__desc">
              {site.descriptor}. {site.tagline}.
            </p>
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <Phone size={18} aria-hidden="true" />
              {site.whatsappDisplay}
            </a>
          </div>

          <nav aria-label="Enlaces del pie">
            <h3>Navegación</h3>
            <ul className="site-footer__nav">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3>Contacto</h3>
            <ul className="site-footer__nav">
              <li>
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: {site.whatsappDisplay}
                </a>
              </li>
              {site.openingHours && <li>{site.openingHours}</li>}
              <li>
                <Link href="/aviso-de-privacidad">
                  Aviso de privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            © {new Date().getFullYear()} {site.brandName}. Todos los derechos
            reservados.
          </span>
          <span>Alimento natural para tu mascota.</span>
        </div>
      </div>
    </footer>
  );
}