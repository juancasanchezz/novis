import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Landmark, ExternalLink } from 'lucide-react'

// Logos mapeados
import logo1 from '../assets/logo1-1.png'
import logo2 from '../assets/logo2-1.png'
import logo3 from '../assets/logo3-1.png'
import logo4 from '../assets/logo4-1.png'
import logo5 from '../assets/logo-infoex.png'

const institutionsData = [
  {
    id: 1,
    logo: logo4,
    title: 'Junta de Extremadura',
    description:
      'Socio tecnológico en proyectos de modernización de servicios ciudadanos regionales.',
    points: [
      'Consultoría técnica para la implementación de nuevas tecnologías administrativas.',
      'Desarrollo de software a medida para consejerías y organismos autónomos.',
      'Soporte evolutivo y mantenimiento de sistemas críticos.',
    ],
    buttonText: 'Junta de Extremadura',
    link: '/clientes/instituciones/junta-de-extremadura',
  },
  {
    id: 2,
    logo: logo5,
    title: 'INFOEX - Servicio de Prevención y Extinción de Incendios',
    description:
      'Desarrollo de herramientas tecnológicas para la coordinación y gestión operativa de emergencias forestales.',
    points: [
      'Sistemas de geolocalización y seguimiento de recursos en tiempo real.',
      'Plataformas de gestión centralizada para personal de emergencias y retenes.',
      'Análisis de datos y reportes de actuación para la toma de decisiones críticas.',
    ],
    buttonText: 'Proyecto INFOEX',
    link: '/clientes/instituciones/infoex',
  },
  {
    id: 3,
    logo: logo1,
    title: 'Escuela de Administración Pública de Extremadura',
    description:
      'Colaboración integral en la digitalización de procesos formativos para el funcionariado regional.',
    points: [
      'Portal del alumno personalizado para la gestión integral del expediente formativo.',
      'Administración y gestión técnica avanzada en plataformas Moodle y Open Edx.',
      'Sincronización de datos y automatización de certificaciones oficiales.',
    ],
    buttonText: 'Escuela Administración Pública',
    link: '/clientes/instituciones/escuela-de-administracion-publica',
  },
  {
    id: 4,
    logo: logo2,
    title: 'Diputación de Cáceres',
    description:
      'Desarrollo de herramientas de gestión territorial y administrativa para la provincia.',
    points: [
      'Aplicación a medida para la gestión del catálogo formativo provincial.',
      'Administración estratégica de plataformas de e-learning Moodle y Open Edx.',
      'Proyecto de gestión de obras para la planificación y seguimiento de infraestructuras.',
    ],
    buttonText: 'Diputación de Cáceres',
    link: '/clientes/instituciones/diputacion-de-caceres',
  },
  {
    id: 5,
    logo: logo3,
    title: 'INCUAL - Instituto Nacional de las Cualificaciones',
    description:
      'Apoyo tecnológico estratégico en la gestión y difusión del Catálogo Nacional de Cualificaciones Profesionales.',
    points: [
      'Desarrollo de sistemas para la gestión eficiente de cualificaciones y unidades de competencia.',
      'Herramientas avanzadas para la sincronización de datos con registros estatales y autonómicos.',
      'Soporte técnico especializado y mantenimiento preventivo de plataformas críticas.',
    ],
    buttonText: 'Visitar INCUAL',
    link: '/clientes/instituciones/instituto-nacional-de-las-cualificaciones',
  },
]

// Logos interactivos para el Banner Superior
const collaboratorLogos = [
  { src: logo4, alt: 'Junta de Extremadura', targetId: 1 },
  { src: logo5, alt: 'INFOEX', targetId: 2 },
  { src: logo1, alt: 'Escuela Administración Pública', targetId: 3 },
  { src: logo2, alt: 'Diputación de Cáceres', targetId: 4 },
  { src: logo3, alt: 'INCUAL', targetId: 5 },
]

export function InstitutionsPage() {
  // Función para hacer Smooth Scroll hacia la sección exacta
  const scrollToInstitution = (id: number) => {
    const element = document.getElementById(`institucion-${id}`)
    if (element) {
      const offset = 100 // Margen para el header
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className='bg-white flex flex-col w-full min-h-screen'>
      {/* 1. HERO LUMINOSO (Más compacto y menos invasivo) */}
      <section className='pt-20 pb-12 md:pt-28 md:pb-16 bg-white relative'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className='inline-block py-1.5 px-4 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm'>
              Sector Público
            </span>

            <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight'>
              Colaboración con{' '}
              <span className='text-green-600'>Instituciones</span>
            </h1>

            <p className='text-lg text-gray-600 leading-relaxed font-medium'>
              Proporcionamos soluciones tecnológicas robustas y seguras para la
              administración pública, adaptándonos a los estándares oficiales
              más exigentes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BANNER INTERACTIVO (Logos Flotantes) */}
      <section className='pb-16 pt-8 bg-white overflow-hidden relative border-b border-gray-100'>
        {/* Fondo de puntos sutil (igual que en tu captura) */}
        <div className='absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:24px_24px] pointer-events-none'></div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <p className='text-xs font-bold text-gray-400 uppercase tracking-widest mb-10'>
            Descubre nuestros casos de éxito (Haz clic)
          </p>

          <div className='flex flex-wrap justify-center items-center gap-6 md:gap-10'>
            {collaboratorLogos.map((logo, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToInstitution(logo.targetId)}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.3,
                }}
                whileHover={{
                  scale: 1.08,
                  y: 0,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className='w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center justify-center p-5 cursor-pointer group hover:border-green-200 hover:shadow-green-500/10 transition-all'
                title={`Ver proyecto de ${logo.alt}`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className='w-full h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300'
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LISTADO DE CASOS DE ÉXITO (Z-PATTERN) */}
      <section className='py-24 bg-white relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='space-y-32 md:space-y-40'>
            {institutionsData.map((inst, index) => {
              const isEven = index % 2 !== 0
              const numberString = (index + 1).toString().padStart(2, '0')

              return (
                <motion.div
                  id={`institucion-${inst.id}`}
                  key={inst.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative ${isEven ? 'lg:flex-row-reverse' : ''} pt-10`}
                >
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-black text-gray-50/80 z-0 pointer-events-none select-none ${isEven ? '-left-10' : '-right-10'}`}
                  >
                    {numberString}
                  </div>

                  <div className='w-full lg:w-5/12 relative z-10 flex justify-center'>
                    <div className='w-full max-w-sm aspect-square bg-white rounded-[3rem] shadow-[0_20px_50px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center justify-center p-12 group hover:-translate-y-2 transition-transform duration-500'>
                      <img
                        src={inst.logo}
                        alt={inst.title}
                        className='w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-500 relative z-10'
                      />
                    </div>
                  </div>

                  <div className='w-full lg:w-7/12 relative z-10'>
                    <div className='mb-8'>
                      <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight'>
                        {inst.title}
                      </h2>
                      <div className='w-16 h-1.5 bg-green-500 rounded-full'></div>
                    </div>

                    <p className='text-lg text-gray-600 mb-8 leading-relaxed font-medium'>
                      {inst.description}
                    </p>

                    <ul className='space-y-4 mb-10'>
                      {inst.points.map((point, i) => (
                        <li
                          key={i}
                          className='flex items-start bg-gray-50/80 p-4 rounded-2xl border border-gray-100/50 hover:bg-green-50/50 hover:border-green-100 transition-colors'
                        >
                          <CheckCircle2
                            className='w-6 h-6 text-green-600 mr-4 mt-0.5 flex-shrink-0'
                            strokeWidth={2.5}
                          />
                          <span className='text-gray-700 leading-relaxed font-medium'>
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={inst.link}
                      className='inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-md group'
                    >
                      {inst.buttonText}
                      <ExternalLink className='ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. BLOQUE DE SEGURIDAD */}
      <section className='py-24 bg-gray-900 text-white relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(#22c55e_2px,transparent_2px)] [background-size:24px_24px]'></div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
            <div className='p-10 md:p-12 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm'>
              <Landmark className='w-12 h-12 text-green-500 mb-6' />
              <h3 className='text-2xl font-bold mb-4 tracking-tight'>
                Administración Pública
              </h3>
              <p className='text-gray-400 leading-relaxed text-lg'>
                Soluciones diseñadas bajo estrictos estándares de transparencia,
                accesibilidad y eficiencia para el ciudadano.
              </p>
            </div>
            <div className='p-10 md:p-12 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm'>
              <ShieldCheck className='w-12 h-12 text-green-500 mb-6' />
              <h3 className='text-2xl font-bold mb-4 tracking-tight'>
                Seguridad Estatal
              </h3>
              <p className='text-gray-400 leading-relaxed text-lg'>
                Protección integral de datos y cumplimiento normativo riguroso
                en infraestructuras críticas institucionales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
