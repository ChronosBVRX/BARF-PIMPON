"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("nav-open");
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  return (
    <>
      <header
        className="site-header"
        data-scrolled={scrolled}
        data-testid="site-header"
      >
        <div className="container site-header__inner">
          <Link
            href="#inicio"
            className="site-header__logo"
            aria-label={`${site.brandName} — inicio`}
          >
            <Image
              src="/brand/logo-header.webp"
              alt=""
              width={560}
              height={375}
              priority
              sizes="280px"
              style={{ height: 46, width: "auto" }}
            />
          </Link>

          <nav className="site-nav" aria-label="Navegación principal">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="site-header__cta">
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

          <div className="site-header__mobile">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="site-header__wa"
              aria-label="Abrir WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <button
              type="button"
              className="site-header__hamburger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " mobile-menu--open" : ""}`}
        aria-hidden={!open}
      >
        <div
          className="mobile-menu__backdrop"
          onClick={() => setOpen(false)}
        />
        <div
          className="mobile-menu__panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <div className="mobile-menu__head">
            <Image
              src="/brand/logo-header.webp"
              alt=""
              width={560}
              height={375}
              style={{ height: 34, width: "auto" }}
            />
            <button
              ref={closeRef}
              type="button"
              className="mobile-menu__close"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>

          <nav className="mobile-menu__nav" aria-label="Menú móvil">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="mobile-menu__foot">
            <Link
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              <WhatsAppIcon />
              Pedir por WhatsApp
            </Link>
            <span className="mobile-menu__phone">
              {site.whatsappDisplay}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}