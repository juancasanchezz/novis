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
  ArrowRight,
} from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import logoNovis from '../assets/logo-novis-52px.png'
import logoNovisAlta from '../assets/logo-novis-alta.png'

export function Header () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (previous === undefined) return

    // Ocultar al bajar rápido
    if (latest > previous && latest > 150) {
      setHidden(true)
      document.documentElement.classList.add('header-hidden')
    } else {
      setHidden(false)
      document.documentElement.classList.remove('header-hidden')
    }

    // Cambiar estilo al hacer scroll
    setScrolled(latest > 60)
  })

  // Bloquear scroll del body cuando el menú móvil está abierto
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

  // Clases del link de navegación desktop con indicador animado
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 font-medium transition-all duration-300 uppercase text-xs tracking-widest group/link ${isActive
      ? 'text-lime-400'
      : 'text-slate-300 hover:text-white'
    }`

  const mobileMainLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-3xl font-black uppercase tracking-wider transition-all duration-300 ${isActive ? 'text-lime-400 text-glow-lime' : 'text-slate-900 hover:text-lime-500'
    }`

  const mobileSubLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-medium transition-colors ${isActive ? 'text-lime-500' : 'text-slate-600 hover:text-lime-500'
    }`

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className='w-full z-50 fixed top-0'
      >
        {/* Gradiente oscuro permanente */}
        <div className='absolute inset-0 bg-slate-950 pointer-events-none z-0' />

        {/* MAIN NAV — Glass adaptativo */}
        <motion.div
          animate={scrolled ? 'scrolled' : 'top'}
          variants={{
            top: {
              backgroundColor: 'rgba(2, 6, 23, 0.4)',
              borderBottomColor: 'rgba(255,255,255,0)',
              backdropFilter: 'blur(0px)',
            },
            scrolled: {
              backgroundColor: 'rgba(2, 6, 23, 0.95)',
              borderBottomColor: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(24px)',
            },
          }}
          transition={{ duration: 0.4 }}
          className='relative border-b z-10'
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-20'>
              {/* Logo */}
              <Link
                to='/'
                className='flex-shrink-0 flex items-center group'
                onClick={closeMobileMenu}
              >
                <motion.img
                  src={logoNovis}
                  alt='NOVIS Logo'
                  className='h-11 w-auto transition-all duration-300'
                  whileHover={{ scale: 1.05 }}
                />
              </Link>

              {/* Navegación Desktop */}
              <nav className='hidden md:flex items-center space-x-1'>
                <NavLink to='/' className={navLinkClasses} end>
                  {({ isActive }) => (
                    <>
                      Inicio
                      <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-lime-400 rounded-full transition-all duration-300 ${isActive ? 'w-full shadow-glow-lime' : 'w-0 group-hover/link:w-full'}`} />
                    </>
                  )}
                </NavLink>

                <NavLink to='/novis' className={navLinkClasses}>
                  {({ isActive }) => (
                    <>
                      NOVIS
                      <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-lime-400 rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
                    </>
                  )}
                </NavLink>

                {/* DROPDOWN CLIENTES */}
                <div className='relative group/dropdown px-3 py-6 cursor-pointer'>
                  <div
                    className={`flex items-center font-medium transition-all duration-300 uppercase text-xs tracking-widest ${location.pathname.startsWith('/clientes')
                        ? 'text-lime-400'
                        : 'text-slate-300 group-hover/dropdown:text-white'
                      }`}
                  >
                    Clientes
                    <ChevronDown className='w-3.5 h-3.5 ml-1.5 group-hover/dropdown:rotate-180 transition-transform duration-300 opacity-60' />
                  </div>

                  {/* Dropdown panel */}
                  <div className='absolute top-full left-1/2 -translate-x-1/2 mt-0 w-72 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 transform translate-y-3 group-hover/dropdown:translate-y-0 z-50'>
                    <div className='bg-slate-900/95 backdrop-blur-2xl shadow-2xl shadow-black/50 rounded-2xl overflow-hidden border border-white/10'>
                      {/* Línea superior neon */}
                      <div className='h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent' />
                      <div className='p-2 flex flex-col gap-1'>
                        {[
                          /* { to: '/clientes', icon: Users, label: 'Todos los Clientes', desc: 'Vista general de clientes' }, */
                          { to: '/clientes/instituciones', icon: Building2, label: 'Instituciones Públicas', desc: 'Administraciones y organismos' },
                          { to: '/clientes/privados', icon: UserLock, label: 'Empresas Privadas', desc: 'Sector corporativo' },
                        ].map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className='flex items-center px-3 py-3 rounded-xl hover:bg-white/5 transition-all duration-200 group/item'
                          >
                            <div className='w-9 h-9 rounded-lg bg-lime-400/10 border border-lime-400/20 flex items-center justify-center mr-3 group-hover/item:bg-lime-400/20 transition-colors'>
                              <item.icon className='w-4 h-4 text-lime-400' />
                            </div>
                            <div>
                              <div className='text-sm font-semibold text-white group-hover/item:text-lime-300 transition-colors'>{item.label}</div>
                              <div className='text-xs text-slate-400'>{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <NavLink to='/servicios' className={navLinkClasses}>
                  {({ isActive }) => (
                    <>
                      Servicios
                      <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-lime-400 rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
                    </>
                  )}
                </NavLink>

                <NavLink to='/casos-de-exito' className={navLinkClasses}>
                  {({ isActive }) => (
                    <>
                      Casos de Éxito
                      <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-lime-400 rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
                    </>
                  )}
                </NavLink>

                <NavLink to='/actualidad' className={navLinkClasses}>
                  {({ isActive }) => (
                    <>
                      Actualidad
                      <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-lime-400 rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
                    </>
                  )}
                </NavLink>

                {/* CTA Button con shimmer */}
                <div className='pl-4 ml-2'>
                  <Link
                    to='/contacto'
                    className='relative inline-flex items-center justify-center px-5 py-2 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold rounded-full transition-all duration-300 text-xs tracking-widest overflow-hidden group/cta shadow-lg shadow-lime-500/25 hover:shadow-lime-500/40'
                  >
                    {/* Shimmer sweep */}
                    <span className='absolute inset-0 -top-1 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-200%] group-hover/cta:translate-x-[200%] transition-transform duration-700 ease-in-out skew-x-12' />
                    <span className='relative'>CONTACTAR</span>
                    <ArrowRight className='ml-1.5 w-3 h-3 relative group-hover/cta:translate-x-0.5 transition-transform' />
                  </Link>
                </div>
              </nav>

              {/* Hamburguesa móvil */}
              <div className='md:hidden flex items-center'>
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className='text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none transition-colors'
                  aria-label='Abrir menú'
                >
                  <Menu className='w-7 h-7' />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* MENÚ MÓVIL — Full screen light */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className='fixed inset-0 w-full h-[100dvh] bg-white/98 backdrop-blur-3xl z-[100] flex flex-col overflow-y-auto'
          >
            {/* Orbes decorativos de fondo */}
            <div className='absolute top-0 right-0 w-80 h-80 bg-lime-400/5 rounded-full blur-3xl pointer-events-none' />
            <div className='absolute bottom-0 left-0 w-64 h-64 bg-lime-300/5 rounded-full blur-3xl pointer-events-none' />

            {/* Cabecera del menú móvil */}
            <div className='flex justify-between items-center p-6 sm:p-8 shrink-0 border-b border-slate-200'>
              <img
                src={logoNovis}
                alt='NOVIS Logo'
                className='h-10 sm:h-12 w-auto object-contain'
              />
              <button
                onClick={closeMobileMenu}
                className='p-2.5 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-all border border-slate-200'
                aria-label='Cerrar menú'
              >
                <X className='w-6 h-6' />
              </button>
            </div>

            {/* Links principales */}
            <nav className='flex flex-col items-center justify-center flex-grow space-y-8 my-6 px-6'>
              {[
                { to: '/', label: 'Inicio', end: true },
                { to: '/novis', label: 'NOVIS' },
                { to: '/servicios', label: 'Servicios' },
                { to: '/casos-de-exito', label: 'Casos de Éxito' },
                { to: '/actualidad', label: 'Actualidad' },
              ].map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={mobileMainLinkClasses}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}

              {/* Grupo Clientes */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 }}
                className='flex flex-col items-center w-full'
              >
                <NavLink
                  to='/clientes'
                  className={mobileMainLinkClasses}
                  onClick={closeMobileMenu}
                >
                  Clientes
                </NavLink>
                <div className='mt-5 flex flex-col items-center space-y-4 bg-slate-50 backdrop-blur-sm w-full max-w-[300px] py-5 rounded-2xl border border-slate-200 shadow-sm'>
                  <NavLink
                    to='/clientes/instituciones'
                    className={mobileSubLinkClasses}
                    onClick={closeMobileMenu}
                  >
                    Instituciones Públicas
                  </NavLink>
                  <div className='w-16 h-px bg-slate-200' />
                  <NavLink
                    to='/clientes/privados'
                    className={mobileSubLinkClasses}
                    onClick={closeMobileMenu}
                  >
                    Empresas Privadas
                  </NavLink>
                </div>
              </motion.div>
            </nav>

            {/* Footer del menú móvil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='p-6 sm:p-8 pb-10 shrink-0 border-t border-slate-200'
            >
              <Link
                to='/contacto'
                onClick={closeMobileMenu}
                className='w-full flex items-center justify-center py-4 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold rounded-2xl transition-all text-base tracking-wider mb-6 shadow-lg shadow-lime-500/25'
              >
                CONTACTAR AHORA
                <ArrowRight className='ml-2 w-4 h-4' />
              </Link>
              <div className='flex flex-col items-center space-y-3'>
                <a
                  href='mailto:soporte@novis.es'
                  className='flex items-center text-slate-500 text-sm hover:text-lime-500 transition-colors'
                >
                  <Mail className='w-4 h-4 mr-2 text-lime-500' />
                  soporte@novis.es
                </a>
                <a
                  href='tel:927222778'
                  className='flex items-center text-slate-500 text-sm hover:text-lime-500 transition-colors'
                >
                  <Phone className='w-4 h-4 mr-2 text-lime-500' />
                  927 22 27 78
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
