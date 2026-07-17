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
    'Transformación Digital': 'bg-lime-500/15 text-lime-600 border-lime-500/20',
    'Cloud Computing': 'bg-sky-500/15 text-sky-600 border-sky-500/20',
    'Inteligencia Artificial': 'bg-violet-500/15 text-violet-600 border-violet-500/20',
    'Seguridad': 'bg-rose-500/15 text-rose-600 border-rose-500/20',
    default: 'bg-slate-100 text-slate-600 border-slate-200',
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
      className='group flex flex-col h-full bg-white border border-slate-200 shadow-sm rounded-3xl overflow-hidden relative transition-all duration-500 hover:shadow-xl hover:border-lime-500/30 hover:-translate-y-1'
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
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-white/90 ${catColor.replace(/bg-.*\/15/, '')}`}>
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
            <Calendar className='w-3.5 h-3.5 text-lime-500/60' />
            {article.date}
          </span>
          <span className='flex items-center gap-1.5'>
            <Clock className='w-3.5 h-3.5 text-lime-500/60' />
            5 min lectura
          </span>
        </div>

        <h3 className='text-lg font-bold text-slate-900 mb-3 group-hover:text-lime-700 transition-colors duration-300 leading-snug line-clamp-2'>
          <Link to={`/actualidad/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className='text-slate-600 text-sm mb-5 leading-relaxed font-light line-clamp-3 flex-grow'>
          {article.excerpt}
        </p>

        {/* CTA */}
        <Link
          to={`/actualidad/${article.slug}`}
          className='inline-flex items-center text-lime-600 text-sm font-semibold group-hover:text-lime-500 transition-colors mt-auto'
        >
          Leer artículo
          <ArrowRight className='ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform' />
        </Link>
      </div>

      {/* Borde inferior neon en hover */}
      <div className='absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
    </motion.article>
  )
}

export function LatestNews() {
  const latestArticles = newsArticles.slice(0, 3)

  return (
    <section className='relative py-24 md:py-32 bg-white overflow-hidden'>
      {/* Puntos de fondo */}
      <div className='absolute inset-0 bg-dots-light opacity-60' />

      {/* Orb */}
      <div className='absolute top-0 left-1/4 w-[400px] h-[400px] bg-lime-500/4 rounded-full blur-[100px] pointer-events-none' />

      {/* Línea superior */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Cabecera */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='max-w-2xl'
          >
            <span className='inline-flex items-center py-1.5 px-4 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase mb-5'>
              Insights &amp; Actualidad
            </span>
            <h2 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight'>
              Últimas{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-400'>
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
              className='inline-flex items-center bg-slate-50 border border-slate-200 px-5 py-2.5 rounded-xl text-slate-700 font-semibold text-sm hover:bg-slate-100 hover:border-lime-500/30 hover:text-lime-700 transition-all duration-300 group shadow-sm'
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
