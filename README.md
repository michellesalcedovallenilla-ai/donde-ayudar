# Donde Ayudar

Plataforma puente (sitio **100% estático** en Astro) que conecta a familias verificadas
con organizaciones aliadas, donantes, recruiters y **oportunidades de empleo remoto**.

> **Conecta ayuda. Abre oportunidades. Reconstruimos juntos.**
>
> La ayuda inmediata resuelve el presente, pero el empleo remoto puede reconstruir estabilidad.

## Principios

- **Sin pagos** en la plataforma.
- **Sin datos sensibles**: nada de cédulas, pasaportes ni documentos privados.
- **Sin login** ni base de datos.
- **Sin scraping**: las oportunidades se curan manualmente.
- Todo es estático, seguro y simple — listo para GitHub Pages, Vercel o Netlify.

---

## Stack

- [Astro](https://astro.build) (sitio estático)
- Content Collections + Markdown/MDX
- CSS propio (sin frameworks), responsive

---

## Requisitos

- [Node.js](https://nodejs.org) **18.17+** o **20+**
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
├── astro.config.mjs
├── src
│   ├── content.config.ts        # esquemas de las content collections
│   ├── content
│   │   ├── casos/               # 1 archivo .md por familia/persona
│   │   ├── empleos/             # 1 archivo .md por oportunidad remota
│   │   └── organizaciones/      # 1 archivo .md por organización aliada
│   ├── components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── CaseCard.astro
│   │   ├── JobCard.astro
│   │   ├── OrganizationCard.astro
│   │   ├── Badge.astro
│   │   └── CTASection.astro
│   ├── layouts
│   │   └── BaseLayout.astro
│   ├── pages
│   │   ├── index.astro              # Home
│   │   ├── como-funciona.astro
│   │   ├── publicar-oportunidad.astro
│   │   ├── casos
│   │   │   ├── index.astro          # listado
│   │   │   └── [slug].astro         # detalle (getStaticPaths)
│   │   ├── empleos
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── organizaciones
│   │       └── index.astro
│   └── styles
│       └── global.css
└── public
    └── favicon.svg
```

---

## Marca (Donde Ayudar)

La identidad visual sigue el brandboard de **Donde Ayudar**:

- **Logo:** `public/logo.png` (se usa en header y footer; en el footer se muestra en
  versión negativa/blanca mediante CSS). Reemplázalo por el archivo oficial cuando lo tengas.
- **Tipografía:** Poppins (cargada desde Google Fonts en `BaseLayout.astro`).
- **Paleta** (variables en `src/styles/global.css`):
  - Azul Confianza `#1E3A8A` — títulos, navegación, botones primarios, links.
  - Amarillo Esperanza `#FCD116` — CTAs secundarios, highlights, badge "Remoto".
  - Rojo Solidaridad `#CE1126` — urgencia/alertas, con moderación.
  - Gris fondo `#F5F7FA`, gris texto `#1F2937`, blanco `#FFFFFF`.
- **UI:** cards blancas, radios 16–24px, sombras suaves, botones tipo pill.

## Editar contenido

Todo el contenido vive en `src/content/`. Para agregar algo, **crea un nuevo archivo `.md`**
en la carpeta correspondiente. El nombre del archivo (sin `.md`) se convierte en la URL
(el `slug`). Por ejemplo, `src/content/casos/familia-rojas-maiquetia.md` → `/casos/familia-rojas-maiquetia/`.

### Agregar un caso

Crea `src/content/casos/mi-caso.md`:

```markdown
---
title: "Nombre del caso"
location: "Ubicación general (sin dirección exacta)"
status: "verified"        # verified | pending | urgent
verifiedBy: "Organización que verifica"
summary: "Resumen breve y público."
needs:
  - "Necesidad principal"
  - "Otra necesidad"
skills:
  - "Habilidad 1"
  - "Habilidad 2"
remoteWorkAvailability: "Disponibilidad para trabajo remoto"
contactMethod: "Canal seguro (a través de una organización)"
supportLink: "https://..."   # opcional
dateUpdated: 2026-06-29
---

Texto libre en Markdown con el contexto del caso.
```

> ⚠️ **Seguridad:** publica solo información pública. Nunca incluyas cédulas, pasaportes,
> direcciones exactas ni documentos personales.

### Agregar un empleo

Crea `src/content/empleos/mi-empleo.md`:

```markdown
---
title: "Título del puesto"
company: "Empresa"
location: "Remoto"
remoteType: "100% remoto"   # 100% remoto | Híbrido | Remoto LatAm | Remoto global
category: "Categoría"
description: "Descripción del rol."
requirements:
  - "Requisito 1"
applyUrl: "https://..."      # link externo para aplicar
source: "De dónde salió la oferta (curada manualmente)"
datePosted: 2026-06-29
tags:
  - "etiqueta"
---

Detalles adicionales en Markdown.
```

### Agregar una organización

Crea `src/content/organizaciones/mi-org.md`:

```markdown
---
title: "Nombre de la organización"
type: "Fundación"            # texto libre
location: "Ubicación"
description: "Qué hace."
contact: "correo@org.org"    # email o URL (wa.me, etc.)
website: "https://..."       # opcional
verified: true               # true | false
areasOfSupport:
  - "Área 1"
---

Texto libre.
```

Los campos están validados por Zod en `src/content.config.ts`. Si un campo obligatorio falta
o tiene un tipo incorrecto, `npm run dev` / `npm run build` te avisará con un error claro.

---

## Configurar correos de contacto

La página `/publicar-oportunidad` usa formularios `mailto:` (sin backend). Cambia las
direcciones en `src/pages/publicar-oportunidad.astro`:

```ts
const inbox = 'oportunidades@dondeayudar.example';
const inboxOrg = 'aliados@dondeayudar.example';
```

Y en `src/components/Footer.astro` el enlace de contacto.

---

## Deploy

El sitio es estático: el build produce HTML/CSS/JS en `/dist`.

### Vercel
1. Importa el repo en [vercel.com](https://vercel.com).
2. Framework: **Astro** (autodetectado). Sin configuración extra.

### Netlify
1. Conecta el repo en [netlify.com](https://netlify.com).
2. Build command: `npm run build` · Publish directory: `dist`.

### GitHub Pages
1. En `astro.config.mjs`, ajusta `site` (tu dominio) y, si publicas en un subdirectorio
   (`usuario.github.io/repo`), descomenta y ajusta `base: '/repo'`.
2. Usa la acción oficial [`withastro/action`](https://github.com/withastro/action) o
   despliega el contenido de `/dist`.

---

## Licencia / uso

Proyecto comunitario sin fines de lucro. Los datos incluidos son **ejemplos ficticios**
y seguros, pensados como plantilla. Reemplázalos por casos reales verificados por
organizaciones aliadas antes de publicar.
