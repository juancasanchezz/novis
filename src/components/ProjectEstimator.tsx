import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Monitor,
  Smartphone,
  Database,
  CheckCircle2,
  Lightbulb,
  History,
  Rocket,
  Clock,
  Calendar,
  Layers,
  Cpu,
  Send,
} from 'lucide-react'

// Base de datos de opciones para generar resultados dinámicos
const projectData = {
  type: {
    web: {
      title: 'Plataforma Web / Portal',
      icon: Monitor,
      stack: ['React', 'Next.js', 'Tailwind'],
    },
    app: {
      title: 'Aplicación Móvil',
      icon: Smartphone,
      stack: ['React Native', 'Firebase', 'Node.js'],
    },
    erp: {
      title: 'Software a Medida / ERP',
      icon: Database,
      stack: ['PostgreSQL', 'Node.js', 'Docker'],
    },
  },
  phase: {
    idea: {
      title: 'Idea desde cero',
      desc: 'Necesito consultoría, diseño UX/UI y desarrollo completo.',
      icon: Lightbulb,
    },
    legacy: {
      title: 'Modernización',
      desc: 'Tengo un sistema antiguo que necesito actualizar o migrar.',
      icon: History,
    },
    scale: {
      title: 'Escalabilidad',
      desc: 'Mi software actual se queda corto y necesito ampliarlo.',
      icon: Rocket,
    },
  },
  timeline: {
    asap: {
      title: 'Lo antes posible',
      desc: 'Prioridad alta, necesito un MVP rápido.',
      icon: Clock,
    },
    normal: {
      title: '1 a 3 meses',
      desc: 'Tengo un plazo definido y razonable.',
      icon: Calendar,
    },
    flexible: {
      title: 'Flexible',
      desc: 'Priorizo la calidad total sin prisa.',
      icon: Layers,
    },
  },
}

export function ProjectEstimator() {
  const [step, setStep] = useState(1)

  // Guardamos las IDs de lo que elige el usuario
  const [selection, setSelection] = useState({
    type: '' as keyof typeof projectData.type,
    phase: '' as keyof typeof projectData.phase,
    timeline: '' as keyof typeof projectData.timeline,
  })

  const [email, setEmail] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleNext = (category: string, value: string) => {
    setSelection({ ...selection, [category]: value })

    // Si es el último paso de preguntas, lanzamos la animación de análisis
    if (step === 3) {
      setStep(4)
      setIsAnalyzing(true)
    } else {
      setStep(step + 1)
    }
  }

  // Simula el tiempo de cálculo del sistema
  useEffect(() => {
    if (isAnalyzing) {
      const timer = setTimeout(() => {
        setIsAnalyzing(false)
        setStep(5) // Pasa a la pantalla de resultados
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isAnalyzing])

  // Obtener los datos reales seleccionados para el resumen
  const selectedType = selection.type ? projectData.type[selection.type] : null
  const selectedPhase = selection.phase
    ? projectData.phase[selection.phase]
    : null

  return (
    <section className='py-24 bg-gray-50 border-t border-gray-200 overflow-hidden'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <span className='inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-wider uppercase mb-3 border border-green-200'>
            Asesor Virtual
          </span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight'>
            Calcula tu proyecto en 3 pasos
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Cuéntanos qué necesitas y nuestro sistema te recomendará la mejor
            arquitectura y te enviará una estimación.
          </p>
        </div>

        <div className='bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-12 min-h-[450px] flex flex-col justify-center relative'>
          {/* Barra de progreso (Solo visible en las preguntas) */}
          {step <= 3 && (
            <div className='absolute top-0 left-0 w-full h-1.5 bg-gray-100 rounded-t-3xl overflow-hidden'>
              <motion.div
                className='h-full bg-green-500'
                initial={{ width: '0%' }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          )}

          <AnimatePresence mode='wait'>
            {/* --- PASO 1: TIPO DE PROYECTO --- */}
            {step === 1 && (
              <motion.div
                key='step1'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className='w-full'
              >
                <h3 className='text-2xl font-bold text-gray-800 mb-8 text-center'>
                  1. ¿Qué tipo de solución buscas?
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {Object.entries(projectData.type).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => handleNext('type', key)}
                      className='flex flex-col items-center p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-green-500 hover:bg-green-50 hover:shadow-lg transition-all group'
                    >
                      <div className='w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors'>
                        <item.icon className='w-8 h-8 text-gray-500 group-hover:text-green-600 transition-colors' />
                      </div>
                      <span className='font-bold text-gray-800 group-hover:text-green-700 text-lg'>
                        {item.title}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* --- PASO 2: FASE DEL PROYECTO --- */}
            {step === 2 && (
              <motion.div
                key='step2'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className='w-full'
              >
                <h3 className='text-2xl font-bold text-gray-800 mb-8 text-center'>
                  2. ¿En qué estado se encuentra?
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {Object.entries(projectData.phase).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => handleNext('phase', key)}
                      className='flex flex-col items-start p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-green-500 hover:bg-green-50 transition-all text-left group'
                    >
                      <item.icon className='w-8 h-8 text-gray-400 group-hover:text-green-600 mb-4 transition-colors' />
                      <span className='font-bold text-gray-800 text-lg mb-2 group-hover:text-green-700'>
                        {item.title}
                      </span>
                      <span className='text-gray-500 text-sm leading-relaxed'>
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* --- PASO 3: PLAZOS --- */}
            {step === 3 && (
              <motion.div
                key='step3'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className='w-full'
              >
                <h3 className='text-2xl font-bold text-gray-800 mb-8 text-center'>
                  3. ¿Cuál es la urgencia del proyecto?
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  {Object.entries(projectData.timeline).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => handleNext('timeline', key)}
                      className='flex flex-col items-start p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-green-500 hover:bg-green-50 transition-all text-left group'
                    >
                      <item.icon className='w-8 h-8 text-gray-400 group-hover:text-green-600 mb-4 transition-colors' />
                      <span className='font-bold text-gray-800 text-lg mb-2 group-hover:text-green-700'>
                        {item.title}
                      </span>
                      <span className='text-gray-500 text-sm leading-relaxed'>
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* --- PASO 4: PANTALLA DE CARGA (Analizando) --- */}
            {step === 4 && (
              <motion.div
                key='step4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full flex flex-col items-center justify-center py-10'
              >
                <div className='relative w-24 h-24 mb-6'>
                  {/* Círculo giratorio */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className='absolute inset-0 rounded-full border-t-4 border-green-500 border-opacity-50'
                  ></motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className='absolute inset-2 rounded-full border-b-4 border-green-300 border-opacity-80'
                  ></motion.div>
                  <Cpu className='absolute inset-0 m-auto w-8 h-8 text-green-600 animate-pulse' />
                </div>
                <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                  Analizando requerimientos...
                </h3>
                <p className='text-gray-500'>
                  Buscando la mejor arquitectura para tu proyecto
                </p>
              </motion.div>
            )}

            {/* --- PASO 5: RESULTADOS PERSONALIZADOS Y CAPTURA DE LEAD --- */}
            {step === 5 && selectedType && selectedPhase && (
              <motion.div
                key='step5'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className='w-full'
              >
                <div className='grid lg:grid-cols-2 gap-10 items-center'>
                  {/* Resumen dinámico basado en sus respuestas */}
                  <div className='bg-gray-50 p-8 rounded-2xl border border-gray-100'>
                    <div className='flex items-center gap-3 mb-6'>
                      <CheckCircle2 className='w-8 h-8 text-green-500' />
                      <h3 className='text-2xl font-bold text-gray-900'>
                        Análisis Completado
                      </h3>
                    </div>

                    <p className='text-gray-700 mb-6 leading-relaxed'>
                      Para tu proyecto de{' '}
                      <strong className='text-gray-900'>
                        {selectedType.title.toLowerCase()}
                      </strong>{' '}
                      en fase de{' '}
                      <strong className='text-gray-900'>
                        {selectedPhase.title.toLowerCase()}
                      </strong>
                      , recomendamos utilizar tecnologías robustas y modernas:
                    </p>

                    <div className='mb-6'>
                      <span className='block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3'>
                        Stack Tecnológico Sugerido
                      </span>
                      <div className='flex flex-wrap gap-2'>
                        {selectedType.stack.map((tech, i) => (
                          <span
                            key={i}
                            className='px-3 py-1.5 bg-green-100 text-green-700 rounded-md text-sm font-bold border border-green-200'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Formulario de captura */}
                  <div>
                    <h4 className='text-xl font-bold text-gray-900 mb-3'>
                      Obtén tu presupuesto
                    </h4>
                    <p className='text-gray-600 text-sm mb-6'>
                      Déjanos tu email y te enviaremos de inmediato una
                      estimación económica inicial basada en esta configuración
                      tecnológica.
                    </p>

                    <div className='flex flex-col gap-3'>
                      <input
                        type='email'
                        placeholder='tu@correoprofesional.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-5 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all'
                      />
                      <button
                        onClick={() => setStep(6)}
                        disabled={!email.includes('@')}
                        className='w-full px-6 py-3.5 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors flex items-center justify-center group'
                      >
                        Recibir estimación{' '}
                        <Send className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                      </button>
                      <p className='text-xs text-gray-400 text-center mt-2'>
                        Tus datos están seguros y no enviamos spam.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- PASO 6: ÉXITO --- */}
            {step === 6 && (
              <motion.div
                key='step6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='w-full text-center py-10'
              >
                <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner'>
                  <CheckCircle2 className='w-10 h-10 text-green-600' />
                </div>
                <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                  ¡Solicitud enviada!
                </h3>
                <p className='text-lg text-gray-600 max-w-lg mx-auto'>
                  Revisa tu bandeja de entrada en los próximos minutos. Nuestro
                  equipo de ingeniería ya está revisando tu perfil para agendar
                  una llamada si lo necesitas.
                </p>
                <button
                  onClick={() => {
                    setStep(1)
                    setSelection({
                      type: '' as keyof typeof projectData.type,
                      phase: '' as keyof typeof projectData.phase,
                      timeline: '' as keyof typeof projectData.timeline,
                    })
                    setEmail('')
                  }}
                  className='mt-10 px-6 py-2 bg-white border border-gray-200 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-colors inline-block'
                >
                  Volver a calcular
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
