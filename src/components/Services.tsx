import { motion } from 'framer-motion'
import { Code2, Lightbulb, Wrench, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Desarrollo a Medida',
    description:
      'Soluciones personalizadas y escalables. Optimizamos sus procesos internos con tecnologías de última generación y metodologías ágiles adaptadas a cada cliente.',
    icon: Code2,
    features: ['APIs REST & GraphQL', 'Arquitecturas microservicios', 'Integración CI/CD'],
    gradient: 'from-emerald-500/20 to-cyan-500/10',
    glow: 'rgba(16,185,129,0.15)',
    span: 'lg:col-span-3',
  },
  {
    title: 'Consultoría en Software',
    description:
      'Asesoramiento experto para maximizar su potencial tecnológico. Evaluamos sus necesidades y diseñamos estrategias a su medida.',
    icon: Lightbulb,
    features: ['Auditoría tecnológica', 'Hoja de ruta digital', 'Estrategia cloud'],
    gradient: 'from-violet-500/15 to-purple-500/10',
    glow: 'rgba(139,92,246,0.1)',
    span: 'lg:col-span-3',
  },
  {
    title: 'Soporte y Evolución',
    description:
      'Mantenimiento continuo y soporte técnico confiable para asegurar el rendimiento, la seguridad y la actualización de sus sistemas críticos.',
    icon: Wrench,
    features: ['SLA garantizado', 'Actualizaciones proactivas', 'Monitoreo 24/7'],
    gradient: 'from-sky-500/15 to-blue-500/10',
    glow: 'rgba(14,165,233,0.1)',
    span: 'lg:col-span-6',
  },
]

export function Services() {
  return (
    <section className='relative py-24 md:py-32 bg-slate-900 overflow-hidden'>
      {/* Malla de cuadrícula */}
      <div className='absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]' />

      {/* Orbs decorativos */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none' />
      <div className='absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/4 rounded-full blur-[100px] pointer-events-none' />

      {/* Línea superior */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Cabecera */}
        <div className='text-center max-w-3xl mx-auto mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className='inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6'>
              Nuestras Capacidades
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-tight'
          >
            Servicios que{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400'>
              transforman
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-lg md:text-xl text-slate-400 leading-relaxed font-light'
          >
            Acompañamos a instituciones y empresas en su transformación digital
            mediante soluciones tecnológicas robustas, escalables y seguras.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-5 mb-16'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`relative group rounded-3xl p-7 md:p-9 overflow-hidden glass-dark transition-all duration-500 cursor-default ${service.span}`}
              style={{ '--glow': service.glow } as React.CSSProperties}
            >
              {/* Fondo gradient hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

              {/* Brillo en la esquina superior derecha */}
              <div className='absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

              {/* Borde superior neon en hover */}
              <div className='absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

              <div className='relative z-10'>
                {/* Ícono */}
                <div className='w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/15 group-hover:border-emerald-500/30 transition-all duration-500'>
                  <service.icon
                    className='w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors duration-500'
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className='text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-100 transition-colors duration-300'>
                  {service.title}
                </h3>

                <p className='text-slate-400 leading-relaxed text-sm md:text-base font-light mb-6 group-hover:text-slate-300 transition-colors duration-300'>
                  {service.description}
                </p>

                {/* Features */}
                <div className='flex flex-wrap gap-2'>
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className='inline-flex items-center gap-1.5 text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-300'
                    >
                      <CheckCircle className='w-3 h-3 text-emerald-500/60' />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className='text-center'
        >
          <Link
            to='/servicios'
            className='relative inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white rounded-2xl transition-all duration-300 overflow-hidden group glass-dark hover:border-emerald-500/40 hover:-translate-y-0.5'
          >
            <span className='absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out' />
            <span className='relative'>Ver todos los servicios</span>
            <ArrowRight className='ml-3 w-5 h-5 relative group-hover:translate-x-1 transition-transform' strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
