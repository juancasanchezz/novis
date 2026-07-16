import { motion } from 'framer-motion'
import {
  Cpu,
  Smartphone,
  HeadphonesIcon,
  Building2,
  BriefcaseBusiness,
  CheckCircle2,
  Users,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const pillars = [
  {
    id: 1,
    icon: Cpu,
    title: 'Innovación y Calidad',
    desc: 'Nos apasiona la innovación. Incorporamos las últimas tecnologías del sector en nuestros productos para garantizar que tu empresa siempre cuente con herramientas modernas, rápidas y eficientes.',
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'Soluciones Personalizadas',
    desc: 'No creemos en el software genérico. Desarrollamos exactamente lo que necesitas: desde aplicaciones móviles nativas y sistemas de gestión empresarial, hasta plataformas web completas.',
  },
  {
    id: 3,
    icon: HeadphonesIcon,
    title: 'Soporte y Atención',
    desc: 'Nuestro compromiso no termina al entregar el proyecto. Brindamos un excelente servicio al cliente, con soporte técnico confiable y atención personalizada en cada etapa de vida del software.',
  },
]

export function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <>
      <Helmet>
        <title>Novis - Sobre Nosotros</title>
        <meta name='description' content='Sobre nosotros' />
        <meta
          name='keywords'
          content='Novis, Desarrollo de Software, Sobre Nosotros'
        />
      </Helmet>
      <div className='bg-white flex flex-col w-full overflow-hidden'>
        {/* 1. HERO DE COMPAÑÍA */}
        <section className='relative bg-slate-950 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-800'>
          <div className='absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950'></div>
          
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='max-w-3xl'
            >
              <span className='inline-block py-1.5 px-4 rounded-full bg-emerald-900/30 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-emerald-800/50 shadow-sm'>
                Sobre NOVIS Software
              </span>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight'>
                Convertimos tu visión en <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>realidad digital</span>
              </h1>
              <p className='text-xl text-slate-300 leading-relaxed font-medium max-w-2xl'>
                Innovación, calidad y compromiso para ayudar a tu negocio o
                institución a liderar su sector en un mundo hiperconectado.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. NUESTRA IDENTIDAD */}
        <section className='py-32 bg-slate-50 border-b border-slate-200 relative'>
          <div className='absolute top-0 right-0 w-1/3 h-full opacity-30 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]'></div>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'>
              <motion.div
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-100px' }}
              >
                <motion.h2
                  variants={itemVariants}
                  className='text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight'
                >
                  Tu socio tecnológico para el éxito empresarial
                </motion.h2>
                <motion.div
                  variants={itemVariants}
                  className='w-16 h-1.5 bg-emerald-600 rounded-full mb-10'
                ></motion.div>
                <motion.p
                  variants={itemVariants}
                  className='text-lg text-slate-600 leading-relaxed font-medium mb-6'
                >
                  NOVIS Software nace con el objetivo de ejercer labores de
                  consultoría y desarrollo en el ámbito de las nuevas
                  tecnologías. Nos destacamos por no entregar simplemente
                  código, sino soluciones empresariales integrales.
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className='text-lg text-slate-600 leading-relaxed font-medium mb-10'
                >
                  Entendemos que cada cliente es único. Por eso, ya sea que
                  necesites una aplicación nativa, un sistema de
                  gestión en la nube o una plataforma integral, nos sumergimos en
                  tus procesos para construir la herramienta perfecta.
                </motion.p>

                <motion.ul variants={containerVariants} className='space-y-4'>
                  {[
                    'Desarrollo y diseño de software a medida.',
                    'Acompañamiento estratégico en la transformación digital.',
                    'Atención hiper-personalizada y soporte continuo.',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className='flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-colors shadow-sm'
                    >
                      <CheckCircle2 className='w-6 h-6 text-emerald-600 mr-4 flex-shrink-0' strokeWidth={2} />
                      <span className='text-slate-800 font-bold'>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='relative'
              >
                <div className='absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-slate-50 rounded-[2.5rem] transform rotate-3'></div>
                <img
                  src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
                  alt='Consultoría Tecnológica NOVIS'
                  className='relative rounded-3xl shadow-xl object-cover h-[500px] lg:h-[600px] w-full z-10'
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. LOS PILARES */}
        <section className='py-32 bg-slate-900 overflow-hidden border-b border-slate-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center max-w-3xl mx-auto mb-20'
            >
              <h2 className='text-4xl md:text-5xl font-black text-white mb-6 tracking-tight'>
                Nuestra Filosofía de Trabajo
              </h2>
              <div className='w-20 h-1.5 bg-emerald-600 mx-auto mb-8 rounded-full'></div>
              <p className='text-xl text-slate-300 leading-relaxed font-medium'>
                Tres principios innegociables que aplican nuestros ingenieros en cada proyecto
                tecnológico que lideramos.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10'>
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className='bg-slate-950 p-10 md:p-12 border border-slate-800 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all duration-500 group relative overflow-hidden'
                >
                  <div className='absolute top-0 right-0 w-32 h-32 bg-emerald-900/20 rounded-bl-[100%] transition-transform group-hover:scale-150 duration-700 ease-out z-0'></div>
                  
                  <div className='relative z-10'>
                    <div className='w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors duration-500 shadow-sm'>
                      <pillar.icon
                         strokeWidth={1.5}
                         className='w-8 h-8 text-emerald-500 group-hover:text-white transition-colors duration-500'
                      />
                    </div>
                    <h3 className='text-2xl font-bold mb-4 text-white tracking-tight'>
                      {pillar.title}
                    </h3>
                    <p className='text-slate-400 leading-relaxed font-medium'>{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. ÁMBITOS DE ACTUACIÓN */}
        <section className='py-32 bg-slate-50 border-b border-slate-200'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-20'>
              <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight'>
                A quiénes ayudamos
              </h2>
              <div className='w-20 h-1.5 bg-emerald-600 mx-auto rounded-full'></div>
            </div>

            <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='flex flex-col md:flex-row items-center md:items-start p-10 md:p-12 bg-slate-50 rounded-[2rem] border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group'
              >
                <div className='w-20 h-20 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-sm mb-8 md:mb-0 md:mr-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-500'>
                  <Building2 className='w-10 h-10 text-emerald-600' strokeWidth={1.5} />
                </div>
                <div className='text-center md:text-left'>
                  <h3 className='text-2xl font-bold text-slate-900 mb-4 tracking-tight'>
                    Instituciones Públicas
                  </h3>
                  <p className='text-slate-600 leading-relaxed font-medium'>
                    Desarrollamos soluciones tecnológicas robustas que cumplen con las estrictas normativas de la administración, optimizando los servicios públicos.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='flex flex-col md:flex-row items-center md:items-start p-10 md:p-12 bg-slate-50 rounded-[2rem] border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group'
              >
                <div className='w-20 h-20 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-sm mb-8 md:mb-0 md:mr-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-500'>
                  <BriefcaseBusiness className='w-10 h-10 text-emerald-600' strokeWidth={1.5} />
                </div>
                <div className='text-center md:text-left'>
                  <h3 className='text-2xl font-bold text-slate-900 mb-4 tracking-tight'>
                    Empresas Privadas
                  </h3>
                  <p className='text-slate-600 leading-relaxed font-medium'>
                    Actuamos como el socio tecnológico ideal para acelerar la transformación digital, adaptando herramientas de élite a las necesidades específicas de tu negocio.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. CIERRE CONFIANZA */}
        <section className='py-32 bg-slate-950 text-center px-4 relative overflow-hidden border-b border-slate-800'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950 pointer-events-none'></div>
          <div className='max-w-4xl mx-auto relative z-10'>
            <Users className='w-16 h-16 text-emerald-500 mx-auto mb-8 drop-shadow-sm' strokeWidth={1.5} />
            <h2 className='text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight'>
              ¿Listo para liderar con <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>tecnología</span>?
            </h2>
            <p className='text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto'>
              En el mundo del desarrollo de software de alto nivel, tu éxito es nuestro éxito. Hablemos de tu próximo gran proyecto.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
