import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { newsArticles } from '../data/news'

export function LatestNews() {
  // Cogemos solo los 3 primeros artículos para la portada
  const latestArticles = newsArticles.slice(0, 3)

  return (
    <section className='py-32 bg-white relative overflow-hidden border-b border-slate-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Cabecera de la sección */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='max-w-2xl'
          >
            <span className='inline-block py-1.5 px-4 rounded-full bg-slate-50 text-slate-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-slate-200 shadow-sm'>
              Insights & Actualidad
            </span>
            <h2 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tighter'>
              Nuestras últimas publicaciones
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to='/actualidad'
              className='inline-flex items-center text-emerald-600 font-bold text-lg hover:text-emerald-500 transition-colors group'
            >
              Ver todo el blog
              <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform' />
            </Link>
          </motion.div>
        </div>

        {/* Cuadrícula de 3 Noticias */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12'>
          {latestArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className='group flex flex-col h-full cursor-pointer'
            >
              {/* Imagen Editorial */}
              <Link
                to={`/actualidad/${article.slug}`}
                className='relative h-64 md:h-72 w-full overflow-hidden rounded-2xl mb-8 block shadow-md group-hover:shadow-xl transition-shadow duration-500'
              >
                <div className='absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10'></div>
                <div className='absolute top-4 left-4 z-20'>
                  <span className='bg-white/90 backdrop-blur-md text-emerald-700 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-sm'>
                    {article.category}
                  </span>
                </div>
                <img
                  src={article.image}
                  alt={article.title}
                  className='w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out'
                />
              </Link>

              {/* Contenido Editorial */}
              <div className='flex flex-col flex-grow px-2'>
                <div className='flex items-center text-xs text-slate-400 mb-4 font-medium tracking-wide uppercase'>
                  <Calendar className='w-4 h-4 mr-2 text-emerald-500' />
                  {article.date}
                </div>

                <h3 className='text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors leading-snug'>
                  <Link to={`/actualidad/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className='text-slate-500 text-base mb-6 leading-relaxed font-light'>
                  {article.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

