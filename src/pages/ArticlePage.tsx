import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, User, ArrowLeft, Folder, Share2 } from 'lucide-react'
import { newsArticles, categories } from '../data/news'
import { Helmet } from 'react-helmet-async'

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
      <div className='bg-gray-50 flex flex-col w-full min-h-screen pb-20'>
        {/* HEADER DEL ARTÍCULO */}
        <section className='bg-white border-b border-gray-200 pt-10 pb-16'>
          <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8'>
            <Link
              to='/actualidad'
              className='inline-flex items-center text-sm font-bold text-green-600 hover:text-green-800 transition-colors mb-8'
            >
              <ArrowLeft className='w-4 h-4 mr-2' /> Volver al blog
            </Link>

            <div className='flex justify-center mb-6'>
              <span className='bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full border border-green-200'>
                {article.category}
              </span>
            </div>

            <h1 className='text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight'>
              {article.title}
            </h1>

            <div className='flex items-center justify-center text-sm text-gray-500 space-x-6 font-medium'>
              <span className='flex items-center'>
                <Calendar className='w-4 h-4 mr-2 text-gray-400' />{' '}
                {article.date}
              </span>
              <span className='flex items-center'>
                <User className='w-4 h-4 mr-2 text-gray-400' /> {article.author}
              </span>
            </div>
          </div>
        </section>

        {/* CONTENIDO PRINCIPAL Y SIDEBAR */}
        <section className='pt-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col lg:flex-row gap-12'>
              {/* COLUMNA IZQUIERDA: CUERPO DEL ARTÍCULO */}
              <article className='w-full lg:w-2/3 bg-white p-6 md:p-12 rounded-3xl shadow-sm border border-gray-100'>
                <img
                  src={article.image}
                  alt={article.title}
                  className='w-full h-[400px] object-cover rounded-2xl mb-10 shadow-md'
                />

                {/* El contenido HTML que definimos en news.ts */}
                <div
                  className='prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed 
                           prose-headings:text-gray-900 prose-headings:font-bold prose-h3:mt-8 
                           prose-a:text-green-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded'
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Botón compartir ficticio */}
                <div className='mt-12 pt-8 border-t border-gray-100 flex items-center justify-between'>
                  <span className='font-bold text-gray-900'>
                    ¿Te ha gustado? Compártelo:
                  </span>
                  <button className='flex items-center px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 transition-colors'>
                    <Share2 className='w-4 h-4 mr-2' /> Compartir
                  </button>
                </div>
              </article>

              {/* COLUMNA DERECHA: SIDEBAR */}
              <aside className='w-full lg:w-1/3 space-y-8'>
                {/* Widget: Entradas Recientes */}
                <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
                  <h4 className='text-lg font-bold text-gray-900 mb-5 border-b border-gray-100 pb-3'>
                    Te puede interesar...
                  </h4>
                  <div className='space-y-5'>
                    {recentArticles.map((a) => (
                      <Link
                        key={a.id}
                        to={`/actualidad/${a.slug}`}
                        className='flex items-start gap-4 group'
                      >
                        <div className='w-20 h-20 rounded-lg overflow-hidden flex-shrink-0'>
                          <img
                            src={a.image}
                            alt={a.title}
                            className='w-full h-full object-cover group-hover:scale-110 transition-transform'
                          />
                        </div>
                        <div>
                          <h5 className='text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-green-600 transition-colors leading-tight mb-1.5'>
                            {a.title}
                          </h5>
                          <span className='text-xs text-gray-500 font-medium'>
                            {a.date}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Widget: Categorías */}
                <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
                  <h4 className='text-lg font-bold text-gray-900 mb-4 flex items-center'>
                    <Folder className='w-5 h-5 mr-2 text-green-600' /> Explorar
                    Temas
                  </h4>
                  <ul className='space-y-2'>
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <Link
                          to='/actualidad'
                          state={{ category: cat }}
                          className='w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-green-600'
                        >
                          {cat}
                          <span className='bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full text-xs'>
                            {
                              newsArticles.filter((a) => a.category === cat)
                                .length
                            }
                          </span>
                        </Link>
                      </li>
                    ))}
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
