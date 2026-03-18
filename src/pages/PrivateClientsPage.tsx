import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Lock,
  User,
  ShieldCheck,
  ArrowRight,
  KeyRound,
  FileText,
  HeadphonesIcon,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export function PrivateClientsPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación en el futuro
    console.log('Intento de login:', { username, password })
  }

  return (
    <>
      <Helmet>
        <title key='title'>Novis - Instituciones Privadas</title>

        <meta
          name='keywords'
          content={`Novis, Software, Clientes Privados, Extremadura`}
        />
      </Helmet>
      {/*Usamos min-h-[calc(100vh-6rem)] para que ocupe toda la pantalla
      restando el Header*/}
      <div className='flex flex-col lg:flex-row min-h-[calc(100vh-6rem)] bg-white w-full'>
        {/* PANEL IZQUIERDO: Branding y Propuesta de Valor (Oscuro y Corporativo) */}
        <div className='lg:w-5/12 bg-gray-900 relative p-12 lg:p-20 flex flex-col justify-center overflow-hidden border-r border-gray-800'>
          {/* Imagen de fondo sutil (abstracto tecnológico/servidores) */}
          <div
            className='absolute inset-0 z-0 opacity-20 mix-blend-luminosity bg-cover bg-center'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
          <div className='absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-900 to-green-900/40'></div>

          <div className='relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className='w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-8 border border-green-500/30'>
                <ShieldCheck
                  className='w-8 h-8 text-green-400'
                  strokeWidth={1.5}
                />
              </div>
              <h1 className='text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight'>
                Área de Clientes Privados
              </h1>
              <p className='text-lg text-gray-300 mb-12 leading-relaxed'>
                Acceso exclusivo al entorno seguro de NOVIS Software. Gestione
                sus proyectos, consulte documentación y contacte con su equipo
                asignado.
              </p>

              {/* Ventajas del portal */}
              <div className='space-y-6'>
                <div className='flex items-center text-gray-300'>
                  <FileText className='w-5 h-5 text-green-500 mr-4 flex-shrink-0' />
                  <span>Gestión documental y seguimiento de hitos.</span>
                </div>
                <div className='flex items-center text-gray-300'>
                  <Lock className='w-5 h-5 text-green-500 mr-4 flex-shrink-0' />
                  <span>Entorno cifrado de alta seguridad (End-to-End).</span>
                </div>
                <div className='flex items-center text-gray-300'>
                  <HeadphonesIcon className='w-5 h-5 text-green-500 mr-4 flex-shrink-0' />
                  <span>Soporte técnico prioritario (SLA garantizado).</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* PANEL DERECHO: Formulario de Login */}
        <div className='lg:w-7/12 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-gray-50'>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='w-full max-w-md'
          >
            <div className='bg-white p-10 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100'>
              <div className='text-center mb-10'>
                <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                  Iniciar Sesión
                </h2>
                <p className='text-gray-500'>
                  Introduzca sus credenciales de acceso
                </p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Campo Usuario */}
                <div>
                  <label
                    className='block text-sm font-semibold text-gray-700 mb-2'
                    htmlFor='username'
                  >
                    Nombre de usuario o Email
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                      <User className='h-5 w-5 text-gray-400' />
                    </div>
                    <input
                      id='username'
                      type='text'
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className='block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200'
                      placeholder='usuario@empresa.com'
                    />
                  </div>
                </div>

                {/* Campo Contraseña */}
                <div>
                  <div className='flex items-center justify-between mb-2'>
                    <label
                      className='block text-sm font-semibold text-gray-700'
                      htmlFor='password'
                    >
                      Contraseña
                    </label>
                    <a
                      href='#'
                      className='text-sm font-medium text-green-600 hover:text-green-500 transition-colors'
                    >
                      ¿Olvidó su contraseña?
                    </a>
                  </div>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                      <KeyRound className='h-5 w-5 text-gray-400' />
                    </div>
                    <input
                      id='password'
                      type='password'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200'
                      placeholder='••••••••'
                    />
                  </div>
                </div>

                {/* Botón Entrar */}
                <button
                  type='submit'
                  className='w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-md text-base font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 mt-8 group'
                >
                  Acceder al Portal
                  <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </button>
              </form>

              <div className='mt-10 pt-6 border-t border-gray-100 flex items-center justify-center text-sm text-gray-500'>
                <Lock className='w-4 h-4 mr-2 text-gray-400' />
                Conexión cifrada de extremo a extremo
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
