import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import Features from './components/Features/Features'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import CardPricing from './components/CardPricing/CardPricing'
import PriceSimulator from './components/PriceSimulator/PriceSimulator'
import Map from './components/Map/Map'
import AboutUs from './components/AboutUs/AboutUs'
import FullCapacityModal from './components/FullCapacityModal/FullCapacityModal'
import RegulationsModal from './components/RegulationsModal/RegulationsModal'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'



// Zonas comunes
import entrada from './assets/zonas-comunes/entrada-C0iLJZAX.jpg';
import entrada1 from './assets/zonas-comunes/entrada1-CoiJC5Zf.jpg';
import comedor from './assets/zonas-comunes/comedor-Ck06iimg.jpg';
import comedor1 from './assets/zonas-comunes/comedor1-ClDkmGwk.jpg';
import pasillo from './assets/zonas-comunes/p2-CDQIcf_R.jpg';
import salaComedor from './assets/zonas-comunes/salacomedor-Vz53_xmY.jpg';

// Piso 1 - Habitación 1
import p1h1_1 from './assets/p1/h1/p1_h1_1.jpg';
import p1h1_1_1 from './assets/p1/h1/p1_h1_1.1.jpg';
import p1h1_1_2 from './assets/p1/h1/p1_h1_1.2.jpg';
import p1h1_1_3 from './assets/p1/h1/p1_h1_1.3.jpg';
import p1h1_1_4 from './assets/p1/h1/p1_h1_1.4.jpg';

// Piso 1 - Habitación 2
import p1h2_1 from './assets/p1/h2/p1_h2_1.jpg';
import p1h2_1_1 from './assets/p1/h2/p1_h2_1.1.jpg';
import p1h2_1_2 from './assets/p1/h2/p1_h2_1.2.jpg';
import p1h2_1_3 from './assets/p1/h2/p1_h2_1.3.jpg';
import p1h2_1_4 from './assets/p1/h2/p1_h2_1.4.jpg';

// Piso 1 - Habitación 3
import p1h3_1 from './assets/p1/h3/p1_h3_1.jpg';
import p1h3_1_1 from './assets/p1/h3/p1_h3_1.1.jpg';
import p1h3_1_2 from './assets/p1/h3/p1_h3_1.2.jpg';

// Piso 1 - Habitación 4
import p1h4_1 from './assets/p1/h4/p1_h4_1.jpg';
import p1h4_1_1 from './assets/p1/h4/p1_h4.1.1.jpg';
import p1h4_1_2 from './assets/p1/h4/p1_h4_1.2.jpg';
import p1h4_1_3 from './assets/p1/h4/p1_h4_1.3.jpg';
import p1h4_1_4 from './assets/p1/h4/p1_h4_1.4.jpg';

// Piso 2 - Habitación 1
import p2h1_1 from './assets/p2/h1/p2_h1_1.jpeg';
import p2h1_1_1 from './assets/p2/h1/p2_h1_1.1.jpeg';
import p2h1_1_2 from './assets/p2/h1/p2_h1_1.2.jpeg';
import p2h1_1_3 from './assets/p2/h1/p2_h1_1.3.jpeg';

// Piso 2 - Habitación 2
import p2h2_1 from './assets/p2/h2/p2_h2_1.jpg';
import p2h2_1_1 from './assets/p2/h2/p2_h2_1.1.jpg';
import p2h2_1_2 from './assets/p2/h2/p2_h2_1.2.jpg';
import p2h2_1_3 from './assets/p2/h2/p2_h2_1.3.jpg';
import PromoVideo from './components/PromoVideo/PromoVideo'

const imagenes = [
  // Zonas comunes
  { src: entrada, disponibilidad: 'Zona Común', label: 'Entrada Principal' },
  { src: entrada1, disponibilidad: 'Zona Común', label: 'Entrada Lateral' },
  { src: comedor, disponibilidad: 'Zona Común', label: 'Comedor Principal' },
  { src: comedor1, disponibilidad: 'Zona Común', label: 'Comedor Auxiliar' },
  { src: pasillo, disponibilidad: 'Zona Común', label: 'Pasillo' },
  { src: salaComedor, disponibilidad: 'Zona Común', label: 'Sala-Comedor' },

  // Piso 1 - Habitación 1
  { src: p1h1_1, label: 'Piso 1 - Habitación 1', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
  { src: p1h1_1_1, label: 'Piso 1 - Habitación 1 - Vista 2', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
  { src: p1h1_1_2, label: 'Piso 1 - Habitación 1 - Vista 3', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
  { src: p1h1_1_3, label: 'Piso 1 - Habitación 1 - Vista 4', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
  { src: p1h1_1_4, label: 'Piso 1 - Habitación 1 - Vista 5', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },

  // Piso 1 - Habitación 2
  { src: p1h2_1, label: 'Piso 1 - Habitación 2', tipo: 'compartida', cuposDisponibles: 1, genero: 'dama', aireAcondicionado: true },
  { src: p1h2_1_1, label: 'Piso 1 - Habitación 2 - Vista 2', tipo: 'compartida', cuposDisponibles: 1, genero: 'dama', aireAcondicionado: true },
  { src: p1h2_1_2, label: 'Piso 1 - Habitación 2 - Vista 3', tipo: 'compartida', cuposDisponibles: 1, genero: 'dama', aireAcondicionado: true },
  { src: p1h2_1_3, label: 'Piso 1 - Habitación 2 - Vista 4', tipo: 'compartida', cuposDisponibles: 1, genero: 'dama', aireAcondicionado: true },
  { src: p1h2_1_4, label: 'Piso 1 - Habitación 2 - Vista 5', tipo: 'compartida', cuposDisponibles: 1, genero: 'dama', aireAcondicionado: true },

  // Piso 1 - Habitación 3
  { src: p1h3_1, label: 'Piso 1 - Habitación 3', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
  { src: p1h3_1_1, label: 'Piso 1 - Habitación 3 - Vista 2', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
  { src: p1h3_1_2, label: 'Piso 1 - Habitación 3 - Vista 3', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },

  // Piso 1 - Habitación 4
  { src: p1h4_1, label: 'Piso 1 - Habitación 4', tipo: 'compartida', cuposDisponibles: 1, genero: 'caballero', aireAcondicionado: false },
  { src: p1h4_1_1, label: 'Piso 1 - Habitación 4 - Vista 2', tipo: 'compartida', cuposDisponibles: 1, genero: 'caballero', aireAcondicionado: false },
  { src: p1h4_1_2, label: 'Piso 1 - Habitación 4 - Vista 3', tipo: 'compartida', cuposDisponibles: 1, genero: 'caballero', aireAcondicionado: false },
  { src: p1h4_1_3, label: 'Piso 1 - Habitación 4 - Vista 4', tipo: 'compartida', cuposDisponibles: 1, genero: 'caballero', aireAcondicionado: false },
  { src: p1h4_1_4, label: 'Piso 1 - Habitación 4 - Vista 5', tipo: 'compartida', cuposDisponibles: 1, genero: 'caballero', aireAcondicionado: false },

  // Piso 2 - Habitación 1
  { src: p2h1_1, label: 'Piso 2 - Habitación 1', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
  { src: p2h1_1_1, label: 'Piso 2 - Habitación 1 - Vista 2', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
  { src: p2h1_1_2, label: 'Piso 2 - Habitación 1 - Vista 3', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
  { src: p2h1_1_3, label: 'Piso 2 - Habitación 1 - Vista 4', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },

  // Piso 2 - Habitación 2
  { src: p2h2_1, label: 'Piso 2 - Habitación 2', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
  { src: p2h2_1_1, label: 'Piso 2 - Habitación 2 - Vista 2', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
  { src: p2h2_1_2, label: 'Piso 2 - Habitación 2 - Vista 3', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
  { src: p2h2_1_3, label: 'Piso 2 - Habitación 2 - Vista 4', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
];

// Configuración global de cupos
const CUPOS_LLENOS = false;

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hash-based routing for direct section links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      // Map hash routes to section IDs
      const routeMap = {
        '#/': 'inicio',
        '#/inicio': 'inicio',
        '#/caracteristicas': 'caracteristicas',
        '#/galeria': 'galeria',
        '#/planes': 'planes',
        '#/simulador': 'simulador',
        '#/almuerzos': 'almuerzos',
        '#/nosotros': 'nosotros',
        '#/contacto': 'contacto'
      };

      const sectionId = routeMap[hash];

      if (sectionId) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerOffset = 80; // Height of fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleCTAClick = (originalAction) => {
    if (CUPOS_LLENOS) {
      setIsModalOpen(true);
    } else {
      if (originalAction) originalAction();
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <FullCapacityModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <RegulationsModal />

        <Header />
        <ErrorBoundary>
          <Hero
            handleCTAClick={handleCTAClick}
            cuposLlenos={CUPOS_LLENOS}
          />
        </ErrorBoundary>
        <main className="flex-grow">
          <ErrorBoundary>
            <Features />
          </ErrorBoundary>
          <ErrorBoundary>
            <Carousel images={imagenes} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CardPricing
              handleCTAClick={handleCTAClick}
              images={imagenes}
            />
          </ErrorBoundary>
          <ErrorBoundary>
            <PriceSimulator
              handleCTAClick={handleCTAClick}
            />
          </ErrorBoundary>
          <ErrorBoundary>
            <PromoVideo />
          </ErrorBoundary>
          <ErrorBoundary>
            <AboutUs
              handleCTAClick={handleCTAClick}
            />
          </ErrorBoundary>
        </main>
        <ErrorBoundary>
          <Map />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact
            handleCTAClick={handleCTAClick}
          />
        </ErrorBoundary>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
