import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Briefcase,
  MessageSquare,
  Clock,
  ShieldCheck,
  HeadphonesIcon,
} from 'lucide-react'

import { Helmet } from 'react-helmet-async'

export function ContactPage() {
  const location = useLocation()

  // Inicializamos el modo con lo que venga en el router, o 'general'
  const [contactMode, setContactMode] = useState<'general' | 'empleo'>(
    location.state?.mode || 'general',
  )

  const [prevLocationKey, setPrevLocationKey] = useState(location.key)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (location.key !== prevLocationKey) {
    setPrevLocationKey(location.key)
    if (location.state?.mode) {
      setContactMode(location.state.mode)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <>
      <Helmet>
        <title>Novis - Contacto</title>
        <meta
          name='keywords'
          content={`Novis, Software, Contacto , Extremadura`}
        />
      </Helmet>

      <div className='flex flex-col lg:flex-row w-full min-h-screen bg-slate-50'>
        
        {/* PANEL IZQUIERDO: FIJO EN ESCRITORIO (Visual / Branding / Contact Info) */}
        <div className='lg:w-5/12 lg:fixed lg:h-screen lg:top-0 lg:left-0 relative p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800 bg-slate-950'>
          {/* Fondo Abstracto y Mapa */}
          <div className='absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950'></div>
          <div className='absolute inset-0 z-0 opacity-[0.03] bg-cover bg-center' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')" }}></div>
          
          <div className='relative z-10 mt-16 md:mt-20 lg:mt-24'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className='text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight'>
                ¿En qué podemos <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>ayudarte?</span>
              </h1>
              <p className='text-lg text-slate-300 max-w-md font-medium leading-relaxed mb-12'>
                Hablemos sobre tu proyecto o descubre cómo impulsar tu carrera en el mundo de la consultoría de élite.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.3 }}
              className='space-y-4'
            >
              <a
                href='http://googleusercontent.com/maps.google.com/6'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center p-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl hover:bg-slate-800 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group shadow-sm'
              >
                <div className='w-12 h-12 bg-emerald-950/50 border border-emerald-800/50 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm'>
                  <MapPin className='w-5 h-5 text-emerald-600' />
                </div>
                <div>
                  <p className='text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1'>
                    Visítanos
                  </p>
                  <p className='text-slate-200 text-sm font-medium leading-snug'>
                    C/ Hernando de Soto, 10, Local 1<br />
                    10002 Cáceres
                  </p>
                </div>
              </a>

              <a
                href='mailto:soporte@novis.es'
                className='flex items-center p-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl hover:bg-slate-800 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group shadow-sm'
              >
                <div className='w-12 h-12 bg-emerald-950/50 border border-emerald-800/50 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm'>
                  <Mail className='w-5 h-5 text-emerald-600' />
                </div>
                <div>
                  <p className='text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1'>
                    Escríbenos
                  </p>
                  <p className='text-slate-200 text-sm font-medium'>
                    soporte@novis.es
                  </p>
                </div>
              </a>

              <a
                href='tel:927222778'
                className='flex items-center p-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl hover:bg-slate-800 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group shadow-sm'
              >
                <div className='w-12 h-12 bg-emerald-950/50 border border-emerald-800/50 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm'>
                  <Phone className='w-5 h-5 text-emerald-600' />
                </div>
                <div>
                  <p className='text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1'>
                    Llámanos
                  </p>
                  <p className='text-slate-200 text-sm font-medium'>
                    927 22 27 78
                  </p>
                </div>
              </a>
            </motion.div>
          </div>
          
          <div className="hidden lg:block relative z-10 w-full h-32 rounded-2xl overflow-hidden border border-slate-800 mt-12 opacity-80 hover:opacity-100 transition-all duration-500 shadow-inner">
             <iframe
                src='https://maps.google.com/maps?q=Calle%20Hernando%20de%20Soto,%2010,%20Caceres&t=&z=16&ie=UTF8&iwloc=&output=embed'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Mapa ubicación NOVIS'
              ></iframe>
          </div>
        </div>

        {/* PANEL DERECHO: FORMULARIO Y EXTRAS (Scrolleable) */}
        <div className='lg:w-7/12 lg:ml-[41.666667%] p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-screen pt-24 lg:pt-32 pb-24'>
          
          {/* Pestañas Consultas / Empleo */}
          <div className='flex bg-slate-100 p-2 rounded-2xl mb-10 border border-slate-200 shadow-inner max-w-xl'>
            <button
              onClick={() => setContactMode('general')}
              className={`flex-1 flex items-center justify-center py-3 text-sm font-bold rounded-xl transition-all ${contactMode === 'general' ? 'bg-slate-50 text-emerald-600 border border-slate-200 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
            >
              <MessageSquare className='w-4 h-4 mr-2' /> Consultas
            </button>
            <button
              onClick={() => setContactMode('empleo')}
              className={`flex-1 flex items-center justify-center py-3 text-sm font-bold rounded-xl transition-all ${contactMode === 'empleo' ? 'bg-slate-50 text-emerald-600 border border-slate-200 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
            >
              <Briefcase className='w-4 h-4 mr-2' /> Empleo
            </button>
          </div>

          {/* Tarjeta del Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className='bg-slate-50/95 backdrop-blur-xl rounded-[2rem] shadow-xl border border-slate-200 p-8 md:p-12 relative overflow-hidden'
          >
            {/* Brillo decorativo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className='text-center py-12'
              >
                <div className='w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-emerald-100'>
                  <CheckCircle2 className='w-10 h-10 text-emerald-600' />
                </div>
                <h3 className='text-3xl font-black text-slate-900 mb-4'>
                  ¡Mensaje enviado!
                </h3>
                <p className='text-slate-600 mb-10 text-lg'>
                  Hemos recibido tu solicitud y la atenderemos lo antes posible.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className='px-8 py-4 bg-slate-100 border border-slate-200 text-slate-800 font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-sm'
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6 lg:space-y-8 relative z-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
                  <div>
                    <label className='block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest'>
                      Nombre completo *
                    </label>
                    <input
                      type='text'
                      required
                      className='w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-300 shadow-sm'
                      placeholder='Ej. Juan Pérez'
                    />
                  </div>
                  <div>
                    <label className='block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest'>
                      Teléfono
                    </label>
                    <input
                      type='tel'
                      className='w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-300 shadow-sm'
                      placeholder='+34'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
                  <div>
                    <label className='block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest'>
                      Email corporativo *
                    </label>
                    <input
                      type='email'
                      required
                      className='w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-300 shadow-sm'
                      placeholder='hola@empresa.com'
                    />
                  </div>

                  {contactMode === 'general' ? (
                    <div>
                      <label className='block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest'>
                        Asunto
                      </label>
                      <input
                        type='text'
                        className='w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-300 shadow-sm'
                        placeholder='¿Cómo podemos ayudar?'
                      />
                    </div>
                  ) : (
                    <div>
                      <label className='block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest'>
                        Adjuntar CV (PDF) *
                      </label>
                      <input
                        type='file'
                        required
                        accept='.pdf,.doc,.docx'
                        className='w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-slate-600 text-sm file:mr-4 file:py-2 file:px-6 file:rounded-xl file:border-0 file:font-bold file:bg-emerald-50 file:text-emerald-600 hover:file:bg-emerald-100 transition-all cursor-pointer shadow-sm'
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className='block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest'>
                    {contactMode === 'general'
                      ? 'Mensaje detallado *'
                      : 'Carta de presentación *'}
                  </label>
                  <textarea
                    rows={5}
                    required
                    className='w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-300 resize-none shadow-sm'
                    placeholder={
                      contactMode === 'general'
                        ? 'Cuéntanos acerca de tu proyecto...'
                        : 'Háblanos brevemente sobre tu motivación...'
                    }
                  ></textarea>
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full flex justify-center items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-widest rounded-2xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 group mt-4'
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      {contactMode === 'general'
                        ? 'Enviar Mensaje'
                        : 'Enviar Solicitud'}
                      <Send className='ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* SECCIÓN ADICIONAL BAJO EL FORMULARIO */}
          <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all shadow-sm'>
              <div className='w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 border border-emerald-100'>
                <Clock className='w-6 h-6 text-emerald-600' />
              </div>
              <h4 className='text-lg font-bold text-slate-900 mb-2 tracking-tight'>
                Respuesta rápida
              </h4>
              <p className='text-slate-600 text-sm leading-relaxed'>
                Revisamos todas las consultas diariamente. Respuesta en menos de 24/48h.
              </p>
            </div>

            <div className='p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all shadow-sm'>
              <div className='w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 border border-emerald-100'>
                <HeadphonesIcon className='w-6 h-6 text-emerald-600' />
              </div>
              <h4 className='text-lg font-bold text-slate-900 mb-2 tracking-tight'>
                Soporte directo
              </h4>
              <p className='text-slate-600 text-sm leading-relaxed'>
                Derivación directa al equipo técnico para agilidad operativa.
              </p>
            </div>

            <div className='p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all shadow-sm md:col-span-2 lg:col-span-1'>
              <div className='w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-5 border border-emerald-100'>
                <ShieldCheck className='w-6 h-6 text-emerald-600' />
              </div>
              <h4 className='text-lg font-bold text-slate-900 mb-2 tracking-tight'>
                Privacidad
              </h4>
              <p className='text-slate-600 text-sm leading-relaxed'>
                Datos tratados con estricta confidencialidad (LOPD).
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
