import { motion } from 'framer-motion'
import logoNovis from '../assets/logo-novis-52px.png' // Usamos el logo más limpio para dark mode

export function TechOrbit () {
  const technologies = [
    {
      name: 'React',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Node.js',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'TypeScript',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'AWS',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
    {
      name: 'PostgreSQL',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      name: 'Docker',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
    {
      name: 'Git',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
  ]

  return (
    <section className='py-32 bg-white relative overflow-hidden border-t border-slate-200'>
      {/* Fondo de cuadrícula tecnológica (Grid) */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
          {/* Textos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className='inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm'>
              Arquitectura Enterprise
            </span>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight drop-shadow-sm'>
              Stack tecnológico de <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-500'>vanguardia</span>
            </h2>
            <p className='text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-10'>
              Implementamos arquitecturas modernas, seguras y altamente escalables. Seleccionamos cuidadosamente las herramientas que garantizan el mejor rendimiento y la máxima fiabilidad para entornos críticos.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {[
                'Arquitecturas Cloud Nativas',
                'Microservicios y APIs REST',
                'Bases de Datos Escalables',
                'Integración y Despliegue Continuo (CI/CD)',
                'Seguridad y Cumplimiento',
                'E-Learning Avanzado (Moodle)',
              ].map((item, i) => (
                <div
                  key={i}
                  className='flex items-center text-slate-700 font-medium bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-white transition-colors shadow-sm hover:shadow-md'
                >
                  <div className='w-2 h-2 bg-emerald-500 rounded-full mr-4 shadow-sm'></div>{' '}
                  <span className='text-sm'>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ecosistema Visual Flotante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='relative flex justify-center items-center h-[400px] lg:h-[500px]'
          >
            {/* Círculo de fondo brillante */}
            <div className='absolute w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl'></div>

            {/* Centro de gravedad */}
            <div className='absolute z-30 w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-200 rotate-12 hover:rotate-0 transition-transform duration-700 backdrop-blur-xl'>
              <img src={logoNovis} alt='NOVIS' className='w-16 h-auto drop-shadow-sm' />
            </div>

            {/* Nodos Tecnológicos Flotantes */}
            {technologies.map((tech, index) => {
              // Posicionamiento aleatorio controlado
              const angle = (index / technologies.length) * Math.PI * 2;
              const radius = 160 + (index % 2) * 40; // Alternar radios
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, (index % 2 === 0 ? 10 : -10), 0],
                  }}
                  transition={{
                    duration: 4 + (index % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  className='absolute z-20 w-16 h-16 bg-white rounded-2xl shadow-2xl border border-slate-100 flex items-center justify-center p-3 hover:scale-125 transition-transform cursor-pointer'
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  title={tech.name}
                >
                  <img
                    src={tech.url}
                    alt={tech.name}
                    className='w-full h-full object-contain'
                  />
                </motion.div>
              )
            })}

            {/* Líneas de conexión abstractas (SVG) */}
            <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-20" viewBox="0 0 500 500">
              <circle cx="250" cy="250" r="160" fill="none" stroke="currentColor" className="text-emerald-500" strokeWidth="1" strokeDasharray="4 8" />
              <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" className="text-emerald-500" strokeWidth="1" strokeDasharray="2 12" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

