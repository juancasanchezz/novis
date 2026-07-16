import { motion } from 'framer-motion'
import { Code2, Lightbulb, Wrench, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

// Si tienes una imagen en assets, impórtala aquí. Por ahora uso un placeholder elegante.
// import bgImage from '../assets/servicios-bg.jpg';

const services = [
  {
    title: 'Desarrollo a Medida',
    description:
      'Soluciones personalizadas y escalables. Optimizamos sus procesos internos con tecnologías de última generación y metodologías ágiles.',
    icon: Code2,
  },
  {
    title: 'Consultoría en Software',
    description:
      'Asesoramiento experto para maximizar su potencial tecnológico. Evaluamos sus necesidades y diseñamos estrategias a su medida.',
    icon: Lightbulb,
  },
  {
    title: 'Soporte y Evolución',
    description:
      'Mantenimiento continuo y soporte técnico confiable para asegurar el rendimiento, la seguridad y la actualización de sus sistemas.',
    icon: Wrench,
  },
]

export function Services() {
  return (
    <section className='relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-100 via-sky-50 to-white border-b border-slate-200'>
      {/* 1. IMAGEN DE FONDO (Opcional, muy sutil) */}
      <div
        className='absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply bg-cover bg-center bg-fixed'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>

      {/* 2. OVERLAY PARA SUAVIZAR */}
      <div className='absolute inset-0 z-0 bg-gradient-to-t from-white via-transparent to-transparent'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Cabecera de la sección */}
        <div className='text-center max-w-3xl mx-auto mb-20'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight drop-shadow-sm'
          >
            Nuestros Servicios
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '4rem' }}
            viewport={{ once: true }}
            className='h-1.5 bg-emerald-500 mx-auto rounded-full mb-8 shadow-sm'
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-lg md:text-xl text-slate-600 leading-relaxed font-light'
          >
            Acompañamos a instituciones y empresas en su transformación digital
            mediante soluciones tecnológicas robustas, escalables y seguras.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 mb-20'>
          {services.map((service, index) => {
            // Asignación de spans para crear el efecto Bento Box
            let spanClasses = 'lg:col-span-2'
            if (index === 0) spanClasses = 'lg:col-span-4 md:col-span-2'
            if (index === 1) spanClasses = 'lg:col-span-2 md:col-span-1'
            if (index === 2) spanClasses = 'lg:col-span-6 md:col-span-1'

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-8 md:p-10 hover:bg-white transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-xl ${spanClasses}`}
              >
                {/* Resplandor hover */}
                <div className='absolute -inset-px bg-gradient-to-r from-emerald-500/0 via-emerald-100/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none'></div>

                <div className='w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-100 transition-transform duration-500 shadow-sm'>
                  <service.icon
                    className='w-7 h-7 text-emerald-600'
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className='text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-emerald-700 transition-colors'>
                  {service.title}
                </h3>
                <p className='text-slate-600 leading-relaxed text-base md:text-lg font-light'>
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Botón Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className='text-center'
        >
          <Link
            to='/servicios'
            className='inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgb(16,185,129,0.2)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.4)] hover:-translate-y-1 group'
          >
            Ver todos los servicios en detalle
            <ArrowRight className='ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform' strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
