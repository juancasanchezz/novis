import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, User, ArrowLeft, Folder, Share2, ArrowRight } from 'lucide-react'
import { newsArticles, categories } from '../data/news'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()

  // Buscar el artículo en nuestra "Base de Datos" usando el slug
  const article = newsArticles.find((a) => a.slug === slug)

  // Si no existe, redirigimos a una página 404 o de vuelta al blog
  if (!article) {
    return <Navigate to='/actualidad' replace />
  }

  const recentArticles = newsArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3)

  return (
    <>
      <Helmet>
        <title key='title'>{`Novis - ${article.title}`}</title>
        <meta name='description' content={article.excerpt} />
        <meta name='keywords' content='Novis, Desarrollo de Software, Blog' />
      </Helmet>
      
      <div className='bg-slate-50 flex flex-col w-full min-h-screen pb-24'>
        
        {/* HEADER IMMERSIVE HERO */}
        <section className='relative w-full h-[60vh] min-h-[500px] flex items-end border-b border-slate-200'>
          {/* Background Image & Overlays */}
          <div className='absolute inset-0 z-0 overflow-hidden'>
            <img 
              src={article.image} 
              alt={article.title}
              className='w-full h-full object-cover'
            />
            {/* Gradient Overlay to make text readable and fade into background */}
            <div className='absolute inset-0 bg-gradient-to-b from-white/30 via-slate-50/80 to-slate-50'></div>
          </div>

          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-16'>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to='/actualidad'
                className='inline-flex items-center text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors mb-8 uppercase tracking-widest bg-white/80 px-4 py-2 rounded-full border border-slate-200 backdrop-blur-md shadow-sm'
              >
                <ArrowLeft className='w-4 h-4 mr-2' /> Volver al blog
              </Link>

              <div className='flex mb-6'>
                <span className='bg-emerald-100 backdrop-blur-md text-emerald-700 border border-emerald-200 text-xs font-black uppercase tracking-[0.2em] py-2 px-4 rounded-full shadow-sm'>
                  {article.category}
                </span>
              </div>

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]'>
                {article.title}
              </h1>

              <div className='flex items-center text-sm text-slate-600 space-x-6 font-medium'>
                <span className='flex items-center'>
                  <Calendar className='w-4 h-4 mr-2 text-emerald-600' />{' '}
                  {article.date}
                </span>
                <span className='flex items-center'>
                  <User className='w-4 h-4 mr-2 text-emerald-600' /> {article.author}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTENIDO PRINCIPAL Y SIDEBAR */}
        <section className='pt-16 lg:pt-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col lg:flex-row gap-12 lg:gap-16'>
              
              {/* COLUMNA IZQUIERDA: CUERPO DEL ARTÍCULO */}
              <article className='w-full lg:w-2/3'>
                
                {/* Texto del Artículo - Usando Typography / Prose en modo claro */}
                <div
                  className='prose prose-lg max-w-none text-slate-600 leading-relaxed 
                           prose-headings:text-slate-900 prose-headings:font-bold prose-h3:mt-10 
                           prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-500
                           prose-code:bg-slate-100 prose-code:text-emerald-600 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:border prose-code:border-slate-200
                           prose-img:rounded-2xl prose-img:border prose-img:border-slate-200 prose-img:shadow-lg
                           prose-strong:text-slate-900
                           prose-blockquote:border-l-emerald-500 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:text-slate-700'
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Botón compartir */}
                <div className='mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4'>
                  <span className='font-bold text-slate-900 text-lg'>
                    ¿Te ha resultado útil? Compártelo
                  </span>
                  <button className='flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl text-sm font-bold text-white transition-all shadow-md hover:shadow-lg group'>
                    <Share2 className='w-4 h-4 mr-2' /> Compartir en redes
                  </button>
                </div>
              </article>

              {/* COLUMNA DERECHA: SIDEBAR */}
              <aside className='w-full lg:w-1/3 space-y-10'>
                {/* Widget: Entradas Recientes */}
                <div className='bg-white p-8 rounded-3xl border border-slate-200 shadow-sm'>
                  <h4 className='text-lg font-bold text-slate-900 mb-6 flex items-center'>
                    <span className="w-1.5 h-6 bg-emerald-500 rounded-full mr-3"></span>
                    Te puede interesar
                  </h4>
                  <div className='space-y-6'>
                    {recentArticles.map((a) => (
                      <Link
                        key={a.id}
                        to={`/actualidad/${a.slug}`}
                        className='flex items-start gap-4 group'
                      >
                        <div className='w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative'>
                          <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>
                          <img
                            src={a.image}
                            alt={a.title}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                          />
                        </div>
                        <div className="flex flex-col h-24 justify-center">
                          <span className='text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-1'>
                            {a.category}
                          </span>
                          <h5 className='text-sm font-bold text-slate-800 line-clamp-2 group-hover:text-emerald-600 transition-colors leading-snug'>
                            {a.title}
                          </h5>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Widget: Categorías */}
                <div className='bg-white p-8 rounded-3xl border border-slate-200 shadow-sm'>
                  <h4 className='text-lg font-bold text-slate-900 mb-6 flex items-center'>
                    <Folder className='w-5 h-5 mr-3 text-emerald-500' />
                    Explorar Temas
                  </h4>
                  <ul className='space-y-3'>
                    {categories.map((cat, i) => {
                      const count = newsArticles.filter((a) => a.category === cat).length;
                      return (
                        <li key={i}>
                          <Link
                            to='/actualidad'
                            state={{ category: cat }}
                            className='w-full flex items-center justify-between p-3 rounded-xl transition-all font-medium text-slate-600 hover:bg-slate-50 hover:text-emerald-600 border border-transparent hover:border-slate-200 group'
                          >
                            <span className="flex items-center">
                              <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"/>
                              {cat}
                            </span>
                            <span className='bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold border border-slate-200 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors'>
                              {count}
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
