import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowRight, User, Search, X } from 'lucide-react'
import { newsArticles } from '../data/news'
import { Helmet } from 'react-helmet-async'

export function SuccessCasesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

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
        <section className='relative bg-slate-900 pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-slate-800'>
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-slate-900"></div>
          
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='max-w-3xl'
            >
              <div className='inline-flex items-center space-x-2 bg-emerald-950/50 border border-emerald-800/50 px-3 py-1 rounded-full mb-6 shadow-sm'>
                <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse'></span>
                <span className='text-xs font-bold uppercase tracking-widest text-emerald-400'>Nuestra Huella</span>
              </div>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]'>
                Casos de <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>Éxito</span>
              </h1>
              <p className='text-lg md:text-xl text-slate-300 leading-relaxed font-medium'>
                Descubre cómo hemos ayudado a empresas e instituciones a alcanzar sus objetivos de digitalización mediante soluciones tecnológicas a medida.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTROLES DE FILTRADO */}
        <section className='sticky top-20 md:top-24 [.header-hidden_&]:!top-0 z-40 bg-slate-50 border-b border-slate-200 py-4 transition-all duration-300 shadow-sm'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4'>
            
            {/* Buscador Integrado */}
            <div className='relative w-full md:max-w-sm group'>
              <Search className='w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-emerald-600 transition-colors' />
              <input
                type='text'
                placeholder='Buscar casos de éxito...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all shadow-sm'
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
                className='text-center py-32 bg-slate-50 rounded-[2rem] border border-slate-200 shadow-sm'
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
                        className={`group relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-200 flex flex-col h-[400px] md:h-[450px] lg:h-[500px] shadow-sm hover:shadow-xl transition-shadow ${
                          isFeatured ? 'md:col-span-2' : 'col-span-1'
                        }`}
                      >
                        <button 
                          onClick={() => setSelectedArticle(article)}
                          className='absolute inset-0 z-20 w-full h-full text-left focus:outline-none focus:ring-4 focus:ring-emerald-500/50 rounded-[2rem]'
                        >
                          <span className='sr-only'>Leer {article.title}</span>
                        </button>
                        
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

      {/* MODAL DE DETALLE */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl my-auto flex flex-col max-h-[90vh]"
            >
              {/* Botón Cerrar */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Imagen Hero */}
              <div className="relative h-64 md:h-80 shrink-0">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              </div>

              {/* Contenido */}
              <div className="p-6 md:p-10 overflow-y-auto">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-black uppercase tracking-[0.2em] py-1.5 px-3 rounded-full">
                    {selectedArticle.category}
                  </span>
                  <span className="flex items-center text-slate-500 text-sm font-bold">
                    <Calendar className="w-4 h-4 mr-1.5 text-emerald-600" />
                    {selectedArticle.date}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                  {selectedArticle.title}
                </h2>

                <div 
                  className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-emerald-600 hover:prose-a:text-emerald-700 prose-img:rounded-2xl"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />

                <div className="mt-10 pt-6 border-t border-slate-200 flex items-center">
                  <span className="flex items-center text-slate-500 text-sm font-bold uppercase tracking-widest">
                    <User className="w-4 h-4 mr-2" />
                    {selectedArticle.author}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
