import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'

// Importamos el logo correctamente desde nuestra carpeta assets
import logoNovis from '../assets/logo-novis-52px.png'

// Logo Oficial de X
const XLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}
  >
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
)

// Logo Oficial de WhatsApp
const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}
  >
    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
  </svg>
)

// Logo Oficial de Telegram
const TelegramLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}
  >
    <path d='M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z' />
  </svg>
)

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleExternalLink = (
    e: React.MouseEvent<HTMLButtonElement>,
    platform: string,
    url: string,
  ) => {
    e.preventDefault()
    const isConfirmed = window.confirm(
      `Estás a punto de abrir ${platform}. ¿Deseas continuar?`,
    )
    if (isConfirmed) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  // Clases compartidas para asegurar que el verde y los grises son exactos
  const textColor = 'text-[#8c9c81]' // Gris verdoso de la captura
  const hoverTextColor = 'hover:text-white'
  const iconGreen = 'text-[#6BA641]'
  const socialBg = 'bg-[#6BA641] text-white hover:bg-[#5A8C37]'

  return (
    <footer className='bg-[#0D0D0D] pt-16 pb-12 border-t border-[#1a1a1a] font-sans mt-auto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16'>
          {/* Columna 1: Marca y Redes Sociales */}
          <div>
            <Link to='/' className='inline-block mb-8'>
              <img
                src={logoNovis}
                alt='Logo de Novis Software'
                className='h-16 w-auto object-contain'
              />
            </Link>
            <p
              className={`${textColor} leading-relaxed max-w-sm mb-8 text-[15px]`}
            >
              NOVIS Software, se crea para ejercer labores de consultoría y
              desarrollo de proyectos de nuevas tecnologías.
            </p>

            <div className='flex flex-wrap items-center gap-3'>
              <a
                href='https://www.facebook.com/noviselearning'
                target='_blank'
                rel='noopener noreferrer'
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all shadow-sm ${socialBg}`}
              >
                <Facebook className='w-5 h-5' />
              </a>

              <a
                href='https://x.com/noviselearning'
                target='_blank'
                rel='noopener noreferrer'
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all shadow-sm ${socialBg}`}
              >
                <XLogo className='w-4 h-4' />
              </a>

              <a
                href='https://www.instagram.com/noviselearning/'
                target='_blank'
                rel='noopener noreferrer'
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all shadow-sm ${socialBg}`}
              >
                <Instagram className='w-5 h-5' />
              </a>

              <a
                href='https://es.linkedin.com/company/novis-s-l'
                target='_blank'
                rel='noopener noreferrer'
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all shadow-sm ${socialBg}`}
              >
                <Linkedin className='w-5 h-5' />
              </a>

              <button
                onClick={(e) =>
                  handleExternalLink(e, 'WhatsApp', 'https://wa.me/34600000000')
                }
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all shadow-sm ${socialBg}`}
                aria-label='WhatsApp'
              >
                <WhatsAppLogo className='w-5 h-5' />
              </button>

              <button
                onClick={(e) =>
                  handleExternalLink(
                    e,
                    'Telegram',
                    'https://t.me/NovisSoftware',
                  )
                }
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all shadow-sm ${socialBg}`}
                aria-label='Telegram'
              >
                <TelegramLogo className='w-5 h-5 -ml-1 mt-0.5' />
              </button>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos (Rutas Corregidas) */}
          <div>
            <h3 className='text-white text-lg font-bold mb-8'>
              Enlaces Rápidos
            </h3>
            <ul className='space-y-4'>
              <li>
                <Link
                  to='/servicios'
                  className={`${textColor} ${hoverTextColor} transition-colors text-[15px]`}
                >
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link
                  to='/clientes/instituciones'
                  className={`${textColor} ${hoverTextColor} transition-colors text-[15px]`}
                >
                  Nuestros Clientes
                </Link>
              </li>
              <li>
                <Link
                  to='/actualidad'
                  className={`${textColor} ${hoverTextColor} transition-colors text-[15px]`}
                >
                  Blog y Actualidad
                </Link>
              </li>
              <li>
                <Link
                  to='/novis'
                  className={`${textColor} ${hoverTextColor} transition-colors text-[15px]`}
                >
                  Sobre Novis
                </Link>
              </li>
              <li>
                <Link
                  to='/contacto'
                  state={{ tab: 'cv' }}
                  className={`${textColor} ${hoverTextColor} transition-colors text-[15px]`}
                >
                  Trabaja con nosotros (CV)
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className='text-white text-lg font-bold mb-8'>Contacto</h3>
            <ul className='space-y-6'>
              <li className='flex items-start gap-4'>
                <MapPin className={`w-5 h-5 shrink-0 mt-0.5 ${iconGreen}`} />
                <span className={`${textColor} text-[15px] leading-relaxed`}>
                  Calle Hernando de Soto, 10, Local 1<br />
                  10002 Cáceres
                </span>
              </li>
              <li className='flex items-center gap-4'>
                <Phone className={`w-5 h-5 shrink-0 ${iconGreen}`} />
                <a
                  href='tel:927222778'
                  className={`${textColor} ${hoverTextColor} transition-colors text-[15px]`}
                >
                  927 22 27 78
                </a>
              </li>
              <li className='flex items-center gap-4'>
                <Mail className={`w-5 h-5 shrink-0 ${iconGreen}`} />
                <a
                  href='mailto:soporte@novis.es'
                  className={`${textColor} ${hoverTextColor} transition-colors text-[15px]`}
                >
                  soporte@novis.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright y Legal */}
        <div
          className={`border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm ${textColor}`}
        >
          <p>© {currentYear} Novis Software. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
