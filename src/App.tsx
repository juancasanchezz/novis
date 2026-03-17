import React from 'react'
// 1. Importamos las herramientas de enrutamiento
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
// 2. Importamos nuestros componentes y páginas
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { InstitutionsPage } from './pages/InstitutionsPage'
import { PrivateClientsPage } from './pages/PrivateClientsPage'
import { ServicesPage } from './pages/ServicesPage'
import { ClientDetailPage } from './pages/ClientDetailPage'
import { ClientsMainPage } from './pages/ClientsMainPage'
import { ContactPage } from './pages/ContactPage'
import { NewsPage } from './pages/NewsPage'
import { ArticlePage } from './pages/ArticlePage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    // Envolvemos toda la aplicación en el <Router>
    <Router>
      <ScrollToTop />
      <div className='min-h-screen flex flex-col font-sans bg-white text-gray-900'>
        {/* El Header se mostrará en todas las páginas */}
        <Header />

        {/* Aquí es donde cambia el contenido según la URL */}
        <main className='flex-grow'>
          <Routes>
            {/* Ruta principal (Inicio) */}
            <Route path='/' element={<HomePage />} />

            {/* Ruta de Sobre Nosotros (NOVIS) */}
            <Route path='/novis' element={<AboutPage />} />
            <Route path='/clientes' element={<ClientsMainPage />} />
            <Route
              path='/clientes/instituciones'
              element={<InstitutionsPage />}
            />
            <Route
              path='/clientes/instituciones/:slug'
              element={<ClientDetailPage />}
            />
            <Route path='/clientes/privados' element={<PrivateClientsPage />} />

            {/* Aquí añadiremos las futuras rutas: */}
            <Route path='/servicios' element={<ServicesPage />} />
            <Route path='/actualidad' element={<NewsPage />} />
            <Route path='/actualidad/:slug' element={<ArticlePage />} />
            <Route path='/contacto' element={<ContactPage />} />

            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
