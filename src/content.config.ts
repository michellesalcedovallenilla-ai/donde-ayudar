import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección: casos
 * Cada caso representa una familia o persona afectada.
 * SOLO información pública y segura. Nada de cédulas, documentos ni datos sensibles.
 */
const casos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/casos' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    status: z.enum(['verified', 'pending', 'urgent']),
    verifiedBy: z.string(),
    summary: z.string(),
    needs: z.array(z.string()),
    skills: z.array(z.string()).default([]),
    remoteWorkAvailability: z.string(),
    // Método seguro de contacto/apoyo (canal de una organización aliada, formulario, etc.)
    contactMethod: z.string(),
    supportLink: z.string().url().optional(),
    dateUpdated: z.coerce.date(),
  }),
});

/**
 * Colección: empleos
 * Cada empleo es una oportunidad remota curada manualmente.
 */
const empleos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/empleos' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string().default('Remoto'),
    remoteType: z.enum(['100% remoto', 'Híbrido', 'Remoto LatAm', 'Remoto global']),
    category: z.string(),
    description: z.string(),
    requirements: z.array(z.string()).default([]),
    applyUrl: z.string().url(),
    source: z.string(),
    datePosted: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

/**
 * Colección: organizaciones
 * Fundaciones, centros de acopio, refugios, equipos de rescate y aliados.
 */
const organizaciones = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/organizaciones' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    location: z.string(),
    description: z.string(),
    contact: z.string(),
    website: z.string().url().optional(),
    verified: z.boolean().default(false),
    areasOfSupport: z.array(z.string()).default([]),
  }),
});

export const collections = { casos, empleos, organizaciones };
