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
- [x] **Beneficios nutricionales** — confirmados con respaldo científico del propietario: vitaminas (A, D, E, K, Complejo B, ácido fólico), minerales (calcio, fósforo, magnesio, zinc, hierro), aminoácidos, Omega 3/6/9, apoyo a energía/vitalidad, desarrollo muscular, piel/pelaje, nutrición completa y balanceada. Implementados en `src/data/nutritionClaims.ts` y sección `Benefits`.
- [x] **Sellado al vacío + conservación congelada** — confirmado y publicado en sección `VacuumSealed` y `Handling`.
- [ ] **Precio de 500 g para cada fórmula** — `price: null` hoy; se muestra "Precio por confirmar" y se confirma por WhatsApp. No asumir mitad del precio de 1 kg.
- [ ] **Ingredientes exactos** con proporciones / % por fórmula.
- [ ] **Tabla nutricional cuantitativa** (proteína cruda, grasa, fibra, humedad, kcal; referencia NOM-044 si aplica).
- [ ] **Porciones diarias** sugeridas por peso y etapa de vida.
- [ ] **Zonas de entrega / cobertura** y condiciones.
- [ ] **Envíos foráneos**: costo y tiempo.
- [ ] **Puntos de venta** o aliados.
- [ ] **Horarios de atención** para pedidos.
- [ ] **Devoluciones y soporte**.
- [ ] **Vida útil y almacenamiento** detallado (días congelado, refrigerado, etc.).
- [ ] **Lote / caducidad** visible en empaque.
- [ ] **Testimonios reales** con permiso explícito.

## 2. Claims y certificaciones

- [x] **Beneficios nutricionales** — ya no figuran como pendientes genéricos; se publican con lenguaje profesional (sin “energía ilimitada” ni “máximo rendimiento”).
- [ ] **Aval veterinario directo (MVZ)** — distinguir de respaldo científico general. No atribuir autoría veterinaria sin confirmación de MVZ específico.
- [ ] **Documentación pública asociada a cada claim** — análisis de laboratorio, ficha técnica, responsable de formulación, referencias. Arquitectura preparada en `nutritionClaims.ts` (`evidenceNote`, futuro campo `evidenceUrl`).
- [ ] **Registros sanitarios** (SENASICA) si el cliente decide mostrarlos.

## 3. Identidad y contenido verificable

- [x] **Fotografías reales iniciales del producto incorporadas** — 3 archivos optimizados en `public/products/`: `pollo.webp` (familia pollo), `pollo-res.webp` + `pollo-res-2.webp` (familia pollo+res). Catálogo, bloque “Comida real, sin complicar tu rutina” y nueva Galería ya usan fotos reales; se eliminó `brand-mark.webp` como imagen de producto. OG `og-image.png` (264 KB) y `og-image.jpg` (148 KB) regenerados con foto real + logo.
- [ ] **Obtener fotografías específicas adicionales para cada una de las 6 variantes** — actualmente `Pollo + arroz` y `Pollo + arroz + vegetales` comparten `pollo.webp` (fotografía real pero no distingue arroz/vegetales); `Pollo + res + vegetales` (crudo y cocido) comparte `pollo-res.webp`/`pollo-res-2.webp`. La arquitectura (`image`/`images`/`imageAlt` en `products.ts`) permite reemplazo 1-a-1 sin refactorizar componentes.
- [ ] **Archivo vectorial del logo** si existe.
- [ ] **Redes sociales reales** y enlaces confirmados.
- [ ] **Correo de contacto institucional**.
- [ ] **Razón social / RFC** para aviso de privacidad.
- [ ] **Nombre exacto del negocio** para metadatos.
- [ ] **Lema/claims de marca** oficiales adicionales.

## 4. Despliegue y dominio

- [x] **Repo GitHub** `ChronosBVRX/BARF-PIMPON` vinculado; `baseUrl` dinámico (`NEXT_PUBLIC_SITE_URL` / `VERCEL_URL` fallback).
- [ ] **Confirmar dominio final** (hoy `https://barfpimpon.mx` como default en `src/app/layout.ts` + `sitemap.ts`/`robots.ts`).
- [ ] **Google Search Console / Analytics** si se desea medición.

---

## Cómo se reflejó en el código

- `src/data/products.ts`: 6 productos con `ProductVariant` y `price: number | null` por presentación.
- `src/components/Catalog.tsx`: catálogo en dos grupos, selector 500 g / 1 kg, qty y CTA `buildOrderMessage`.
- `src/data/nutritionClaims.ts`: 6 claims aprobados (`energy`, `muscle`, `skin-coat`, `vitamins`, `minerals`, `complete`) con `approved: true`.
- `src/components/Benefits.tsx`: sección editorial “Nutrición que va más allá de los ingredientes” (antes de la mitad de la página).
- `src/components/VacuumSealed.tsx`: sellado al vacío + congelado + crudo/cocido.
- `src/components/Hero.tsx`: H1 “Nutrición real para todos los días.”, texto con vitaminas/minerales/Omega y CTAs “Ver fórmulas y precios” + WhatsApp.
- `public/products/`: `pollo.webp`, `pollo-res.webp`, `pollo-res-2.webp` (derivados web 900×675, ~103-144 KB) generados desde originales intactos en raíz; `public/social/og-image.png` + `.jpg` con foto real.
- `src/data/products.ts`: `image`/`images`/`imageAlt` por producto; familias mapeadas según inspección visual y etiquetas (sin falsificar).
- `src/components/Catalog.tsx`: foto ocupa 40-50% superior con `object-fit: cover`, miniaturas para segunda vista de pollo+res, sin `brand-mark.webp` como producto.
- `src/components/ProductOverview.tsx`: foto real grande `pollo-res.webp`.
- `src/components/Gallery.tsx`: galería editorial para 3 fotos (sin repetir artificialmente).
