import type { Empleo } from './types';

/** Empleos verificados (remoto, presencial, híbrido).
 *  Datos de ejemplo. Curados manualmente — sin scraping. */
export const empleos: Empleo[] = [
  {
    id: 'desarrollador-frontend-junior',
    company: 'Lumo Studio',
    mode: 'remoto',
    date: '2026-06-25',
    applyUrl: '#',
    verified: true,
    title: { es: 'Desarrollador/a Frontend Junior', en: 'Junior Frontend Developer' },
    place: { es: '100% remoto', en: '100% remote' },
    category: { es: 'Tecnología', en: 'Technology' },
    dateLabel: { es: '25 de junio de 2026', en: 'June 25, 2026' },
    source: { es: 'Curado manualmente — bolsa de empleo de Lumo Studio', en: 'Manually curated — Lumo Studio job board' },
    description: {
      es: 'Estudio de producto busca desarrollador frontend junior para construir interfaces con React y CSS moderno. Mentoría semanal y proyectos reales desde el primer mes.',
      en: 'A product studio seeks a junior frontend developer to build interfaces with React and modern CSS. Weekly mentoring and real projects from the first month.',
    },
    requirements: {
      es: ['HTML, CSS y JavaScript sólidos', 'Nociones de React (o ganas de aprenderlo)', 'Manejo básico de Git', 'Inglés para lectura técnica'],
      en: ['Solid HTML, CSS and JavaScript', 'React basics (or eagerness to learn)', 'Basic Git', 'English for technical reading'],
    },
    tags: { es: ['React', 'Frontend', 'Junior', 'Mentoría'], en: ['React', 'Frontend', 'Junior', 'Mentoring'] },
    body: {
      es: [
        { t: 'p', text: 'Lumo Studio diseña y construye productos digitales para clientes de Norteamérica. Buscan una persona junior con bases técnicas y muchas ganas de crecer.' },
        { t: 'h', text: 'Stack y dinámica' },
        { t: 'ul', items: ['React + CSS moderno.', 'Code reviews y mentoría semanal.', 'Proyectos reales desde la cuarta semana.'] },
      ],
      en: [
        { t: 'p', text: 'Lumo Studio designs and builds digital products for North American clients. They seek a junior person with technical fundamentals and eagerness to grow.' },
        { t: 'h', text: 'Stack and dynamics' },
        { t: 'ul', items: ['React + modern CSS.', 'Code reviews and weekly mentoring.', 'Real projects from week four.'] },
      ],
    },
  },
  {
    id: 'agente-soporte-cliente-bilingue',
    company: 'NimbusCare',
    mode: 'remoto',
    date: '2026-06-22',
    applyUrl: '#',
    verified: true,
    title: { es: 'Agente de Soporte al Cliente (Bilingüe)', en: 'Customer Support Agent (Bilingual)' },
    place: { es: 'Remoto · LatAm', en: 'Remote · LatAm' },
    category: { es: 'Atención al cliente', en: 'Customer service' },
    dateLabel: { es: '22 de junio de 2026', en: 'June 22, 2026' },
    source: { es: 'Curado manualmente — contacto directo con RRHH de NimbusCare', en: 'Manually curated — direct contact with NimbusCare HR' },
    description: {
      es: 'Empresa de software busca agentes de soporte para atender clientes por chat y correo. Horarios rotativos, capacitación pagada y equipo de trabajo provisto tras el primer mes.',
      en: 'A software company seeks support agents to assist customers via chat and email. Rotating shifts, paid training and work equipment provided after the first month.',
    },
    requirements: {
      es: ['Español nativo e inglés intermedio (B2)', 'Experiencia en atención al cliente (1+ año)', 'Conexión a internet estable', 'Disponibilidad de tiempo completo'],
      en: ['Native Spanish and intermediate English (B2)', 'Customer service experience (1+ year)', 'Stable internet connection', 'Full-time availability'],
    },
    tags: { es: ['Soporte', 'Bilingüe', 'Full-time', 'Capacitación incluida'], en: ['Support', 'Bilingual', 'Full-time', 'Training included'] },
    body: {
      es: [
        { t: 'p', text: 'NimbusCare es una empresa de software B2B que está expandiendo su equipo de soporte para LatAm. Buscan personas empáticas y resolutivas para atención por chat y correo.' },
        { t: 'h', text: 'Lo que ofrecen' },
        { t: 'ul', items: ['Salario competitivo en USD.', 'Capacitación pagada de dos semanas.', 'Equipo de trabajo provisto luego del primer mes.', 'Horarios rotativos con días libres consecutivos.'] },
      ],
      en: [
        { t: 'p', text: 'NimbusCare is a B2B software company expanding its support team for LatAm. They seek empathetic, resourceful people for chat and email assistance.' },
        { t: 'h', text: 'What they offer' },
        { t: 'ul', items: ['Competitive salary in USD.', 'Two weeks of paid training.', 'Work equipment provided after the first month.', 'Rotating shifts with consecutive days off.'] },
      ],
    },
  },
  {
    id: 'asistente-administrativo-virtual',
    company: 'Helbridge Consulting',
    mode: 'remoto',
    date: '2026-06-19',
    applyUrl: '#',
    verified: true,
    title: { es: 'Asistente Administrativo Virtual', en: 'Virtual Administrative Assistant' },
    place: { es: 'Remoto · global', en: 'Remote · global' },
    category: { es: 'Administración', en: 'Administration' },
    dateLabel: { es: '19 de junio de 2026', en: 'June 19, 2026' },
    source: { es: 'Curado manualmente — referido por organización aliada', en: 'Manually curated — referred by a partner organization' },
    description: {
      es: 'Consultora busca asistente virtual para gestión de agenda, facturación, seguimiento de clientes y tareas administrativas. Trabajo por objetivos con horario flexible.',
      en: 'A consultancy seeks a virtual assistant for scheduling, billing, client follow-up and administrative tasks. Goal-based work with flexible hours.',
    },
    requirements: {
      es: ['Experiencia administrativa o contable', 'Organización y atención al detalle', 'Google Workspace y hojas de cálculo', 'Comunicación clara por escrito'],
      en: ['Administrative or accounting experience', 'Organization and attention to detail', 'Google Workspace and spreadsheets', 'Clear written communication'],
    },
    tags: { es: ['Administración', 'Asistente virtual', 'Horario flexible', 'Part-time'], en: ['Administration', 'Virtual assistant', 'Flexible hours', 'Part-time'] },
    body: {
      es: [
        { t: 'p', text: 'Helbridge Consulting apoya a pequeñas empresas con servicios administrativos. Buscan una persona ordenada y confiable para tareas de back-office.' },
        { t: 'h', text: 'Responsabilidades' },
        { t: 'ul', items: ['Gestión de agenda y correos.', 'Facturación y seguimiento de cobranzas.', 'Organización de documentos y reportes simples.'] },
      ],
      en: [
        { t: 'p', text: 'Helbridge Consulting supports small businesses with administrative services. They seek an organized, reliable person for back-office tasks.' },
        { t: 'h', text: 'Responsibilities' },
        { t: 'ul', items: ['Scheduling and email management.', 'Billing and collections follow-up.', 'Document organization and simple reports.'] },
      ],
    },
  },
  {
    id: 'disenador-redes-sociales',
    company: 'Marca Viva',
    mode: 'remoto',
    date: '2026-06-27',
    applyUrl: '#',
    verified: true,
    title: { es: 'Diseñador/a de Contenido para Redes', en: 'Social Media Content Designer' },
    place: { es: 'Remoto · LatAm', en: 'Remote · LatAm' },
    category: { es: 'Diseño', en: 'Design' },
    dateLabel: { es: '27 de junio de 2026', en: 'June 27, 2026' },
    source: { es: 'Curado manualmente — bolsa de talento de Marca Viva', en: 'Manually curated — Marca Viva talent pool' },
    description: {
      es: 'Agencia de marketing busca diseñador para crear piezas gráficas y plantillas para redes sociales de varios clientes. Portafolio requerido; freelance con posibilidad de fijo.',
      en: 'A marketing agency seeks a designer to create graphics and templates for several clients’ social media. Portfolio required; freelance with potential for a permanent role.',
    },
    requirements: {
      es: ['Dominio de Figma, Canva o Illustrator', 'Portafolio de piezas para redes', 'Manejo de tiempos y entregas', 'Creatividad y consistencia de marca'],
      en: ['Proficiency in Figma, Canva or Illustrator', 'Portfolio of social media pieces', 'Deadline management', 'Creativity and brand consistency'],
    },
    tags: { es: ['Diseño', 'Redes sociales', 'Freelance', 'Portafolio'], en: ['Design', 'Social media', 'Freelance', 'Portfolio'] },
    body: {
      es: [
        { t: 'p', text: 'Marca Viva gestiona redes sociales para marcas de consumo en LatAm. Necesitan a alguien creativo para producir piezas gráficas y mantener la coherencia visual.' },
        { t: 'h', text: 'Modalidad' },
        { t: 'ul', items: ['Inicio como freelance por proyecto.', 'Posibilidad de pasar a colaboración fija según desempeño.', 'Pagos quincenales.'] },
      ],
      en: [
        { t: 'p', text: 'Marca Viva manages social media for consumer brands in LatAm. They need someone creative to produce graphics and maintain visual consistency.' },
        { t: 'h', text: 'Arrangement' },
        { t: 'ul', items: ['Start as a freelancer per project.', 'Possibility of a permanent role based on performance.', 'Bi-weekly payments.'] },
      ],
    },
  },
  {
    id: 'asistente-logistica-acopio',
    company: 'Centro de Acopio San Juan',
    mode: 'presencial',
    date: '2026-06-24',
    applyUrl: '#',
    verified: true,
    title: { es: 'Asistente de Logística (Centro de Acopio)', en: 'Logistics Assistant (Aid Center)' },
    place: { es: 'La Guaira (casco central)', en: 'La Guaira (downtown)' },
    category: { es: 'Logística', en: 'Logistics' },
    dateLabel: { es: '24 de junio de 2026', en: 'June 24, 2026' },
    source: { es: 'Verificado — vacante directa del Centro de Acopio San Juan', en: 'Verified — direct vacancy from San Juan Aid Center' },
    description: {
      es: 'Vacante presencial para apoyar la recepción, organización y distribución de insumos en el centro de acopio. Ideal para personas de la zona que buscan ingreso estable y cercano.',
      en: 'On-site role to support intake, organization and distribution of supplies at the aid center. Ideal for local people seeking a stable, nearby income.',
    },
    requirements: {
      es: ['Disponibilidad presencial en La Guaira', 'Orden y trabajo en equipo', 'Capacidad para tareas físicas ligeras', 'Compromiso y puntualidad'],
      en: ['On-site availability in La Guaira', 'Organization and teamwork', 'Ability for light physical tasks', 'Commitment and punctuality'],
    },
    tags: { es: ['Presencial', 'Logística', 'La Guaira', 'Ingreso estable'], en: ['On-site', 'Logistics', 'La Guaira', 'Stable income'] },
    body: {
      es: [
        { t: 'p', text: 'El Centro de Acopio San Juan amplía su equipo presencial para gestionar el flujo de donaciones e insumos hacia las familias afectadas.' },
        { t: 'h', text: 'Tareas' },
        { t: 'ul', items: ['Recepción y clasificación de insumos.', 'Apoyo en la distribución a familias.', 'Registro simple de entradas y salidas.'] },
      ],
      en: [
        { t: 'p', text: 'San Juan Aid Center is expanding its on-site team to manage the flow of donations and supplies to affected families.' },
        { t: 'h', text: 'Tasks' },
        { t: 'ul', items: ['Intake and sorting of supplies.', 'Support in distribution to families.', 'Simple logging of items in and out.'] },
      ],
    },
  },
  {
    id: 'coordinador-programas-comunitarios',
    company: 'Fundación Manos del Litoral',
    mode: 'hibrido',
    date: '2026-06-23',
    applyUrl: '#',
    verified: true,
    title: { es: 'Coordinador/a de Programas Comunitarios', en: 'Community Programs Coordinator' },
    place: { es: 'Maiquetía · híbrido', en: 'Maiquetía · hybrid' },
    category: { es: 'Social', en: 'Community' },
    dateLabel: { es: '23 de junio de 2026', en: 'June 23, 2026' },
    source: { es: 'Verificado — vacante directa de Fundación Manos del Litoral', en: 'Verified — direct vacancy from Manos del Litoral Foundation' },
    description: {
      es: 'Rol híbrido para coordinar programas de apoyo a familias: visitas en terreno y trabajo remoto de seguimiento. Perfil organizado con sensibilidad social.',
      en: 'Hybrid role to coordinate family support programs: field visits and remote follow-up work. Organized profile with social sensitivity.',
    },
    requirements: {
      es: ['Experiencia en trabajo comunitario o social', 'Disponibilidad para visitas en Maiquetía', 'Organización y reportería', 'Buena comunicación'],
      en: ['Experience in community or social work', 'Availability for visits in Maiquetía', 'Organization and reporting', 'Good communication'],
    },
    tags: { es: ['Híbrido', 'Social', 'Maiquetía', 'Coordinación'], en: ['Hybrid', 'Community', 'Maiquetía', 'Coordination'] },
    body: {
      es: [
        { t: 'p', text: 'Manos del Litoral busca una persona para coordinar sus programas de acompañamiento a familias afectadas, combinando terreno y seguimiento remoto.' },
        { t: 'h', text: 'Responsabilidades' },
        { t: 'ul', items: ['Visitas y acompañamiento en terreno.', 'Seguimiento remoto y reportería.', 'Coordinación con voluntarios y aliados.'] },
      ],
      en: [
        { t: 'p', text: 'Manos del Litoral seeks a person to coordinate its family support programs, combining fieldwork and remote follow-up.' },
        { t: 'h', text: 'Responsibilities' },
        { t: 'ul', items: ['Field visits and accompaniment.', 'Remote follow-up and reporting.', 'Coordination with volunteers and allies.'] },
      ],
    },
  },
];
