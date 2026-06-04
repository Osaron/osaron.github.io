export const TRANSLATIONS: Record<string, { en: string; es: string }> = {

  // ── Header ────────────────────────────────────────────────────────────
  'nav.home':     { en: 'Homepage', es: 'Inicio'    },
  'nav.projects': { en: 'Projects', es: 'Proyectos' },
  'nav.api-docs': { en: 'API Docs', es: 'API Docs'  },
  'nav.about':    { en: 'About',    es: 'Acerca de' },

  // ── Home — Hero ───────────────────────────────────────────────────────
  'home.tagline': {
    en: 'QA Engineer & Senior Technical Writer',
    es: 'Ingeniero QA & Escritor Técnico Senior',
  },
  'home.greeting': { en: "Hi, I'm", es: 'Hola, soy' },
  'home.sub': {
    en: 'I create impactful documentation for users, developers, and teams.',
    es: 'Creo documentación de alto impacto para usuarios, desarrolladores y equipos.',
  },
  'home.explore': { en: 'Explore', es: 'Ver más' },

  // ── Home — Featured Projects ──────────────────────────────────────────
  'home.projects.heading': { en: 'Featured',  es: 'Proyectos'  },
  'home.projects.accent':  { en: 'Projects',  es: 'Destacados' },

  // Tab labels — keys use actual tab `id` values
  'tab.user-guide.label':            { en: 'User Guide',          es: 'Manual de Usuario'     },
  'tab.user-guide.title':            { en: 'User Guide',          es: 'Manual de Usuario'     },
  'tab.user-guide.description':      {
    en: 'Step-by-step documentation designed for end users navigating complex software systems.',
    es: 'Documentación paso a paso diseñada para usuarios finales de sistemas de software complejos.',
  },
  'tab.technical-article.label':       { en: 'Technical Article',   es: 'Artículo Técnico'      },
  'tab.technical-article.title':       { en: 'Technical Article',   es: 'Artículo Técnico'      },
  'tab.technical-article.description': {
    en: 'In-depth articles covering industry trends, tool evaluations, and engineering best practices.',
    es: 'Artículos detallados sobre tendencias del sector, evaluación de herramientas y buenas prácticas.',
  },
  'tab.workflow-diagrams.label':       { en: 'Workflow Diagram',    es: 'Diagrama de Flujo'     },
  'tab.workflow-diagrams.title':       { en: 'Workflow Diagram',    es: 'Diagrama de Flujo'     },
  'tab.workflow-diagrams.description': {
    en: 'Visual diagrams that map complex processes clearly for end-users and developers.',
    es: 'Diagramas visuales que representan procesos complejos de forma clara para usuarios y desarrolladores.',
  },
  'tab.instructional-videos.label':       { en: 'Instructional Video', es: 'Video Instruccional'   },
  'tab.instructional-videos.title':       { en: 'Instructional Video', es: 'Video Instruccional'   },
  'tab.instructional-videos.description': {
    en: 'Concise video content covering onboarding, walkthroughs, and feature demonstrations.',
    es: 'Contenido de video conciso para incorporación de usuarios, recorridos y demostraciones de funciones.',
  },
  'tab.white-papers.label':       { en: 'White Paper',         es: 'White Paper'           },
  'tab.white-papers.title':       { en: 'White Paper',         es: 'White Paper'           },
  'tab.white-papers.description': {
    en: 'Strategic documents presenting research insights, methodologies, and technical solutions.',
    es: 'Documentos estratégicos con hallazgos de investigación, metodologías y soluciones técnicas.',
  },

  // ── Home — Tech Stack ─────────────────────────────────────────────────
  'home.stack.heading':  { en: 'Tech Stack',     es: 'Stack Tecnológico' },
  'stack.docs-writing':  { en: 'Docs & Writing', es: 'Docs y Escritura'  },
  'stack.dev-tools':     { en: 'Dev Tools',       es: 'Herramientas Dev'  },
  'stack.platforms':     { en: 'Platforms',       es: 'Plataformas'       },

  // ── Home — Why Me ─────────────────────────────────────────────────────
  'home.why.heading': { en: 'Why Me?',     es: '¿Por qué yo?'      },
  'home.why.value':   { en: 'Added Value', es: 'Valor Añadido'     },
  'home.why.bullet1': {
    en: 'Proactively report bugs during documentation updates',
    es: 'Reporto bugs proactivamente durante actualizaciones de documentación',
  },
  'home.why.bullet2': {
    en: 'Identify usability gaps through technical analysis',
    es: 'Identifico brechas de usabilidad mediante análisis técnico',
  },
  'home.why.bullet3': {
    en: 'Improve workflows with agile, cross-team collaboration',
    es: 'Mejoro flujos de trabajo con colaboración ágil y multidisciplinaria',
  },

  // ── Home — Carousel slides ────────────────────────────────────────────
  'slide.companies': { en: '🏢 Companies', es: '🏢 Empresas'  },
  'slide.education': { en: '🎓 Education', es: '🎓 Educación' },
  'slide.awards':    { en: '🏅 Awards',    es: '🏅 Premios'   },

  // ── Footer ────────────────────────────────────────────────────────────
  'footer.contact': {
    en: 'Get in touch at',
    es: 'Contáctame en',
  },
  'footer.copyright': {
    en: '© 2025 Oscar Rondon. All rights reserved.',
    es: '© 2025 Oscar Rondon. Todos los derechos reservados.',
  },

  // ── Projects nav ──────────────────────────────────────────────────────
  'projects.user-guides':  { en: 'User Guides',       es: 'Manuales de Usuario' },
  'projects.articles':     { en: 'Technical Articles', es: 'Artículos Técnicos'  },
  'projects.diagrams':     { en: 'Diagrams',           es: 'Diagramas'           },
  'projects.videos':       { en: 'Videos',             es: 'Videos'              },
  'projects.white-papers': { en: 'White Papers',       es: 'White Papers'        },

  // ── About — Profile ───────────────────────────────────────────────────
  'about.profile.heading': { en: 'Profile', es: 'Perfil' },
  'about.profile.body': {
    en: 'I currently work at Thales Group as the main Technical Writer, where I support cross-functional teams by creating, organizing, and updating documentation and training materials for a variety of software solutions delivered to customers across Latin America. I promote usability and consistency across internal and external documentation.',
    es: 'Actualmente trabajo en Thales Group como Escritor Técnico principal, donde apoyo a equipos multifuncionales creando, organizando y actualizando documentación y materiales de formación para diversas soluciones de software entregadas a clientes en América Latina. Promuevo la usabilidad y coherencia en la documentación interna y externa.',
  },

  // ── About — Skills ────────────────────────────────────────────────────
  'about.skills.heading':    { en: 'Skills',      es: 'Habilidades'  },
  'about.skill.flexibility': { en: 'Flexibility', es: 'Flexibilidad' },
  'about.skill.flex.desc':   {
    en: 'Quickly adapt to new tools and audiences.',
    es: 'Me adapto rápidamente a nuevas herramientas y audiencias.',
  },
  'about.skill.creativity': { en: 'Creativity', es: 'Creatividad' },
  'about.skill.cre.desc':   {
    en: 'Design intuitive document layouts and visuals.',
    es: 'Diseño estructuras de documentos e imágenes intuitivas.',
  },
  'about.skill.efficacy': { en: 'Efficacy', es: 'Eficacia' },
  'about.skill.eff.desc': {
    en: 'Deliver accurate content on time.',
    es: 'Entrego contenido preciso dentro de los plazos establecidos.',
  },

  // ── About — Work Experience ───────────────────────────────────────────
  'about.experience.heading': { en: 'Work Experience',   es: 'Experiencia Laboral'        },
  'about.exp.2018.title':     { en: 'Research Writer',   es: 'Escritor de Investigación'  },
  'about.exp.2018.desc':      {
    en: "Colombia's circular economy official guidelines",
    es: 'Guías oficiales de economía circular de Colombia',
  },
  'about.exp.2019.title': { en: 'Junior Writer', es: 'Escritor Junior' },
  'about.exp.2019.desc':  {
    en: 'Freelance technical writer in multiple industries',
    es: 'Escritor técnico freelance en múltiples industrias',
  },
  'about.exp.2022.title': { en: 'Tech Writer', es: 'Escritor Técnico' },
  'about.exp.2022.desc':  {
    en: 'Full time technical writer for digital security solutions',
    es: 'Escritor técnico a tiempo completo para soluciones de seguridad digital',
  },
  'about.exp.2023.title': { en: 'Tech Writer & QA', es: 'Escritor Técnico & QA' },
  'about.exp.2023.desc':  {
    en: 'Documentation leader & QA eng. support roles',
    es: 'Líder de documentación y roles de soporte en QA',
  },
  'about.exp.2024.title': { en: 'Main Tech Writer', es: 'Escritor Técnico Principal'      },
  'about.exp.2024.desc':  {
    en: 'Main Tech writer & QA eng. for LATAM solutions',
    es: 'Escritor Técnico principal & QA para soluciones LATAM',
  },

  // ── About — Education ─────────────────────────────────────────────────
  'about.education.heading': { en: 'Education',                       es: 'Educación'                          },
  'about.edu.msc':           { en: 'M.Sc. in Software Development',   es: 'M.Sc. en Desarrollo de Software'   },
  'about.edu.google':        { en: 'Google IT Automation with Python', es: 'Automatización IT con Python – Google' },
  'about.edu.writing':       { en: 'Technical Writing Certificate',    es: 'Certificado en Escritura Técnica'  },
  'about.edu.writing.inst':  {
    en: 'Google / Udemy / Datacamp combined coursework',
    es: 'Cursos combinados de Google / Udemy / Datacamp',
  },
  'about.edu.bsc': { en: 'B.Sc. in Chemical Engineering', es: 'Ing. Química (Pregrado)' },
};
