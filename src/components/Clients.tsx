import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Importación de logos
import logo1 from '../assets/logo1-150x150.png'
import logo2 from '../assets/logo2-150x150.png'
import logo3 from '../assets/logo3-150x150.png'
import logo4 from '../assets/logo4-150x150.png'
import logo5 from '../assets/logo-infoex.png'
import logo6 from '../assets/transformacion.png'
import logo7 from '../assets/logo avanza blanco.png'

const institutions = [
  { id: 1, src: logo4, alt: 'Junta de Extremadura', link: '/clientes/instituciones/junta-de-extremadura' },
  { id: 2, src: logo3, alt: 'INCUAL', link: '/clientes/instituciones/instituto-nacional-de-las-cualificaciones' },
  { id: 3, src: logo2, alt: 'Diputación de Cáceres', link: '/clientes/instituciones/diputacion-de-caceres' },
  { id: 4, src: logo1, alt: 'Escuela de Administración Pública de Extremadura', link: '/clientes/instituciones/escuela-de-administracion-publica' },
  { id: 5, src: logo5, alt: 'INFOEX', link: '/clientes/instituciones/infoex' },
  { id: 6, src: logo6, alt: 'Trans-Formación', link: '/clientes/empresas/cistus' },
  { id: 7, src: logo7, alt: 'Avanza', link: '/clientes/empresas/avanza' },
]

export function Clients() {
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
        scrollRef.current.scrollLeft += 0.8

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
    <section className='relative py-24 md:py-32 bg-slate-950 overflow-hidden'>
      {/* Fondo con malla de puntos */}
      <div className='absolute inset-0 bg-dots-dark opacity-40' />

      {/* Línea superior decorativa */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent' />

      {/* Orb de fondo */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/4 rounded-full blur-[100px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16'>
        {/* Cabecera */}
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className='inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm'>
              Confianza y Excelencia
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tighter leading-tight'
          >
            Nuestros clientes nos{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400'>
              avalan
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto'
          >
            Instituciones públicas y empresas privadas líderes confían en nuestra
            experiencia para impulsar su transformación digital.
          </motion.p>
        </div>
      </div>

      {/* Carrusel */}
      <div className='relative w-full'>
        {/* Fade bordes */}
        <div className='absolute top-0 left-0 w-32 md:w-48 h-full bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none' />
        <div className='absolute top-0 right-0 w-32 md:w-48 h-full bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none' />

        {/* Track del carrusel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className='flex items-center gap-5 md:gap-6 overflow-x-auto hide-scrollbar w-full px-8 md:px-24 py-4'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infiniteLogos.map((logo, index) => (
            <Link
              key={`${logo.id}-${index}`}
              to={logo.link}
              className='flex-shrink-0 w-44 md:w-56 h-24 md:h-28 relative flex items-center justify-center glass-dark glass-dark-hover rounded-2xl transition-all duration-500 p-3 md:p-5 group/logo overflow-hidden'
              title={`Ver proyecto de ${logo.alt}`}
            >
              {/* Glow en hover */}
              <div className='absolute inset-0 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl pointer-events-none' />

              <img
                src={logo.src}
                alt={logo.alt}
                className='max-h-full max-w-full object-contain scale-[1.1] group-hover/logo:scale-[1.25] transition-transform duration-500 filter brightness-75 group-hover/logo:brightness-100'
                style={{ filter: 'brightness(0.7) saturate(0.5)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = 'brightness(1) saturate(1)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.7) saturate(0.5)'
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
