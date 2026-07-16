import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle2, ShieldCheck, Landmark, ExternalLink, Building2 } from 'lucide-react'

// Logos mapeados
import logo1 from '../assets/logo1-1.png'
import logo2 from '../assets/logo2-1.png'
import logo3 from '../assets/logo3-1.png'
import logo4 from '../assets/logo4-1.png'
import logo5 from '../assets/logo-infoex.png'

import { Helmet } from 'react-helmet-async'

const institutionsData = [
  {
    id: 1,
    logo: logo4,
    title: 'Junta de Extremadura',
    description: 'Socio tecnológico en proyectos de modernización de servicios ciudadanos regionales.',
    points: ['Consultoría técnica', 'Software a medida', 'Soporte evolutivo'],
    buttonText: 'Ver Proyecto',
    link: '/clientes/instituciones/junta-de-extremadura',
    colSpan: 'md:col-span-2 lg:col-span-2', // Bento large block
  },
  {
    id: 2,
    logo: logo5,
    title: 'INFOEX',
    description: 'Herramientas para la gestión operativa de emergencias forestales.',
    points: ['Geolocalización', 'Gestión centralizada', 'Análisis de datos'],
    buttonText: 'Ver Proyecto',
    link: '/clientes/instituciones/infoex',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 3,
    logo: logo1,
    title: 'Escuela de Administración Pública',
    description: 'Hosting y gestión integral de la plataforma @vanza de educación a distancia.',
    points: ['Portal del alumno', 'Moodle y Open Edx', 'Automatización'],
    buttonText: 'Ver Proyecto',
    link: '/clientes/instituciones/escuela-de-administracion-publica',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 4,
    logo: logo2,
    title: 'Diputación de Cáceres',
    description: 'Herramientas de gestión territorial y administrativa para la provincia.',
    points: ['Catálogo formativo', 'Plataformas e-learning', 'Gestión de obras'],
    buttonText: 'Ver Proyecto',
    link: '/clientes/instituciones/diputacion-de-caceres',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 5,
    logo: logo3,
    title: 'INCUAL',
    description: 'Gestión y difusión del Catálogo Nacional de Cualificaciones Profesionales.',
    points: ['Gestión eficiente', 'Sincronización de datos', 'Mantenimiento'],
    buttonText: 'Ver Proyecto',
    link: '/clientes/instituciones/instituto-nacional-de-las-cualificaciones',
    colSpan: 'md:col-span-2 lg:col-span-1',
  },
]

export function InstitutionsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <>
      <Helmet>
        <title key='title'>Novis - Instituciones Públicas</title>
        <meta
          name='keywords'
          content={`Novis, Software, Clientes, Extremadura, Sector Público`}
        />
      </Helmet>

      <div className='bg-slate-50 flex flex-col w-full min-h-screen text-slate-600'>
        {/* 1. HERO LUMINOSO */}
        <section className='pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/50 via-slate-50 to-slate-50 z-0'></div>
          
          <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className='inline-flex items-center py-1.5 px-4 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm backdrop-blur-sm'>
                <Building2 className="w-3.5 h-3.5 mr-2" />
                Sector Público
              </span>

              <h1 className='text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight'>
                Colaboración con{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>
                  Instituciones
                </span>
              </h1>

              <p className='text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto'>
                Proporcionamos soluciones tecnológicas robustas y seguras para
                la administración pública, adaptándonos a los estándares
                oficiales más exigentes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. BENTO GRID INTERACTIVO (Casos de Éxito) */}
        <section className='pb-24 relative z-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {institutionsData.map((inst, index) => (
                <motion.div
                  key={inst.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredCard(inst.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`group relative h-[400px] rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-center items-center cursor-pointer transition-all duration-500 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100 ${inst.colSpan}`}
                >
                  {/* Gradiente de fondo en hover */}
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/90 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0'></div>

                  {/* Logo Center (Escala y sube en hover) */}
                  <motion.div
                    animate={{
                      y: hoveredCard === inst.id ? -100 : 0,
                      scale: hoveredCard === inst.id ? 0.6 : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className='relative z-10 w-48 h-48 flex items-center justify-center p-6 bg-slate-50 rounded-full border border-slate-100 shadow-lg group-hover:bg-emerald-50 group-hover:border-emerald-100'
                  >
                    <img
                      src={inst.logo}
                      alt={inst.title}
                      className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-110'
                    />
                  </motion.div>

                  {/* Contenido Revelado en Hover */}
                  <AnimatePresence>
                    {hoveredCard === inst.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className='absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col'
                      >
                        <h3 className='text-2xl font-bold text-slate-900 mb-3 tracking-tight'>
                          {inst.title}
                        </h3>
                        <p className='text-sm text-slate-600 mb-4 line-clamp-2'>
                          {inst.description}
                        </p>
                        <div className='flex flex-wrap gap-2 mb-6'>
                          {inst.points.map((point, i) => (
                            <span key={i} className='text-[10px] uppercase tracking-wider font-bold bg-emerald-50 text-emerald-700 py-1 px-2.5 rounded-full border border-emerald-200'>
                              {point}
                            </span>
                          ))}
                        </div>
                        <a
                          href={inst.link}
                          className='inline-flex items-center justify-center w-full py-3 bg-slate-900 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors shadow-md'
                        >
                          {inst.buttonText}
                          <ExternalLink className='ml-2 w-4 h-4' />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. BLOQUE DE SEGURIDAD */}
        <section className='py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-1/2 h-full opacity-5 bg-[radial-gradient(#10b981_2px,transparent_2px)] [background-size:24px_24px]'></div>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
              <div className='p-10 md:p-12 bg-white rounded-[2rem] border border-slate-200 hover:border-emerald-300 transition-colors shadow-lg hover:shadow-xl'>
                <Landmark className='w-12 h-12 text-emerald-600 mb-6' />
                <h3 className='text-2xl font-bold mb-4 tracking-tight text-slate-900'>
                  Administración Pública
                </h3>
                <p className='text-slate-600 leading-relaxed text-lg'>
                  Soluciones diseñadas bajo estrictos estándares de
                  transparencia, accesibilidad y eficiencia para el ciudadano.
                </p>
              </div>
              <div className='p-10 md:p-12 bg-white rounded-[2rem] border border-slate-200 hover:border-emerald-300 transition-colors shadow-lg hover:shadow-xl'>
                <ShieldCheck className='w-12 h-12 text-emerald-600 mb-6' />
                <h3 className='text-2xl font-bold mb-4 tracking-tight text-slate-900'>
                  Seguridad Estatal
                </h3>
                <p className='text-slate-600 leading-relaxed text-lg'>
                  Protección integral de datos y cumplimiento normativo riguroso
                  en infraestructuras críticas institucionales.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
