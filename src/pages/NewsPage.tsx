import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowRight, User, Search, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { newsArticles, categories } from '../data/news'
import { Helmet } from 'react-helmet-async'

export function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredArticles = newsArticles.filter((article) => {
    // Excluir Casos de Éxito ya que ahora tienen su propia página
    if (article.category === 'Casos de Éxito') return false;

    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory
      ? article.category === selectedCategory
      : true
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Helmet>
        <title key='title'>Novis - Actualidad</title>
        <meta
          name='keywords'
          content={`Novis, Software, Novedades, Extremadura, Actualidad`}
        />
      </Helmet>
      
      <div className='bg-slate-50 flex flex-col w-full min-h-screen pb-24'>
        {/* HERO EDITORIAL PREMIUM */}
        <section className='relative bg-slate-950 pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-800'>
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950"></div>
          
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='max-w-3xl'
            >
              <div className='inline-flex items-center space-x-2 bg-emerald-950/50 border border-emerald-800/50 px-3 py-1 rounded-full mb-6 shadow-sm'>
                <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse'></span>
                <span className='text-xs font-bold uppercase tracking-widest text-emerald-400'>Intelligence & Insights</span>
              </div>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]'>
                Actualidad <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>NOVIS</span>
              </h1>
              <p className='text-lg md:text-xl text-slate-300 leading-relaxed font-medium'>
                Explora nuestras últimas noticias, análisis técnicos profundos, casos de éxito y las tendencias que están redefiniendo el sector del desarrollo de software.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTROLES DE FILTRADO (Solid) */}
        <section className='sticky top-20 md:top-24 [.header-hidden_&]:!top-0 z-40 bg-slate-50 border-b border-slate-200 py-4 transition-all duration-300 shadow-sm'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4'>
            
            {/* Buscador Integrado */}
            <div className='relative w-full md:max-w-xs group'>
              <Search className='w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-500 transition-colors' />
              <input
                type='text'
                placeholder='Buscar artículos...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all shadow-inner'
              />
            </div>

            {/* Categorías / Pills horizontales (Scrollable en móvil) */}
            <div className='flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar w-full md:w-auto'>
              <div className="flex items-center text-slate-500 mr-2 flex-shrink-0">
                <Filter className="w-4 h-4 mr-1"/>
                <span className="text-xs font-bold uppercase tracking-widest">Filtros:</span>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                  selectedCategory === null
                    ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                      : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* MOSAICO EDITORIAL */}
        <section className='pt-12 md:pt-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            
            {filteredArticles.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className='text-center py-32 bg-slate-50 rounded-[2rem] border border-slate-200 shadow-sm'
              >
                <Search className='w-16 h-16 text-slate-300 mx-auto mb-6' />
                <h3 className='text-2xl font-bold text-slate-900 mb-2'>
                  No hay resultados
                </h3>
                <p className='text-slate-500'>
                  No hemos encontrado artículos que coincidan con tu búsqueda.
                </p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedCategory(null);}}
                  className='mt-6 px-6 py-2 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700 font-bold rounded-full text-sm uppercase tracking-widest transition-colors shadow-sm'
                >
                  Limpiar Filtros
                </button>
              </motion.div>
            ) : (
              <motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
                <AnimatePresence>
                  {filteredArticles.map((article, index) => {
                    // Mosaico Asimétrico: El primer artículo ocupa 2 columnas en pantallas grandes
                    const isFeatured = index === 0 && selectedCategory === null && searchTerm === '';

                    return (
                      <motion.article
                        layout
                        key={article.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className={`group relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-200 shadow-md hover:shadow-xl transition-shadow duration-500 flex flex-col ${
                          isFeatured ? 'md:col-span-2 md:flex-row' : 'col-span-1'
                        }`}
                      >
                        <Link to={`/actualidad/${article.slug}`} className='absolute inset-0 z-20'>
                          <span className='sr-only'>Leer {article.title}</span>
                        </Link>
                        
                        {/* Imagen - Clara y vibrante */}
                        <div className={`relative overflow-hidden z-0 ${isFeatured ? 'md:w-1/2 h-64 md:h-auto' : 'h-64 md:h-72 w-full'}`}>
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className='absolute top-4 left-4 z-10'>
                            <span className='bg-slate-50/95 backdrop-blur-xl text-emerald-700 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-sm'>
                              {article.category}
                            </span>
                          </div>
                        </div>

                        {/* Contenido */}
                        <div className={`relative z-10 flex flex-col justify-center p-8 bg-slate-50 ${isFeatured ? 'md:w-1/2' : 'flex-grow'}`}>
                          <div className='flex items-center gap-3 mb-4'>
                            <span className='flex items-center text-slate-500 text-xs font-medium uppercase tracking-widest'>
                              <Calendar className='w-4 h-4 mr-2 text-emerald-500' />
                              {article.date}
                            </span>
                          </div>
                          
                          <h3 className={`font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300 leading-snug ${
                            isFeatured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                          }`}>
                            {article.title}
                          </h3>
                          
                          <p className={`text-slate-600 mb-8 leading-relaxed font-light ${
                            isFeatured ? 'text-base md:text-lg' : 'text-sm md:text-base'
                          }`}>
                            {article.excerpt}
                          </p>
                          
                          <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                            <span className='flex items-center text-slate-500 text-xs font-medium uppercase tracking-widest'>
                              <User className='w-4 h-4 mr-2' />
                              {article.author}
                            </span>
                            <div className='flex items-center text-emerald-600 font-bold text-sm uppercase tracking-widest group-hover:text-emerald-500 transition-colors'>
                               Leer <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </section>

      </div>
    </>
  )
}
