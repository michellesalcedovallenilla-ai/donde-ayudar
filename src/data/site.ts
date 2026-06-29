import type { UIStrings } from './strings';

/** Canonical (ES) paths for the main sections. The /en variants are derived
 *  by the i18n href() helper, so segments stay identical across locales. */
export const paths = {
  home: '/',
  casos: '/casos/',
  empleos: '/empleos/',
  organizaciones: '/organizaciones/',
  como: '/como-funciona/',
  publicar: '/publicar-oportunidad/',
  privacidad: '/privacidad/',
} as const;

/** Detail-page path builders. */
export const casoPath = (id: string) => `${paths.casos}${id}/`;
export const empleoPath = (id: string) => `${paths.empleos}${id}/`;

export type NavItem = { path: string; label: keyof UIStrings };

/** Primary navigation (header + footer "Explorar"). */
export const mainNav: NavItem[] = [
  { path: paths.casos, label: 'navCasos' },
  { path: paths.empleos, label: 'navEmpleos' },
  { path: paths.organizaciones, label: 'navOrgs' },
  { path: paths.como, label: 'navComo' },
];

/** Contact inboxes used by mailto links across the site.
 *  TODO: replace with the real addresses before launch. */
export const contactInbox = 'oportunidades@dondeayudar.example';
export const generalInbox = 'hola@dondeayudar.example';
