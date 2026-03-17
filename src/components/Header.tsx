import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  Building2,
  UserLock,
  Users, // <-- AÑADIDO EL ICONO USERS
} from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import logoNovis from '../assets/logo-novis-52px.png'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Función para cerrar el menú móvil al hacer clic en un enlace
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  // Clase base para enlaces activos/inactivos
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 font-bold transition-colors uppercase text-sm tracking-wide ${isActive ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='w-full flex flex-col z-50 sticky top-0 shadow-sm bg-white'
    >
      {/* 1. TOP BAR (Oculto en móvil) */}
      <div className='bg-green-50 text-green-800 py-3 hidden md:block border-b border-green-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm font-medium'>
          <div className='flex items-center space-x-6'>
            <a
              href='tel:927222778'
              className='flex items-center hover:text-green-600 transition-colors'
            >
              <Phone className='w-4 h-4 mr-2 text-green-600' />
              927 22 27 78
            </a>
            <a
              href='mailto:soporte@novis.es'
              className='flex items-center hover:text-green-600 transition-colors'
            >
              <Mail className='w-4 h-4 mr-2 text-green-600' />
              soporte@novis.es
            </a>
          </div>
          <div className='text-green-700'>
            Innovación en Consultoría y Tecnología
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV */}
      <div className='border-b border-gray-100 bg-white relative z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20 md:h-24'>
            <Link
              to='/'
              className='flex-shrink-0 flex items-center'
              onClick={closeMobileMenu}
            >
              <img
                src={logoNovis}
                alt='NOVIS Logo'
                className='h-10 md:h-14 w-auto'
              />
            </Link>

            {/* Navegación Desktop */}
            <nav className='hidden md:flex space-x-1 items-center'>
              <NavLink to='/' className={navLinkClasses}>
                Inicio
              </NavLink>

              <NavLink to='/novis' className={navLinkClasses}>
                NOVIS
              </NavLink>

              {/* DROPDOWN CLIENTES */}
              <div className='relative group px-4 py-2'>
                {/* Ahora es un Link en lugar de un button */}
                <Link
                  to='/clientes'
                  className={`flex items-center font-bold transition-colors uppercase text-sm tracking-wide ${location.pathname.startsWith('/clientes') ? 'text-green-600' : 'text-gray-700 group-hover:text-green-600'}`}
                >
                  Clientes
                  <ChevronDown className='w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200' />
                </Link>

                <div className='absolute top-full left-0 mt-0 w-60 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 overflow-hidden border border-gray-100 z-50'>
                  <div className='h-1 bg-green-600 w-full'></div>
                  <div className='py-2 flex flex-col'>
                    {/* -- AQUÍ ESTÁ EL ENLACE AÑADIDO -- */}
                    <Link
                      to='/clientes'
                      className='flex items-center px-6 py-3.5 text-[15px] font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b border-gray-50'
                    >
                      <Users className='w-5 h-5 mr-3 text-gray-400' />
                      Nuestros Clientes
                    </Link>

                    <Link
                      to='/clientes/instituciones'
                      className='flex items-center px-6 py-3.5 text-[15px] font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors'
                    >
                      <Building2 className='w-5 h-5 mr-3 text-gray-400' />
                      Instituciones Públicas
                    </Link>
                    <Link
                      to='/clientes/privados'
                      className='flex items-center px-6 py-3.5 text-[15px] font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors'
                    >
                      <UserLock className='w-5 h-5 mr-3 text-gray-400' />
                      Empresas Privadas
                    </Link>
                  </div>
                </div>
              </div>

              <NavLink to='/servicios' className={navLinkClasses}>
                SERVICIOS
              </NavLink>

              <NavLink to='/actualidad' className={navLinkClasses}>
                Actualidad
              </NavLink>

              <div className='pl-6 ml-2'>
                <Link
                  to='/contacto'
                  className='inline-flex items-center justify-center px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md transition-colors shadow-sm text-sm tracking-widest'
                >
                  CONTACTO
                </Link>
              </div>
            </nav>

            {/* Botón Hamburguesa Móvil */}
            <div className='md:hidden flex items-center'>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='text-gray-700 p-2 rounded-md hover:bg-gray-100 focus:outline-none'
                aria-label='Toggle menu'
              >
                {isMobileMenuOpen ? (
                  <X className='w-7 h-7' />
                ) : (
                  <Menu className='w-7 h-7' />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='md:hidden bg-white border-b border-gray-100 overflow-hidden absolute top-full left-0 w-full z-40 shadow-xl'
          >
            <nav className='flex flex-col px-6 py-8 space-y-3'>
              <NavLink
                to='/novis'
                className='block px-4 py-3 text-lg font-bold text-gray-800 hover:bg-green-50 hover:text-green-700 rounded-lg'
                onClick={closeMobileMenu}
              >
                NOVIS
              </NavLink>

              {/* Sección Clientes simplificada para móvil */}
              <div className='border-t border-gray-100 pt-3 mt-3'>
                <Link
                  to='/clientes'
                  className='block px-4 py-2 text-sm font-bold text-gray-500 hover:text-green-600 uppercase tracking-widest transition-colors'
                  onClick={closeMobileMenu}
                >
                  Clientes (Ver Todo)
                </Link>
                <NavLink
                  to='/clientes/instituciones'
                  className='block px-4 py-3 text-lg font-bold text-gray-800 hover:bg-green-50 hover:text-green-700 rounded-lg pl-8'
                  onClick={closeMobileMenu}
                >
                  Instituciones Públicas
                </NavLink>
                <NavLink
                  to='/clientes/privados'
                  className='block px-4 py-3 text-lg font-bold text-gray-800 hover:bg-green-50 hover:text-green-700 rounded-lg pl-8'
                  onClick={closeMobileMenu}
                >
                  Empresas Privadas
                </NavLink>
              </div>

              <NavLink
                to='/servicios'
                className='block px-4 py-3 text-lg font-bold text-gray-800 hover:bg-green-50 hover:text-green-700 rounded-lg border-t border-gray-100 pt-3'
                onClick={closeMobileMenu}
              >
                Servicios
              </NavLink>
              <a
                href='#'
                className='block px-4 py-3 text-lg font-bold text-gray-800 hover:bg-green-50 hover:text-green-700 rounded-lg'
              >
                Actualidad
              </a>

              <div className='pt-6 mt-6 border-t border-gray-100'>
                <Link
                  to='/contacto'
                  className='w-full flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors shadow-sm text-base tracking-widest'
                  onClick={closeMobileMenu}
                >
                  CONTACTO
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
