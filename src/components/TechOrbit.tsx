import { motion } from 'framer-motion'
import logoNovis from '../assets/logo-novis-alta.png'

export function TechOrbit() {
  // Anillo Interior (Tecnologías Core)
  const innerOrbit = [
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
  ]

  // Anillo Exterior (Infraestructura y Plataformas)
  const outerOrbit = [
    {
      name: 'AWS',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
    {
      name: 'PostgreSQL',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      name: 'Moodle',
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/moodle/moodle-original.svg',
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
    <section className='py-24 bg-gray-50 overflow-hidden border-t border-gray-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Textos */}
          <div>
            <span className='text-green-600 font-bold tracking-widest uppercase text-sm mb-3 block'>
              Ecosistema NOVIS
            </span>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight'>
              Dominamos las herramientas del futuro
            </h2>
            <p className='text-xl text-gray-600 leading-relaxed mb-8'>
              No nos atamos a una sola tecnología. Estudiamos tu caso y
              seleccionamos el stack técnico perfecto para garantizar que tu
              software sea rápido, seguro y altamente escalable.
            </p>
            <div className='grid grid-cols-2 gap-4'>
              {[
                'Arquitecturas Cloud',
                'Desarrollo Frontend Moderno',
                'Bases de Datos',
                'E-Learning',
                'APIs RESTful',
                'DevOps',
              ].map((item, i) => (
                <div
                  key={i}
                  className='flex items-center text-gray-700 font-semibold bg-white p-3 rounded-lg shadow-sm border border-gray-100'
                >
                  <div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>{' '}
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Sistema Solar Interactivo */}
          <div className='relative flex justify-center items-center h-[500px]'>
            {/* -- CLAVE: Logo Central con Interactividad -- */}
            <motion.div
              // Animación de pulso continuo (fondo)
              animate={{
                boxShadow: [
                  '0px 0px 0px 0px rgba(34,197,94,0.15)',
                  '0px 0px 0px 20px rgba(34,197,94,0)',
                  '0px 0px 0px 0px rgba(34,197,94,0.15)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              // Animación al pasar el ratón (Escritorio)
              whileHover={{
                scale: 1.1,
                rotate: 10,
                transition: { duration: 0.3 },
              }}
              // Animación al pulsar/clickar (Móvil y escritorio)
              whileTap={{
                scale: 0.95,
                rotate: -10,
                transition: { duration: 0.1 },
              }}
              className='absolute z-30 w-28 h-28 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-green-100 cursor-pointer'
              title='NOVIS Software - Pulsa para ver una animación rápida'
            >
              <img src={logoNovis} alt='NOVIS' className='w-16 h-auto' />
            </motion.div>

            {/* ÓRBITA INTERIOR (Core Tech) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className='absolute z-20 w-[240px] h-[240px] rounded-full border-2 border-green-500/20 border-dashed flex justify-center items-center'
            >
              {innerOrbit.map((tech, index) => {
                const angle = (index / innerOrbit.length) * 360
                return (
                  <motion.div
                    key={index}
                    className='absolute w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center p-2.5'
                    style={{
                      transform: `rotate(${angle}deg) translateY(-120px) rotate(-${angle}deg)`,
                    }}
                    animate={{ rotate: -360 }} // Contra-rotación para iconos rectos
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <img
                      src={tech.url}
                      alt={tech.name}
                      className='w-full h-full object-contain'
                      title={tech.name}
                    />
                  </motion.div>
                )
              })}
            </motion.div>

            {/* ÓRBITA EXTERIOR (Infra y Plataformas) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className='absolute z-10 w-[420px] h-[420px] rounded-full border border-gray-300 border-dashed flex justify-center items-center'
            >
              {outerOrbit.map((tech, index) => {
                const angle = (index / outerOrbit.length) * 360
                return (
                  <motion.div
                    key={index}
                    className='absolute w-16 h-16 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center p-3'
                    style={{
                      transform: `rotate(${angle}deg) translateY(-210px) rotate(-${angle}deg)`,
                    }}
                    animate={{ rotate: 360 }} // Contra-rotación inversa
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <img
                      src={tech.url}
                      alt={tech.name}
                      className='w-full h-full object-contain'
                      title={tech.name}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
