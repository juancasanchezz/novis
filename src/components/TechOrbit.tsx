import { motion } from 'framer-motion'
import logoNovis from '../assets/logo-novis-52px.png'

export function TechOrbit() {
  const technologies = [
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', ring: 1, angle: 0 },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', ring: 1, angle: 72 },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', ring: 1, angle: 144 },
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', ring: 1, angle: 216 },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', ring: 1, angle: 288 },
    { name: 'AWS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', ring: 2, angle: 36 },
    { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', ring: 2, angle: 120 },
    { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', ring: 2, angle: 204 },
    { name: 'Redis', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', ring: 2, angle: 288 },
  ]

  const ring1Radius = 130
  const ring2Radius = 200

  const getPosition = (angle: number, radius: number) => {
    const rad = (angle * Math.PI) / 180
    return {
      x: Math.cos(rad) * radius,
      y: Math.sin(rad) * radius,
    }
  }

  return (
    <section className='relative py-24 md:py-32 bg-slate-50 overflow-hidden'>
      {/* Malla de cuadrícula */}
      <div className='absolute inset-0 bg-grid-light opacity-60 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_50%,transparent_100%)]' />

      {/* Orb de fondo */}
      <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none' />

      {/* Línea superior */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>

          {/* Textos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className='inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-6'>
              Arquitectura Enterprise
            </span>

            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight'>
              Stack tecnológico de{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400'>
                vanguardia
              </span>
            </h2>

            <p className='text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-10'>
              Implementamos arquitecturas modernas, seguras y altamente escalables. Seleccionamos las herramientas que garantizan el mejor rendimiento para entornos críticos.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              {[
                'Arquitecturas Cloud Nativas',
                'Microservicios y APIs REST',
                'Bases de Datos Escalables',
                'CI/CD y DevOps',
                'Seguridad y Cumplimiento ENS',
                'E-Learning Avanzado (Moodle)',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className='flex items-center bg-white shadow-sm border border-slate-200 rounded-xl px-4 py-3 group hover:border-emerald-500/30 transition-all duration-300'
                >
                  <div className='w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 group-hover:shadow-[0_0_6px_rgba(16,185,129,0.8)] transition-shadow' />
                  <span className='text-sm text-slate-600 group-hover:text-slate-900 transition-colors'>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Ecosistema orbital */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className='relative flex justify-center items-center h-[480px] lg:h-[520px]'
          >
            {/* SVG con anillos que rotan */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <svg
                viewBox='0 0 500 500'
                className='w-full h-full'
              >
                {/* Anillo interior — rota hacia adelante */}
                <motion.circle
                  cx='250' cy='250' r='130'
                  fill='none'
                  stroke='url(#ring1Gradient)'
                  strokeWidth='1'
                  strokeDasharray='6 10'
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '250px 250px' }}
                />

                {/* Anillo exterior — rota en sentido contrario */}
                <motion.circle
                  cx='250' cy='250' r='200'
                  fill='none'
                  stroke='url(#ring2Gradient)'
                  strokeWidth='1'
                  strokeDasharray='4 14'
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '250px 250px' }}
                />

                {/* Anillo de resplandor central */}
                <circle cx='250' cy='250' r='55' fill='none' stroke='rgba(16,185,129,0.15)' strokeWidth='30' />

                <defs>
                  <linearGradient id='ring1Gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                    <stop offset='0%' stopColor='rgba(16,185,129,0.6)' />
                    <stop offset='50%' stopColor='rgba(52,211,153,0.2)' />
                    <stop offset='100%' stopColor='rgba(16,185,129,0.6)' />
                  </linearGradient>
                  <linearGradient id='ring2Gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                    <stop offset='0%' stopColor='rgba(34,211,238,0.4)' />
                    <stop offset='50%' stopColor='rgba(34,211,238,0.1)' />
                    <stop offset='100%' stopColor='rgba(34,211,238,0.4)' />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Centro — Logo NOVIS */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute z-30 w-28 h-28 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-200'
              style={{ boxShadow: '0 0 40px rgba(16,185,129,0.1), 0 0 80px rgba(16,185,129,0.05)' }}
            >
              <img src={logoNovis} alt='NOVIS' className='w-16 h-auto' />
            </motion.div>

            {/* Nodos — Ring 1 */}
            {technologies.filter(t => t.ring === 1).map((tech, index) => {
              const pos = getPosition(tech.angle, ring1Radius)
              return (
                <motion.div
                  key={tech.name}
                  className='absolute z-20 w-14 h-14 bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-center p-2.5 hover:scale-125 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer group/tech'
                  style={{
                    left: `calc(50% + ${pos.x}px - 28px)`,
                    top: `calc(50% + ${pos.y}px - 28px)`,
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4 + index * 0.7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.4,
                  }}
                  title={tech.name}
                >
                  <img src={tech.url} alt={tech.name} className='w-full h-full object-contain' />
                  <span className='absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 whitespace-nowrap opacity-0 group-hover/tech:opacity-100 transition-opacity'>
                    {tech.name}
                  </span>
                </motion.div>
              )
            })}

            {/* Nodos — Ring 2 */}
            {technologies.filter(t => t.ring === 2).map((tech, index) => {
              const pos = getPosition(tech.angle, ring2Radius)
              return (
                <motion.div
                  key={tech.name}
                  className='absolute z-20 w-12 h-12 bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-center p-2 hover:scale-125 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer group/tech'
                  style={{
                    left: `calc(50% + ${pos.x}px - 24px)`,
                    top: `calc(50% + ${pos.y}px - 24px)`,
                  }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5 + index * 0.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                  title={tech.name}
                >
                  <img src={tech.url} alt={tech.name} className='w-full h-full object-contain' />
                  <span className='absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 whitespace-nowrap opacity-0 group-hover/tech:opacity-100 transition-opacity'>
                    {tech.name}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
