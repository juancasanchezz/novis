import { motion } from 'framer-motion'
import { Target, ArrowRight, Building2, UserLock, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

import imgEquipo from '../assets/novis-formacion-empresas.png'

export function ClientsMainPage() {
  return (
    <div className='bg-gray-50 flex flex-col w-full min-h-screen'>
      {/* 1. HERO SECTION CON IMAGEN DIFUMINADA */}
      <section className='relative pt-24 pb-32 md:pt-32 md:pb-48 border-b-4 border-green-600 overflow-hidden'>
        {/* Imagen de fondo difuminada y escalada ligeramente para tapar los bordes del desenfoque */}
        <div
          className='absolute inset-0 z-0 bg-cover bg-center blur-[4px] scale-105 opacity-60'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>
        {/* Overlay oscuro para garantizar que el título se lea perfectamente */}
        <div className='absolute inset-0 z-0 bg-gray-900/80'></div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className='inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-300 text-sm font-bold tracking-widest uppercase mb-4 border border-green-500/30 backdrop-blur-sm'>
              Conoce a quiénes ayudamos
            </span>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight shadow-sm'>
              Nuestros Clientes
            </h1>
            <p className='text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow-md'>
              Tu éxito es nuestro éxito, y juntos podemos lograr cosas
              extraordinarias en el mundo del desarrollo de software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL (Texto original y foto) */}
      <section className='relative z-20 -mt-16 md:-mt-28 pb-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center'
          >
            {/* Columna Izquierda: Imagen */}
            <div className='w-full lg:w-1/2 relative'>
              {/* PUNTOS ARREGLADOS: Más limpios, pequeños y sutiles */}
              <div className='absolute -bottom-4 -left-4 w-24 h-24 z-0 opacity-40 bg-[radial-gradient(#22c55e_2px,transparent_2px)] [background-size:12px_12px]'></div>
              <div className='absolute -top-4 -right-4 w-24 h-24 z-0 opacity-40 bg-[radial-gradient(#22c55e_2px,transparent_2px)] [background-size:12px_12px]'></div>

              <div className='relative z-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100'>
                <img
                  src={imgEquipo}
                  alt='Equipo Novis Software'
                  className='w-full h-auto object-cover'
                />
              </div>
            </div>

            {/* Columna Derecha: Texto Párrafo 1 */}
            <div className='w-full lg:w-1/2'>
              <h2 className='text-3xl font-bold text-gray-900 mb-6 leading-tight'>
                Orientación hacia{' '}
                <span className='text-green-600'>resultados</span>
              </h2>

              <div className='space-y-5 text-gray-600 text-lg leading-relaxed'>
                <p>
                  En Novis Software, somos una empresa de desarrollo de software
                  con tres pilares fundamentales:{' '}
                  <strong className='text-gray-900'>
                    experiencia, adaptabilidad y orientación hacia resultados
                  </strong>
                  . Contamos con un equipo altamente calificado y siempre
                  estamos actualizados con las últimas tecnologías.
                </p>
                <p>
                  Nuestra capacidad de adaptación nos permite personalizar
                  soluciones para cada cliente, y nuestra verdadera pasión es
                  generar un impacto positivo en las operaciones de nuestros
                  clientes. Si deseas ejemplos concretos, visita nuestra página
                  web para ver casos de éxito que ilustran cómo abordamos
                  desafíos similares. Estamos comprometidos a ser tu socio de
                  confianza en el viaje hacia el éxito empresarial.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. NUEVO FORMATO PARA LOS TEXTOS (Sin tarjetas aburridas) */}
      <section className='py-12 bg-gray-50'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Bloque: Diversidad (Texto limpio con icono lateral) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mb-16 flex flex-col md:flex-row gap-6 md:gap-10 items-start'
          >
            <div className='w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0'>
              <Target className='w-7 h-7 text-green-600' />
            </div>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Adaptabilidad para cada sector
              </h3>
              <p className='text-lg text-gray-600 leading-relaxed'>
                En Novis Software, valoramos la diversidad de proyectos y
                necesidades de nuestros clientes, lo que nos ha brindado una
                profunda comprensión de diversos sectores. Nuestro enfoque de
                desarrollo de software es altamente adaptable y personalizado
                para satisfacer las necesidades individuales. Medimos nuestro
                éxito por los logros de nuestros clientes y estamos dedicados a
                brindar soluciones efectivas.
              </p>
            </div>
          </motion.div>

          {/* Bloque: Socio de Confianza (Estilo Cita Destacada / Blockquote elegante) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='bg-green-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl'
          >
            {/* Comilla decorativa de fondo */}
            <Quote className='absolute top-6 left-6 w-24 h-24 text-green-600 opacity-40 rotate-180 pointer-events-none' />

            <div className='relative z-10 md:pl-8'>
              <h3 className='text-2xl font-bold mb-4 text-green-50'>
                Tu socio de confianza
              </h3>
              <p className='text-lg md:text-xl text-green-100 leading-relaxed font-medium'>
                Cuando trabajas con nosotros, no solo obtienes software,
                obtienes un socio que se sumerge en tus problemas y busca
                soluciones que generen un impacto real en tu negocio. Visita
                nuestra página web para ver ejemplos de casos de éxito que
                demuestran nuestra experiencia y compromiso con resultados
                sobresalientes. Tu éxito es nuestro éxito, y juntos, podemos
                lograr cosas extraordinarias en el mundo del desarrollo de
                software.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. CTA DE NAVEGACIÓN A LOS SECTORES */}
      <section className='py-20 bg-white border-t border-gray-200'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-900 mb-10'>
            Explora nuestros clientes por sector
          </h2>

          <div className='flex flex-col sm:flex-row justify-center gap-6'>
            <Link
              to='/clientes/instituciones'
              className='flex items-center justify-center px-8 py-4 bg-white border-2 border-green-600 text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all shadow-sm group'
            >
              <Building2 className='w-5 h-5 mr-3 text-green-600' />
              Instituciones Públicas
              <ArrowRight className='w-4 h-4 ml-2 opacity-0 -mr-6 group-hover:opacity-100 group-hover:mr-0 transition-all' />
            </Link>

            <Link
              to='/clientes/privados'
              className='flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-md group'
            >
              <UserLock className='w-5 h-5 mr-3 text-green-100' />
              Empresas Privadas
              <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
