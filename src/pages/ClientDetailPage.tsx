import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronRight } from 'lucide-react' // Eliminado ExternalLink
import { Helmet } from 'react-helmet-async'

// Importamos los logos principales
import logo1 from '../assets/logo1-150x150.png'
import logo2 from '../assets/logo2-150x150.png'
import logo3 from '../assets/logo3-150x150.png'
import logo4 from '../assets/logo4-150x150.png'
import logo5 from '../assets/logo-infoex.png'

import eap from '../assets/eap-1024x748.jpg'
import eap2 from '../assets/eap2-1024x960.png'
import eap3 from '../assets/eap3-1024x798.jpg'

import diputacion from '../assets/dip4.jpg'
import diputacion2 from '../assets/dip5-1024x958.jpg'
import diputacion3 from '../assets/dip6-1024x798.jpg'

import incual from '../assets/incual8-1024x538.jpg'

import vanza from '../assets/vanza10-1024x534.png'
import vanza2 from '../assets/vanza11-768x576.png'

import infoex from '../assets/infoex.jpg'

// Interfaces para tipar correctamente los datos (Adiós errores 'any')
interface ClientButton {
  text: string
  link: string
}

interface ClientData {
  name: string
  logo: string
  description: string[]
  buttons: ClientButton[]
  gallery: string[]
}

// Base de datos de proyectos tipada con TypeScript
const clientsData: Record<string, ClientData> = {
  'escuela-de-administracion-publica': {
    name: 'Escuela de Administración de Extremadura',
    logo: logo1,
    description: [
      'Portal del alumno de la Escuela de Administración Pública de Extremadura, desde donde el alumno puede gestionar su expediente formativo.',
      'Administración y gestión del proceso formativo en las plataformas Moodle y Open Edx.',
    ],
    buttons: [
      {
        text: 'Portal del Alumno',
        link: 'https://eap.juntaex.es/aula-virtual',
      },
      {
        text: 'Moodle y Open Edx',
        link: 'https://aula2eap.juntaextremadura.es/',
      },
    ],
    gallery: [eap, eap2, eap3],
  },
  'diputacion-de-caceres': {
    name: 'Diputación de Cáceres',
    logo: logo2,
    description: [
      'Aplicación para la gestión del catálogo formativo de la Diputación de Cáceres.',
      'Administración y gestión del proceso formativo en las plataformas Moodle y Open Edx.',
      'Proyecto de gestión de obras de la Diputación de Cáceres, donde se gestiona la planificación y seguimiento de las obras realizadas por la diputación.',
    ],
    buttons: [
      { text: 'Catálogo Formativo', link: 'https://formacion.dip-caceres.es/' },
      { text: 'Moodle y Open Edx', link: 'https://dipcaceres.novis.es/' },
      {
        text: 'Proyecto de Gestión de Obras',
        link: 'https://demo.novis.es/planificacion/',
      },
    ],
    gallery: [diputacion, diputacion2, diputacion3],
  },
  'instituto-nacional-de-las-cualificaciones': {
    name: 'Instituto Nacional de las Cualificaciones (INCUAL)',
    logo: logo3,
    description: [
      'Aplicación para la gestión de cualificaciones y acreditaciones del Instituto extremeño.',
    ],
    buttons: [{ text: 'INCUAL', link: 'https://peac.juntaex.es/' }],
    gallery: [incual],
  },
  'junta-de-extremadura': {
    name: 'Junta de Extremadura',
    logo: logo4,
    description: [
      'Proyecto educativo @vanza',
      'Servicio para la gestión educativa, administración integral y el hosting de la plataforma @vanza de educación a distancia en la Comunidad Autónoma de Extremadura.',
    ],
    buttons: [{ text: '@vanza', link: 'https://avanza.educarex.es/' }],
    gallery: [vanza, vanza2],
  },
  infoex: {
    name: 'INFOEX - Servicio de Prevención de Incendios',
    logo: logo5,
    description: [
      'Desarrollo de herramientas tecnológicas para la coordinación y gestión operativa de emergencias forestales.',
      'Sistemas de geolocalización y seguimiento de recursos en tiempo real.',
    ],
    buttons: [{ text: 'Proyecto INFOEX', link: 'https://infoex.info/' }],
    gallery: [infoex],
  },
}

export function ClientDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug || !clientsData[slug]) {
    return <Navigate to='/clientes/instituciones' replace />
  }

  const client = clientsData[slug]

  return (
    <>
      <Helmet>
        <title>Novis - {client.name}</title>
        <meta name='description' content={client.description[0]} />
        <meta name='keywords' content='Novis, Desarrollo de Software, Blog' />
      </Helmet>
      <div className='bg-gray-50 flex flex-col w-full min-h-screen'>
        {/* 1. NAVEGACIÓN (Migas de pan) */}
        <div className='bg-white border-b border-gray-200 py-4'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <nav className='flex items-center text-sm font-medium text-gray-500'>
              <Link
                to='/novis'
                className='hover:text-green-600 transition-colors'
              >
                NOVIS
              </Link>
              <ChevronRight className='w-4 h-4 mx-2 text-gray-400' />
              <span className='text-gray-900 cursor-default'>Clientes</span>
              <ChevronRight className='w-4 h-4 mx-2 text-gray-400' />
              <Link
                to='/clientes/instituciones'
                className='hover:text-green-600 transition-colors'
              >
                Instituciones
              </Link>
              <ChevronRight className='w-4 h-4 mx-2 text-gray-400' />
              <span className='text-green-600 font-semibold truncate max-w-[200px] md:max-w-none'>
                {client.name}
              </span>
            </nav>
          </div>
        </div>

        {/* 2. CABECERA DEL PROYECTO */}
        <section className='py-16 md:py-24 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24'>
              {/* Logo a la Izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className='w-full lg:w-1/3 flex justify-center lg:justify-start'
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className='max-w-[250px] md:max-w-[300px] object-contain'
                />
              </motion.div>

              {/* Texto y Botones a la Derecha */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className='w-full lg:w-2/3 text-center lg:text-left'
              >
                <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight'>
                  {client.name}
                </h1>

                <div className='space-y-4 mb-10 text-gray-600 text-lg leading-relaxed'>
                  {client.description.map((paragraph: string, i: number) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Botones de acción dinámicos tipados con la interfaz ClientButton */}
                <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
                  {client.buttons.map((btn: ClientButton, i: number) => (
                    <a
                      key={i}
                      href={btn.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center px-6 py-3 bg-[#5cb85c] hover:bg-green-600 text-white font-bold rounded-md transition-colors shadow-sm'
                    >
                      {btn.text}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. GALERÍA DE CAPTURAS DEL SOFTWARE */}
        <section className='py-20 bg-gray-50 border-t border-gray-100'>
          <div className='max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-2xl font-bold text-gray-900 mb-4'>
                Capturas del Proyecto
              </h2>
              <div className='w-12 h-1 bg-green-600 mx-auto rounded-full'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
              {client.gallery.map((imgSrc: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className='w-full rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white group'
                >
                  <img
                    src={imgSrc}
                    alt={`Captura de ${client.name} ${index + 1}`}
                    className='w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105'
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Botón volver abajo */}
        <div className='pb-20 flex justify-center bg-gray-50'>
          <Link
            to='/clientes/instituciones'
            className='inline-flex items-center px-8 py-3 bg-white border-2 border-gray-200 hover:border-green-600 hover:text-green-700 text-gray-700 font-bold rounded-xl transition-all'
          >
            <ArrowLeft className='w-5 h-5 mr-3' /> Volver al listado de clientes
          </Link>
        </div>
      </div>
    </>
  )
}
