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

export function ContactPage() {
  const location = useLocation()

  // Inicializamos el modo con lo que venga en el router, o 'general'
  const [contactMode, setContactMode] = useState<'general' | 'empleo'>(
    location.state?.mode || 'general',
  )

  // Guardamos la 'key' de la URL para saber cuándo el usuario hace clic en un enlace nuevo
  const [prevLocationKey, setPrevLocationKey] = useState(location.key)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // BEST PRACTICE REACT: Sincronizar estado derivado durante el renderizado (sin useEffect)
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
    <div className='relative flex flex-col w-full min-h-screen bg-gray-50 overflow-hidden'>
      {/* FONDO DECORATIVO */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden z-0'>
        <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[50%] rounded-full bg-green-200/40 blur-[100px]'></div>
        <div className='absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-emerald-100/50 blur-[120px]'></div>
        <div className='absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-blue-50/50 blur-[80px]'></div>
      </div>

      {/* 1. SECCIÓN PRINCIPAL: Pantalla completa centrada */}
      <section className='relative z-10 flex flex-col items-center justify-center w-full min-h-[calc(100vh-6rem)] py-4 lg:py-6'>
        <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
          {/* FRASE GANCHO SUPERIOR */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center mb-4 lg:mb-5'
          >
            <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight'>
              ¿En qué podemos ayudarte?
            </h1>
            <p className='text-base text-gray-600 max-w-2xl mx-auto font-medium mt-1.5'>
              Hablemos sobre tu proyecto o descubre cómo impulsar tu carrera.
            </p>
          </motion.div>

          {/* TARJETA DEL FORMULARIO Y CONTACTO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className='bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-200/50 border border-white/60 overflow-hidden flex flex-col lg:flex-row relative'
          >
            {/* COLUMNA IZQUIERDA: Formulario */}
            <div className='w-full lg:w-3/5 p-6 md:p-8 lg:p-10 bg-white'>
              {/* Pestañas Consultas / Empleo */}
              <div className='flex bg-gray-50 p-1.5 rounded-xl mb-6 border border-gray-100'>
                <button
                  onClick={() => setContactMode('general')}
                  className={`flex-1 flex items-center justify-center py-2.5 text-sm font-bold rounded-lg transition-all ${contactMode === 'general' ? 'bg-white shadow-sm text-green-600 border border-gray-100' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100/50'}`}
                >
                  <MessageSquare className='w-4 h-4 mr-2' /> Consultas Generales
                </button>
                <button
                  onClick={() => setContactMode('empleo')}
                  className={`flex-1 flex items-center justify-center py-2.5 text-sm font-bold rounded-lg transition-all ${contactMode === 'empleo' ? 'bg-white shadow-sm text-green-600 border border-gray-100' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100/50'}`}
                >
                  <Briefcase className='w-4 h-4 mr-2' /> Trabaja con nosotros
                </button>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='bg-green-50 border border-green-200 rounded-2xl p-8 text-center my-8'
                >
                  <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner'>
                    <CheckCircle2 className='w-8 h-8 text-green-600' />
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    ¡Mensaje enviado!
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    Hemos recibido tu solicitud y la atenderemos lo antes
                    posible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className='px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm'
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className='space-y-4 lg:space-y-5'
                >
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5'>
                    <div>
                      <label className='block text-sm font-bold text-gray-700 mb-1.5'>
                        Nombre y apellidos *
                      </label>
                      <input
                        type='text'
                        required
                        className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all'
                        placeholder='Ej. Juan Pérez'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-bold text-gray-700 mb-1.5'>
                        Teléfono
                      </label>
                      <input
                        type='tel'
                        className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all'
                        placeholder='Ej. +34 600 000 000'
                      />
                    </div>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5'>
                    <div>
                      <label className='block text-sm font-bold text-gray-700 mb-1.5'>
                        Correo electrónico *
                      </label>
                      <input
                        type='email'
                        required
                        className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all'
                        placeholder='su@email.com'
                      />
                    </div>

                    {contactMode === 'general' ? (
                      <div>
                        <label className='block text-sm font-bold text-gray-700 mb-1.5'>
                          Asunto
                        </label>
                        <input
                          type='text'
                          className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all'
                          placeholder='¿En qué podemos ayudarle?'
                        />
                      </div>
                    ) : (
                      <div>
                        <label className='block text-sm font-bold text-gray-700 mb-1.5'>
                          Adjuntar CV (PDF/Word) *
                        </label>
                        <input
                          type='file'
                          required
                          accept='.pdf,.doc,.docx'
                          className='w-full px-3 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm file:mr-3 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:font-bold file:bg-green-100 file:text-green-700 hover:file:bg-green-200 transition-all cursor-pointer'
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className='block text-sm font-bold text-gray-700 mb-1.5'>
                      {contactMode === 'general'
                        ? 'Mensaje *'
                        : 'Carta de presentación *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none'
                      placeholder={
                        contactMode === 'general'
                          ? 'Escriba aquí los detalles de su consulta...'
                          : 'Háblanos brevemente sobre tu motivación...'
                      }
                    ></textarea>
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full flex justify-center items-center px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 group mt-2'
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        {contactMode === 'general'
                          ? 'Enviar Mensaje'
                          : 'Enviar Solicitud'}
                        <Send className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* COLUMNA DERECHA: Diseño verde corporativo */}
            <div className='w-full lg:w-2/5 relative flex flex-col p-6 md:p-8 lg:p-10 bg-gradient-to-br from-green-700 via-green-800 to-green-950 text-white overflow-hidden'>
              <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

              <div className='relative z-10 flex-grow'>
                <h3 className='text-2xl font-extrabold mb-6 text-white tracking-tight'>
                  Información
                </h3>

                <div className='space-y-3 lg:space-y-4 mb-6'>
                  <a
                    href='http://googleusercontent.com/maps.google.com/6'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center p-3 lg:p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 group'
                  >
                    <div className='w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform'>
                      <MapPin className='w-5 h-5 text-white' />
                    </div>
                    <div>
                      <p className='text-green-100 text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-0.5'>
                        Visítanos
                      </p>
                      <p className='text-white text-sm font-medium leading-snug'>
                        C/ Hernando de Soto, 10, 1<br />
                        10002 Cáceres
                      </p>
                    </div>
                  </a>

                  <a
                    href='mailto:soporte@novis.es'
                    className='flex items-center p-3 lg:p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 group'
                  >
                    <div className='w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform'>
                      <Mail className='w-5 h-5 text-white' />
                    </div>
                    <div>
                      <p className='text-green-100 text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-0.5'>
                        Escríbenos
                      </p>
                      <p className='text-white text-sm font-medium'>
                        soporte@novis.es
                      </p>
                    </div>
                  </a>

                  <a
                    href='tel:927222778'
                    className='flex items-center p-3 lg:p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 group'
                  >
                    <div className='w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform'>
                      <Phone className='w-5 h-5 text-white' />
                    </div>
                    <div>
                      <p className='text-green-100 text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-0.5'>
                        Llámanos
                      </p>
                      <p className='text-white text-sm font-medium'>
                        927 22 27 78
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Mapa recupera altura ideal */}
              <div className='relative z-10 w-full h-40 md:h-48 lg:h-52 rounded-xl overflow-hidden border-2 border-white/20 shadow-xl mt-auto'>
                <iframe
                  src='https://maps.google.com/maps?q=Calle%20Hernando%20de%20Soto,%2010,%20Caceres&t=&z=16&ie=UTF8&iwloc=&output=embed'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='Mapa ubicación NOVIS'
                  className='transition-all duration-500 hover:scale-105'
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SECCIÓN ADICIONAL */}
      <section className='relative z-10 py-16 bg-white border-t border-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-green-200 transition-colors'>
              <div className='w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mx-auto mb-5'>
                <Clock className='w-7 h-7 text-green-600' />
              </div>
              <h4 className='text-lg font-bold text-gray-900 mb-2'>
                Respuesta rápida
              </h4>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Nuestro equipo revisa todas las consultas diariamente para
                garantizar una respuesta en menos de 24/48 horas laborables.
              </p>
            </div>

            <div className='text-center p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-green-200 transition-colors'>
              <div className='w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mx-auto mb-5'>
                <HeadphonesIcon className='w-7 h-7 text-green-600' />
              </div>
              <h4 className='text-lg font-bold text-gray-900 mb-2'>
                Soporte directo
              </h4>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Si ya eres cliente, tu mensaje será derivado directamente al
                equipo técnico asignado a tu proyecto para mayor agilidad.
              </p>
            </div>

            <div className='text-center p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-green-200 transition-colors'>
              <div className='w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mx-auto mb-5'>
                <ShieldCheck className='w-7 h-7 text-green-600' />
              </div>
              <h4 className='text-lg font-bold text-gray-900 mb-2'>
                Privacidad
              </h4>
              <p className='text-gray-600 text-sm leading-relaxed'>
                Tanto tus datos de contacto como los currículums adjuntos son
                tratados con estricta confidencialidad (LOPD).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
