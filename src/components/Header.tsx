import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  Building2,
  UserLock,
  Users,
} from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

// Importamos ambos logos para usar el adecuado en cada versión
import logoNovis from '../assets/logo-novis-52px.png'
import logoNovisAlta from '../assets/logo-novis-alta.png'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Bloquear el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Función para cerrar el menú móvil al hacer clic en un enlace
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  // Clase base para enlaces activos/inactivos en Escritorio
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 font-bold transition-colors uppercase text-sm tracking-wide ${isActive ? 'text-[#6BA641]' : 'text-gray-700 hover:text-[#6BA641]'}`

  // Clases refinadas para el Menú Móvil
  const mobileMainLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-2xl font-extrabold uppercase tracking-wider transition-colors ${isActive ? 'text-[#6BA641]' : 'text-gray-900 hover:text-[#6BA641]'}`

  const mobileSubLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-[17px] font-semibold transition-colors ${isActive ? 'text-[#6BA641]' : 'text-gray-500 hover:text-[#6BA641]'}`

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='w-full flex flex-col z-40 sticky top-0 shadow-sm bg-white'
      >
        {/* 1. TOP BAR (Oculto en móvil) */}
        <div className='bg-[#f0f5ec] text-[#48722c] py-3 hidden md:block border-b border-[#d4e3cc]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm font-medium'>
            <div className='flex items-center space-x-6'>
              <a
                href='tel:927222778'
                className='flex items-center hover:text-[#6BA641] transition-colors'
              >
                <Phone className='w-4 h-4 mr-2 text-[#6BA641]' />
                927 22 27 78
              </a>
              <a
                href='mailto:soporte@novis.es'
                className='flex items-center hover:text-[#6BA641] transition-colors'
              >
                <Mail className='w-4 h-4 mr-2 text-[#6BA641]' />
                soporte@novis.es
              </a>
            </div>
            <div className='text-[#5A8C37]'>
              Innovación en Consultoría y Tecnología
            </div>
          </div>
        </div>

        {/* 2. MAIN NAV (ESCRITORIO INTACTO) */}
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
                  <Link
                    to='/clientes'
                    className={`flex items-center font-bold transition-colors uppercase text-sm tracking-wide ${location.pathname.startsWith('/clientes') ? 'text-[#6BA641]' : 'text-gray-700 group-hover:text-[#6BA641]'}`}
                  >
                    Clientes
                    <ChevronDown className='w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200' />
                  </Link>

                  <div className='absolute top-full left-0 mt-0 w-60 bg-white shadow-xl rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 overflow-hidden border border-gray-100 z-50'>
                    <div className='h-1 bg-[#6BA641] w-full'></div>
                    <div className='py-2 flex flex-col'>
                      <Link
                        to='/clientes'
                        className='flex items-center px-6 py-3.5 text-[15px] font-semibold text-gray-700 hover:bg-[#f0f5ec] hover:text-[#6BA641] transition-colors border-b border-gray-50'
                      >
                        <Users className='w-5 h-5 mr-3 text-gray-400' />
                        Todos los Clientes
                      </Link>

                      <Link
                        to='/clientes/instituciones'
                        className='flex items-center px-6 py-3.5 text-[15px] font-semibold text-gray-700 hover:bg-[#f0f5ec] hover:text-[#6BA641] transition-colors'
                      >
                        <Building2 className='w-5 h-5 mr-3 text-gray-400' />
                        Instituciones Públicas
                      </Link>
                      <Link
                        to='/clientes/privados'
                        className='flex items-center px-6 py-3.5 text-[15px] font-semibold text-gray-700 hover:bg-[#f0f5ec] hover:text-[#6BA641] transition-colors'
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
                    className='inline-flex items-center justify-center px-8 py-3 bg-[#6BA641] hover:bg-[#5A8C37] text-white font-bold rounded-md transition-colors shadow-sm text-sm tracking-widest'
                  >
                    CONTACTO
                  </Link>
                </div>
              </nav>

              {/* Botón Hamburguesa Móvil */}
              <div className='md:hidden flex items-center'>
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className='text-gray-800 p-2 rounded-md hover:bg-gray-100 focus:outline-none transition-colors'
                  aria-label='Abrir menú'
                >
                  <Menu className='w-9 h-9' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 3. MENÚ MÓVIL (REFINADO Y ESTILIZADO) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className='fixed inset-0 w-full h-[100dvh] bg-white z-[100] flex flex-col overflow-y-auto'
          >
            {/* Cabecera del Menú Móvil */}
            <div className='flex justify-between items-center p-6 sm:p-8 shrink-0'>
              <div className='w-12'></div>{' '}
              {/* Espaciador para centrar el logo perfecto */}
              <img
                src={logoNovisAlta}
                alt='NOVIS Logo'
                className='h-12 sm:h-14 w-auto object-contain'
              />
              <button
                onClick={closeMobileMenu}
                className='p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all'
                aria-label='Cerrar menú'
              >
                <X className='w-9 h-9 stroke-[2.5]' />
              </button>
            </div>

            {/* Enlaces Principales Centrados */}
            <nav className='flex flex-col items-center justify-center flex-grow space-y-7 my-4 px-6'>
              <NavLink
                to='/'
                className={mobileMainLinkClasses}
                onClick={closeMobileMenu}
              >
                Inicio
              </NavLink>

              <NavLink
                to='/novis'
                className={mobileMainLinkClasses}
                onClick={closeMobileMenu}
              >
                NOVIS
              </NavLink>

              {/* Grupo Clientes con bloque estilizado */}
              <div className='flex flex-col items-center w-full py-2'>
                <NavLink
                  to='/clientes'
                  className={mobileMainLinkClasses}
                  onClick={closeMobileMenu}
                >
                  Clientes
                </NavLink>

                {/* Caja sutil para los sub-enlaces para agruparlos visualmente */}
                <div className='flex flex-col items-center mt-4 space-y-4 bg-gray-50 w-full max-w-[280px] py-5 rounded-2xl border border-gray-100'>
                  <NavLink
                    to='/clientes/instituciones'
                    className={mobileSubLinkClasses}
                    onClick={closeMobileMenu}
                  >
                    Instituciones Públicas
                  </NavLink>
                  <div className='w-12 h-[1px] bg-gray-200'></div>{' '}
                  {/* Separador decorativo */}
                  <NavLink
                    to='/clientes/privados'
                    className={mobileSubLinkClasses}
                    onClick={closeMobileMenu}
                  >
                    Empresas Privadas
                  </NavLink>
                </div>
              </div>

              <NavLink
                to='/servicios'
                className={mobileMainLinkClasses}
                onClick={closeMobileMenu}
              >
                Servicios
              </NavLink>

              <NavLink
                to='/actualidad'
                className={mobileMainLinkClasses}
                onClick={closeMobileMenu}
              >
                Actualidad
              </NavLink>

              <NavLink
                to='/contacto'
                className={mobileMainLinkClasses}
                onClick={closeMobileMenu}
              >
                Contacto
              </NavLink>
            </nav>

            {/* Footer del Menú Móvil (Datos de Contacto Refinados) */}
            <div className='p-8 text-center pb-12 shrink-0 bg-gray-50 border-t border-gray-100 mt-4'>
              <p className='text-gray-400 mb-5 text-sm font-bold uppercase tracking-widest'>
                Contacta con nosotros
              </p>

              <div className='space-y-4 flex flex-col items-center'>
                <a
                  href='mailto:soporte@novis.es'
                  className='flex items-center text-[#6BA641] text-lg font-medium hover:opacity-80 transition-opacity'
                >
                  <Mail className='w-5 h-5 mr-3 text-gray-400' />
                  soporte@novis.es
                </a>

                <a
                  href='tel:927222778'
                  className='flex items-center text-[#6BA641] text-lg font-medium hover:opacity-80 transition-opacity'
                >
                  <Phone className='w-5 h-5 mr-3 text-gray-400' />
                  927 22 27 78
                </a>

                <a
                  href='tel:639531843'
                  className='flex items-center text-[#6BA641] text-lg font-medium hover:opacity-80 transition-opacity'
                >
                  <Phone className='w-5 h-5 mr-3 text-gray-400' />
                  639 53 18 43
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
