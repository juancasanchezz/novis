import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
// Importamos más iconos para enriquecer el fondo
import {
  ArrowRight,
  Code2,
  Cloud,
  ShieldCheck,
  Database,
  Smartphone,
  Globe,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const words = [
  'la Administración Pública',
  'el Sector Educativo',
  'Startups',
  'tu Empresa',
]

export function DynamicHero() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Efecto Máquina de Escribir (Typewriter)
  useEffect(() => {
    const currentWord = words[wordIndex]
    const typingSpeed = isDeleting ? 50 : 100 // Velocidad de borrado y escritura

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        // Pausa al terminar de escribir antes de borrar
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === '') {
        // Pasa a la siguiente palabra cuando termina de borrar
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      } else {
        // Escribe o borra una letra
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex])

  return (
    // PUNTO INTERMEDIO: Cambiado a py-24 md:py-32 para darle un respiro más amplio (Light Theme)
    <section className='relative bg-slate-950 py-24 md:py-32 overflow-hidden border-b border-slate-800'>
      {/* Imagen de fondo */}
      <div
        className='absolute inset-0 z-0 opacity-10 bg-cover bg-center mix-blend-luminosity'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop')",
        }}
      ></div>

      {/* Degradado superpuesto para asegurar lectura del texto */}
      <div className='absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-800/40'></div>

      {/* --- INICIO ZONA DE ICONOS FLOTANTES --- */}

      {/* 1. Nube original (Arriba derecha) */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute top-10 right-[10%] opacity-20 hidden lg:block'
      >
        <Cloud className='w-20 h-20 text-sky-400' />
      </motion.div>

      {/* 2. Escudo original (Abajo derecha centro) */}
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute bottom-10 right-[20%] opacity-20 hidden lg:block'
      >
        <ShieldCheck className='w-16 h-16 text-blue-400' />
      </motion.div>

      {/* 3. Código original (Arriba centro) */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 10, 0], rotate: 15 }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute top-24 right-[35%] opacity-10 hidden lg:block'
      >
        <Code2 className='w-24 h-24 text-slate-400' />
      </motion.div>

      {/* 4. NUEVO: Base de datos (Medio derecha, más pegado al borde) */}
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        // La clase right-[5%] y top-40 lo coloca independientemente del resto
        className='absolute top-40 right-[5%] opacity-15 hidden lg:block'
      >
        <Database className='w-16 h-16 text-sky-300' />
      </motion.div>

      {/* 5. NUEVO: Smartphone (Abajo más a la derecha) */}
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute bottom-12 right-[8%] opacity-20 hidden lg:block'
      >
        <Smartphone className='w-14 h-14 text-blue-500' />
      </motion.div>

      {/* 6. NUEVO: Globo terráqueo (Arriba, entre el código y la nube) */}
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute top-16 right-[25%] opacity-10 hidden lg:block'
      >
        <Globe className='w-20 h-20 text-sky-300' />
      </motion.div>

      {/* --- FIN ZONA DE ICONOS FLOTANTES --- */}

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-4xl'
        >
          <span className='inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm'>
            Innovación Tecnológica en Extremadura
          </span>

          <h1 className='text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.1] min-h-[150px] md:min-h-[170px] drop-shadow-sm'>
            Desarrollamos soluciones avanzadas y a medida para{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-500 inline-block mt-2 pb-2'>
              {text}
              {/* Cursor parpadeante */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className='inline-block w-[4px] h-[45px] md:h-[65px] bg-emerald-500 ml-2 align-middle -mt-2 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
              ></motion.span>
            </span>
          </h1>

          <p className='text-lg md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light'>
            En NOVIS Software transformamos ideas en plataformas robustas,
            escalables y orientadas a resultados.
          </p>

          <div className='flex flex-col sm:flex-row gap-5'>
            <Link
              to='/contacto'
              className='inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-white font-bold rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.5)] hover:-translate-y-1 text-lg group'
            >
              Inicia tu proyecto{' '}
              <ArrowRight className='ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform' />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
