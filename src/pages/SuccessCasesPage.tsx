import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowRight, User, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { newsArticles } from '../data/news'
import { Helmet } from 'react-helmet-async'

export function SuccessCasesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  // Filtrar solo artículos de la categoría "Casos de Éxito"
  const successCases = newsArticles.filter(
    (article) => article.category === 'Casos de Éxito'
  )

  const filteredArticles = successCases.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  return (
    <>
      <Helmet>
        <title key='title'>Novis - Casos de Éxito</title>
        <meta
          name='keywords'
          content={`Novis, Software, Casos de Éxito, Extremadura`}
        />
      </Helmet>
      
      <div className='bg-slate-50 flex flex-col w-full min-h-screen pb-24'>
        {/* HERO EDITORIAL */}
        <section className='relative bg-slate-50 pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-200'>
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-100/60 via-slate-50 to-slate-50"></div>
          
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='max-w-3xl'
            >
              <div className='inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-6 shadow-sm'>
                <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse'></span>
                <span className='text-xs font-bold uppercase tracking-widest text-emerald-700'>Nuestra Huella</span>
              </div>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]'>
                Casos de <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>Éxito</span>
              </h1>
              <p className='text-lg md:text-xl text-slate-600 leading-relaxed font-medium'>
                Descubre cómo hemos ayudado a empresas e instituciones a alcanzar sus objetivos de digitalización mediante soluciones tecnológicas a medida.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTROLES DE FILTRADO */}
        <section className='sticky top-20 md:top-24 [.header-hidden_&]:!top-0 z-40 bg-white border-b border-slate-200 py-4 transition-all duration-300 shadow-sm'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4'>
            
            {/* Buscador Integrado */}
            <div className='relative w-full md:max-w-sm group'>
              <Search className='w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-600 transition-colors' />
              <input
                type='text'
                placeholder='Buscar casos de éxito...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all shadow-sm'
              />
            </div>
            
            <div className="text-sm font-bold text-slate-600">
              Mostrando {filteredArticles.length} resultados
            </div>
          </div>
        </section>

        {/* MOSAICO EDITORIAL */}
        <section className='pt-12 md:pt-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            
            {filteredArticles.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className='text-center py-32 bg-white rounded-[2rem] border border-slate-200 shadow-sm'
              >
                <Search className='w-16 h-16 text-slate-300 mx-auto mb-6' />
                <h3 className='text-2xl font-bold text-slate-900 mb-2'>
                  No hay resultados
                </h3>
                <p className='text-slate-600'>
                  No hemos encontrado casos de éxito que coincidan con tu búsqueda.
                </p>
                <button 
                  onClick={() => setSearchTerm('')}
                  className='mt-6 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-full text-sm uppercase tracking-widest transition-colors border border-slate-300'
                >
                  Limpiar Búsqueda
                </button>
              </motion.div>
            ) : (
              <motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                <AnimatePresence>
                  {filteredArticles.map((article, index) => {
                    // Mosaico Asimétrico: El primer artículo ocupa 2 columnas en pantallas grandes
                    const isFeatured = index === 0 && searchTerm === '';

                    return (
                      <motion.article
                        layout
                        key={article.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className={`group relative rounded-[2rem] overflow-hidden bg-white border border-slate-200 flex flex-col h-[400px] md:h-[450px] lg:h-[500px] shadow-sm hover:shadow-xl transition-shadow ${
                          isFeatured ? 'md:col-span-2' : 'col-span-1'
                        }`}
                      >
                        <Link to={`/actualidad/${article.slug}`} className='absolute inset-0 z-20'>
                          <span className='sr-only'>Leer {article.title}</span>
                        </Link>
                        
                        {/* Imagen de fondo con Overlay Claro dinámico */}
                        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-100">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-[65%] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-transparent opacity-100 group-hover:from-emerald-50 transition-all duration-500"></div>
                        </div>

                        {/* Contenido sobrepuesto */}
                        <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10 pointer-events-none">
                          <div className='flex items-center gap-3 mb-4'>
                            <span className='bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-black uppercase tracking-[0.2em] py-1.5 px-3 rounded-full shadow-sm'>
                              {article.category}
                            </span>
                            <span className='flex items-center text-slate-600 text-xs font-bold'>
                              <Calendar className='w-3.5 h-3.5 mr-1.5 text-emerald-600' />
                              {article.date}
                            </span>
                          </div>
                          
                          <h3 className={`font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-3 ${
                            isFeatured ? 'text-2xl md:text-4xl' : 'text-xl md:text-2xl'
                          }`}>
                            {article.title}
                          </h3>
                          
                          <p className={`text-slate-600 mb-6 line-clamp-2 ${
                            isFeatured ? 'text-base md:text-lg' : 'text-sm'
                          }`}>
                            {article.excerpt}
                          </p>
                          
                          <div className="mt-auto pt-4 border-t border-slate-200 flex items-center justify-between">
                            <span className='flex items-center text-slate-500 text-xs font-bold uppercase tracking-widest'>
                              <User className='w-3.5 h-3.5 mr-2' />
                              {article.author}
                            </span>
                            <div className='w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-colors duration-300 shadow-sm'>
                               <ArrowRight className='w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all' />
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
