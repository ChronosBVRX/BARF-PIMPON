# BARF Pimpon — Pendientes de información del cliente

Lista de datos que aún no están disponibles y que el sitio **no publica** hasta confirmarlos.
Mantenido por el equipo de desarrollo; se actualiza cuando el cliente responde cada punto.

> Nota: consulta directa al negocio (WhatsApp `443 355 3656`) antes de publicar cualquier dato.

---

## 1. Datos comerciales (bloquean secciones visibles)

- [ ] **Precios** por producto / presentación y por peso.
- [ ] **Presentaciones reales** (gramos por envase/porción) — hoy el pedido rápido envía "Por confirmar con BARF Pimpon".
- [ ] **Ingredientes exactos** y % de cada uno (la lista actual está vacía: `src/data/ingredients.ts`).
- [ ] **Tabla nutricional** (proteína cruda, grasa, fibra, humedad; referencia NOM-044 para alimento de mascotas si aplica).
- [ ] **Porciones diarias** sugeridas por peso y etapa de vida de la mascota.
- [ ] **Zonas de entrega / cobertura** y condiciones (¿hasta dónde llega? ¿entrega a domicilio o puntos de recogida?).
- [ ] **Envíos foráneos**: ¿sí/no?, costo y tiempo estimado.
- [ ] **Puntos de venta** o aliados donde se comercializa.
- [ ] **Horarios de atención** para pedidos y consultas.
- [ ] **Devoluciones y soporte** al cliente.
- [ ] **Vida útil y almacenamiento** recomendado.
- [ ] **Testimonios reales** (con permiso explícito y, de preferencia, foto del cliente).

## 2. Claims y certificaciones (el sitio no afirma nada de esto todavía)

- [ ] **Aval veterinario / certificación**: determinado por qué especialista u organismo, si existe.
- [ ] **"100% natural / sin conservadores / sin aditivos / sin cereales"**: confirmar cada afirmación con evidencia (etiqueta o análisis) antes de publicarla. Actualmente están descartadas.
- [ ] **Registros sanitarios** o requisitos que apliquen a alimento para mascotas en México (SENASICA) si el cliente decide mostrarlos.
- [ ] **Núm. de lote / caducidad** visible en empaque (para sección de manejo, si el cliente la quiere).

## 3. Identidad y contenido verificable

- [ ] **Fotos profesionales del producto** (bolsa, porciones, empaque). Hoy el sitio usa solo la ilustración oficial del logo.
- [ ] **Archivo vectorial / color de marca** del logo si existe (trabajamos a partir del PNG proporcionado).
- [ ] **Redes sociales reales** y enlaces confirmados (hoy no se publican enlaces no verificados).
- [ ] **Correo de contacto institucional**, si lo desea (hoy solo WhatsApp y teléfono).
- [ ] **Razón social / RFC** para el aviso de privacidad y créditos legales.
- [ ] **Nombre exacto del negocio** para mostrar en el pie y en meetadata: ¿"BARF Pimpon", "Barf Pimpon's", otro?
- [ ] **Lema/claims de marca** oficiales que autoriza publicar (inicio: "Nutrición real, vida feliz").

## 4. Despliegue y dominio

- [ ] **Confirmar dominio final** (hoy placeholder: `https://barfpimpon.mx` en `src/config/site.ts`).
- [ ] **Dónde se aloja**: Vercel, Netlify, VPS u otro; apuntar DNS, emitir HTTPS.
- [ ] **Correo/cuenta del proyecto** y acceso al equipo que trabajará el sitio.
- [ ] **Google Search Console / Analytics**, si el cliente quiere medir visitas.

---

## Cómo se reflejó esto en el código

- `src/data/products.ts`, `src/data/ingredients.ts`, `src/data/faq.ts`: campos marcados `verified: false` y textos mínimos hasta tener datos reales.
- `src/config/site.ts`: `siteUrl` es placeholder; teléfono/WhatsApp ya confirmados (`524433553656`).
- `public/`: se reutiliza únicamente la ilustración oficial (`Logo.png`); los flyers de PAC'S BULL no se incluyen.

Cuando se confirme un punto, actualizar el archivo de datos correspondiente, quitar el flag `verified:false`, recompilar (`npm.cmd run build`) y re-verificar.