import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
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

import logoNovis from '../assets/logo-novis-52px.png'
import logoNovisAlta from '../assets/logo-novis-alta.png'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous === undefined) return
    if (latest > previous && latest > 150) {
      setHidden(true)
      document.documentElement.classList.add('header-hidden')
    } else {
      setHidden(false)
      document.documentElement.classList.remove('header-hidden')
    }
  })

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

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  // Clases refinadas para el Navbar B2B Light Sky Blue + Green
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 font-medium transition-colors uppercase text-xs tracking-widest ${isActive ? 'text-emerald-400 font-bold drop-shadow-md' : 'text-slate-300 hover:text-white'}`

  const mobileMainLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-2xl font-black uppercase tracking-wider transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-800 hover:text-emerald-600'}`

  const mobileSubLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-medium transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-500 hover:text-emerald-600'}`

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className='w-full flex flex-col z-50 fixed top-0'
      >
        {/* 1. TOP BAR (Enterprise Mode - Color Corporativo) */}
        <div className='bg-emerald-600 text-white py-1.5 hidden md:block'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium tracking-wide'>
            <div className='flex items-center space-x-6'>
              <a
                href='tel:927222778'
                className='flex items-center hover:text-emerald-100 transition-colors'
              >
                <Phone className='w-3.5 h-3.5 mr-2 text-emerald-200' />
                927 22 27 78
              </a>
              <a
                href='mailto:soporte@novis.es'
                className='flex items-center hover:text-emerald-100 transition-colors'
              >
                <Mail className='w-3.5 h-3.5 mr-2 text-emerald-200' />
                soporte@novis.es
              </a>
            </div>
            <div className='text-emerald-100 uppercase tracking-widest text-[10px] font-bold'>
              Consultoría Tecnológica de Élite
            </div>
          </div>
        </div>

        {/* 2. MAIN NAV (Fondo claro formal sin ser blanco puro) */}
        <div className='relative z-50 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 shadow-sm'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-20'>
              <Link
                to='/'
                className='flex-shrink-0 flex items-center'
                onClick={closeMobileMenu}
              >
                <img
                  src={logoNovis}
                  alt='NOVIS Logo'
                  className='h-12 w-auto'
                />
              </Link>

              {/* Navegación Desktop */}
              <nav className='hidden md:flex space-x-2 items-center'>
                <NavLink to='/' className={navLinkClasses}>
                  Inicio
                </NavLink>

                <NavLink to='/novis' className={navLinkClasses}>
                  NOVIS
                </NavLink>

                {/* DROPDOWN CLIENTES MEGA MENU */}
                <div className='relative group px-2 py-6'>
                  <Link
                    to='/clientes'
                    className={`flex items-center font-medium transition-colors uppercase text-xs tracking-widest ${location.pathname.startsWith('/clientes') ? 'text-emerald-400 font-bold drop-shadow-md' : 'text-slate-300 group-hover:text-white'}`}
                  >
                    Clientes
                    <ChevronDown className='w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300 text-slate-400' />
                  </Link>

                  <div className='absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-white/95 backdrop-blur-xl shadow-xl shadow-emerald-900/5 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-4 group-hover:translate-y-0 overflow-hidden border border-slate-100 z-50'>
                    <div className='h-1 bg-gradient-to-r from-emerald-500 to-green-400 w-full'></div>
                    <div className='p-2 flex flex-col gap-1'>
                      <Link
                        to='/clientes'
                        className='flex items-center px-4 py-4 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors rounded-xl group/item'
                      >
                        <div className='w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mr-4 group-hover/item:bg-emerald-100 transition-colors'>
                          <Users className='w-5 h-5 text-emerald-500' />
                        </div>
                        Todos los Clientes
                      </Link>

                      <Link
                        to='/clientes/instituciones'
                        className='flex items-center px-4 py-4 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors rounded-xl group/item'
                      >
                        <div className='w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mr-4 group-hover/item:bg-emerald-100 transition-colors'>
                          <Building2 className='w-5 h-5 text-emerald-500' />
                        </div>
                        Instituciones Públicas
                      </Link>
                      <Link
                        to='/clientes/privados'
                        className='flex items-center px-4 py-4 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors rounded-xl group/item'
                      >
                        <div className='w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mr-4 group-hover/item:bg-emerald-100 transition-colors'>
                          <UserLock className='w-5 h-5 text-emerald-500' />
                        </div>
                        Empresas Privadas
                      </Link>
                    </div>
                  </div>
                </div>

                <NavLink to='/servicios' className={navLinkClasses}>
                  Servicios
                </NavLink>

                <NavLink to='/casos-de-exito' className={navLinkClasses}>
                  Casos de Éxito
                </NavLink>

                <NavLink to='/actualidad' className={navLinkClasses}>
                  Actualidad
                </NavLink>

                <div className='pl-6 ml-2'>
                  <Link
                    to='/contacto'
                    className='inline-flex items-center justify-center px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 border border-emerald-500 text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-emerald-500/20 text-xs tracking-widest'
                  >
                    CONTACTAR
                  </Link>
                </div>
              </nav>

              <div className='md:hidden flex items-center'>
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className='text-white p-2 rounded-lg hover:bg-slate-800 focus:outline-none transition-colors'
                  aria-label='Abrir menú'
                >
                  <Menu className='w-7 h-7' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 3. MENÚ MÓVIL (LIGHT MODE) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className='fixed inset-0 w-full h-[100dvh] bg-slate-50/95 backdrop-blur-2xl z-[100] flex flex-col overflow-y-auto'
          >
            {/* Cabecera del Menú Móvil */}
            <div className='flex justify-between items-center p-6 sm:p-8 shrink-0'>
              <div className='w-12'></div>
              <img
                src={logoNovisAlta}
                alt='NOVIS Logo'
                className='h-12 sm:h-14 w-auto object-contain'
              />
              <button
                onClick={closeMobileMenu}
                className='p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-full transition-all'
                aria-label='Cerrar menú'
              >
                <X className='w-8 h-8 stroke-[2]' />
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
                <div className='flex flex-col items-center mt-6 space-y-5 bg-white w-full max-w-[280px] py-6 rounded-3xl border border-slate-200 shadow-sm'>
                  <NavLink
                    to='/clientes/instituciones'
                    className={mobileSubLinkClasses}
                    onClick={closeMobileMenu}
                  >
                    Instituciones Públicas
                  </NavLink>
                  <div className='w-12 h-[1px] bg-slate-200'></div>
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
                to='/casos-de-exito'
                className={mobileMainLinkClasses}
                onClick={closeMobileMenu}
              >
                Casos de Éxito
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
            <div className='p-8 text-center pb-12 shrink-0 bg-white/50 border-t border-slate-200 mt-4'>
              <p className='text-emerald-600 mb-5 text-sm font-bold uppercase tracking-[0.2em]'>
                Contacta con nosotros
              </p>

              <div className='space-y-4 flex flex-col items-center'>
                <a
                  href='mailto:soporte@novis.es'
                  className='flex items-center text-slate-700 text-lg font-medium hover:text-emerald-600 transition-colors'
                >
                  <Mail className='w-5 h-5 mr-3 text-emerald-500' />
                  soporte@novis.es
                </a>

                <a
                  href='tel:927222778'
                  className='flex items-center text-slate-700 text-lg font-medium hover:text-emerald-600 transition-colors'
                >
                  <Phone className='w-5 h-5 mr-3 text-emerald-500' />
                  927 22 27 78
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
