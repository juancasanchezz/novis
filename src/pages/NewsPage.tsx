import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, User, Search, Folder, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { newsArticles, categories } from '../data/news'
import { Helmet } from 'react-helmet-async'
export function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // LÓGICA DE FILTRADO REAL (Buscador + Categorías)
  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory
      ? article.category === selectedCategory
      : true
    return matchesSearch && matchesCategory
  })

  // Obtener los 3 artículos más recientes para el widget
  const recentArticles = newsArticles.slice(0, 3)

  return (
    <>
      <Helmet>
        <title key='title'>Novis - Novedades</title>

        <meta
          name='keywords'
          content={`Novis, Software, Novedades, Extremadura`}
        />
      </Helmet>
      <div className='bg-gray-50 flex flex-col w-full min-h-screen pb-20'>
        {/* HERO DEL BLOG */}
        <section className='relative bg-gray-900 py-20 border-b border-gray-800 overflow-hidden'>
          <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className='text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight'>
                Actualidad NOVIS
              </h1>
              <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
                Noticias, casos de éxito y tendencias tecnológicas.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTENIDO PRINCIPAL (Layout con Sidebar) */}
        <section className='pt-12'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col lg:flex-row gap-10'>
              {/* COLUMNA IZQUIERDA: Artículos */}
              <div className='w-full lg:w-2/3'>
                {/* Mostrando filtros activos */}
                {selectedCategory && (
                  <div className='mb-6 flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm'>
                    <span className='text-gray-700 font-medium'>
                      Categoría:{' '}
                      <strong className='text-green-600'>
                        {selectedCategory}
                      </strong>
                    </span>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className='text-sm text-gray-500 hover:text-red-500 font-bold'
                    >
                      Limpiar filtro ✕
                    </button>
                  </div>
                )}

                {filteredArticles.length === 0 ? (
                  <div className='text-center py-20 bg-white rounded-2xl border border-gray-200'>
                    <Search className='w-12 h-12 text-gray-300 mx-auto mb-4' />
                    <h3 className='text-xl font-bold text-gray-700'>
                      No se encontraron artículos
                    </h3>
                    <p className='text-gray-500'>
                      Prueba con otros términos de búsqueda.
                    </p>
                  </div>
                ) : (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {filteredArticles.map((article, index) => (
                      <motion.article
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className='bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden group flex flex-col h-full transition-all duration-300'
                      >
                        <Link
                          to={`/actualidad/${article.slug}`}
                          className='relative h-52 overflow-hidden block'
                        >
                          <div className='absolute top-4 left-4 z-10'>
                            <span className='bg-green-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-md shadow-sm'>
                              {article.category}
                            </span>
                          </div>
                          <img
                            src={article.image}
                            alt={article.title}
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                          />
                        </Link>
                        <div className='p-6 flex flex-col flex-grow'>
                          <div className='flex items-center text-xs text-gray-500 mb-3 space-x-4 font-medium'>
                            <span className='flex items-center'>
                              <Calendar className='w-3.5 h-3.5 mr-1 text-green-600' />{' '}
                              {article.date}
                            </span>
                            <span className='flex items-center'>
                              <User className='w-3.5 h-3.5 mr-1 text-green-600' />{' '}
                              {article.author}
                            </span>
                          </div>
                          <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2'>
                            <Link to={`/actualidad/${article.slug}`}>
                              {article.title}
                            </Link>
                          </h3>
                          <p className='text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed'>
                            {article.excerpt}
                          </p>
                          <Link
                            to={`/actualidad/${article.slug}`}
                            className='mt-auto inline-flex items-center text-green-600 font-bold text-sm hover:text-green-800 transition-colors'
                          >
                            Leer más{' '}
                            <ArrowRight className='ml-1.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform' />
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                )}
              </div>

              {/* COLUMNA DERECHA: Sidebar */}
              <aside className='w-full lg:w-1/3 space-y-8'>
                {/* Widget: Buscar */}
                <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
                  <h4 className='text-lg font-bold text-gray-900 mb-4 flex items-center'>
                    <Search className='w-5 h-5 mr-2 text-green-600' /> Buscar
                  </h4>
                  <div className='relative'>
                    <input
                      type='text'
                      placeholder='Buscar artículos...'
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className='w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:bg-white outline-none transition-all'
                    />
                    <Search className='w-5 h-5 text-gray-400 absolute right-3 top-3.5 pointer-events-none' />
                  </div>
                </div>

                {/* Widget: Categorías */}
                <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
                  <h4 className='text-lg font-bold text-gray-900 mb-4 flex items-center'>
                    <Folder className='w-5 h-5 mr-2 text-green-600' />{' '}
                    Categorías
                  </h4>
                  <ul className='space-y-2'>
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <button
                          onClick={() => setSelectedCategory(cat)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-sm font-medium ${selectedCategory === cat ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}`}
                        >
                          {cat}
                          <span className='bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs'>
                            {
                              newsArticles.filter((a) => a.category === cat)
                                .length
                            }
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Widget: Entradas Frecuentes / Recientes */}
                <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
                  <h4 className='text-lg font-bold text-gray-900 mb-5 flex items-center'>
                    <Clock className='w-5 h-5 mr-2 text-green-600' /> Entradas
                    Recientes
                  </h4>
                  <div className='space-y-4'>
                    {recentArticles.map((article) => (
                      <Link
                        key={article.id}
                        to={`/actualidad/${article.slug}`}
                        className='flex items-start gap-4 group'
                      >
                        <div className='w-16 h-16 rounded-lg overflow-hidden flex-shrink-0'>
                          <img
                            src={article.image}
                            alt={article.title}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform'
                          />
                        </div>
                        <div>
                          <h5 className='text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-green-600 transition-colors leading-tight mb-1'>
                            {article.title}
                          </h5>
                          <span className='text-xs text-gray-500 font-medium'>
                            {article.date}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
