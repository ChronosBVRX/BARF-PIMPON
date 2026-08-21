# BARF Pimpon — Pendientes de información del cliente

Lista de datos que aún no están disponibles y que el sitio **no publica** hasta confirmarlos.

> Nota: consulta directa al negocio (WhatsApp `443 355 3656`) antes de publicar cualquier dato.

---

## 1. Datos comerciales

- [x] **Precios de 1 kg** — confirmados:
  - Crudo Pollo + arroz $35.00 · Pollo + arroz + vegetales $45.00 · Pollo + res + vegetales $50.00
  - Cocido (las tres fórmulas) $65.00
- [x] **Precios de 500 g** — confirmados (mitad de 1 kg):
  - Crudo Pollo + arroz $17.50 · Pollo + arroz + vegetales $22.50 · Pollo + res + vegetales $25.00
  - Cocido (las tres fórmulas) $32.50
- [x] **Presentaciones** — 500 g y 1 kg (precio independiente por variante, fuente única `src/data/products.ts`, cálculo por centavos para evitar `52.4999`).
- [x] **Productos crudos** — 3 fórmulas confirmadas.
- [x] **Productos cocidos** — 3 fórmulas (mismas recetas) confirmadas.
- [x] **Beneficios nutricionales** — confirmados con respaldo científico: vitaminas (A, D, E, K, Complejo B, ácido fólico), minerales (calcio, fósforo, magnesio, zinc, hierro), aminoácidos, Omega 3/6/9, apoyo a energía/vitalidad, desarrollo muscular, piel/pelaje, nutrición completa y balanceada. Implementados en `src/data/nutritionClaims.ts` y sección `Benefits`.
- [x] **Sellado al vacío + conservación congelada** — confirmado y publicado en `VacuumSealed` y `Handling`.
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

- [x] **Fotografías reales iniciales del producto incorporadas** — 3 archivos optimizados en `public/products/`: `pollo.webp` (familia pollo), `pollo-res.webp` + `pollo-res-2.webp` (familia pollo+res). Catálogo, bloque “Comida real, sin complicar tu rutina” y Galería “El producto” ya usan fotos reales; se eliminó `brand-mark.webp` como imagen de producto. OG `og-image.png` (264 KB) y `og-image.jpg` (148 KB) regenerados con foto real + logo.
- [x] **Fotografías reales de perros consumiendo el alimento** — 5 originales inspeccionados: `Situaciones.png` (collage ~4 perros) + 3 únicos `Perro Comiendo` (1 y 4 duplicados SHA256 `8CE0B8E7…`) en `public/gallery/` (`dog-eating-01/02/03.webp` + `dogs-eating-collage.webp`). Sección editorial “Hecho para disfrutar cada comida” después de Beneficios, con texto ilustrativo neutro (ni “reales” ni “IA”) y sin claims clínicos.
- [ ] **Obtener fotografías específicas adicionales para cada una de las 6 variantes** — actualmente `Pollo + arroz` y `Pollo + arroz + vegetales` comparten `pollo.webp`; `Pollo + res + vegetales` (crudo y cocido) comparte `pollo-res.webp`/`pollo-res-2.webp`. Arquitectura (`image`/`images`/`imageAlt`) permite reemplazo 1-a-1.
- [ ] **Sesión fotográfica profesional adicional del producto y mascotas** — mejora futura.
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

- `src/data/products.ts`: 6 productos × 2 variantes con `price: number` (sin `null`/`Por confirmar`), `currencyFormatter` con 2 decimales, helpers `priceToCents`/`formatCents` para totales sin error de punto flotante.
- `src/components/Catalog.tsx`: foto 40-50% `cover`, miniaturas para pollo+res, selector 500 g/1 kg, qty 1-12 clamped, total por centavos, sin `brand-mark.webp` como producto.
- `src/components/ProductOverview.tsx`: foto real grande `pollo-res.webp`.
- `src/components/Gallery.tsx`: galería editorial “El producto” (3 fotos).
- `src/components/DogsEating.tsx`: sección editorial “Hecho para disfrutar cada comida” (collage 60% + 3 individuales), texto ilustrativo con blindaje legal, `alt` natural.
- `src/data/nutritionClaims.ts`: 6 claims aprobados con `approved: true`.
- `src/components/Benefits.tsx`: sección editorial “Nutrición que va más allá…”.
- `src/components/VacuumSealed.tsx`: sellado al vacío + congelado + crudo/cocido.
- `src/components/Hero.tsx`: H1 “Nutrición real para todos los días.”.
- `public/products/` + `public/gallery/` + `public/social/og-image.*` con foto real.
