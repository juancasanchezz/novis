import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className='relative bg-gray-900 border-b border-gray-800'>
      {/* 1. IMAGEN DE FONDO Y OVERLAY */}
      {/* Sustituye la URL por la ruta de vuestra imagen original, ej: src={`../assets/hero-bg.jpg`} */}
      <div
        className='absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>

      {/* Degradado para oscurecer los bordes y asegurar la lectura */}
      <div className='absolute inset-0 z-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent'></div>

      {/* 2. CONTENIDO PRINCIPAL (Alineado a la izquierda, muy corporativo) */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 relative z-10'>
        <div className='max-w-3xl'>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6'>
              Innovación en <br />
              <span className='text-green-500'>Consultoría y Tecnología</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <p className='text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl border-l-2 border-green-500 pl-6'>
              Ideas Innovadoras, Soluciones Transformadoras. Impulsamos el
              futuro de instituciones y empresas con desarrollo de software a
              medida y consultoría estratégica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className='flex flex-col sm:flex-row gap-4'
          >
            {/* Botón principal estricto (bordes menos redondeados) */}
            <a
              href='#'
              className='inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors'
            >
              Contáctanos
              <ArrowRight className='ml-2 w-5 h-5' strokeWidth={2} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
