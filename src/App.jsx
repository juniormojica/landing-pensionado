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
import LunchMenu from './components/LunchMenu/LunchMenu'


import banio3jr from './assets/banio3jr.jpg';
import banioh4 from './assets/banioh4.jpg';
import bh1 from './assets/bh1.jpg';
import bh3 from './assets/bh3.jpg';
import comedor from './assets/comedor.jpg';
import comedor1 from './assets/comedor1.jpg';
import cuarto2 from './assets/cuarto2.0.jpg';
import cuarto21 from './assets/cuarto2.1.jpg';
import cuarto22 from './assets/cuarto2.2.jpg';
import cuarto23 from './assets/cuarto2.3.jpg';
import cuarto24 from './assets/cuarto2.4.jpg';
import cuartojr from './assets/cuartojr.jpg';
import cuartojr2 from './assets/cuartojr2.jpg';
import cuartojr3 from './assets/cuartojr3.jpg';
import cuartojr4 from './assets/cuartojr4.jpg';
import entrada from './assets/entrada.jpg';
import entrada1 from './assets/entrada1.jpg';
import h1 from './assets/h1.jpg';
import h3 from './assets/h3.jpg';
import h11 from './assets/h11.jpg';
import h31 from './assets/h31.jpg';
import h33 from './assets/h33.jpg';
import h41 from './assets/h41.jpg';
import h42 from './assets/h42.jpg';
import p2 from './assets/p2.jpg';
import salacomedor from './assets/salacomedor.jpg';
import PromoVideo from './components/PromoVideo/PromoVideo'

const imagenes = [
  { src: entrada, disponibilidad: 'Disponible', label: 'Entrada Principal' },
  { src: entrada1, disponibilidad: 'Disponible', label: 'Entrada Lateral' },

  { src: comedor, disponibilidad: 'Disponible', label: 'Comedor Principal' },
  { src: comedor1, disponibilidad: 'Disponible', label: 'Comedor Auxiliar' },

  { src: p2, disponibilidad: 'Disponible', label: 'Pasillo' },
  { src: salacomedor, disponibilidad: 'Disponible', label: 'Sala-Comedor' },

  { src: h1, disponibilidad: 'No Disponible', label: 'Habitación 1' },
  { src: bh1, disponibilidad: 'No Disponible', label: 'Baño Habitación 1' },

  { src: cuarto2, disponibilidad: 'Disponible', label: 'Habitación 2 - Vista 1' },
  { src: cuarto21, disponibilidad: 'Disponible', label: 'Habitación 2 - Vista 2' },
  { src: cuarto22, disponibilidad: 'Disponible', label: 'Habitación 2 - Vista 3' },
  { src: cuarto23, disponibilidad: 'Disponible', label: 'Habitación 2 - Vista 4' },
  { src: cuarto24, disponibilidad: 'Disponible', label: 'Habitación 2 - Vista 5' },

  { src: h3, disponibilidad: 'No Disponible', label: 'Habitación 3' },
  { src: h11, disponibilidad: 'No Disponible', label: 'Habitación 1 - Vista 2' },
  { src: h31, disponibilidad: 'No Disponible', label: 'Habitación 3 - Vista 2' },
  { src: h33, disponibilidad: 'No Disponible', label: 'Habitación 3 - Vista 3' },

  { src: h41, disponibilidad: 'No Disponible', label: 'Habitación 4 - Vista 1' },
  { src: h42, disponibilidad: 'No Disponible', label: 'Habitación 4 - Vista 2' },
  { src: banioh4, disponibilidad: 'No Disponible', label: 'Baño Habitación 4' },

  { src: bh3, disponibilidad: 'No Disponible', label: 'Baño Habitación 3' },

  { src: cuartojr, disponibilidad: 'No Disponible', label: 'Suite Junior - Vista 1' },
  { src: cuartojr2, disponibilidad: 'No Disponible', label: 'Suite Junior - Vista 2' },
  { src: cuartojr3, disponibilidad: 'No Disponible', label: 'Suite Junior - Vista 3' },
  { src: cuartojr4, disponibilidad: 'No Disponible', label: 'Suite Junior - Vista 4' },
  { src: banio3jr, disponibilidad: 'No Disponible', label: 'Baño Suite Junior' },
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
    <div className="min-h-screen flex flex-col">
      <FullCapacityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Header />
      <Hero
        handleCTAClick={handleCTAClick}
        cuposLlenos={CUPOS_LLENOS}
      />
      <main className="flex-grow">
        <Features />
        <Carousel images={imagenes} />
        <CardPricing
          handleCTAClick={handleCTAClick}
        />
        <PriceSimulator
          handleCTAClick={handleCTAClick}
        />
        <LunchMenu handleCTAClick={handleCTAClick} />
        <PromoVideo />
        <AboutUs
          handleCTAClick={handleCTAClick}
        />
      </main>
      <Map />
      <Contact
        handleCTAClick={handleCTAClick}
      />
      <Footer />
    </div>
  )
}