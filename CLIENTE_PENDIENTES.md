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

- [ ] **Fotos profesionales del producto** (bolsa, porciones, empaque). Hoy se usa la ilustración oficial del logo como placeholder en catálogo y beneficios.
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
- `public/`: sin fotos reales aún; se reutiliza `brand-mark.webp` como placeholder.
