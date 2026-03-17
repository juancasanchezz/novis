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

// Basado en los valores reales de la URL /novis/ pero con un tono más fresco y moderno
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
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
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
        <section className='relative bg-gray-900 py-24 md:py-32 border-b border-gray-800 overflow-hidden'>
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className='absolute inset-0 z-0 mix-blend-luminosity bg-cover bg-center'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></motion.div>
          <div className='absolute inset-0 z-0 bg-gradient-to-r from-gray-900 to-gray-900/40'></div>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='max-w-3xl'
            >
              <span className='inline-block py-1.5 px-3 rounded-full bg-green-500/10 text-green-400 text-sm font-bold tracking-widest uppercase mb-6 border border-green-500/20 backdrop-blur-sm'>
                Sobre NOVIS Software
              </span>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight'>
                Convertimos tu visión en <br />
                <span className='text-green-500'>realidad digital</span>
              </h1>
              <p className='text-xl text-gray-300 leading-relaxed font-medium max-w-2xl'>
                Innovación, calidad y compromiso para ayudar a tu negocio o
                institución a tener éxito en un mundo hiperconectado.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. NUESTRA IDENTIDAD (Adaptado de la web original) */}
        <section className='py-20 bg-white border-b border-gray-100 relative'>
          <div className='absolute top-0 right-0 w-1/3 h-full opacity-30 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px]'></div>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>
              <motion.div
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-100px' }}
              >
                <motion.h2
                  variants={itemVariants}
                  className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight'
                >
                  Tu socio tecnológico para el éxito empresarial
                </motion.h2>
                <motion.div
                  variants={itemVariants}
                  className='w-16 h-1.5 bg-green-600 rounded-full mb-8'
                ></motion.div>
                <motion.p
                  variants={itemVariants}
                  className='text-lg text-gray-600 leading-relaxed mb-6'
                >
                  NOVIS Software nace con el objetivo de ejercer labores de
                  consultoría y desarrollo en el ámbito de las nuevas
                  tecnologías. Nos destacamos por no entregar simplemente
                  código, sino soluciones integrales.
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className='text-lg text-gray-600 leading-relaxed mb-8'
                >
                  Entendemos que cada cliente es único. Por eso, ya sea que
                  necesites una aplicación móvil desde cero, un sistema complejo
                  de gestión empresarial o una plataforma web, nos sumergimos en
                  tus procesos para crear la herramienta perfecta.
                </motion.p>

                <motion.ul variants={containerVariants} className='space-y-4'>
                  {[
                    'Desarrollo y diseño de software a medida.',
                    'Acompañamiento en la transformación digital.',
                    'Atención personalizada y soporte continuo.',
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className='flex items-center p-3 bg-gray-50 rounded-xl border border-gray-100'
                    >
                      <CheckCircle2 className='w-5 h-5 text-green-600 mr-4 flex-shrink-0' />
                      <span className='text-gray-800 font-medium'>{item}</span>
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
                <div className='absolute -inset-4 bg-gradient-to-tr from-green-50 to-gray-50 rounded-3xl transform rotate-2'></div>
                <img
                  src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
                  alt='Consultoría Tecnológica NOVIS'
                  className='relative rounded-2xl shadow-xl object-cover h-[500px] w-full z-10'
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. LOS PILARES BASADOS EN LA WEB ACTUAL */}
        <section className='py-24 bg-gray-50 overflow-hidden border-b border-gray-200'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-center max-w-3xl mx-auto mb-16'
            >
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight'>
                Nuestra Filosofía de Trabajo
              </h2>
              <div className='w-20 h-1.5 bg-green-600 mx-auto mb-6 rounded-full'></div>
              <p className='text-lg text-gray-600 leading-relaxed'>
                Tres principios innegociables que aplicamos en cada proyecto
                tecnológico que desarrollamos.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className='bg-white p-10 border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl hover:border-green-200 transition-all duration-300 group'
                >
                  <div className='w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-8 group-hover:bg-green-600 transition-colors duration-300'>
                    <pillar.icon
                      strokeWidth={1.5}
                      className='w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300'
                    />
                  </div>
                  <h3 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-700 transition-colors'>
                    {pillar.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. ÁMBITOS DE ACTUACIÓN (Sigue siendo relevante mantenerlo aquí) */}
        <section className='py-24 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                A quiénes ayudamos
              </h2>
              <div className='w-20 h-1.5 bg-green-600 mx-auto rounded-full'></div>
            </div>

            <div className='grid md:grid-cols-2 gap-8'>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='flex flex-col md:flex-row items-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-green-300 transition-colors'
              >
                <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 md:mb-0 md:mr-8 flex-shrink-0'>
                  <Building2 className='w-10 h-10 text-green-600' />
                </div>
                <div className='text-center md:text-left'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    Instituciones Públicas
                  </h3>
                  <p className='text-gray-600'>
                    Desarrollamos soluciones tecnológicas que cumplen con los
                    requisitos y normativas de la administración, optimizando
                    los servicios públicos.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='flex flex-col md:flex-row items-center p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-green-300 transition-colors'
              >
                <div className='w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 md:mb-0 md:mr-8 flex-shrink-0'>
                  <BriefcaseBusiness className='w-10 h-10 text-gray-700' />
                </div>
                <div className='text-center md:text-left'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    Empresas Privadas
                  </h3>
                  <p className='text-gray-600'>
                    Actuamos como el socio tecnológico ideal para impulsar la
                    transformación digital, adaptándonos a las necesidades
                    específicas de tu negocio.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. CIERRE CONFIANZA */}
        <section className='py-20 bg-gray-900 text-center px-4'>
          <div className='max-w-4xl mx-auto'>
            <Users className='w-12 h-12 text-green-500 mx-auto mb-6' />
            <h2 className='text-3xl font-bold text-white mb-4'>
              ¿Listo para llevar tu idea al siguiente nivel?
            </h2>
            <p className='text-gray-400 text-lg'>
              En el mundo del desarrollo de software, tu éxito es nuestro éxito.
              Contacta con nosotros y descubre lo que podemos lograr juntos.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
