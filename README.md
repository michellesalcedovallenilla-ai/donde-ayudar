# Donde Ayudar

Plataforma puente (**sitio 100% estático en Astro**) que conecta a familias verificadas
con organizaciones aliadas, donantes, recruiters y **oportunidades de empleo remoto**.

> **Conecta ayuda. Abre oportunidades. Reconstruimos juntos.**
>
> La ayuda inmediata resuelve el presente, pero el empleo remoto puede reconstruir estabilidad.

## Principios

- **Sin pagos** en la plataforma.
- **Sin datos sensibles**: nada de cédulas, pasaportes ni documentos privados.
- **Sin login** ni base de datos.
- **Sin scraping**: las oportunidades se curan manualmente.
- Todo es estático, seguro y simple — listo para Netlify, Vercel o GitHub Pages.

---

## Stack

- [Astro](https://astro.build) v5 — sitio estático (sin frameworks de UI, sin React).
- **i18n nativo de Astro**: español en la raíz (`/`), inglés bajo `/en/`.
- Contenido tipado en TypeScript (`src/data/`), renderizado a HTML en build.
- [astro-icon](https://github.com/natemoo-re/astro-icon) + Lucide — íconos SVG inline (sin CDN).
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — `sitemap-index.xml`.
- CSS propio con design tokens (`src/styles/global.css`) + estilos `scoped` por componente.

---

## Requisitos

- [Node.js](https://nodejs.org) **20+**
- npm (incluido con Node)

## Correr en local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Build de producción

```bash
npm run build      # genera el sitio estático en /dist
npm run preview    # sirve /dist localmente para revisar
```

---

## Estructura del proyecto

```
.
├── astro.config.mjs          # config + i18n (es/en) + integraciones
├── src
│   ├── data/                 # ÚNICA fuente de contenido (tipado, bilingüe)
│   │   ├── types.ts          # tipos + helper pick(value, lang)
│   │   ├── strings.ts        # textos de UI (ES/EN), tipados
│   │   ├── casos.ts          # casos (familias / personas)
│   │   ├── empleos.ts        # ofertas de empleo
│   │   ├── organizaciones.ts # organizaciones aliadas
│   │   └── site.ts           # rutas canónicas, nav, correos de contacto
│   ├── i18n/utils.ts         # langFromUrl, href(path, lang), switchLocalePath
│   ├── layouts/BaseLayout.astro
│   ├── components/           # Header, Footer, cards, Badge, Icon, BodyBlocks
│   │   └── views/            # el cuerpo de cada página (Home, CasosList, …)
│   ├── pages/                # rutas ES (/) — archivos finos que envuelven views
│   │   └── en/               # rutas EN (/en/) — espejo de las anteriores
│   └── styles/global.css     # design tokens + clases reutilizables
└── public/                   # assets estáticos (logo, favicon, _headers, robots.txt)
```

Las rutas en `src/pages/` son envoltorios delgados: importan `BaseLayout` + una *view*
de `src/components/views/` y le pasan `lang`. Por eso ES y EN comparten exactamente el
mismo markup y solo cambian de idioma.

---

## Editar contenido

Todo el contenido vive en **`src/data/`** como TypeScript tipado. Los campos bilingües
usan `{ es: '…', en: '…' }`; el helper `pick(value, lang)` elige el idioma correcto.

### Agregar un caso

Añade un objeto al array `casos` en `src/data/casos.ts`. El `id` se convierte en la URL
(`/casos/<id>/` y `/en/casos/<id>/`):

```ts
{
  id: 'mi-caso',
  status: 'verified',            // verified | urgent | pending
  date: '2026-06-29',
  supportLink: null,             // URL externa o null
  title: { es: '…', en: '…' },
  location: { es: '…', en: '…' },
  verifiedBy: { es: '…', en: '…' },
  dateLabel: { es: '…', en: '…' },
  summary: { es: '…', en: '…' },
  needs: { es: ['…'], en: ['…'] },
  skills: { es: ['…'], en: ['…'] },
  remoteWorkAvailability: { es: '…', en: '…' },
  contactMethod: { es: '…', en: '…' },
  // donationMethods es opcional (zelle | paypal | bank_of_america | pago_movil)
  body: { es: [{ t: 'p', text: '…' }], en: [{ t: 'p', text: '…' }] },
}
```

> ⚠️ **Seguridad:** publica solo información pública. Nunca incluyas cédulas, pasaportes,
> direcciones exactas ni documentos personales. Los datos incluidos son **ejemplos
> ficticios** — reemplázalos por casos reales verificados antes de publicar.

Empleos y organizaciones funcionan igual (`src/data/empleos.ts`, `organizaciones.ts`).
TypeScript valida la forma de cada objeto: si falta un campo, `npm run build` avisa.

### Textos de la interfaz

Viven en `src/data/strings.ts` (objetos `es` y `en`). El bloque `en` usa
`satisfies Record<keyof typeof es, string>`, así que **ambos idiomas deben tener las
mismas claves** o el build falla.

---

## Formularios

`/publicar-oportunidad` tiene el formulario de oferta de empleo y el de organización.
Hoy **solo muestran una confirmación visual y no envían nada** (ver el `TODO` en
`src/components/views/Publicar.astro`). Antes de lanzar, conéctalos a un canal real:
`mailto:`, [Netlify Forms](https://docs.netlify.com/forms/setup/), Formspree o un
endpoint serverless. Los correos de contacto están centralizados en `src/data/site.ts`.

---

## Deploy

El sitio es estático: el build produce HTML/CSS/JS en `/dist`. Cambia `site` en
`astro.config.mjs` por tu dominio final (afecta `canonical`, `hreflang` y el sitemap).

Las cabeceras de seguridad (CSP, HSTS, etc.) están en **`public/_headers`** (Netlify) y
duplicadas en **`vercel.json`** (Vercel). Si cambias una, cambia la otra.

### Netlify
Build command `npm run build` · Publish directory `dist`. Headers desde `public/_headers`.

### Vercel
Framework **Astro** (autodetectado). Headers desde `vercel.json`.

### GitHub Pages
Usa la acción oficial [`withastro/action`](https://github.com/withastro/action) o
despliega el contenido de `/dist`. (En Pages no aplican `_headers`/`vercel.json`.)

---

## Pendientes conocidos

- **Formularios** sin backend (ver sección Formularios).
- Correos de contacto son *placeholders* (`@dondeayudar.example`) en `src/data/site.ts`.
- Astro 5.x tiene avisos de seguridad cuyo *fix* está en la rama 7.x (cambio mayor);
  evaluar la actualización por separado.

---

## Licencia / uso

Proyecto comunitario sin fines de lucro. Los datos incluidos son **ejemplos ficticios**
y seguros, pensados como plantilla. Reemplázalos por casos reales verificados por
organizaciones aliadas antes de publicar.
