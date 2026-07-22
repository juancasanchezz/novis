export const categories = [
  'Desarrollo',
  'Tecnología',
  'Noticias',
  'Casos de Éxito',
]

export const newsArticles = [
  {
    id: 1,
    title: '10 Consejos para programar mejor y ser más eficiente',
    excerpt:
      'La programación es un arte que requiere práctica y paciencia. Aquí te dejamos 10 consejos fundamentales para mejorar tu código, reducir la deuda técnica y elevar tu productividad diaria.',
    content: `
      <p>La programación no se trata solo de escribir código que funcione en la máquina, sino de escribir <strong>código limpio, mantenible y eficiente</strong> que otros desarrolladores (incluido tu "yo" del futuro) puedan entender y modificar. Ya seas un desarrollador junior dando tus primeros pasos o un senior buscando optimizar su flujo de trabajo, siempre hay margen de mejora.</p>
      
      <p>En NOVIS Software, tras años desarrollando soluciones complejas para la administración pública y empresas privadas, hemos recopilado los 10 principios fundamentales que exigimos a nuestro equipo de ingeniería.</p>

      <hr />

      <h2>1. Planifica antes de tocar el teclado</h2>
      <p>El error más común es lanzarse a escribir código inmediatamente después de leer los requisitos. Entiende el problema a fondo, diseña una solución lógica en una pizarra o papel y visualiza la arquitectura. <em>"Una hora de planificación te ahorrará cinco horas de depuración"</em>.</p>
      
      <h2>2. Escribe código para humanos</h2>
      <p>Las computadoras entienden ceros y unos; los lenguajes de alto nivel se inventaron para nosotros. Usa nombres de variables y funciones que sean descriptivos. Evita variables como <code>let x = 10;</code> y opta por <code>let maxUsersAllowed = 10;</code>.</p>
      
      <blockquote>
        "Cualquier tonto puede escribir código que un ordenador entienda. Los buenos programadores escriben código que los humanos pueden entender." – Martin Fowler
      </blockquote>

      <h2>3. Funciones pequeñas y de responsabilidad única</h2>
      <p>Aplica el principio de <strong>Responsabilidad Única (SRP)</strong>. Una función debe hacer una sola cosa y hacerla bien. Si tu función tiene más de 30 líneas o la palabra "y" en su nombre (ej: <code>validarYGuardarUsuario()</code>), probablemente deberías dividirla en dos.</p>

      <h2>4. El Debugger es tu mejor amigo</h2>
      <p>Llenar el código de <code>console.log()</code> o <code>print()</code> es una técnica rudimentaria. Aprender a usar las herramientas de depuración avanzadas (Breakpoints, Watchers, Call Stacks) de tu IDE (como VSCode o IntelliJ) te hará infinitamente más rápido a la hora de cazar <em>bugs</em> escurridizos.</p>

      <h2>5. Comenta el "Por qué", no el "Qué"</h2>
      <p>El código bien escrito ya explica "qué" estás haciendo. Los comentarios deben reservarse para explicar la lógica de negocio subyacente o por qué tomaste una decisión técnica extraña.</p>
      
      <pre><code>// MAL: Suma 1 al contador
contador++;

// BIEN: Necesitamos compensar el índice porque la API de terceros empieza en 0
contador++;</code></pre>

      <h2>6. Domina el control de versiones (Git)</h2>
      <p>Git no es solo para guardar tu trabajo, es una herramienta de colaboración. Haz commits atómicos (pequeños y centrados en un solo cambio), usa ramas (branches) descriptivas y escribe mensajes de commit que expliquen claramente la modificación introducida.</p>

      <h2>7. Refactoriza sin miedo (y con Tests)</h2>
      <p>El código es un ente vivo. Si ves un bloque que puede mejorarse, mejóralo. Este proceso se llama <em>refactoring</em>. Sin embargo, para hacerlo sin miedo a romper el sistema, necesitas implementar <strong>Testing Automatizado</strong> (Unit testing, E2E). Un código sin tests es código legado (legacy) desde el día que se escribe.</p>

      <h2>8. Automatiza lo aburrido</h2>
      <p>Si tienes que hacer una tarea manual más de tres veces (como formatear código, desplegar en el servidor o comprimir imágenes), <strong>automatízala</strong>. Invierte tiempo en configurar pipelines de CI/CD (Integración y Despliegue Continuos), linters y formateadores automáticos como Prettier.</p>

      <h2>9. No reinventes la rueda</h2>
      <p>Antes de programar una función compleja de manejo de fechas, encriptación o validación de formularios, revisa si el framework o el lenguaje ya ofrecen una solución nativa, o si existe una librería de código abierto consolidada y mantenida por la comunidad.</p>

      <h2>10. Descansa y cuida tu salud mental</h2>
      <p>El cerebro humano no puede programar a máximo rendimiento durante 8 horas seguidas. El famoso <em>"Burnout"</em> (síndrome del trabajador quemado) es real. Levántate de la silla, camina, hidrátate y duerme bien. Muchas veces, la solución a ese error imposible de resolver te llegará a la mente mientras te das una ducha o das un paseo.</p>

      <hr />

      <p><strong>¿Quieres formar parte de un equipo que aplica estas buenas prácticas todos los días?</strong> En NOVIS Software siempre estamos buscando talento. <a href="/contacto" style="font-weight: bold;">Visita nuestra sección de empleo y envíanos tu currículum</a>.</p>
    `,
    date: '20 Mar 2024',
    author: 'Dpto. de Ingeniería',
    category: 'Desarrollo',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
    slug: '10-consejos-para-programar',
  },
  {
    id: 2,
    title: 'Transformación Digital en el Proyecto @vanza',
    excerpt:
      'Desarrollo de una plataforma integral para optimizar la gestión y mejorar la eficiencia de los servicios en el marco del Proyecto @vanza.',
    content: `
      <p>El Proyecto @vanza representa un hito crucial en la modernización de los procesos de gestión. Nuestro equipo ha desarrollado una solución a medida que garantiza...</p>
      <p><em>(Contenido en desarrollo)</em></p>
    `,
    date: '10 Jul 2024',
    author: 'Dirección de Proyectos',
    category: 'Casos de Éxito',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    slug: 'proyecto-avanza',
  },
  {
    id: 4,
    title: 'Modernización de los Proyectos de la Diputación de Cáceres',
    excerpt:
      'Implementación de soluciones tecnológicas avanzadas en múltiples áreas estratégicas de la Diputación, facilitando el acceso digital a los ciudadanos y optimizando la gestión.',
    content: `
      <p>En colaboración estrecha con la <strong>Diputación de Cáceres</strong>, en NOVIS hemos llevado a cabo la digitalización y el desarrollo de múltiples plataformas clave que modernizan los procesos administrativos y formativos:</p>
      
      <ul style="margin-top: 1rem; margin-bottom: 1rem; padding-left: 1.5rem; list-style-type: disc;">
        <li style="margin-bottom: 0.5rem;">
          <strong><a href="https://formacion.dip-caceres.es/" target="_blank" rel="noopener noreferrer">Catálogo Formativo</a></strong>: Aplicación integral para la consulta y gestión del catálogo de acciones formativas de la institución.
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong><a href="https://dipcaceres.novis.es/" target="_blank" rel="noopener noreferrer">Moodle y Open Edx</a></strong>: Plataformas de e-learning personalizadas para la administración y gestión eficiente de todo el proceso formativo online.
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong><a href="https://demo.novis.es/planificacion/" target="_blank" rel="noopener noreferrer">Gestión de Obras</a></strong>: Un completo sistema de planificación y seguimiento en tiempo real de las obras realizadas y supervisadas por la Diputación.
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong><a href="https://alumnos-dipcc.novis.es/#/" target="_blank" rel="noopener noreferrer">Gestión e inscripción de Acciones Formativas</a></strong>: Portal digital que facilita a los alumnos la inscripción ágil y el seguimiento de sus cursos y expedientes.
        </li>
      </ul>

      <p>Estas herramientas se han diseñado bajo estrictos estándares de usabilidad, seguridad y escalabilidad, consolidando así el compromiso de la Diputación con la innovación tecnológica.</p>
    `,
    date: '05 Jun 2024',
    author: 'Equipo Técnico',
    category: 'Casos de Éxito',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop',
    slug: 'proyectos-diputacion',
  },
  {
    id: 5,
    title: 'Gestión y Acreditación Profesional en el IECA',
    excerpt:
      'Plataforma tecnológica para el Instituto Extremeño de las Cualificaciones y Acreditaciones (IECA), optimizando el reconocimiento oficial de competencias profesionales.',
    content: `
      <p>El <strong>Instituto Extremeño de las Cualificaciones y Acreditaciones (IECA)</strong> es el organismo dependiente de la Junta de Extremadura cuya misión principal consiste en reconocer y acreditar oficialmente las competencias profesionales. Esta labor fundamental permite a los trabajadores convalidar su dilatada experiencia laboral y obtener títulos de Formación Profesional o Certificados de Profesionalidad de forma directa.</p>

      <h3 style="font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 1rem;">Áreas clave de actuación</h3>
      <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; list-style-type: disc;">
        <li style="margin-bottom: 0.5rem;">
          <strong>Gestión del PEAC</strong>: Coordinación exhaustiva del Procedimiento de Evaluación y Acreditación de Competencias (PEAC) a nivel autonómico, asegurando la calidad y el rigor del proceso.
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong>Reconocimiento de Experiencia</strong>: Evaluación y validación formal de los conocimientos técnicos adquiridos mediante el desempeño profesional continuo o metodologías de aprendizaje no formales, eximiendo al trabajador de regresar al ámbito académico tradicional para obtener su certificación oficial.
        </li>
        <li style="margin-bottom: 0.5rem;">
          <strong>Inscripción Abierta</strong>: Implementación de un modelo de trámite con período de inscripción ininterrumpido y permanente en Extremadura, garantizando la máxima accesibilidad para la ciudadanía.
        </li>
      </ul>

      <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Público objetivo y beneficios</h3>
      <p>Este servicio integral está diseñado específicamente para profesionales que han consolidado un alto grado de especialización práctica a lo largo de su trayectoria, pero que carecen de un documento oficial que certifique su grado de destreza. La acreditación de sus habilidades no solo avala su experiencia, sino que incrementa sustancialmente su nivel de empleabilidad y fomenta la movilidad dentro del exigente mercado laboral actual.</p>
    `,
    date: '20 May 2024',
    author: 'Dirección de Proyectos',
    category: 'Casos de Éxito',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    slug: 'proyecto-ieca',
  },
  {
    id: 3,
    title: '¿Por qué migrar tu antiguo ERP a una arquitectura Cloud?',
    excerpt:
      'Descubre las ventajas de seguridad, escalabilidad y ahorro de costes que supone dar el salto a la nube para tu empresa.',
    content: `
      <p>Analizamos las razones principales para abandonar los servidores locales físicos...</p>
      <p><em>(Aquí iría el contenido completo de la noticia 3)</em></p>
    `,
    date: '28 Feb 2024',
    author: 'Dpto. Técnico',
    category: 'Tecnología',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop',
    slug: 'migrar-erp-cloud',
  },
]
