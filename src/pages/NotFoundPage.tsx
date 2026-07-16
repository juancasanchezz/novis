import { motion } from 'framer-motion'
import { Home, ArrowRight, ServerCrash } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title key='title'>Novis - Página No Encontrada</title>
      </Helmet>

      <div className='min-h-[calc(100vh-80px)] bg-slate-50 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden'>
        {/* Efectos de fondo tecnológicos */}
        <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        {/* Resplandor verde de fondo */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[120px] pointer-events-none'></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='relative z-10 flex flex-col items-center max-w-2xl mx-auto'
        >
          {/* Icono animado */}
          <motion.div
            animate={{ rotate: [0, -5, 5, -5, 0], y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className='w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-xl border border-slate-200 relative'
          >
            <div className='absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-4 border-white animate-pulse shadow-sm'></div>
            <ServerCrash className='w-12 h-12 text-emerald-600' />
          </motion.div>

          {/* Texto 404 */}
          <h1 className='text-8xl md:text-9xl font-extrabold text-slate-900 tracking-tighter mb-4 drop-shadow-sm'>
            4<span className='text-emerald-500'>0</span>4
          </h1>

          <h2 className='text-2xl md:text-3xl font-bold text-slate-800 mb-6 tracking-tight'>
            ¡Ups! Conexión no encontrada
          </h2>

          <p className='text-lg text-slate-600 mb-10 leading-relaxed font-medium'>
            Parece que el enlace que buscas está roto, ha sido movido a otro
            servidor o simplemente nunca existió. No te preocupes, volvamos a un
            entorno seguro.
          </p>

          {/* Botones de acción */}
          <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
            <Link
              to='/'
              className='inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-emerald-600/30 group'
            >
              <Home className='mr-2 w-5 h-5' />
              Volver al Inicio
            </Link>

            <Link
              to='/contacto'
              className='inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl transition-all border border-slate-300 shadow-sm group'
            >
              Contactar soporte
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  )
}
