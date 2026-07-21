import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle2, ShieldCheck, Landmark, ExternalLink, Building2, X, ArrowUpRight } from 'lucide-react'

// Logos mapeados (tarjetas)
import logo1 from '../assets/logo1-1.png'
import logo2 from '../assets/logo2-1.png'
import logo3 from '../assets/logo3-1.png'
import logo4 from '../assets/logo4-1.png'
import logo5 from '../assets/logo-infoex.png'

// Logos detalle
import logoDetail1 from '../assets/logo1-150x150.png'
import logoDetail2 from '../assets/logo2-150x150.png'
import logoDetail3 from '../assets/logo3-150x150.png'
import logoDetail4 from '../assets/logo4-150x150.png'

// Imágenes galería
import eap from '../assets/eap-1024x748.jpg'
import eap2 from '../assets/eap2-1024x960.png'
import eap3 from '../assets/eap3-1024x798.jpg'
import diputacion from '../assets/dip4.jpg'
import diputacion2 from '../assets/dip5-1024x958.jpg'
import diputacion3 from '../assets/dip6-1024x798.jpg'
import incual from '../assets/incual8-1024x538.jpg'
import vanza from '../assets/vanza10-1024x534.png'
import vanza2 from '../assets/vanza11-768x576.png'
import infoex from '../assets/infoex.jpg'

import { Helmet } from 'react-helmet-async'

interface ClientButton {
  text: string
  link: string
}

interface InstitutionDetail {
  name: string
  logoDetail: string
  description: string[]
  buttons: ClientButton[]
  gallery: string[]
}

const institutionsData = [
  {
    id: 1,
    logo: logo4,
    title: 'Junta de Extremadura',
    description: 'Socio tecnológico en proyectos de modernización de servicios ciudadanos regionales.',
    points: ['Consultoría técnica', 'Software a medida', 'Soporte evolutivo'],
    buttonText: 'Ver Proyecto',
    colSpan: 'md:col-span-2 lg:col-span-2',
    detail: {
      name: 'Junta de Extremadura',
      logoDetail: logoDetail4,
      description: [
        'Proyecto educativo @vanza',
        'Servicio para la gestión educativa, administración integral y el hosting de la plataforma @vanza de educación a distancia en la Comunidad Autónoma de Extremadura.',
      ],
      buttons: [{ text: '@vanza', link: 'https://avanza.educarex.es/' }],
      gallery: [vanza, vanza2],
    } as InstitutionDetail,
  },
  {
    id: 2,
    logo: logo5,
    title: 'INFOEX',
    description: 'Herramientas para la gestión operativa de emergencias forestales.',
    points: ['Geolocalización', 'Gestión centralizada', 'Análisis de datos'],
    buttonText: 'Ver Proyecto',
    colSpan: 'md:col-span-1 lg:col-span-1',
    detail: {
      name: 'INFOEX - Servicio de Prevención de Incendios',
      logoDetail: logo5,
      description: [
        'Desarrollo de herramientas tecnológicas para la coordinación y gestión operativa de emergencias forestales.',
        'Sistemas de geolocalización y seguimiento de recursos en tiempo real.',
      ],
      buttons: [{ text: 'Proyecto INFOEX', link: 'https://infoex.info/' }],
      gallery: [infoex],
    } as InstitutionDetail,
  },
  {
    id: 3,
    logo: logo1,
    title: 'Escuela de Administración Pública',
    description: 'Hosting y gestión integral de la plataforma @vanza de educación a distancia.',
    points: ['Portal del alumno', 'Moodle y Open Edx', 'Automatización'],
    buttonText: 'Ver Proyecto',
    colSpan: 'md:col-span-1 lg:col-span-1',
    detail: {
      name: 'Escuela de Administración de Extremadura',
      logoDetail: logoDetail1,
      description: [
        'Portal del alumno de la Escuela de Administración Pública de Extremadura, desde donde el alumno puede gestionar su expediente formativo.',
        'Administración y gestión del proceso formativo en las plataformas Moodle y Open Edx.',
      ],
      buttons: [
        { text: 'Portal del Alumno', link: 'https://eap.juntaex.es/aula-virtual' },
        { text: 'Moodle y Open Edx', link: 'https://aula2eap.juntaextremadura.es/' },
      ],
      gallery: [eap, eap2, eap3],
    } as InstitutionDetail,
  },
  {
    id: 4,
    logo: logo2,
    title: 'Diputación de Cáceres',
    description: 'Herramientas de gestión territorial y administrativa para la provincia.',
    points: ['Catálogo formativo', 'Plataformas e-learning', 'Gestión de obras'],
    buttonText: 'Ver Proyecto',
    colSpan: 'md:col-span-1 lg:col-span-1',
    detail: {
      name: 'Diputación de Cáceres',
      logoDetail: logoDetail2,
      description: [
        'Aplicación para la gestión del catálogo formativo de la Diputación de Cáceres.',
        'Administración y gestión del proceso formativo en las plataformas Moodle y Open Edx.',
        'Proyecto de gestión de obras de la Diputación de Cáceres, donde se gestiona la planificación y seguimiento de las obras realizadas por la diputación.',
      ],
      buttons: [
        { text: 'Catálogo Formativo', link: 'https://formacion.dip-caceres.es/' },
        { text: 'Moodle y Open Edx', link: 'https://dipcaceres.novis.es/' },
        { text: 'Gestión de Obras', link: 'https://demo.novis.es/planificacion/' },
      ],
      gallery: [diputacion, diputacion2, diputacion3],
    } as InstitutionDetail,
  },
  {
    id: 5,
    logo: logo3,
    title: 'INCUAL',
    description: 'Gestión y difusión del Catálogo Nacional de Cualificaciones Profesionales.',
    points: ['Gestión eficiente', 'Sincronización de datos', 'Mantenimiento'],
    buttonText: 'Ver Proyecto',
    colSpan: 'md:col-span-2 lg:col-span-1',
    detail: {
      name: 'Instituto Nacional de las Cualificaciones (INCUAL)',
      logoDetail: logoDetail3,
      description: [
        'Aplicación para la gestión de cualificaciones y acreditaciones del Instituto extremeño.',
      ],
      buttons: [{ text: 'INCUAL', link: 'https://peac.juntaex.es/' }],
      gallery: [incual],
    } as InstitutionDetail,
  },
]

export function InstitutionsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedInstitution, setSelectedInstitution] = useState<typeof institutionsData[0] | null>(null)

  const closeDialog = () => setSelectedInstitution(null)

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
        <section className='pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-slate-900 z-0'></div>
          
          <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className='inline-flex items-center py-1.5 px-4 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm backdrop-blur-sm'>
                <Building2 className="w-3.5 h-3.5 mr-2" />
                Sector Público
              </span>

              <h1 className='text-4xl md:text-6xl font-black text-white mb-8 tracking-tight'>
                Colaboración con{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>
                  Instituciones
                </span>
              </h1>

              <p className='text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto'>
                Proporcionamos soluciones tecnológicas robustas y seguras para
                la administración pública, adaptándonos a los estándares
                oficiales más exigentes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. BENTO GRID INTERACTIVO (Casos de Éxito) */}
        <section className='pt-16 pb-24 relative z-10'>
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
                  onClick={() => setSelectedInstitution(inst)}
                  className={`group relative h-[420px] rounded-3xl bg-gradient-to-br from-sky-950/90 to-slate-900/90 backdrop-blur-xl border border-sky-800 shadow-sm overflow-hidden flex flex-col justify-center items-center cursor-pointer transition-all duration-500 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/20 ${inst.colSpan}`}
                >
                  {/* Gradiente de fondo en hover */}
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/95 to-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0'></div>

                  {/* Logo Center (Escala y sube en hover) */}
                  <motion.div
                    animate={{
                      y: hoveredCard === inst.id ? -120 : 0,
                      scale: hoveredCard === inst.id ? 0.5 : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className='relative z-10 w-48 h-48 flex items-center justify-center p-4 bg-white rounded-[2rem] overflow-hidden border-4 border-sky-800/50 shadow-2xl group-hover:border-sky-500/50 transition-colors duration-500'
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
                        className='absolute bottom-0 left-0 w-full p-8 pt-12 z-20 flex flex-col bg-gradient-to-t from-slate-950 via-sky-950/90 to-transparent'
                      >
                        <h3 className='text-2xl font-bold text-white mb-3 tracking-tight'>
                          {inst.title}
                        </h3>
                        <p className='text-sm text-slate-300 mb-4 line-clamp-2'>
                          {inst.description}
                        </p>
                        <div className='flex flex-wrap gap-2 mb-6'>
                          {inst.points.map((point, i) => (
                            <span key={i} className='text-[10px] uppercase tracking-wider font-bold bg-sky-900/50 text-sky-300 py-1 px-2.5 rounded-full border border-sky-800'>
                              {point}
                            </span>
                          ))}
                        </div>
                        <div className='inline-flex items-center justify-center w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-colors shadow-md'>
                          {inst.buttonText}
                          <ExternalLink className='ml-2 w-4 h-4' />
                        </div>
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
              <div className='p-10 md:p-12 bg-slate-50 rounded-[2rem] border border-slate-200 hover:border-emerald-300 transition-colors shadow-lg hover:shadow-xl'>
                <Landmark className='w-12 h-12 text-emerald-600 mb-6' />
                <h3 className='text-2xl font-bold mb-4 tracking-tight text-slate-900'>
                  Administración Pública
                </h3>
                <p className='text-slate-600 leading-relaxed text-lg'>
                  Soluciones diseñadas bajo estrictos estándares de
                  transparencia, accesibilidad y eficiencia para el ciudadano.
                </p>
              </div>
              <div className='p-10 md:p-12 bg-slate-50 rounded-[2rem] border border-slate-200 hover:border-emerald-300 transition-colors shadow-lg hover:shadow-xl'>
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

      {/* ── DIALOG ── */}
      <AnimatePresence>
        {selectedInstitution && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeDialog}
              className='fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm'
            />

            {/* Panel */}
            <motion.div
              key="dialog"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className='fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none'
            >
              <div
                onClick={e => e.stopPropagation()}
                className='pointer-events-auto relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-slate-200 flex flex-col'
              >
                {/* Header */}
                <div className='sticky top-0 z-10 flex items-center gap-4 px-8 py-5 bg-white/95 backdrop-blur border-b border-slate-100'>
                  <div className='w-14 h-14 flex-shrink-0 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center overflow-hidden p-1.5'>
                    <img
                      src={selectedInstitution.detail.logoDetail}
                      alt={selectedInstitution.detail.name}
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-xs font-bold uppercase tracking-widest text-emerald-600 mb-0.5'>Caso de Éxito</p>
                    <h2 className='text-xl md:text-2xl font-black text-slate-900 leading-tight truncate'>
                      {selectedInstitution.detail.name}
                    </h2>
                  </div>
                  <button
                    onClick={closeDialog}
                    aria-label="Cerrar"
                    className='ml-auto flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors'
                  >
                    <X className='w-5 h-5' />
                  </button>
                </div>

                {/* Body */}
                <div className='p-8 flex flex-col gap-10'>
                  {/* Tags */}
                  <div className='flex flex-wrap gap-2'>
                    {selectedInstitution.points.map((point, i) => (
                      <span
                        key={i}
                        className='text-xs uppercase tracking-wider font-bold bg-sky-50 text-sky-700 py-1.5 px-3 rounded-full border border-sky-200'
                      >
                        {point}
                      </span>
                    ))}
                  </div>

                  {/* Descripción */}
                  <div className='space-y-4'>
                    {selectedInstitution.detail.description.map((paragraph, i) => (
                      <p key={i} className='text-slate-600 text-base leading-relaxed'>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Galería */}
                  {selectedInstitution.detail.gallery.length > 0 && (
                    <div>
                      <h3 className='text-sm font-bold uppercase tracking-widest text-slate-400 mb-4'>
                        Capturas del Proyecto
                      </h3>
                      <div className={`grid gap-4 ${selectedInstitution.detail.gallery.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                        {selectedInstitution.detail.gallery.map((imgSrc, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.08 }}
                            className='rounded-2xl overflow-hidden border border-slate-200 shadow-sm group'
                          >
                            <img
                              src={imgSrc}
                              alt={`Captura ${index + 1}`}
                              className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105'
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Botones de acción */}
                  <div className='flex flex-wrap gap-3 pt-2'>
                    {selectedInstitution.detail.buttons.map((btn, i) => (
                      <a
                        key={i}
                        href={btn.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-sm text-sm'
                      >
                        {btn.text}
                        <ArrowUpRight className='w-4 h-4' />
                      </a>
                    ))}
                    <button
                      onClick={closeDialog}
                      className='inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors text-sm'
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
