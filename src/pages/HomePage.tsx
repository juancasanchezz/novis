// Importa tus componentes antiguos
import { Clients } from '../components/Clients'
import { CTACards } from '../components/CTACards'
import { Services } from '../components/Services'

// Importa los componentes NUEVOS
import { DynamicHero } from '../components/DynamicHero'
import { ProjectEstimator } from '../components/ProjectEstimator'
import { TechOrbit } from '../components/TechOrbit'
import { LatestNews } from '../components/LatestNews'

export function HomePage() {
  return (
    <div className='flex flex-col w-full'>
      {/* 1. Prueba el nuevo Hero */}
      <DynamicHero />

      {/* Clientes actual (o puedes probar a ponerlo más abajo) */}
      <Clients />

      {/* 2. Prueba el Estimador Interactivo */}
      <ProjectEstimator />

      {/* Servicios actuales */}
      <Services />

      {/* 3. Prueba la Órbita Tecnológica */}
      <TechOrbit />
      {/* 4. Sección Para Actualidad (Blog)*/}
      <LatestNews />

      {/* CTA final actual */}
      <CTACards />
    </div>
  )
}
