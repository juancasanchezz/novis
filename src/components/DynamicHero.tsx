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
    <div className='flex flex-col items-center sm:items-start'>
      <span className='text-3xl md:text-4xl font-black text-white tabular-nums'>
        {count}<span className='text-emerald-400'>{suffix}</span>
      </span>
      <span className='text-slate-500 text-sm mt-1 font-medium'>{label}</span>
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
      className='relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950'
    >
      {/* ---- CAPAS DE FONDO ---- */}

      {/* Gradiente radial principal */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.12),transparent)]' />

      {/* Malla de puntos */}
      <div className='absolute inset-0 bg-dots-dark opacity-60' />

      {/* Orb 1 — verde */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className='absolute top-[-10%] right-[5%] w-[600px] h-[600px] bg-emerald-500/6 rounded-full blur-[120px] pointer-events-none animate-glow-pulse'
      />

      {/* Orb 2 — cyan */}
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className='absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none animate-float-slow'
      />

      {/* Partículas de luz */}
      <div className='absolute inset-0 pointer-events-none'>
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className='absolute rounded-full bg-emerald-400'
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
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent' />

      {/* ---- CONTENIDO ---- */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 pb-16'>
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
            <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-8'>
              <motion.span
                className='w-1.5 h-1.5 bg-emerald-400 rounded-full'
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
            className='text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.05]'
          >
            Desarrollamos soluciones
            <br />
            avanzadas para{' '}
            <span className='relative inline-block'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 animate-gradient-shift'>
                {text}
              </span>
              {/* Cursor parpadeante */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.75, repeat: Infinity }}
                className='inline-block w-[3px] h-[0.8em] bg-emerald-400 ml-1.5 align-middle shadow-[0_0_12px_rgba(52,211,153,0.8)]'
              />
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className='text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-light'
          >
            En <strong className='text-slate-200 font-semibold'>NOVIS Software</strong> transformamos ideas en plataformas robustas,
            escalables y orientadas a resultados. Más de 25 años de experiencia en proyectos de alto impacto.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className='flex flex-col sm:flex-row gap-4 mb-16'
          >
            {/* CTA primario */}
            <Link
              to='/contacto'
              className='relative inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-2xl transition-all duration-300 text-base overflow-hidden group shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5'
            >
              <span className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 skew-x-12' />
              <span className='relative'>Inicia tu proyecto</span>
              <ArrowRight className='ml-2.5 w-5 h-5 relative group-hover:translate-x-1 transition-transform' />
            </Link>

            {/* CTA secundario */}
            <Link
              to='/servicios'
              className='inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 text-base backdrop-blur-sm hover:-translate-y-0.5'
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
            className='h-px bg-gradient-to-r from-emerald-500/30 via-white/5 to-transparent mb-12 origin-left'
          />

          {/* Estadísticas con contador */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className='flex flex-col sm:flex-row gap-8 sm:gap-16'
          >
            {STATS.map((stat) => (
              <StatItem key={stat.label} {...stat} start={statsVisible} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10'
      >
        <span className='text-slate-600 text-xs tracking-widest uppercase'>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className='w-5 h-5 text-emerald-500/50' />
        </motion.div>
      </motion.div>
    </section>
  )
}
