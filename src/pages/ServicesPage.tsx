import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Briefcase,
  BrainCircuit,
  ListChecks,
  Wrench,
  Smartphone,
  Network,
  Globe,
  ArrowRight,
  X,
  Plus
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const fullServices = [
  {
    id: 'desarrollo',
    icon: Code2,
    title: 'Desarrollo a Medida',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    paragraphs: [
      'Nuestro enfoque se centra en el desarrollo de software a medida para satisfacer las necesidades específicas de su empresa. Con un equipo de expertos en desarrollo de software, trabajamos en estrecha colaboración con usted para comprender sus requerimientos y objetivos.',
      'Desde la etapa inicial de análisis y diseño hasta la implementación y entrega final, nos aseguramos de desarrollar soluciones personalizadas y escalables. Utilizamos las últimas tecnologías y metodologías ágiles para garantizar un desarrollo eficiente y de alta calidad.',
      'Nuestro equipo se compromete a brindar un software a medida que optimice sus procesos internos, mejore la productividad y aumente la competitividad de su empresa.',
      'Además, ofrecemos servicios de mantenimiento y soporte continuo para asegurar el rendimiento y la actualización constante de su software a medida.',
    ],
  },
  {
    id: 'consultoria',
    icon: Briefcase,
    title: 'Consultoría TI',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    paragraphs: [
      'Nuestra empresa de consultoría de software ofrece soluciones integrales y asesoramiento experto para maximizar el potencial tecnológico de su negocio. Con un enfoque centrado en el cliente, evaluamos sus necesidades y diseñamos estrategias personalizadas para alcanzar sus objetivos.',
      'Nuestro equipo de consultores altamente calificados tiene una amplia experiencia en diversos sectores y dominios tecnológicos. Analizamos su infraestructura existente, identificamos áreas de mejora y proponemos soluciones innovadoras que impulsen la eficiencia y la rentabilidad.',
      'Desde la selección de plataformas y tecnologías hasta la gestión de proyectos y la optimización de procesos, brindamos orientación experta en cada etapa del ciclo de vida del software.',
      'Ya sea que necesite optimizar su flujo de trabajo, implementar nuevas soluciones o resolver desafíos técnicos, estamos aquí para ayudarlo a aprovechar al máximo su inversión en tecnología.',
    ],
  },
  {
    id: 'ia',
    icon: BrainCircuit,
    title: 'Inteligencia Artificial',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop',
    paragraphs: [
      'Nuestra empresa se especializa en el desarrollo de software de IA. Con un equipo experto, creamos soluciones avanzadas y personalizadas. Desde algoritmos de aprendizaje automático hasta sistemas de procesamiento del lenguaje natural, aprovechamos la inteligencia artificial para potenciar su negocio.',
      'Nuestros servicios incluyen análisis de datos, modelado predictivo y automatización de tareas. Trabajamos en estrecha colaboración con usted para entender sus necesidades y entregar resultados de alta calidad.',
      'Confíe en nuestra experiencia en desarrollo de software de IA para impulsar la eficiencia y obtener ventaja competitiva en el mercado actual.',
    ],
  },
  {
    id: 'pruebas',
    icon: ListChecks,
    title: 'QA y Pruebas',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    paragraphs: [
      'Realizamos pruebas de software para garantizar la calidad y el rendimiento óptimo de sus aplicaciones. Nuestro equipo de expertos en pruebas utiliza metodologías rigurosas y herramientas avanzadas para identificar y resolver problemas en su software.',
      'Realizamos pruebas de funcionalidad, compatibilidad, rendimiento y seguridad para asegurar un desempeño confiable. Nuestra dedicación a la excelencia nos permite entregar soluciones libres de errores y satisfacer las necesidades de sus usuarios.',
      'Confíe en nuestras pruebas de software para lograr una experiencia de usuario sólida y confiable, y para asegurar el éxito de sus aplicaciones en el mercado.',
    ],
  },
  {
    id: 'mantenimiento',
    icon: Wrench,
    title: 'Soporte Continuo',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    paragraphs: [
      'Ofrecemos servicios de mantenimiento y soporte para asegurar el funcionamiento continuo y eficiente de su software. Nuestro equipo de expertos está disponible para brindar asistencia técnica, solucionar problemas y realizar actualizaciones periódicas.',
      'Nos encargamos de la monitorización, la detección y la resolución de errores, así como de garantizar la seguridad y la estabilidad de su sistema. Nuestro enfoque proactivo nos permite prevenir problemas antes de que afecten su negocio.',
      'Con nuestro servicio de mantenimiento y soporte, usted puede tener la tranquilidad de contar con un software confiable y un equipo dedicado a su disposición en caso de cualquier eventualidad.',
    ],
  },
  {
    id: 'movil',
    icon: Smartphone,
    title: 'Apps Móviles',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    paragraphs: [
      'Somos expertos en el desarrollo de aplicaciones móviles para brindar soluciones innovadoras y funcionales. Nuestro equipo de desarrollo se especializa en crear aplicaciones móviles personalizadas para iOS y Android. Desde la concepción de la idea hasta el lanzamiento en las tiendas de aplicaciones, nos encargamos de todo el proceso de desarrollo.',
      'Utilizamos las últimas tecnologías y frameworks para garantizar una experiencia de usuario fluida y atractiva. Nos adaptamos a las necesidades específicas de su negocio y creamos aplicaciones móviles intuitivas, seguras y con un diseño elegante.',
      'Además, ofrecemos servicios de integración con servicios en la nube, APIs y sistemas existentes, para maximizar la funcionalidad de su aplicación.',
      'Confíe en nosotros para desarrollar aplicaciones móviles de alta calidad que impulsen su presencia en el mercado y brinden una experiencia excepcional a sus usuarios.',
    ],
  },
  {
    id: 'integracion',
    icon: Network,
    title: 'Integración Sistemas',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
    paragraphs: [
      'Nuestra empresa se especializa en la integración de sistemas para garantizar una comunicación fluida y eficiente entre diferentes plataformas y aplicaciones. Utilizando tecnologías y estándares de integración líderes en la industria, conectamos sistemas heterogéneos y simplificamos los flujos de trabajo.',
      'Nuestro equipo de expertos en integración analiza sus requisitos y diseña soluciones a medida que se ajusten a sus necesidades empresariales. Nos encargamos de la interoperabilidad de datos, la sincronización de información y la automatización de procesos, asegurando que sus sistemas funcionen en armonía.',
      'Además, ofrecemos servicios de migración de datos y actualización de sistemas legados para asegurar una transición suave y minimizar los riesgos asociados.',
      'Confíe en nuestra experiencia en integración de sistemas para optimizar sus operaciones, mejorar la colaboración entre equipos y lograr una mayor eficiencia en su negocio. Estamos comprometidos en brindar soluciones robustas y confiables que impulsen el crecimiento de su empresa.',
    ],
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Aplicaciones Web',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    paragraphs: [
      'Nos especializamos en el desarrollo de aplicaciones web personalizadas y de alta calidad. Nuestro equipo de desarrollo utiliza tecnologías modernas y frameworks para crear aplicaciones web funcionales y atractivas.',
      'Desde el diseño de la interfaz de usuario hasta la implementación de funcionalidades avanzadas, nos aseguramos de que su aplicación web cumpla con sus requerimientos y supere las expectativas de sus usuarios.',
      'Nuestro enfoque se basa en la usabilidad, la escalabilidad y el rendimiento, asegurando que su aplicación web sea rápida, segura y fácil de usar en diferentes dispositivos y navegadores.',
      'Además, ofrecemos servicios de integración con bases de datos, servicios en la nube y sistemas existentes, para una mayor eficiencia y funcionalidad.',
      'Confíe en nuestro equipo de desarrollo de aplicaciones web para impulsar su presencia en línea, interactuar con sus usuarios y lograr el éxito en el mundo digital actual. Estamos comprometidos en brindar soluciones web sólidas y de vanguardia para hacer crecer su negocio.',
    ],
  },
]

type Service = (typeof fullServices)[0] | null

export function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number>(0)

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedService])

  return (
    <>
      <Helmet>
        <title key='title'>Novis - Servicios</title>

        <meta
          name='keywords'
          content={`Novis, Software, Servicios, Extremadura`}
        />
      </Helmet>

      <div className='bg-slate-50 flex flex-col w-full min-h-screen'>
        {/* 1. HERO LUMINOSO Y DIRECTO */}
        <section className='pt-32 pb-20 md:pt-40 md:pb-24 bg-slate-900 border-b border-slate-800 text-center px-4 relative overflow-hidden'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none'></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-4xl mx-auto relative z-10'
          >
            <span className='inline-block py-1.5 px-4 rounded-full bg-emerald-950/50 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-emerald-800/50 backdrop-blur-md shadow-sm'>
              Nuestras Especialidades
            </span>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-sm'>
              Soluciones tecnológicas{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>
                integrales
              </span>
            </h1>
            <p className='text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed'>
              Explora nuestras áreas de especialización. Construimos software robusto y escalable para que tu empresa lidere en la era digital.
            </p>
          </motion.div>
        </section>

        {/* 2. TARJETAS EXPANDIBLES (HORIZONTAL ACCORDION) */}
        <section className='py-20 relative overflow-hidden bg-transparent'>
          <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col xl:flex-row h-auto xl:h-[600px] w-full gap-4 xl:gap-2'>
              {fullServices.map((service, index) => {
                const isHovered = hoveredIndex === index
                const firstSentence = service.paragraphs[0].split('.')[0] + '.'

                return (
                  <motion.div
                    key={service.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onClick={() => setSelectedService(service)}
                    className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                      flex-shrink-0 xl:flex-shrink
                      h-[300px] xl:h-full shadow-sm border border-slate-200/50
                      ${isHovered ? 'xl:flex-[3.5] xl:max-w-[800px]' : 'xl:flex-[1] xl:max-w-[180px]'}
                      group
                    `}
                    style={{
                      boxShadow: isHovered
                        ? '0 20px 40px -10px rgba(16,185,129,0.15), inset 0 0 0 1px rgba(16,185,129,0.2)'
                        : 'inset 0 0 0 1px rgba(0,0,0,0.05)',
                    }}
                  >
                    {/* Imagen de fondo */}
                    <div
                      className='absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105'
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    
                    {/* Overlay: luminoso pero que permite ver la imagen clara arriba */}
                    <div 
                      className={`absolute inset-0 transition-colors duration-700
                        ${isHovered 
                          ? 'bg-gradient-to-t from-white/95 via-white/70 to-transparent' 
                          : 'bg-gradient-to-t from-white/90 via-white/50 to-white/20'
                        }
                      `} 
                    />

                    {/* Contenido */}
                    <div className='absolute inset-0 flex flex-col justify-end p-6 md:p-8 xl:p-10'>
                      <div className='flex items-center gap-4 xl:gap-6'>
                        {/* Icono */}
                        <div className={`flex items-center justify-center rounded-2xl bg-slate-50/95 backdrop-blur-xl border border-emerald-100 shadow-sm transition-all duration-500 flex-shrink-0
                          ${isHovered ? 'w-14 h-14' : 'w-12 h-12 xl:w-14 xl:h-14'}
                        `}>
                          <service.icon 
                            className={`text-emerald-600 transition-all duration-500
                              ${isHovered ? 'w-6 h-6 scale-110' : 'w-5 h-5 xl:w-6 xl:h-6'}
                            `} 
                            strokeWidth={2} 
                          />
                        </div>

                        {/* Título y Texto (Visible al expandir o en móvil) */}
                        <div className={`overflow-hidden transition-all duration-700 ease-in-out whitespace-nowrap xl:whitespace-normal
                          ${isHovered ? 'w-full opacity-100 translate-x-0' : 'w-full xl:w-0 opacity-100 xl:opacity-0 xl:-translate-x-4'}
                        `}>
                          <h3 className='text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-2'>
                            {service.title}
                          </h3>
                          
                          {/* Texto corto animado (solo visible en hover desktop o siempre en móvil si hay espacio) */}
                          <div className={`hidden xl:block transition-all duration-700 delay-100
                            ${isHovered ? 'opacity-100 translate-y-0 max-h-40' : 'opacity-0 translate-y-4 max-h-0'}
                          `}>
                            <p className='text-slate-600 font-light leading-relaxed mb-4 line-clamp-2'>
                              {firstSentence}
                            </p>
                            <span className='inline-flex items-center text-emerald-600 font-bold text-sm group-hover:text-emerald-500 transition-colors'>
                              Ver detalles completos <ArrowRight className='ml-2 w-4 h-4' />
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Título Rotado (Visible SOLO cuando NO está expandido en desktop) */}
                      <div className={`hidden xl:block absolute bottom-10 left-1/2 -translate-x-1/2 origin-bottom-left -rotate-90 whitespace-nowrap transition-all duration-500 ease-in-out
                        ${isHovered ? 'opacity-0 invisible' : 'opacity-100 visible'}
                      `}>
                        <h3 className='text-xl font-bold text-slate-600 tracking-wider uppercase pl-16'>
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Hover indicator line at the bottom */}
                    <div className={`absolute bottom-0 left-0 h-1.5 bg-emerald-500 transition-all duration-700 ease-in-out
                      ${isHovered ? 'w-full' : 'w-0'}
                    `}></div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3. MODAL DE DETALLE COMPLETO (Tema Luminoso) */}
        <AnimatePresence>
          {selectedService && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className='fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6'
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className='bg-slate-50 border border-slate-200 w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative'
                >
                  <button
                    onClick={() => setSelectedService(null)}
                    className='absolute top-4 right-4 z-20 w-10 h-10 bg-slate-100/90 hover:bg-slate-100 border border-slate-200 backdrop-blur-md text-slate-800 rounded-full flex items-center justify-center transition-colors shadow-sm'
                  >
                    <X className='w-5 h-5' />
                  </button>

                  <div className='overflow-y-auto overflow-x-hidden custom-scrollbar flex-grow'>
                    <div className='relative h-64 sm:h-80 w-full'>
                      <div className='absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10'></div>
                      <img
                        src={selectedService.image}
                        alt={selectedService.title}
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute bottom-0 left-0 p-8 sm:p-10 z-20 flex items-end'>
                        <div className='w-16 h-16 bg-slate-50 border border-emerald-100 shadow-sm rounded-2xl flex items-center justify-center mr-6 hidden sm:flex'>
                          {selectedService.icon && (
                            <selectedService.icon className='w-8 h-8 text-emerald-600' strokeWidth={2} />
                          )}
                        </div>
                        <h2 className='text-3xl sm:text-5xl font-black text-slate-900 leading-tight drop-shadow-sm tracking-tight'>
                          {selectedService.title}
                        </h2>
                      </div>
                    </div>

                    <div className='p-8 sm:p-12 space-y-6'>
                      <p className='text-xl text-slate-800 font-medium border-l-4 border-emerald-500 pl-6 py-2 bg-gradient-to-r from-emerald-50 to-transparent'>
                        {selectedService.paragraphs[0]}
                      </p>

                      <div className='space-y-5 text-slate-600 font-light leading-relaxed text-lg'>
                        {selectedService.paragraphs
                          .slice(1)
                          .map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className='bg-slate-50 border-t border-slate-200 p-6 sm:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 flex-shrink-0'>
                    <span className='text-slate-600 font-medium text-sm text-center sm:text-left'>
                      ¿Te interesa implementar este servicio en tu empresa?
                    </span>
                    <Link
                      to='/contacto'
                      onClick={() => setSelectedService(null)}
                      className='w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-[0_4px_14px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 text-center'
                    >
                      Contactar ahora
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* 4. CTA FINAL */}
        <section className='py-32 bg-slate-950 border-t border-slate-800 text-center px-4 mt-auto relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none'></div>
          <div className='max-w-3xl mx-auto relative z-10'>
            <h2 className='text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter'>
              ¿Dudas sobre qué <span className='text-emerald-500'>tecnología</span> implementar?
            </h2>
            <p className='text-slate-300 mb-10 text-xl font-light leading-relaxed'>
              Nuestro equipo de ingenieros está a tu disposición para auditar tu caso sin
              compromiso y trazar una hoja de ruta.
            </p>
            <Link
              to='/contacto'
              className='inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-[0_8px_30px_rgba(16,185,129,0.2)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:-translate-y-1'
            >
              Hablar con un experto
              <ArrowRight className='ml-3 w-5 h-5' />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
