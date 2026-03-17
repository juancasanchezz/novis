import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % institutions.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className='py-20 bg-gray-50 border-b border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 lg:p-16 overflow-hidden'
        >
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight'>
              Algunos de nuestros clientes
            </h2>
            <div className='w-16 h-1.5 bg-green-600 mx-auto rounded-full'></div>
          </div>

          {/* Pasamos a md:grid-cols-5 para que quepan perfectamente los 5 logos en una fila */}
          <div className='grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-8 items-center justify-items-center'>
            {institutions.map((logo, index) => {
              const isActive = index === activeIndex

              return (
                <Link
                  key={logo.id}
                  to={logo.link}
                  className='w-full flex justify-center items-center h-28 md:h-32 relative group cursor-pointer'
                  title={`Ver proyecto de ${logo.alt}`}
                >
                  <motion.img
                    src={logo.src}
                    alt={logo.alt}
                    animate={{
                      scale: isActive ? 1.4 : 1.1,
                      opacity: isActive ? 1 : 0.4,
                      filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
                    }}
                    // Añadimos un hover para que si el usuario pasa el ratón, se ilumine aunque no sea el activo
                    whileHover={{
                      scale: 1.4,
                      opacity: 1,
                      filter: 'grayscale(0%)',
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className='max-h-full max-w-[70%] md:max-w-[80%] object-contain absolute drop-shadow-sm group-hover:drop-shadow-lg transition-all'
                  />
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
