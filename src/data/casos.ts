import type { Caso } from './types';

/** Casos (familias / personas verificadas).
 *  Datos de ejemplo, seguros y ficticios. Reemplázalos por casos reales
 *  verificados por organizaciones aliadas antes de publicar. */
export const casos: Caso[] = [
  {
    id: 'familia-rojas-maiquetia',
    status: 'verified',
    date: '2026-06-20',
    supportLink: '#',
    title: { es: 'Familia Rojas — Maiquetía', en: 'Rojas Family — Maiquetía' },
    location: { es: 'Maiquetía, La Guaira', en: 'Maiquetía, La Guaira' },
    verifiedBy: { es: 'Fundación Manos del Litoral', en: 'Manos del Litoral Foundation' },
    dateLabel: { es: '20 de junio de 2026', en: 'June 20, 2026' },
    summary: {
      es: 'Madre y dos hijos perdieron su vivienda por las lluvias. Buscan estabilidad mientras reconstruyen; la madre tiene experiencia en atención al cliente y redes sociales.',
      en: 'A mother and two children lost their home to the floods. They seek stability while rebuilding; the mother has experience in customer service and social media.',
    },
    needs: {
      es: ['Empleo remoto estable', 'Mercados de alimentos (1 mes)', 'Útiles escolares'],
      en: ['Stable remote job', 'Food supplies (1 month)', 'School supplies'],
    },
    skills: {
      es: ['Atención al cliente', 'Community management', 'Excel intermedio'],
      en: ['Customer service', 'Community management', 'Intermediate Excel'],
    },
    remoteWorkAvailability: {
      es: 'Tiempo completo, horario flexible, equipo propio disponible',
      en: 'Full-time, flexible hours, own equipment available',
    },
    contactMethod: {
      es: 'A través de Fundación Manos del Litoral (canal verificado)',
      en: 'Through Manos del Litoral Foundation (verified channel)',
    },
    donationMethods: [
      {
        type: 'zelle',
        label: 'Zelle',
        holder: 'Ana Rojas',
        value: 'ana.rojas.ayuda@gmail.com',
        note: { es: 'Donación directa a la familia', en: 'Direct donation to the family' },
      },
      {
        type: 'pago_movil',
        label: 'Pago Móvil',
        holder: 'Ana Rojas',
        bank: 'Banesco (0134)',
        phone: '0414-555-0142',
        idNumber: 'V-12.345.678',
        note: { es: 'Pago móvil nacional', en: 'National mobile payment' },
      },
    ],
    body: {
      es: [
        { t: 'p', text: 'La familia Rojas vivía en una zona baja de Maiquetía afectada por las crecidas. Tras perder su vivienda, fueron reubicados temporalmente con apoyo de una organización aliada.' },
        { t: 'p', text: 'Su prioridad no es la dependencia, sino la reconstrucción. La señora Rojas trabajó tres años en atención al cliente para un comercio local y maneja redes sociales. Está disponible para incorporarse de inmediato.' },
        { t: 'p', text: 'El apoyo inmediato (alimentos y útiles) cubre las próximas semanas; un empleo estable resolvería la raíz del problema.' },
      ],
      en: [
        { t: 'p', text: 'The Rojas family lived in a low-lying area of Maiquetía hit by the floods. After losing their home, they were temporarily relocated with support from a partner organization.' },
        { t: 'p', text: 'Their priority is not dependency but rebuilding. Mrs. Rojas worked three years in customer service for a local business and manages social media. She is available to start immediately.' },
        { t: 'p', text: 'Immediate help (food and supplies) covers the coming weeks; a stable job would solve the root of the problem.' },
      ],
    },
  },
  {
    id: 'maria-contadora-la-guaira',
    status: 'verified',
    date: '2026-06-18',
    supportLink: null,
    title: { es: 'María — Asistente contable', en: 'María — Accounting assistant' },
    location: { es: 'La Guaira (casco central)', en: 'La Guaira (downtown)' },
    verifiedBy: { es: 'Centro de Acopio San Juan', en: 'San Juan Aid Center' },
    dateLabel: { es: '18 de junio de 2026', en: 'June 18, 2026' },
    summary: {
      es: 'Madre cabeza de familia con experiencia administrativa y contable. Su lugar de trabajo cerró tras la emergencia; busca empleo en administración o finanzas.',
      en: 'Single mother with administrative and accounting experience. Her workplace closed after the emergency; she seeks a job in administration or finance.',
    },
    needs: {
      es: ['Empleo administrativo / contable', 'Apoyo en alquiler temporal'],
      en: ['Administrative / accounting job', 'Temporary rent support'],
    },
    skills: {
      es: ['Contabilidad básica', 'Administración', 'Facturación y cobranzas', 'Google Workspace'],
      en: ['Basic accounting', 'Administration', 'Billing and collections', 'Google Workspace'],
    },
    remoteWorkAvailability: {
      es: 'Medio tiempo o tiempo completo, mañanas preferiblemente',
      en: 'Part-time or full-time, mornings preferred',
    },
    contactMethod: {
      es: 'A través del Centro de Acopio San Juan (canal verificado)',
      en: 'Through San Juan Aid Center (verified channel)',
    },
    donationMethods: [
      {
        type: 'paypal',
        label: 'PayPal',
        holder: 'María González',
        value: 'paypal.me/mariagonzalez',
        note: { es: 'Apoyo directo', en: 'Direct support' },
      },
      {
        type: 'zelle',
        label: 'Zelle',
        holder: 'María González',
        value: 'maria.gonzalez.ayuda@gmail.com',
        note: { es: 'Donación directa', en: 'Direct donation' },
      },
    ],
    body: {
      es: [
        { t: 'p', text: 'María tiene más de cinco años de experiencia en tareas administrativas y contables. El comercio donde trabajaba cerró de forma permanente tras la emergencia.' },
        { t: 'p', text: 'Es organizada, confiable y maneja herramientas de oficina en la nube. Un puesto de administración, facturación o asistencia contable le permitiría sostener a su familia de forma autónoma.' },
      ],
      en: [
        { t: 'p', text: 'María has over five years of experience in administrative and accounting tasks. The business where she worked closed permanently after the emergency.' },
        { t: 'p', text: 'She is organized, reliable and handles cloud office tools. An administration, billing or accounting-assistant role would let her support her family independently.' },
      ],
    },
  },
  {
    id: 'carlos-desarrollador-catia-la-mar',
    status: 'urgent',
    date: '2026-06-26',
    supportLink: '#',
    title: { es: 'Carlos — Técnico y aspirante a desarrollador', en: 'Carlos — Technician and aspiring developer' },
    location: { es: 'Catia La Mar, La Guaira', en: 'Catia La Mar, La Guaira' },
    verifiedBy: { es: 'Voluntariado Tech Litoral', en: 'Tech Litoral Volunteers' },
    dateLabel: { es: '26 de junio de 2026', en: 'June 26, 2026' },
    summary: {
      es: 'Joven con formación técnica perdió su equipo de trabajo en la emergencia. Necesita reactivar ingresos con urgencia; conocimientos de soporte IT y bases de programación web.',
      en: 'A young man with technical training lost his work equipment in the emergency. He urgently needs to restart income; knows IT support and web programming basics.',
    },
    needs: {
      es: ['Laptop o equipo de trabajo', 'Empleo (soporte / QA / dev junior)', 'Conexión a internet estable'],
      en: ['Laptop or work equipment', 'Job (support / QA / junior dev)', 'Stable internet connection'],
    },
    skills: {
      es: ['Soporte técnico', 'HTML / CSS / JavaScript básico', 'Inglés intermedio'],
      en: ['Technical support', 'Basic HTML / CSS / JavaScript', 'Intermediate English'],
    },
    remoteWorkAvailability: {
      es: 'Inmediata, tiempo completo o medio tiempo',
      en: 'Immediate, full-time or part-time',
    },
    contactMethod: {
      es: 'Coordinado por Voluntariado Tech Litoral (verificado)',
      en: 'Coordinated by Tech Litoral Volunteers (verified)',
    },
    donationMethods: [
      {
        type: 'pago_movil',
        label: 'Pago Móvil',
        holder: 'Carlos Pérez',
        bank: 'Mercantil (0105)',
        phone: '0412-555-0173',
        idNumber: 'V-20.111.222',
        note: { es: 'Para reponer su equipo de trabajo', en: 'To replace his work equipment' },
      },
      {
        type: 'bank_of_america',
        label: 'Bank of America',
        holder: 'Carlos Pérez',
        value: 'Compartido con consentimiento del beneficiario',
        note: { es: 'Transferencia directa', en: 'Direct transfer' },
      },
    ],
    body: {
      es: [
        { t: 'p', text: 'Carlos estudiaba de forma autodidacta y hacía soporte técnico independiente cuando la emergencia lo dejó sin su equipo de trabajo, su principal herramienta de ingreso.' },
        { t: 'p', text: 'Tiene bases sólidas de soporte IT y está completando fundamentos de desarrollo web. Con un equipo y una oportunidad de entrada puede volver a generar ingresos de inmediato.' },
        { t: 'quote', text: 'Este es un caso urgente: la prioridad es reactivar la capacidad de trabajar.' },
      ],
      en: [
        { t: 'p', text: 'Carlos was studying on his own and doing freelance technical support when the emergency left him without his work equipment, his main source of income.' },
        { t: 'p', text: 'He has solid IT-support fundamentals and is completing web-development basics. With equipment and an entry-level opportunity he can generate income again right away.' },
        { t: 'quote', text: 'This is an urgent case: the priority is to restore the ability to work.' },
      ],
    },
  },
  {
    id: 'jose-disenador-naiguata',
    status: 'pending',
    date: '2026-06-28',
    supportLink: null,
    title: { es: 'José — Diseñador gráfico', en: 'José — Graphic designer' },
    location: { es: 'Naiguatá, La Guaira', en: 'Naiguatá, La Guaira' },
    verifiedBy: { es: 'Red de Voluntarios Costa Arriba', en: 'Costa Arriba Volunteer Network' },
    dateLabel: { es: '28 de junio de 2026', en: 'June 28, 2026' },
    summary: {
      es: 'Diseñador gráfico con portafolio en identidad visual y redes. En proceso de verificación; busca clientes o empleo part-time para estabilizar ingresos.',
      en: 'Graphic designer with a portfolio in visual identity and social media. In the verification process; seeks clients or a part-time job to stabilize income.',
    },
    needs: {
      es: ['Clientes / empleo de diseño', 'Restablecer conexión a internet'],
      en: ['Clients / design job', 'Restore internet connection'],
    },
    skills: {
      es: ['Diseño gráfico', 'Identidad visual / branding', 'Figma e Illustrator', 'Diseño para redes sociales'],
      en: ['Graphic design', 'Visual identity / branding', 'Figma and Illustrator', 'Social media design'],
    },
    remoteWorkAvailability: {
      es: 'Part-time, proyectos freelance o medio tiempo',
      en: 'Part-time, freelance projects or half-time',
    },
    contactMethod: {
      es: 'En verificación con Red de Voluntarios Costa Arriba',
      en: 'In verification with Costa Arriba Volunteer Network',
    },
    body: {
      es: [
        { t: 'p', text: 'José trabaja como diseñador gráfico independiente. La interrupción de servicios en su zona afectó su capacidad de atender clientes y mantener ingresos estables.' },
        { t: 'p', text: 'Su caso está en proceso de verificación por la organización aliada. Una vez confirmado, se habilitará el canal seguro de contacto. Mientras tanto, su perfil sirve para que empresas y recruiters interesados puedan expresar interés.' },
      ],
      en: [
        { t: 'p', text: 'José works as a freelance graphic designer. The disruption of services in his area affected his ability to serve clients and maintain stable income.' },
        { t: 'p', text: 'His case is in the verification process with the partner organization. Once confirmed, the safe contact channel will be enabled. Meanwhile, his profile lets interested companies and recruiters express interest.' },
      ],
    },
  },
];
