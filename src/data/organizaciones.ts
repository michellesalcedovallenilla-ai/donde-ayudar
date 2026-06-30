import type { Organizacion } from './types';

/** Organizaciones aliadas (verifican casos y canalizan ayuda). */
export const organizaciones: Organizacion[] = [
  {
    id: 'fundacion-manos-del-litoral',
    verified: true,
    contact: 'contacto@manosdellitoral.example',
    website: '#',
    title: { es: 'Fundación Manos del Litoral', en: 'Manos del Litoral Foundation' },
    type: { es: 'Fundación / Verificador', en: 'Foundation / Verifier' },
    location: { es: 'Maiquetía, La Guaira', en: 'Maiquetía, La Guaira' },
    description: {
      es: 'Organización comunitaria que acompaña a familias afectadas, verifica casos y coordina apoyo inmediato con voluntarios locales.',
      en: 'Community organization that accompanies affected families, verifies cases and coordinates immediate support with local volunteers.',
    },
    areas: {
      es: ['Verificación de casos', 'Acompañamiento a familias', 'Coordinación de voluntarios'],
      en: ['Case verification', 'Family accompaniment', 'Volunteer coordination'],
    },
  },
  {
    id: 'voluntariado-tech-litoral',
    verified: true,
    contact: 'tech@litoral.example',
    website: '#',
    title: { es: 'Voluntariado Tech Litoral', en: 'Tech Litoral Volunteers' },
    type: { es: 'Red de voluntarios', en: 'Volunteer network' },
    location: { es: 'Catia La Mar, La Guaira', en: 'Catia La Mar, La Guaira' },
    description: {
      es: 'Grupo de profesionales tech que mentorean, verifican perfiles laborales y conectan a personas con habilidades digitales con oportunidades remotas.',
      en: 'A group of tech professionals who mentor, verify work profiles and connect people with digital skills to remote opportunities.',
    },
    areas: {
      es: ['Mentoría técnica', 'Verificación de perfiles laborales', 'Conexión con recruiters'],
      en: ['Technical mentoring', 'Work profile verification', 'Recruiter connections'],
    },
  },
  {
    id: 'centro-acopio-san-juan',
    verified: true,
    contact: 'https://wa.me/000000000',
    website: null,
    title: { es: 'Centro de Acopio San Juan', en: 'San Juan Aid Center' },
    type: { es: 'Centro de acopio', en: 'Aid center' },
    location: { es: 'La Guaira (casco central)', en: 'La Guaira (downtown)' },
    description: {
      es: 'Punto de recolección y distribución de alimentos, ropa e insumos básicos para familias afectadas. También canaliza casos hacia la plataforma.',
      en: 'Collection and distribution point for food, clothing and basic supplies for affected families. It also channels cases to the platform.',
    },
    areas: {
      es: ['Alimentos e insumos', 'Distribución logística', 'Recepción de casos'],
      en: ['Food and supplies', 'Logistics distribution', 'Case intake'],
    },
  },
  {
    id: 'refugio-costa-arriba',
    verified: false,
    contact: 'refugio@costaarriba.example',
    website: null,
    title: { es: 'Refugio Costa Arriba', en: 'Costa Arriba Shelter' },
    type: { es: 'Refugio temporal', en: 'Temporary shelter' },
    location: { es: 'Naiguatá, La Guaira', en: 'Naiguatá, La Guaira' },
    description: {
      es: 'Espacio de alojamiento temporal y apoyo psicosocial para familias desplazadas por la emergencia en la zona de Costa Arriba.',
      en: 'Temporary housing and psychosocial support for families displaced by the emergency in the Costa Arriba area.',
    },
    areas: {
      es: ['Alojamiento temporal', 'Apoyo psicosocial', 'Alimentación'],
      en: ['Temporary housing', 'Psychosocial support', 'Food'],
    },
  },
];
