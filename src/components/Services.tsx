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
    <section className='relative py-24 md:py-32 overflow-hidden border-b border-gray-800'>
      {/* 1. IMAGEN DE FONDO (Estilo conservador y fotográfico) */}
      <div
        className='absolute inset-0 z-0 opacity-30 mix-blend-luminosity bg-cover bg-center bg-fixed'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>

      {/* 2. OVERLAY / DEGRADADO OSCURO (Para dar legibilidad y seriedad) */}
      <div className='absolute inset-0 z-0 bg-gray-900/80'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Cabecera de la sección */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight'
          >
            Nuestros Servicios
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '4rem' }}
            viewport={{ once: true }}
            className='h-1.5 bg-green-500 mx-auto rounded-full mb-6'
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-lg text-gray-300 leading-relaxed'
          >
            Acompañamos a instituciones y empresas en su transformación digital
            mediante soluciones tecnológicas robustas, escalables y seguras.
          </motion.p>
        </div>

        {/* Grid de Anticipación de Servicios (Glassmorphism B2B) */}
        <div className='grid md:grid-cols-3 gap-6 lg:gap-8 mb-16'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              // Tarjetas semitransparentes, bordes finos, muy tecnológicas
              className='bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors duration-300 group'
            >
              <div className='w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 border border-green-500/30 group-hover:bg-green-500/30 transition-colors'>
                <service.icon
                  className='w-6 h-6 text-green-400'
                  strokeWidth={1.5}
                />
              </div>
              <h3 className='text-xl font-bold text-white mb-3'>
                {service.title}
              </h3>
              <p className='text-gray-400 leading-relaxed text-sm md:text-base'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* REDIRECCIÓN: Botón Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className='text-center'
        >
          <Link
            to='/servicios'
            className='inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors shadow-lg'
          >
            Ver todos los servicios en detalle
            <ArrowRight className='ml-2 w-5 h-5' strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
