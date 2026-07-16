import { motion } from 'framer-motion'
import { Target, ArrowRight, Building2, UserLock, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import imgEquipo from '../assets/novis-formacion-empresas.png'

export function ClientsMainPage() {
  return (
    <>
      <Helmet>
        <title>Novis - Clientes</title>

        <meta name='keywords' content={`Novis, Software, Extremadura`} />
      </Helmet>
      <div className='bg-slate-50 flex flex-col w-full min-h-screen'>
        {/* 1. HERO SECTION */}
        <section className='relative pt-32 pb-32 md:pt-40 md:pb-48 border-b border-slate-200 overflow-hidden'>
          {/* Imagen de fondo nítida y clara */}
          <div
            className='absolute inset-0 z-0 bg-cover bg-center'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
          {/* Overlay claro para que el texto resalte pero la imagen se vea */}
          <div className='absolute inset-0 z-0 bg-gradient-to-b from-white/70 via-white/80 to-slate-50'></div>

          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className='inline-block py-1.5 px-4 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold tracking-[0.2em] uppercase mb-6 border border-emerald-200 shadow-sm'>
                Conoce a quiénes ayudamos
              </span>
              <h1 className='text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tight'>
                Nuestros <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>Clientes</span>
              </h1>
              <p className='text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed'>
                Tu éxito es nuestro éxito, y juntos podemos lograr cosas
                extraordinarias en el ecosistema digital.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. CONTENIDO PRINCIPAL */}
        <section className='relative z-20 -mt-16 md:-mt-28 pb-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className='bg-white rounded-[2rem] shadow-xl border border-slate-200 p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden'
            >
              {/* Columna Izquierda: Imagen */}
              <div className='w-full lg:w-1/2 relative'>
                {/* PUNTOS ARREGLADOS */}
                <div className='absolute -bottom-4 -left-4 w-24 h-24 z-0 opacity-10 bg-[radial-gradient(#10b981_2px,transparent_2px)] [background-size:12px_12px]'></div>
                <div className='absolute -top-4 -right-4 w-24 h-24 z-0 opacity-10 bg-[radial-gradient(#10b981_2px,transparent_2px)] [background-size:12px_12px]'></div>

                <div className='relative z-10 rounded-2xl overflow-hidden shadow-lg border border-slate-100'>
                  <img
                    src={imgEquipo}
                    alt='Equipo Novis Software'
                    className='w-full h-auto object-cover contrast-105'
                  />
                </div>
              </div>

              {/* Columna Derecha: Texto Párrafo 1 */}
              <div className='w-full lg:w-1/2'>
                <h2 className='text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight'>
                  Orientación hacia{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>resultados</span>
                </h2>

                <div className='space-y-6 text-slate-600 text-lg leading-relaxed'>
                  <p>
                    En Novis Software, somos una empresa de desarrollo de
                    software con tres pilares fundamentales:{' '}
                    <strong className='text-emerald-600 font-bold'>
                      experiencia, adaptabilidad y orientación hacia resultados
                    </strong>
                    . Contamos con un equipo altamente calificado y siempre
                    estamos actualizados con las últimas tecnologías.
                  </p>
                  <p>
                    Nuestra capacidad de adaptación nos permite personalizar
                    soluciones para cada cliente, y nuestra verdadera pasión es
                    generar un impacto positivo en las operaciones de nuestros
                    clientes. Estamos comprometidos a ser tu
                    socio de confianza en el viaje hacia el éxito empresarial.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. NUEVO FORMATO PARA LOS TEXTOS (Sin tarjetas aburridas) */}
        <section className='py-12 bg-slate-50'>
          <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Bloque: Diversidad (Texto limpio con icono lateral) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='mb-20 flex flex-col md:flex-row gap-6 md:gap-10 items-start'
            >
              <div className='w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center flex-shrink-0'>
                <Target className='w-8 h-8 text-emerald-600' />
              </div>
              <div>
                <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                  Adaptabilidad para cada sector
                </h3>
                <p className='text-lg text-slate-600 leading-relaxed'>
                  En Novis Software, valoramos la diversidad de proyectos y
                  necesidades de nuestros clientes, lo que nos ha brindado una
                  profunda comprensión de diversos sectores. Nuestro enfoque de
                  desarrollo de software es altamente adaptable y personalizado
                  para satisfacer las necesidades individuales. Medimos nuestro
                  éxito por los logros de nuestros clientes y estamos dedicados
                  a brindar soluciones efectivas.
                </p>
              </div>
            </motion.div>

            {/* Bloque: Socio de Confianza (Estilo Cita Destacada / Blockquote elegante) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-3xl p-8 md:p-12 text-slate-900 relative overflow-hidden shadow-lg shadow-emerald-900/5 border border-emerald-200'
            >
              {/* Comilla decorativa de fondo */}
              <Quote className='absolute top-6 left-6 w-32 h-32 text-emerald-500 opacity-10 rotate-180 pointer-events-none' />

              <div className='relative z-10 md:pl-10'>
                <h3 className='text-2xl font-bold mb-6 text-slate-900'>
                  Tu socio de confianza
                </h3>
                <p className='text-lg md:text-xl text-slate-700 leading-relaxed font-medium italic'>
                  "Cuando trabajas con nosotros, no solo obtienes software,
                  obtienes un socio que se sumerge en tus problemas y busca
                  soluciones que generen un impacto real en tu negocio. 
                  Tu éxito es nuestro éxito, y juntos, podemos
                  lograr cosas extraordinarias en el mundo del desarrollo de
                  software."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. CTA DE NAVEGACIÓN A LOS SECTORES */}
        <section className='py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/50 via-slate-50 to-slate-50 z-0'></div>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
            <h2 className='text-3xl lg:text-4xl font-bold text-slate-900 mb-12'>
              Explora nuestros clientes por sector
            </h2>

            <div className='flex flex-col sm:flex-row justify-center gap-6'>
              <Link
                to='/clientes/instituciones'
                className='flex items-center justify-center px-8 py-5 bg-white border border-slate-200 text-slate-800 font-bold rounded-2xl hover:bg-slate-50 transition-all shadow-sm hover:shadow-md group'
              >
                <div className='w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mr-4 group-hover:bg-emerald-100 transition-colors'>
                  <Building2 className='w-5 h-5 text-emerald-600' />
                </div>
                Instituciones Públicas
                <ArrowRight className='w-5 h-5 ml-4 opacity-0 -mr-9 group-hover:opacity-100 group-hover:mr-0 transition-all text-emerald-600' />
              </Link>

              <Link
                to='/clientes/privados'
                className='flex items-center justify-center px-8 py-5 bg-emerald-600 border border-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg group'
              >
                <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4'>
                  <UserLock className='w-5 h-5 text-white' />
                </div>
                Empresas Privadas
                <ArrowRight className='w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
