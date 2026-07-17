import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const words = [
  'la Administración Pública',
  'el Sector Educativo',
  'Startups Innovadoras',
  'tu Empresa',
]

// Partículas estáticas generadas al inicio (evita recalcular en re-renders)
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  opacity: Math.random() * 0.5 + 0.1,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 8,
}))

const STATS = [
  { value: 25, suffix: '+', label: 'Años de experiencia' },
  { value: 25, suffix: '+', label: 'Proyectos entregados' },
  { value: 15, suffix: '+', label: 'Clientes activos' },
]

// Hook para animar un contador numérico
function useCounter (target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatItem ({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCounter(value, 1800, start)
  return (
    <div className='bg-white rounded-3xl p-8 shadow-2xl shadow-black/10 border border-slate-100 flex flex-col items-start min-h-[140px] justify-center'>
      <span className='text-4xl md:text-5xl font-light text-slate-900 tabular-nums'>
        {count}<span className='text-lime-500 font-medium ml-1'>{suffix}</span>
      </span>
      <span className='text-slate-600 text-sm mt-2 font-medium'>{label}</span>
    </div>
  )
}

export function DynamicHero () {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax con el mouse
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const orb1X = useTransform(smoothX, [-1, 1], [-25, 25])
  const orb1Y = useTransform(smoothY, [-1, 1], [-20, 20])
  const orb2X = useTransform(smoothX, [-1, 1], [20, -20])
  const orb2Y = useTransform(smoothY, [-1, 1], [15, -15])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2)
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2)
  }, [mouseX, mouseY])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove)
    return () => el.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  // Efecto typewriter
  useEffect(() => {
    const currentWord = words[wordIndex]
    const speed = isDeleting ? 45 : 95
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1800)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      } else {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)))
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex])

  // Observer para disparar el conteo de stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.5 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className='relative bg-slate-950 pb-16 pt-28 lg:pt-32 rounded-b-[2.5rem] border-b border-slate-800/50 shadow-2xl'
    >
      {/* ---- CAPAS DE FONDO ---- */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none rounded-b-[2.5rem]'>
        {/* Gradiente radial principal */}
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(132,204,22,0.15),transparent)]' />

      {/* Malla de puntos dark */}
      <div className='absolute inset-0 bg-grid-dark opacity-30' />

      {/* Orb 1 — lime */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className='absolute top-[-10%] right-[5%] w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none animate-glow-pulse'
      />

      {/* Orb 2 — cyan */}
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className='absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-float-slow'
      />

      {/* Partículas de luz */}
      <div className='absolute inset-0 pointer-events-none'>
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className='absolute rounded-full bg-lime-400'
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{ y: [0, -30, 0], opacity: [p.opacity, p.opacity * 2, p.opacity] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Línea horizontal de acento */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-500/30 to-transparent' />
      </div>

      {/* ---- CONTENIDO ---- */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-4 lg:mb-6'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='max-w-5xl'
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-glow-lime'>
              <motion.span
                className='w-1.5 h-1.5 bg-lime-400 rounded-full'
                animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Consultoría Tecnológica · Extremadura
              <Zap className='w-3 h-3' />
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-7xl font-medium text-white mb-6 tracking-tight leading-[1.1] min-h-[160px] lg:min-h-[240px]'
          >
            Desarrollamos soluciones
            <br />
            avanzadas para{' '}
            <span className='relative inline-block font-semibold'>
              <span className='text-lime-400'>
                {text}
              </span>
              {/* Cursor parpadeante */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.75, repeat: Infinity }}
                className='inline-block w-[2px] h-[0.9em] bg-lime-400 ml-1.5 align-middle shadow-[0_0_12px_rgba(163,230,53,0.5)]'
              />
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className='text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light'
          >
            En <strong className='text-white font-medium'>NOVIS Software</strong> transformamos ideas en plataformas robustas,
            escalables y orientadas a resultados. Más de 25 años de experiencia en proyectos de alto impacto.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className='flex flex-col sm:flex-row gap-4 mb-8'
          >
            {/* CTA primario */}
            <Link
              to='/contacto'
              className='relative inline-flex items-center justify-center px-8 py-4 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold rounded-2xl transition-all duration-300 text-base overflow-hidden group shadow-lg shadow-lime-500/25 hover:shadow-lime-500/40 hover:-translate-y-0.5'
            >
              <span className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 skew-x-12' />
              <span className='relative'>Inicia tu proyecto</span>
              <ArrowRight className='ml-2.5 w-5 h-5 relative group-hover:translate-x-1 transition-transform' />
            </Link>

            {/* CTA secundario */}
            <Link
              to='/servicios'
              className='inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/5 text-white font-semibold rounded-2xl border border-white/20 hover:border-lime-500/50 transition-all duration-300 text-base shadow-sm hover:shadow hover:-translate-y-0.5'
            >
              Ver servicios
              <ArrowRight className='ml-2 w-4 h-4 opacity-60' />
            </Link>
          </motion.div>

          {/* Línea divisora */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className='h-px bg-gradient-to-r from-lime-500/30 via-white/10 to-transparent mb-16 origin-left hidden md:block'
          />
        </motion.div>
      </div>

      {/* Estadísticas con contador - Posicionadas absolutas abajo para solapar */}
      <div className='absolute bottom-0 left-0 w-full translate-y-1/2 z-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6'
          >
            {STATS.map((stat) => (
              <StatItem key={stat.label} {...stat} start={statsVisible} />
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  )
}
