import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ChevronRight,
  Instagram,
} from 'lucide-react'
import logoNovis from '../assets/logo-novis-52px.png'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-900 text-gray-300 border-t-[6px] border-green-600 flex flex-col items-center justify-center w-full relative overflow-hidden'>
      {/* Patrón de fondo sutil para no hacerlo un bloque negro liso */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 md:pt-20 md:pb-12 w-full relative z-10'>
        {/* Grid principal */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center md:text-left items-center justify-items-center md:items-start md:justify-items-start'>
          {/* Columna 1: Logo y Descripción */}
          <div className='flex flex-col items-center md:items-start max-w-sm md:max-w-none'>
            <Link to='/' className='mb-6 flex justify-center md:justify-start'>
              {/* Fondo blanco redondeado por si el logo original tiene letras oscuras */}
              <div className='bg-white px-4 py-2.5 rounded-2xl shadow-lg'>
                <img src={logoNovis} alt='NOVIS Logo' className='h-10 w-auto' />
              </div>
            </Link>
            <p className='text-gray-400 text-sm leading-relaxed mb-6'>
              Innovación y excelencia en consultoría y desarrollo de proyectos
              tecnológicos. Transformamos ideas en soluciones robustas y
              escalables.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className='flex flex-col items-center md:items-start w-full md:pl-8'>
            <h4 className='text-lg font-bold text-white mb-6 tracking-tight flex items-center'>
              <div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>
              Navegación
            </h4>
            <ul className='space-y-3 text-sm font-medium w-full'>
              {[
                { name: 'Sobre NOVIS', path: '/novis' },
                { name: 'Nuestros Servicios', path: '/servicios' },
                {
                  name: 'Instituciones Públicas',
                  path: '/clientes/instituciones',
                },
                { name: 'Empresas Privadas', path: '/clientes/privados' },
                { name: 'Contactar', path: '/contacto' },
              ].map((link, i) => (
                <li key={i} className='flex justify-center md:justify-start'>
                  <Link
                    to={link.path}
                    className='group flex items-center text-gray-400 hover:text-green-400 transition-colors py-1'
                  >
                    <ChevronRight className='w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-green-500' />
                    <span className='transform group-hover:translate-x-1 transition-transform duration-300'>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className='flex flex-col items-center md:items-start w-full'>
            <h4 className='text-lg font-bold text-white mb-6 tracking-tight flex items-center'>
              <div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>
              Contacto
            </h4>
            <ul className='space-y-5 text-sm w-full'>
              <li className='flex items-center justify-center md:justify-start gap-4 group'>
                <div className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-green-600 transition-colors flex-shrink-0'>
                  <Phone className='w-4 h-4 text-gray-300 group-hover:text-white transition-colors' />
                </div>
                <a
                  href='tel:927222778'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  927 22 27 78
                </a>
              </li>
              <li className='flex items-center justify-center md:justify-start gap-4 group'>
                <div className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-green-600 transition-colors flex-shrink-0'>
                  <Mail className='w-4 h-4 text-gray-300 group-hover:text-white transition-colors' />
                </div>
                <a
                  href='mailto:soporte@novis.es'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  soporte@novis.es
                </a>
              </li>
              <li className='flex items-center justify-center md:justify-start gap-4 group'>
                <div className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-green-600 transition-colors flex-shrink-0'>
                  <MapPin className='w-4 h-4 text-gray-300 group-hover:text-white transition-colors' />
                </div>
                <span className='text-gray-400 text-left'>
                  C/ Hernando de Soto, 10, 1º
                  <br />
                  <span className='text-gray-500'>10002 Cáceres</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Legal y Redes */}
          <div className='flex flex-col items-center md:items-start w-full'>
            <h4 className='text-lg font-bold text-white mb-6 tracking-tight flex items-center'>
              <div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>
              Síguenos
            </h4>

            {/* Redes Sociales */}
            <div className='flex items-center justify-center md:justify-start gap-3 mb-8'>
              {[
                {
                  icon: Linkedin,
                  href: 'https://es.linkedin.com/company/novis-s-l',
                },
                { icon: Twitter, href: 'https://x.com/noviselearning' },
                {
                  icon: Facebook,
                  href: 'https://www.facebook.com/noviselearning/',
                },
                {
                  icon: Instagram,
                  href: 'https://www.instagram.com/noviselearning/',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className='w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg'
                  target='blank'
                >
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>

            <ul className='space-y-3 text-sm font-medium flex flex-col items-center md:items-start'>
              <li>Aviso Legal</li>
              <li>Política de Privacidad</li>
              <li>Política de Cookies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className='border-t border-gray-800 bg-gray-950 w-full relative z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium'>
          <div className='mb-2 md:mb-0 text-center md:text-left'>
            © {currentYear} NOVIS Software. Todos los derechos reservados.
          </div>
          <div className='flex items-center text-center md:text-right'>
            <span>Desarrollado por Novis</span>
            <div className='w-2 h-2 bg-green-500 rounded-full mx-2 animate-pulse'></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
