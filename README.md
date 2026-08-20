# BARF Pimpon — Sitio web

Sitio comercial de **BARF Pimpon**, alimento natural para perros.

- **Next.js 16** (App Router) + React 19 + TypeScript.
- Tipografía: Archivo (autoalojada en `src/assets/fonts`).
- Pedidos y consultas: **WhatsApp** (sin backend, sin base de datos).
- Identidad gráfica extraída del logo oficial en `public/brand/`.
- No se muestran datos comerciales que el cliente no haya confirmado
  (ver `CLIENTE_PENDIENTES.md`).

## Comandos

```bash
npm run dev         # servidor de desarrollo
npm run build       # build de producción
npm run start       # servidor de producción
npm run lint        # ESLint
npm run typecheck   # TypeScript
```

## Configuración central

Toda la información comercial se administra en `src/config/site.ts`.
Los datos de producto/ingredientes/FAQ están en `src/data/`.
Los enlaces de WhatsApp se generan desde `src/lib/whatsapp.ts`.

## Assets

- `public/brand/` — logo oficial y derivados (marca completa, isotipo).
- `public/icons/` — favicons y iconos de aplicación.
- `public/social/` — imagen Open Graph (1200×630).
- Las fotografías originales del cliente se conservan sin modificar como
  referencia; los flyers antiguos de otra marca no se utilizan en el sitio.