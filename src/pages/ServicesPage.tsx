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
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

// Los textos y servicios se mantienen intactos
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
    title: 'Consultoría en Software',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    paragraphs: [
      'Nuestra empresa de consultoría de software ofrece soluciones integrales y asesoramiento experto para maximizar el potencial tecnológico de su negocio. Con un enfoque centrado en el cliente, evaluamos sus necesidades y diseñamos estrategias personalizadas para alcanzar sus objetivos.',
      'Nuestro equipo de consultores altamente calificados tiene una amplia experiencia en diversos sectores y dominios tecnológicos. Analizamos su infraestructura existente, identificamos áreas de mejora y proponemos soluciones innovadoras que impulsen la eficiencia y la rentabilidad.',
      'Desde la selección de plataformas y tecnologías hasta la gestión de proyectos y la optimización de procesos, brindamos orientación experta en cada etapa del ciclo de vida del software.',
      'Ya sea que necesite optimizar su flujo de trabajo, implementar nuevas soluciones o resolver desafíos técnicos, estamos aquí para ayudarlo a aprovechar al máximo su inversión en tecnología. Confíe en nuestra consultoría de software y lleve su negocio al siguiente nivel de éxito.',
    ],
  },
  {
    id: 'ia',
    icon: BrainCircuit,
    title: 'Desarrollo de IA',
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
    title: 'Pruebas de Software',
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
    title: 'Mantenimiento y Soporte',
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
    title: 'Integración de Sistemas',
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
          content={`Novis, Software, Servicops, Extremadura`}
        />
      </Helmet>

      <div className='bg-white flex flex-col w-full min-h-screen'>
        {/* 1. HERO LUMINOSO Y DIRECTO */}
        <section className='pt-24 pb-16 bg-white border-b border-gray-100 text-center px-4 relative overflow-hidden'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none'></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-4xl mx-auto relative z-10'
          >
            <span className='inline-block py-1.5 px-4 rounded-full bg-gray-100 text-gray-600 text-xs font-bold tracking-widest uppercase mb-6'>
              Nuestras Especialidades
            </span>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight'>
              Soluciones tecnológicas{' '}
              <span className='text-green-600'>integrales</span>
            </h1>
            <p className='text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto'>
              Explora nuestras áreas de especialización. Hacemos que la
              tecnología trabaje a favor de tu empresa.
            </p>
          </motion.div>
        </section>

        {/* 2. LISTADO EN Z-PATTERN (El efecto interactivo) */}
        <section className='py-20 bg-white relative overflow-hidden'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='space-y-24 md:space-y-32'>
              {fullServices.map((service, index) => {
                const isEven = index % 2 !== 0
                const numberString = (index + 1).toString().padStart(2, '0')

                // Separamos el primer párrafo: La primera frase visible, el resto se esconde
                const firstSentence = service.paragraphs[0].split('.')[0] + '.'
                const remainingDescription = service.paragraphs[0]
                  .split('.')
                  .slice(1)
                  .join('.')
                  .trim()

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7 }}
                    onClick={() => setSelectedService(service)}
                    className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative cursor-pointer group pt-8 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                  >
                    {/* Número gigante de fondo */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-black text-gray-50/80 z-0 pointer-events-none transition-colors duration-500 group-hover:text-green-50/50 ${isEven ? '-left-8' : '-right-8'}`}
                    >
                      {numberString}
                    </div>

                    {/* Columna Imagen */}
                    <div className='w-full lg:w-5/12 relative z-10'>
                      <div className='aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 relative'>
                        <div className='absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500 z-10'></div>
                        <img
                          src={service.image}
                          alt={service.title}
                          className='w-full h-full object-cover filter group-hover:scale-105 transition-transform duration-700 relative z-0'
                        />
                      </div>
                    </div>

                    {/* Columna Texto (Interactiva) */}
                    <div className='w-full lg:w-7/12 relative z-10 p-6 md:p-10 rounded-3xl group-hover:bg-gray-50/80 transition-colors duration-500 border border-transparent group-hover:border-gray-100'>
                      <div className='flex items-center mb-6'>
                        <div className='w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mr-5 group-hover:bg-green-600 transition-colors duration-500 flex-shrink-0'>
                          <service.icon
                            className='w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-500'
                            strokeWidth={1.5}
                          />
                        </div>
                        <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight group-hover:text-green-700 transition-colors duration-300'>
                          {service.title}
                        </h2>
                      </div>

                      <div className='w-16 h-1.5 bg-green-500 rounded-full mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300'></div>

                      {/* Algo de texto: La primera frase del párrafo (Siempre visible) */}
                      <p className='text-lg text-gray-700 font-medium leading-relaxed'>
                        {firstSentence}
                      </p>

                      {/* La breve descripción: El resto del párrafo (Aparece al hacer hover) */}
                      <div className='max-h-0 opacity-0 overflow-hidden group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 ease-in-out mt-0 group-hover:mt-4'>
                        <p className='text-gray-500 leading-relaxed'>
                          {remainingDescription}
                        </p>
                      </div>

                      {/* Botón CTA (Aparece iluminado en hover) */}
                      <div className='mt-8 inline-flex items-center px-6 py-3 bg-white border border-gray-200 group-hover:border-green-600 group-hover:bg-green-600 group-hover:text-white text-gray-700 font-bold rounded-xl transition-all shadow-sm'>
                        Ver información completa
                        <ArrowRight className='ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform' />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 3. MODAL DE DETALLE COMPLETO */}
        <AnimatePresence>
          {selectedService && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className='fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6'
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className='bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative'
                >
                  <button
                    onClick={() => setSelectedService(null)}
                    className='absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-colors'
                  >
                    <X className='w-5 h-5' />
                  </button>

                  <div className='overflow-y-auto overflow-x-hidden custom-scrollbar flex-grow'>
                    <div className='relative h-64 sm:h-80 w-full'>
                      <div className='absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent z-10'></div>
                      <img
                        src={selectedService.image}
                        alt={selectedService.title}
                        className='w-full h-full object-cover'
                      />
                      <div className='absolute bottom-0 left-0 p-8 sm:p-10 z-20 flex items-end'>
                        <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-6 shadow-lg hidden sm:flex'>
                          {selectedService.icon && (
                            <selectedService.icon className='w-8 h-8 text-green-600' />
                          )}
                        </div>
                        <h2 className='text-3xl sm:text-4xl font-bold text-white leading-tight drop-shadow-md'>
                          {selectedService.title}
                        </h2>
                      </div>
                    </div>

                    <div className='p-8 sm:p-12 space-y-6'>
                      <p className='text-xl text-gray-800 font-medium border-l-4 border-green-500 pl-6 py-2 bg-gradient-to-r from-green-50 to-transparent'>
                        {selectedService.paragraphs[0]}
                      </p>

                      <div className='space-y-5 text-gray-600 leading-relaxed text-lg'>
                        {selectedService.paragraphs
                          .slice(1)
                          .map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className='bg-gray-50 border-t border-gray-100 p-6 sm:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 flex-shrink-0'>
                    <span className='text-gray-500 font-medium text-sm text-center sm:text-left'>
                      ¿Te interesa implementar este servicio en tu empresa?
                    </span>
                    <Link
                      to='/contacto'
                      onClick={() => setSelectedService(null)}
                      className='w-full sm:w-auto px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors shadow-sm text-center'
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
        <section className='py-20 bg-gray-900 text-center px-4 mt-auto'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold text-white mb-6'>
              ¿Tienes dudas sobre qué tecnología implementar?
            </h2>
            <p className='text-gray-400 mb-10 text-lg'>
              Nuestro equipo está a tu disposición para auditar tu caso sin
              compromiso.
            </p>
            <Link
              to='/contacto'
              className='inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors shadow-lg'
            >
              Contacta con nuestro equipo.
              <ArrowRight className='ml-3 w-5 h-5' />
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
