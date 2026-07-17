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
  Zap,
} from 'lucide-react'

const projectData = {
  type: {
    web: {
      title: 'Plataforma Web / Portal',
      icon: Monitor,
      stack: ['React', 'Next.js', 'Tailwind'],
      color: 'from-sky-500/20 to-cyan-500/10 border-sky-500/30',
      iconColor: 'text-sky-400',
    },
    app: {
      title: 'Aplicación Móvil',
      icon: Smartphone,
      stack: ['React Native', 'Firebase', 'Node.js'],
      color: 'from-violet-500/20 to-purple-500/10 border-violet-500/30',
      iconColor: 'text-violet-400',
    },
    erp: {
      title: 'Software a Medida / ERP',
      icon: Database,
      stack: ['PostgreSQL', 'Node.js', 'Docker'],
      color: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30',
      iconColor: 'text-emerald-400',
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
  const [selection, setSelection] = useState({
    type: '' as keyof typeof projectData.type,
    phase: '' as keyof typeof projectData.phase,
    timeline: '' as keyof typeof projectData.timeline,
  })
  const [email, setEmail] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleNext = (category: string, value: string) => {
    setSelection({ ...selection, [category]: value })
    if (step === 3) {
      setStep(4)
      setIsAnalyzing(true)
    } else {
      setStep(step + 1)
    }
  }

  useEffect(() => {
    if (isAnalyzing) {
      const timer = setTimeout(() => {
        setIsAnalyzing(false)
        setStep(5)
      }, 2200)
      return () => clearTimeout(timer)
    }
  }, [isAnalyzing])

  const selectedType = selection.type ? projectData.type[selection.type] : null
  const selectedPhase = selection.phase ? projectData.phase[selection.phase] : null

  return (
    <section className='relative py-24 md:py-32 bg-slate-950 overflow-hidden'>
      {/* Orb central */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-emerald-400/4 blur-[140px] pointer-events-none rounded-full' />

      {/* Malla */}
      <div className='absolute inset-0 bg-dots-dark opacity-30' />

      {/* Línea superior */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent' />

      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Cabecera */}
        <div className='text-center mb-14'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className='inline-flex items-center gap-2 py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-4 border border-emerald-500/20'>
              <Zap className='w-3 h-3' />
              Asesor Virtual
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-5xl font-black text-white mb-4 tracking-tight'
          >
            Calcula tu proyecto en{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400'>3 pasos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-lg text-slate-400 max-w-2xl mx-auto font-light'
          >
            Cuéntanos qué necesitas y nuestro sistema te recomendará la mejor arquitectura.
          </motion.p>
        </div>

        {/* Panel principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='glass-dark rounded-3xl shadow-2xl shadow-black/50 p-6 md:p-12 min-h-[420px] flex flex-col justify-center relative overflow-hidden'
        >
          {/* Barra de progreso */}
          {step <= 3 && (
            <div className='absolute top-0 left-0 w-full h-1 bg-white/5 rounded-t-3xl overflow-hidden'>
              <motion.div
                className='h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full'
                initial={{ width: '0%' }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </div>
          )}

          {/* Indicador de paso */}
          {step <= 3 && (
            <div className='absolute top-4 right-6 flex gap-1.5'>
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    s <= step ? 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
          )}

          <AnimatePresence mode='wait'>
            {/* PASO 1: Tipo */}
            {step === 1 && (
              <motion.div
                key='step1'
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className='w-full'
              >
                <h3 className='text-xl md:text-2xl font-bold text-white mb-8 text-center'>
                  1. ¿Qué tipo de solución buscas?
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {Object.entries(projectData.type).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => handleNext('type', key)}
                      className={`flex flex-col items-center p-7 rounded-2xl border-2 border-white/8 hover:border-emerald-500/50 bg-white/3 hover:bg-gradient-to-br ${item.color} transition-all duration-300 group hover:-translate-y-0.5`}
                    >
                      <div className='w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                        <item.icon className={`w-7 h-7 text-slate-500 group-hover:${item.iconColor} transition-colors`} />
                      </div>
                      <span className='font-bold text-slate-300 group-hover:text-white text-base transition-colors'>
                        {item.title}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* PASO 2: Fase */}
            {step === 2 && (
              <motion.div
                key='step2'
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className='w-full'
              >
                <h3 className='text-xl md:text-2xl font-bold text-white mb-8 text-center'>
                  2. ¿En qué estado se encuentra?
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {Object.entries(projectData.phase).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => handleNext('phase', key)}
                      className='flex flex-col items-start p-6 bg-white/3 rounded-2xl border-2 border-white/8 hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all duration-300 text-left group hover:-translate-y-0.5'
                    >
                      <item.icon className='w-7 h-7 text-slate-500 group-hover:text-emerald-400 mb-4 transition-colors' />
                      <span className='font-bold text-slate-200 text-base mb-2 group-hover:text-white transition-colors'>{item.title}</span>
                      <span className='text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors'>{item.desc}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* PASO 3: Timeline */}
            {step === 3 && (
              <motion.div
                key='step3'
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className='w-full'
              >
                <h3 className='text-xl md:text-2xl font-bold text-white mb-8 text-center'>
                  3. ¿Cuál es la urgencia del proyecto?
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {Object.entries(projectData.timeline).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => handleNext('timeline', key)}
                      className='flex flex-col items-start p-6 bg-white/3 rounded-2xl border-2 border-white/8 hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all duration-300 text-left group hover:-translate-y-0.5'
                    >
                      <item.icon className='w-7 h-7 text-slate-500 group-hover:text-emerald-400 mb-4 transition-colors' />
                      <span className='font-bold text-slate-200 text-base mb-2 group-hover:text-white transition-colors'>{item.title}</span>
                      <span className='text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors'>{item.desc}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* PASO 4: Analizando */}
            {step === 4 && (
              <motion.div
                key='step4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='w-full flex flex-col items-center justify-center py-14'
              >
                {/* Anillos concéntricos pulsantes */}
                <div className='relative w-28 h-28 mb-8'>
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className='absolute rounded-full border border-emerald-500/40'
                      style={{ inset: i * 8 }}
                      animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.95, 1.05, 0.95] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                    />
                  ))}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <Cpu className='w-10 h-10 text-emerald-400 animate-pulse' />
                  </div>
                </div>
                <h3 className='text-2xl font-bold text-white mb-2'>Analizando requerimientos...</h3>
                <p className='text-slate-400'>Buscando la mejor arquitectura para tu proyecto</p>

                {/* Barra de carga animada */}
                <div className='mt-8 w-64 h-1 bg-white/5 rounded-full overflow-hidden'>
                  <motion.div
                    className='h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full'
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2.2, ease: 'easeInOut' }}
                  />
                </div>
              </motion.div>
            )}

            {/* PASO 5: Resultados */}
            {step === 5 && selectedType && selectedPhase && (
              <motion.div
                key='step5'
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className='w-full'
              >
                <div className='grid lg:grid-cols-2 gap-8 items-start'>
                  {/* Resumen */}
                  <div className='bg-white/3 p-7 rounded-2xl border border-white/8'>
                    <div className='flex items-center gap-3 mb-5'>
                      <div className='w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center'>
                        <CheckCircle2 className='w-4 h-4 text-emerald-400' />
                      </div>
                      <h3 className='text-lg font-bold text-white'>Análisis Completado</h3>
                    </div>

                    <p className='text-slate-400 mb-6 leading-relaxed text-sm'>
                      Para tu proyecto de{' '}
                      <strong className='text-emerald-400'>{selectedType.title.toLowerCase()}</strong>{' '}
                      en fase de{' '}
                      <strong className='text-emerald-400'>{selectedPhase.title.toLowerCase()}</strong>,
                      recomendamos:
                    </p>

                    <span className='block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3'>
                      Stack Tecnológico Sugerido
                    </span>
                    <div className='flex flex-wrap gap-2'>
                      {selectedType.stack.map((tech, i) => (
                        <span
                          key={i}
                          className='px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-bold border border-emerald-500/20'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Formulario */}
                  <div>
                    <h4 className='text-xl font-bold text-white mb-2'>Obtén tu presupuesto</h4>
                    <p className='text-slate-400 text-sm mb-6 leading-relaxed'>
                      Déjanos tu email y te enviaremos una estimación económica inicial basada en esta configuración.
                    </p>

                    <div className='flex flex-col gap-3'>
                      <input
                        type='email'
                        placeholder='tu@correoprofesional.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-5 py-3.5 rounded-xl border border-white/10 outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/20 transition-all bg-white/5 text-white placeholder-slate-600 text-sm'
                      />
                      <button
                        onClick={() => setStep(6)}
                        disabled={!email.includes('@')}
                        className='w-full px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:cursor-not-allowed text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/20'
                      >
                        Recibir estimación
                        <Send className='w-4 h-4 group-hover:translate-x-0.5 transition-transform' />
                      </button>
                      <p className='text-xs text-slate-600 text-center'>
                        Tus datos están seguros. Sin spam.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* PASO 6: Éxito */}
            {step === 6 && (
              <motion.div
                key='step6'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className='w-full text-center py-12'
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className='w-20 h-20 bg-emerald-500/15 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]'
                >
                  <CheckCircle2 className='w-10 h-10 text-emerald-400' />
                </motion.div>
                <h3 className='text-3xl font-black text-white mb-4'>¡Solicitud enviada!</h3>
                <p className='text-lg text-slate-400 max-w-lg mx-auto mb-10 font-light'>
                  Revisa tu bandeja de entrada en los próximos minutos. Nuestro equipo ya está revisando tu perfil.
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
                  className='px-6 py-2.5 glass-dark border border-white/10 text-slate-400 hover:text-white font-semibold rounded-xl hover:border-white/20 transition-all text-sm'
                >
                  Volver a calcular
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
