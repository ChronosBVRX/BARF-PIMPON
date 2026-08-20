# BARF Pimpon — Pendientes de información del cliente

Lista de datos que aún no están disponibles y que el sitio **no publica** hasta confirmarlos.

> Nota: consulta directa al negocio (WhatsApp `443 355 3656`) antes de publicar cualquier dato.

---

## 1. Datos comerciales

- [x] **Precios de 1 kg** — confirmados:
  - Crudo Pollo + arroz $35 · Pollo + arroz + vegetales $45 · Pollo + res + vegetales $50
  - Cocido (las tres fórmulas) $65
- [x] **Presentaciones** — 500 g y 1 kg (estructura permite precio independiente por variante).
- [x] **Productos crudos** — 3 fórmulas confirmadas.
- [x] **Productos cocidos** — 3 fórmulas (mismas recetas) confirmadas a $65/kg.
- [ ] **Precio de 500 g para cada fórmula** — `price: null` hoy; se muestra "Precio por confirmar" y se confirma por WhatsApp. No asumir mitad del precio de 1 kg.
- [ ] **Ingredientes exactos** y % de cada uno (la lista actual está vacía: `src/data/ingredients.ts`).
- [ ] **Tabla nutricional** (proteína cruda, grasa, fibra, humedad; referencia NOM-044 si aplica).
- [ ] **Porciones diarias** sugeridas por peso y etapa de vida.
- [ ] **Zonas de entrega / cobertura** y condiciones.
- [ ] **Envíos foráneos**: costo y tiempo.
- [ ] **Puntos de venta** o aliados.
- [ ] **Horarios de atención** para pedidos.
- [ ] **Devoluciones y soporte**.
- [ ] **Vida útil y almacenamiento** recomendado.
- [ ] **Testimonios reales** con permiso explícito.

## 2. Claims y certificaciones

- [ ] **Aval veterinario / certificación**.
- [ ] **"100% natural / sin conservadores / sin aditivos / sin cereales"**: confirmar con evidencia antes de publicar.
- [ ] **Registros sanitarios** (SENASICA) si el cliente decide mostrarlos.
- [ ] **Núm. de lote / caducidad** visible en empaque.

## 3. Identidad y contenido verificable

- [ ] **Fotos profesionales del producto** (bolsa, porciones, empaque). Hoy se usa la ilustración oficial del logo en cada card.
- [ ] **Archivo vectorial del logo** si existe.
- [ ] **Redes sociales reales** y enlaces confirmados.
- [ ] **Correo de contacto institucional**.
- [ ] **Razón social / RFC** para aviso de privacidad.
- [ ] **Nombre exacto del negocio** para metadatos.
- [ ] **Lema/claims de marca** oficiales.

## 4. Despliegue y dominio

- [x] **Repo GitHub** `ChronosBVRX/BARF-PIMPON` vinculado; `baseUrl` dinámico (`NEXT_PUBLIC_SITE_URL` / `VERCEL_URL` fallback).
- [ ] **Confirmar dominio final** (hoy `https://barfpimpon.mx` como default en `src/app/layout.ts` + `sitemap.ts`/`robots.ts`).
- [ ] **Google Search Console / Analytics** si se desea medición.

---

## Cómo se reflejó en el código

- `src/data/products.ts`: `ProductVariant`/`Product` con `price: number | null` por presentación; 6 productos confirmados.
- `src/components/Catalog.tsx`: catálogo con dos grupos (BARF crudo / Opciones cocidas), selector 500 g / 1 kg, control de cantidad y CTA `buildOrderMessage` por card.
- `src/lib/whatsapp.ts`: `buildOrderMessage` genera el mensaje con Producto/Preparación/Presentación/Cantidad.
- `public/`: sin fotos reales aún; se reutiliza `brand-mark.webp` como placeholder por card.
