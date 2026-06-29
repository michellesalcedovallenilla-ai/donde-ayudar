// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Sitio 100% estático. Cambia `site` por tu dominio final.
  // Para GitHub Pages en un subdirectorio, descomenta `base`.
  site: 'https://tu-dominio.example',
  // base: '/puente-la-guaira',
  build: {
    format: 'directory',
  },
});
