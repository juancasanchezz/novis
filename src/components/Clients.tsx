import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Importación de logos
import logo1 from '../assets/logo1-150x150.png'
import logo2 from '../assets/logo2-150x150.png'
import logo3 from '../assets/logo3-150x150.png'
import logo4 from '../assets/logo4-150x150.png'
import logo5 from '../assets/logo-infoex.png'

const institutions = [
  {
    id: 1,
    src: logo4,
    alt: 'Junta de Extremadura',
    link: '/clientes/instituciones/junta-de-extremadura',
  },
  {
    id: 2,
    src: logo3,
    alt: 'INCUAL',
    link: '/clientes/instituciones/instituto-nacional-de-las-cualificaciones',
  },
  {
    id: 3,
    src: logo2,
    alt: 'Diputación de Cáceres',
    link: '/clientes/instituciones/diputacion-de-caceres',
  },
  {
    id: 4,
    src: logo1,
    alt: 'Escuela de Administración Pública de Extremadura',
    link: '/clientes/instituciones/escuela-de-administracion-publica',
  },
  { id: 5, src: logo5, alt: 'INFOEX', link: '/clientes/instituciones/infoex' },
]

export function Clients() {
  // Array super duplicado para garantizar el scroll infinito visualmente
  const infiniteLogos = [...institutions, ...institutions, ...institutions, ...institutions, ...institutions, ...institutions]
  
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isInteracting, setIsInteracting] = useState(false) // Para pausar un momento cuando el usuario hace click

  // Efecto de Auto-Scroll suave
  useEffect(() => {
    let animationFrameId: number

    const scroll = () => {
      if (scrollRef.current && !isHovering && !isInteracting) {
        // Velocidad de scroll (píxeles por frame)
        scrollRef.current.scrollLeft += 1

        // Magia del scroll infinito:
        // Si hemos superado la mitad del ancho total desplazable, reseteamos al inicio suavemente
        const maxScroll = scrollRef.current.scrollWidth / 2
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollLeft -= maxScroll
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovering, isInteracting])

  // Controles Manuales
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      setIsInteracting(true)
      const scrollAmount = 400 // Cantidad de px a desplazar por click
      
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })

      // Reanudar el auto-scroll después de 2 segundos de inactividad
      setTimeout(() => {
        setIsInteracting(false)
      }, 2000)
    }
  }

  return (
    <section className='py-24 md:py-32 bg-gradient-to-b from-sky-50 via-white to-emerald-50 border-y border-emerald-100 overflow-hidden relative shadow-sm'>
      {/* Elementos decorativos de fondo */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none'>
        <div className='absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-400/5 blur-[120px]'></div>
        <div className='absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-sky-400/5 blur-[100px]'></div>
      </div>

      <div className='max-w-[100vw] mx-auto relative z-10'>
        <div className='text-center mb-16 md:mb-24 px-4'>
          <span className='inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm'>
            Confianza y Excelencia
          </span>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 drop-shadow-sm tracking-tight leading-tight'>
            Nuestros clientes <br className='md:hidden' /> nos <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>avalan</span>
          </h2>
          <p className='text-slate-600 text-lg md:text-xl font-medium max-w-3xl mx-auto'>
            Instituciones públicas y empresas privadas líderes confían en nuestra experiencia para impulsar su transformación digital.
          </p>
        </div>

        {/* Contenedor Principal del Carrusel */}
        <div 
          className='relative group w-full'
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Sombras en los bordes para desvanecimiento superpuestas a las flechas */}
          <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Flecha Izquierda */}
          <button 
            onClick={() => handleScroll('left')}
            className='absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 border border-slate-200 text-emerald-600 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg'
            aria-label="Anterior cliente"
          >
            <ChevronLeft className='w-6 h-6 md:w-8 md:h-8' />
          </button>

          {/* Flecha Derecha */}
          <button 
            onClick={() => handleScroll('right')}
            className='absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 border border-slate-200 text-emerald-600 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg'
            aria-label="Siguiente cliente"
          >
            <ChevronRight className='w-6 h-6 md:w-8 md:h-8' />
          </button>

          {/* Carrusel Scrollable */}
          <div 
            ref={scrollRef}
            className='flex items-center space-x-12 md:space-x-20 overflow-x-auto hide-scrollbar w-full px-8 md:px-24 snap-x snap-mandatory'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteLogos.map((logo, index) => (
              <Link
                key={`${logo.id}-${index}`}
                to={logo.link}
                // Reducimos el padding para que la imagen ocupe más espacio real en la tarjeta
                // Cambiamos el fondo a blanco para que el logo resalte perfectamente y se fusione si tiene fondo blanco
                className='flex-shrink-0 w-48 md:w-64 h-28 md:h-36 relative flex items-center justify-center group/logo cursor-pointer bg-white rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all duration-500 p-2 md:p-4 shadow-sm hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] snap-center overflow-hidden'
                title={`Ver proyecto de ${logo.alt}`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  // Aumentamos la escala base para que se vean mucho más grandes y claros
                  className='max-h-full max-w-full object-contain scale-[1.3] md:scale-[1.5] transition-transform duration-500 group-hover/logo:scale-[1.45] md:group-hover/logo:scale-[1.6]'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

