/** Shared types for the bilingual content layer. */

export type Lang = 'es' | 'en';

/** A value that exists in both languages. */
export type Localized<T> = { es: T; en: T };

/** Pick the value for a language; pass-through if not a Localized object. */
export function pick<T>(value: Localized<T> | T, lang: Lang): T {
  if (value && typeof value === 'object' && ('es' in (value as object) || 'en' in (value as object))) {
    return (value as Localized<T>)[lang];
  }
  return value as T;
}

export type CaseStatus = 'verified' | 'urgent' | 'pending';
export type WorkMode = 'remoto' | 'presencial' | 'hibrido';

/** A rich-text block used in case / job detail bodies.
 *  Bodies are localized at the top level (`Localized<Block[]>`), so each
 *  block already holds single-language text. */
export type Block =
  | { t: 'p'; text: string }
  | { t: 'h'; text: string }
  | { t: 'quote'; text: string }
  | { t: 'ul'; items: string[] };

export type DonationMethod = {
  type: 'zelle' | 'paypal' | 'bank_of_america' | 'pago_movil';
  label: string;
  holder: string;
  value?: string;
  bank?: string;
  phone?: string;
  idNumber?: string;
  note: Localized<string>;
};

export type Caso = {
  id: string;
  status: CaseStatus;
  date: string;
  supportLink: string | null;
  title: Localized<string>;
  location: Localized<string>;
  verifiedBy: Localized<string>;
  dateLabel: Localized<string>;
  summary: Localized<string>;
  needs: Localized<string[]>;
  skills: Localized<string[]>;
  remoteWorkAvailability: Localized<string>;
  contactMethod: Localized<string>;
  donationMethods?: DonationMethod[];
  body: Localized<Block[]>;
};

export type Empleo = {
  id: string;
  company: string;
  mode: WorkMode;
  date: string;
  applyUrl: string;
  verified: boolean;
  title: Localized<string>;
  place: Localized<string>;
  category: Localized<string>;
  dateLabel: Localized<string>;
  source: Localized<string>;
  description: Localized<string>;
  requirements: Localized<string[]>;
  tags: Localized<string[]>;
  body: Localized<Block[]>;
};

export type Organizacion = {
  id: string;
  verified: boolean;
  contact: string;
  website: string | null;
  title: Localized<string>;
  type: Localized<string>;
  location: Localized<string>;
  description: Localized<string>;
  areas: Localized<string[]>;
};
