import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { newsArticles } from '../data/news'

// Spotlight hook — sigue el cursor dentro de la tarjeta
function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0, visible: false })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true })
  }

  const handleMouseLeave = () => setPos((p) => ({ ...p, visible: false }))

  return { ref, pos, handleMouseMove, handleMouseLeave }
}

function NewsCard({ article, index }: { article: (typeof newsArticles)[0]; index: number }) {
  const { ref, pos, handleMouseMove, handleMouseLeave } = useSpotlight()

  const categoryColors: Record<string, string> = {
    'Transformación Digital': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    'Cloud Computing': 'bg-sky-500/15 text-sky-400 border-sky-500/20',
    'Inteligencia Artificial': 'bg-violet-500/15 text-violet-400 border-violet-500/20',
    'Seguridad': 'bg-rose-500/15 text-rose-400 border-rose-500/20',
    default: 'bg-white/10 text-slate-400 border-white/10',
  }
  const catColor = categoryColors[article.category] || categoryColors.default

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='group flex flex-col h-full glass-dark rounded-3xl overflow-hidden relative transition-all duration-500 hover:border-white/15 hover:-translate-y-1'
    >
      {/* Spotlight */}
      {pos.visible && (
        <div
          className='absolute pointer-events-none z-0 transition-opacity duration-300 rounded-full'
          style={{
            left: pos.x,
            top: pos.y,
            width: 300,
            height: 300,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Imagen */}
      <Link
        to={`/actualidad/${article.slug}`}
        className='relative h-52 w-full overflow-hidden block flex-shrink-0'
      >
        {/* Overlay gradient */}
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10' />

        {/* Categoría badge */}
        <div className='absolute top-4 left-4 z-20'>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm ${catColor}`}>
            {article.category}
          </span>
        </div>

        <img
          src={article.image}
          alt={article.title}
          className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out'
        />
      </Link>

      {/* Contenido */}
      <div className='flex flex-col flex-grow p-6 relative z-10'>
        {/* Meta */}
        <div className='flex items-center gap-4 text-xs text-slate-500 mb-4 font-medium'>
          <span className='flex items-center gap-1.5'>
            <Calendar className='w-3.5 h-3.5 text-emerald-500/60' />
            {article.date}
          </span>
          <span className='flex items-center gap-1.5'>
            <Clock className='w-3.5 h-3.5 text-emerald-500/60' />
            5 min lectura
          </span>
        </div>

        <h3 className='text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300 leading-snug line-clamp-2'>
          <Link to={`/actualidad/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className='text-slate-400 text-sm mb-5 leading-relaxed font-light line-clamp-3 flex-grow'>
          {article.excerpt}
        </p>

        {/* CTA */}
        <Link
          to={`/actualidad/${article.slug}`}
          className='inline-flex items-center text-emerald-400 text-sm font-semibold group-hover:text-emerald-300 transition-colors mt-auto'
        >
          Leer artículo
          <ArrowRight className='ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform' />
        </Link>
      </div>

      {/* Borde inferior neon en hover */}
      <div className='absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
    </motion.article>
  )
}

export function LatestNews() {
  const latestArticles = newsArticles.slice(0, 3)

  return (
    <section className='relative py-24 md:py-32 bg-slate-950 overflow-hidden'>
      {/* Puntos de fondo */}
      <div className='absolute inset-0 bg-dots-dark opacity-30' />

      {/* Orb */}
      <div className='absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-[100px] pointer-events-none' />

      {/* Línea superior */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Cabecera */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='max-w-2xl'
          >
            <span className='inline-flex items-center py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold tracking-widest uppercase mb-5'>
              Insights &amp; Actualidad
            </span>
            <h2 className='text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight'>
              Últimas{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400'>
                publicaciones
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to='/actualidad'
              className='inline-flex items-center glass-dark px-5 py-2.5 rounded-xl text-slate-300 font-semibold text-sm hover:text-white hover:border-emerald-500/30 transition-all duration-300 group'
            >
              Ver todo el blog
              <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </Link>
          </motion.div>
        </div>

        {/* Grid de artículos */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {latestArticles.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
