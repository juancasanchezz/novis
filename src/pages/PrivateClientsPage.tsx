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
      
      <div className='flex flex-col lg:flex-row min-h-[calc(100vh-5rem)] bg-slate-50 w-full overflow-hidden'>
        {/* PANEL IZQUIERDO: Branding y Propuesta de Valor */}
        <div className='lg:w-5/12 relative p-12 lg:p-20 flex flex-col justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200'>
          {/* Imagen de fondo sutil */}
          <div
            className='absolute inset-0 z-0 opacity-10 bg-cover bg-center'
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')",
            }}
          ></div>
          <div className='absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-100/50 via-slate-50 to-slate-50'></div>

          <div className='relative z-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className='w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 border border-emerald-200 shadow-sm'>
                <ShieldCheck
                  className='w-8 h-8 text-emerald-600'
                  strokeWidth={1.5}
                />
              </div>
              <h1 className='text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight'>
                Área de <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-500'>Clientes Privados</span>
              </h1>
              <p className='text-lg text-slate-600 mb-12 leading-relaxed'>
                Acceso exclusivo al entorno seguro de NOVIS Software. Gestione
                sus proyectos, consulte documentación y contacte con su equipo
                asignado en tiempo real.
              </p>

              {/* Ventajas del portal */}
              <div className='space-y-6'>
                <div className='flex items-center text-slate-700 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm'>
                  <FileText className='w-6 h-6 text-emerald-600 mr-4 flex-shrink-0' />
                  <span className='font-medium'>Gestión documental y seguimiento de hitos.</span>
                </div>
                <div className='flex items-center text-slate-700 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm'>
                  <Lock className='w-6 h-6 text-emerald-600 mr-4 flex-shrink-0' />
                  <span className='font-medium'>Entorno cifrado de alta seguridad (End-to-End).</span>
                </div>
                <div className='flex items-center text-slate-700 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm'>
                  <HeadphonesIcon className='w-6 h-6 text-emerald-600 mr-4 flex-shrink-0' />
                  <span className='font-medium'>Soporte técnico prioritario (SLA garantizado).</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* PANEL DERECHO: Formulario de Login Glassmorphism */}
        <div className='lg:w-7/12 flex items-center justify-center p-8 md:p-16 lg:p-24 relative'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-50 z-0'></div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='w-full max-w-md relative z-10'
          >
            <div className='bg-white p-10 md:p-12 rounded-[2rem] shadow-xl shadow-slate-200 border border-slate-200 relative overflow-hidden'>
              
              {/* Brillo decorativo */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-400 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

              <div className='text-center mb-10 relative z-10'>
                <h2 className='text-3xl font-bold text-slate-900 mb-2 tracking-tight'>
                  Iniciar Sesión
                </h2>
                <p className='text-slate-500 font-medium'>
                  Introduzca sus credenciales de acceso
                </p>
              </div>

              <form onSubmit={handleSubmit} className='space-y-6 relative z-10'>
                {/* Campo Usuario */}
                <div>
                  <label
                    className='block text-xs font-bold text-slate-600 mb-2 uppercase tracking-widest'
                    htmlFor='username'
                  >
                    Usuario / Email
                  </label>
                  <div className='relative group'>
                    <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                      <User className='h-5 w-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors' />
                    </div>
                    <input
                      id='username'
                      type='text'
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className='block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-300'
                      placeholder='usuario@empresa.com'
                    />
                  </div>
                </div>

                {/* Campo Contraseña */}
                <div>
                  <div className='flex items-center justify-between mb-2'>
                    <label
                      className='block text-xs font-bold text-slate-600 uppercase tracking-widest'
                      htmlFor='password'
                    >
                      Contraseña
                    </label>
                    <a
                      href='#'
                      className='text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors'
                    >
                      ¿Olvidó la clave?
                    </a>
                  </div>
                  <div className='relative group'>
                    <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                      <KeyRound className='h-5 w-5 text-slate-400 group-focus-within:text-emerald-600 transition-colors' />
                    </div>
                    <input
                      id='password'
                      type='password'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all duration-300'
                      placeholder='••••••••'
                    />
                  </div>
                </div>

                {/* Botón Entrar */}
                <button
                  type='submit'
                  className='w-full flex justify-center items-center py-4 px-4 border border-emerald-600 rounded-2xl shadow-md text-sm uppercase tracking-widest font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-emerald-600 transition-all duration-300 mt-8 group'
                >
                  Acceder al Portal
                  <ArrowRight className='ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </button>
              </form>

              <div className='mt-10 pt-6 border-t border-slate-200 flex items-center justify-center text-xs font-medium tracking-wide text-slate-500 relative z-10'>
                <Lock className='w-4 h-4 mr-2 text-emerald-600/50' />
                Conexión cifrada de extremo a extremo
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
