import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Importación de logos
import logo1 from '../assets/Logo_EAP.png'
import logo2 from '../assets/dipcc.png'
import logo3 from '../assets/logo-incual-3.jpg'
import logo4 from '../assets/junta-extremadura.png'
import logo5 from '../assets/LOGOTIPO_INFOEX.png'
import logo6 from '../assets/transformacion.png'
import logo7 from '../assets/logo avanza blanco.png'
import logo8 from '../assets/logotipo-Ayuntamiento-842x321.png'
import logo9 from '../assets/logo_diputacion_color_001.svg'

const institutions = [
  { id: 1, src: logo1, alt: 'Escuela de Administración Pública de Extremadura', link: '/clientes/instituciones/escuela-de-administracion-publica' },
  { id: 2, src: logo2, alt: 'Diputación de Cáceres', link: '/clientes/instituciones/diputacion-de-caceres' },
  { id: 3, src: logo3, alt: 'INCUAL', link: '/clientes/instituciones/instituto-nacional-de-las-cualificaciones' },
  { id: 4, src: logo4, alt: 'Junta de Extremadura', link: '/clientes/instituciones/junta-de-extremadura' },
  { id: 5, src: logo5, alt: 'INFOEX', link: '/clientes/instituciones/infoex' },
  { id: 6, src: logo6, alt: 'Trans-Formación', link: '/clientes/empresas/cistus' },
  { id: 7, src: logo7, alt: 'Avanza', link: '/clientes/empresas/avanza' },
  { id: 8, src: logo8, alt: 'Ayuntamiento de Cáceres', link: '/clientes/instituciones/ayuntamiento-de-caceres' },
  { id: 9, src: logo9, alt: 'Diputación de Badajoz', link: '/clientes/instituciones/diputacion-de-badajoz' },
]

export function Clients () {
  // Array duplicado para scroll infinito
  const infiniteLogos = [
    ...institutions,
    ...institutions,
    ...institutions,
    ...institutions,
    ...institutions,
    ...institutions,
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  // Auto-scroll suave
  useEffect(() => {
    let animationFrameId: number

    const scroll = () => {
      if (scrollRef.current && !isHovering) {
        scrollRef.current.scrollLeft += 2.0

        const maxScroll = scrollRef.current.scrollWidth / 2
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollLeft -= maxScroll
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovering])

  return (
    <section className='relative py-12 md:py-20 bg-transparent overflow-hidden'>
      <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Contenedor tipo Card con fondo azul cielo y sombras */}
        <div className='relative rounded-[2.5rem] bg-sky-50 border border-sky-100 shadow-xl shadow-sky-900/5 overflow-hidden py-16 md:py-24'>
          {/* Fondo con malla de puntos interna a la card */}
          <div className='absolute inset-0 bg-dots-light opacity-50' />

          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-400/10 rounded-full blur-[100px] pointer-events-none' />

          <div className='relative z-10 mb-12'>
            {/* Cabecera */}
            <div className='text-center mb-16 px-4'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className='inline-flex items-center px-5 py-2 rounded-full bg-white border border-sky-200 text-sky-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm'>
                  Confianza y Excelencia
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-5 tracking-tighter leading-tight'
              >
                Nuestros clientes nos{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-400'>
                  avalan
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='text-slate-600 text-lg md:text-xl font-light max-w-2xl mx-auto'
              >
                Instituciones públicas y empresas privadas líderes confían en nuestra
                experiencia para impulsar su transformación digital.
              </motion.p>
            </div>
          </div>

          {/* Carrusel */}
          <div className='relative w-full overflow-hidden'>
            {/* Fade bordes usando color sky-50 */}
            <div className='absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-sky-50 to-transparent z-10 pointer-events-none' />
            <div className='absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-sky-50 to-transparent z-10 pointer-events-none' />

            {/* Track del carrusel */}
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className='flex items-center gap-5 md:gap-6 overflow-x-auto hide-scrollbar w-full px-8 md:px-24 py-4'
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {infiniteLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className='flex-shrink-0 w-74 md:w-56 h-24 md:h-28 relative flex items-center justify-center rounded-2xl transition-all duration-500 p-3 md:p-5 group/logo'
                  title={`Ver proyecto de ${logo.alt}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className='max-h-full max-w-full object-contain scale-[1.1] group-hover/logo:scale-[1.2] transition-transform duration-500 filter grayscale opacity-60 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 mix-blend-multiply'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
