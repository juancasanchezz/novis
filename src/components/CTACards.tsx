import { motion } from 'framer-motion'
import { Briefcase, MessageSquare, ArrowRight, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

// Partículas de código para la tarjeta de empleo
const CODE_CHARS = ['</', '{}', '=>', '()', '[]', '&&', '||', '++', '--', 'fn', 'if', 'for']
const CODE_PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  char: CODE_CHARS[i % CODE_CHARS.length],
  left: `${Math.random() * 90 + 5}%`,
  top: `${Math.random() * 90 + 5}%`,
  opacity: Math.random() * 0.12 + 0.04,
  duration: Math.random() * 4 + 6,
  delay: Math.random() * 3,
}))

export function CTACards() {
  return (
    <section className='relative py-24 md:py-32 bg-white overflow-hidden'>
      {/* Malla de cuadrícula */}
      <div className='absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]' />

      {/* Línea decorativa superior con gradiente lime */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500/20 to-transparent' />

      {/* Orbs */}
      <div className='absolute top-0 left-1/4 w-[400px] h-[400px] bg-lime-500/5 rounded-full blur-[120px] pointer-events-none' />
      <div className='absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-cyan-500/4 rounded-full blur-[100px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>

        {/* Encabezado de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase mb-5 shadow-sm'>
            <Sparkles className='w-3 h-3 text-lime-500' />
            ¿Listo para el siguiente paso?
          </span>
          <h2 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tighter'>
            Hagamos algo{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-400'>extraordinario</span>
          </h2>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-5 lg:gap-6'>

          {/* TARJETA 1 — EMPLEO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='relative rounded-3xl p-8 md:p-12 flex flex-col items-start overflow-hidden group bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-lime-500/30 transition-all duration-500'
          >
            {/* Partículas de código de fondo */}
            {CODE_PARTICLES.map((p) => (
              <motion.span
                key={p.id}
                className='absolute font-mono text-lime-400 text-sm font-bold pointer-events-none select-none'
                style={{ left: p.left, top: p.top, opacity: p.opacity }}
                animate={{ opacity: [p.opacity, p.opacity * 3, p.opacity] }}
                transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
              >
                {p.char}
              </motion.span>
            ))}

            {/* Orb de fondo */}
            <div className='absolute -top-20 -right-20 w-48 h-48 bg-lime-500/8 rounded-full blur-3xl group-hover:bg-lime-500/15 transition-all duration-700 pointer-events-none' />

            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.5 }}
              className='relative z-10 w-14 h-14 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center mb-8 group-hover:border-lime-500/40 transition-all duration-300 shadow-sm'
            >
              <Briefcase className='w-7 h-7 text-lime-600' strokeWidth={1.5} />
            </motion.div>

            <h3 className='relative z-10 text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight'>
              Desarrolla tu{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-400'>
                carrera
              </span>
            </h3>

            <p className='relative z-10 text-slate-600 text-lg mb-10 max-w-sm leading-relaxed font-light group-hover:text-slate-800 transition-colors duration-300'>
              Únete a un equipo de ingenieros y consultores de élite. Construimos el software que mueve instituciones.
            </p>

            <div className='relative z-10 flex items-center gap-3 mb-8 text-sm text-slate-500'>
              <Users className='w-4 h-4 text-lime-600/80' />
              <span>Equipo multidisciplinar en crecimiento</span>
            </div>

            <Link
              to='/contacto'
              state={{ mode: 'empleo' }}
              className='relative z-10 mt-auto inline-flex items-center px-7 py-3.5 bg-white border border-slate-200 hover:border-lime-500/40 text-slate-800 shadow-sm hover:shadow font-bold rounded-2xl transition-all duration-300 group/btn hover:bg-slate-50'
            >
              Ver ofertas abiertas
              <ArrowRight className='ml-2.5 w-4 h-4 group-hover/btn:translate-x-1 transition-transform' />
            </Link>
          </motion.div>

          {/* TARJETA 2 — CONTACTO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className='relative rounded-3xl p-8 md:p-12 flex flex-col items-start overflow-hidden group'
          >
            {/* Fondo con gradiente animado */}
            <div className='absolute inset-0 bg-gradient-to-br from-lime-50 via-lime-100/50 to-white rounded-3xl border border-lime-200 group-hover:border-lime-400/50 transition-all duration-500 shadow-sm group-hover:shadow-xl' />

            {/* Gradiente animado (brillo cambiante) */}
            <motion.div
              className='absolute inset-0 rounded-3xl pointer-events-none'
              animate={{
                background: [
                  'radial-gradient(circle at 20% 20%, rgba(16,185,129,0.15) 0%, transparent 60%)',
                  'radial-gradient(circle at 80% 80%, rgba(16,185,129,0.15) 0%, transparent 60%)',
                  'radial-gradient(circle at 20% 80%, rgba(16,185,129,0.15) 0%, transparent 60%)',
                  'radial-gradient(circle at 20% 20%, rgba(16,185,129,0.15) 0%, transparent 60%)',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            {/* Línea neon superior */}
            <div className='absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-lime-400/60 to-transparent' />

            <motion.div
              whileHover={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className='relative z-10 w-14 h-14 bg-white border border-lime-200 rounded-2xl flex items-center justify-center mb-8 group-hover:border-lime-400 transition-all duration-300 shadow-sm'
            >
              <MessageSquare className='w-7 h-7 text-lime-600' strokeWidth={1.5} />
            </motion.div>

            <h3 className='relative z-10 text-3xl lg:text-4xl font-black text-lime-950 mb-4 tracking-tight leading-tight'>
              Hablemos de tu
              <br />
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-400'>
                próximo proyecto
              </span>
            </h3>

            <p className='relative z-10 text-lime-900/70 text-lg mb-10 max-w-sm leading-relaxed font-light group-hover:text-lime-900 transition-colors duration-300'>
              Nuestros arquitectos de software están listos para analizar tus necesidades y proponer la mejor solución técnica.
            </p>

            <Link
              to='/contacto'
              state={{ mode: 'general' }}
              className='relative z-10 mt-auto inline-flex items-center px-7 py-3.5 bg-lime-600 hover:bg-lime-500 text-white font-bold rounded-2xl transition-all duration-300 group/btn overflow-hidden shadow-lg shadow-lime-600/30 hover:shadow-lime-500/50 hover:-translate-y-0.5'
            >
              <span className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700 skew-x-12' />
              <span className='relative'>Contactar un consultor</span>
              <ArrowRight className='ml-2.5 w-4 h-4 relative group-hover/btn:translate-x-1 transition-transform' />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
