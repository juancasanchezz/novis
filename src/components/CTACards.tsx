import { motion } from 'framer-motion'
import { Briefcase, MessageSquare, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom' // <-- Importamos Link para pasar el state

export function CTACards() {
  return (
    <section className='py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden'>
      {/* Fondo decorativo sutil */}
      <div className='absolute inset-0 opacity-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
          {/* TARJETA 1: EMPLEO (Blanca con bordes luminosos) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className='bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-green-500/20 hover:border-green-200 transition-all duration-300 p-10 md:p-14 flex flex-col items-center text-center group relative overflow-hidden'
          >
            {/* Resplandor superior verde en hover */}
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className='w-20 h-20 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-100 transition-colors'
            >
              <Briefcase
                className='w-10 h-10 text-green-600'
                strokeWidth={1.5}
              />
            </motion.div>

            <h3 className='text-3xl font-extrabold text-gray-900 mb-4 tracking-tight'>
              ¿Quieres trabajar con nosotros?
            </h3>

            <p className='text-gray-600 text-lg mb-10 max-w-sm leading-relaxed'>
              Envía tu currículum y únete a nuestro equipo de desarrollo y
              consultoría tecnológica.
            </p>

            {/* ENLACE CON STATE PARA ABRIR LA PESTAÑA EMPLEO */}
            <Link
              to='/contacto'
              state={{ mode: 'empleo' }} // <-- Pasamos el modo "empleo"
              className='mt-auto inline-flex items-center px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-md group-hover:shadow-lg w-full sm:w-auto justify-center'
            >
              Enviar CV ahora
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Link>
          </motion.div>

          {/* TARJETA 2: CONTACTO GENERAL (Verde Corporativo) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className='bg-gradient-to-br from-green-600 via-green-700 to-green-900 rounded-3xl shadow-xl shadow-green-900/20 hover:shadow-green-900/40 transition-all duration-300 p-10 md:p-14 flex flex-col items-center text-center group relative overflow-hidden'
          >
            {/* Patrón de fondo estilo "Tech" */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <motion.div
              whileHover={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className='w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:bg-white/20 transition-colors'
            >
              <MessageSquare
                className='w-10 h-10 text-white'
                strokeWidth={1.5}
              />
            </motion.div>

            <h3 className='text-3xl font-extrabold text-white mb-4 tracking-tight relative z-10'>
              ¿Tienes alguna duda?
            </h3>

            <p className='text-green-50 text-lg mb-10 max-w-sm leading-relaxed relative z-10'>
              ¡Te ayudamos! Ponte en contacto con nuestro equipo para resolver
              tus necesidades.
            </p>

            {/* ENLACE CON STATE PARA ABRIR LA PESTAÑA CONSULTAS */}
            <Link
              to='/contacto'
              state={{ mode: 'general' }} // <-- Pasamos el modo "general"
              className='mt-auto relative z-10 inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-md group-hover:shadow-lg w-full sm:w-auto justify-center'
            >
              Contactar equipo
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
