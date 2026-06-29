import type { Lang } from '../data/types';
import { useStrings, type UIStrings } from '../data/strings';

export const DEFAULT_LANG: Lang = 'es';
export const LOCALES: Lang[] = ['es', 'en'];

/** Detect the active language from a URL pathname. EN lives under /en/. */
export function langFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'en' ? 'en' : 'es';
}

/** Strip the /en prefix to get the canonical (ES) path. Always starts with '/'. */
export function canonicalPath(pathname: string): string {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** Build a localized href from a canonical path (e.g. '/casos/').
 *  ES keeps the path as-is; EN gets the /en prefix. */
export function href(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'es') return clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

/** Same page, other language — used by the language switcher. */
export function switchLocalePath(pathname: string, target: Lang): string {
  return href(canonicalPath(pathname), target);
}

/** Convenience bundle for components: strings + href helper bound to a lang. */
export function useI18n(lang: Lang): { t: UIStrings; lang: Lang; href: (path: string) => string } {
  return {
    t: useStrings(lang),
    lang,
    href: (path: string) => href(path, lang),
  };
}
