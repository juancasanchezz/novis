import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { newsArticles } from '../data/news'

export function LatestNews() {
  // Cogemos solo los 3 primeros artículos para la portada
  const latestArticles = newsArticles.slice(0, 3)

  return (
    <section className='py-24 bg-white border-t border-gray-100 relative overflow-hidden'>
      {/* Fondo decorativo muy sutil */}
      <div className='absolute top-0 right-0 w-1/2 h-full opacity-30 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Cabecera de la sección */}
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='max-w-2xl'
          >
            <span className='inline-block py-1 px-3 rounded-full bg-green-50 text-green-700 text-sm font-bold tracking-widest uppercase mb-4 border border-green-100'>
              Blog Corporativo
            </span>
            <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight'>
              Actualidad NOVIS
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to='/actualidad'
              className='inline-flex items-center px-6 py-3 bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-green-700 font-bold rounded-xl transition-colors border border-gray-200 hover:border-green-200 group'
            >
              Ver todos los artículos
              <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </Link>
          </motion.div>
        </div>

        {/* Cuadrícula de 3 Noticias */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {latestArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className='bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden group flex flex-col h-full transition-all duration-300 hover:-translate-y-2'
            >
              {/* Imagen con categoría flotante */}
              <Link
                to={`/actualidad/${article.slug}`}
                className='relative h-56 overflow-hidden block'
              >
                <div className='absolute top-4 left-4 z-10'>
                  <span className='bg-white/90 backdrop-blur-sm text-green-700 text-xs font-extrabold uppercase tracking-wider py-1.5 px-3 rounded-lg shadow-sm'>
                    {article.category}
                  </span>
                </div>
                <img
                  src={article.image}
                  alt={article.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
              </Link>

              {/* Contenido de la tarjeta */}
              <div className='p-6 flex flex-col flex-grow'>
                <div className='flex items-center text-xs text-gray-500 mb-4 font-medium'>
                  <Calendar className='w-4 h-4 mr-1.5 text-green-500' />
                  {article.date}
                </div>

                <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight'>
                  <Link to={`/actualidad/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className='text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed'>
                  {article.excerpt}
                </p>

                {/* Botón de leer más empujado al fondo */}
                <Link
                  to={`/actualidad/${article.slug}`}
                  className='mt-auto inline-flex items-center text-green-600 font-bold text-sm hover:text-green-800 transition-colors group/link'
                >
                  Leer artículo
                  <ArrowRight className='ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform' />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
