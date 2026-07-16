import { motion } from 'framer-motion'
import { Briefcase, MessageSquare, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CTACards() {
  return (
    <section className='py-32 bg-sky-50/30 border-t border-slate-200 relative overflow-hidden'>
      {/* Fondo decorativo topográfico o malla */}
      <div className='absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
          {/* TARJETA 1: EMPLEO (Clara Premium) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='bg-white border border-slate-200 shadow-md hover:shadow-lg rounded-[2rem] p-10 md:p-14 flex flex-col items-start group relative overflow-hidden transition-shadow'
          >
            {/* Brillo de fondo */}
            <div className='absolute -top-32 -right-32 w-64 h-64 bg-emerald-100 blur-[100px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50'></div>

            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className='w-16 h-16 bg-slate-50 border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-50 transition-colors backdrop-blur-md z-10'
            >
              <Briefcase className='w-8 h-8 text-emerald-600' strokeWidth={1.5} />
            </motion.div>

            <h3 className='text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight z-10'>
              Desarrolla tu <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>carrera</span>
            </h3>

            <p className='text-slate-600 text-lg mb-12 max-w-sm leading-relaxed font-light z-10'>
              Únete a un equipo de ingenieros y consultores de élite. Construimos el software que mueve instituciones.
            </p>

            <Link
              to='/contacto'
              state={{ mode: 'empleo' }}
              className='mt-auto inline-flex items-center px-8 py-4 bg-slate-100 text-slate-800 font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-sm w-full sm:w-auto justify-center group/btn z-10'
            >
              Ver ofertas abiertas
              <ArrowRight className='ml-3 w-5 h-5 group-hover/btn:translate-x-1 transition-transform' />
            </Link>
          </motion.div>

          {/* TARJETA 2: CONTACTO GENERAL (Verde Claro Premium) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className='bg-gradient-to-br from-emerald-50 via-white to-sky-50 border border-emerald-100 shadow-lg shadow-emerald-900/5 rounded-[2rem] p-10 md:p-14 flex flex-col items-start group relative overflow-hidden transition-shadow hover:shadow-xl'
          >
            {/* Textura sutil y brillos */}
            <div className='absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)] pointer-events-none'></div>

            <motion.div
              whileHover={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className='w-16 h-16 bg-white border border-emerald-100 shadow-sm rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-100 transition-colors backdrop-blur-md relative z-10'
            >
              <MessageSquare className='w-8 h-8 text-emerald-600' strokeWidth={1.5} />
            </motion.div>

            <h3 className='text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight relative z-10'>
              Hablemos de tu <br/>próximo proyecto
            </h3>

            <p className='text-slate-600 text-lg mb-12 max-w-sm leading-relaxed font-light relative z-10'>
              Nuestros arquitectos de software están listos para analizar tus necesidades y proponer la mejor solución técnica.
            </p>

            <Link
              to='/contacto'
              state={{ mode: 'general' }}
              className='mt-auto relative z-10 inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-colors shadow-md w-full sm:w-auto justify-center group/btn'
            >
              Contactar consultor
              <ArrowRight className='ml-3 w-5 h-5 group-hover/btn:translate-x-1 transition-transform' />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
