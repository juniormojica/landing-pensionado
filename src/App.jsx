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
import PromoVideo from './components/PromoVideo/PromoVideo'

const galleryAssets = import.meta.glob([
  './assets/p1/**/*.{jpg,jpeg,webp}',
  './assets/p2/**/*.{jpg,jpeg,webp}',
  './assets/zonas-comunes/entrada-C0iLJZAX*.{jpg,jpeg,webp}',
  './assets/zonas-comunes/entrada1-CoiJC5Zf*.{jpg,jpeg,webp}',
  './assets/zonas-comunes/comedor-Ck06iimg*.{jpg,jpeg,webp}',
  './assets/zonas-comunes/comedor1-ClDkmGwk*.{jpg,jpeg,webp}',
  './assets/zonas-comunes/p2-CDQIcf_R*.{jpg,jpeg,webp}',
  './assets/zonas-comunes/salacomedor-Vz53_xmY*.{jpg,jpeg,webp}',
], {
  eager: true,
  import: 'default',
  query: '?url',
});

const getGalleryAsset = (path) => {
  const asset = galleryAssets[path];

  if (!asset) {
    throw new Error(`Missing gallery asset: ${path}`);
  }

  return asset;
};

const getResponsiveImage = (path) => {
  const basePath = path.replace(/\.(jpe?g)$/i, '');

  return {
    src: getGalleryAsset(path),
    sources: {
      webp: [
        { src: getGalleryAsset(`${basePath}-480.webp`), width: 480 },
        { src: getGalleryAsset(`${basePath}-960.webp`), width: 960 },
      ],
    },
  };
};

const galleryGroups = [
  {
    id: 'zonas-comunes',
    label: 'Zonas comunes',
    images: [
      { ...getResponsiveImage('./assets/zonas-comunes/entrada-C0iLJZAX.jpg'), disponibilidad: 'Zona Común', label: 'Entrada Principal' },
      { ...getResponsiveImage('./assets/zonas-comunes/entrada1-CoiJC5Zf.jpg'), disponibilidad: 'Zona Común', label: 'Entrada Lateral' },
      { ...getResponsiveImage('./assets/zonas-comunes/comedor-Ck06iimg.jpg'), disponibilidad: 'Zona Común', label: 'Comedor Principal' },
      { ...getResponsiveImage('./assets/zonas-comunes/comedor1-ClDkmGwk.jpg'), disponibilidad: 'Zona Común', label: 'Comedor Auxiliar' },
      { ...getResponsiveImage('./assets/zonas-comunes/p2-CDQIcf_R.jpg'), disponibilidad: 'Zona Común', label: 'Pasillo' },
      { ...getResponsiveImage('./assets/zonas-comunes/salacomedor-Vz53_xmY.jpg'), disponibilidad: 'Zona Común', label: 'Sala-Comedor' },
    ],
  },
  {
    id: 'p1-h1',
    label: 'Piso 1 - Habitación 1',
    images: [
      { ...getResponsiveImage('./assets/p1/h1/p1_h1_1.jpg'), label: 'Piso 1 - Habitación 1', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p1/h1/p1_h1_1.1.jpg'), label: 'Piso 1 - Habitación 1 - Vista 2', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p1/h1/p1_h1_1.2.jpg'), label: 'Piso 1 - Habitación 1 - Vista 3', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p1/h1/p1_h1_1.3.jpg'), label: 'Piso 1 - Habitación 1 - Vista 4', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p1/h1/p1_h1_1.4.jpg'), label: 'Piso 1 - Habitación 1 - Vista 5', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
    ],
  },
  {
    id: 'p1-h2',
    label: 'Piso 1 - Habitación 2',
    images: [
      { ...getResponsiveImage('./assets/p1/h2/p1_h2_1.jpg'), label: 'Piso 1 - Habitación 2', tipo: 'compartida', cuposDisponibles: 1, genero: 'dama', aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p1/h2/p1_h2_1.1.jpg'), label: 'Piso 1 - Habitación 2 - Vista 2', tipo: 'compartida', cuposDisponibles: 1, genero: 'dama', aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p1/h2/p1_h2_1.2.jpg'), label: 'Piso 1 - Habitación 2 - Vista 3', tipo: 'compartida', cuposDisponibles: 1, genero: 'dama', aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p1/h2/p1_h2_1.3.jpg'), label: 'Piso 1 - Habitación 2 - Vista 4', tipo: 'compartida', cuposDisponibles: 1, genero: 'dama', aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p1/h2/p1_h2_1.4.jpg'), label: 'Piso 1 - Habitación 2 - Vista 5', tipo: 'compartida', cuposDisponibles: 1, genero: 'dama', aireAcondicionado: true },
    ],
  },
  {
    id: 'p1-h3',
    label: 'Piso 1 - Habitación 3',
    images: [
      { ...getResponsiveImage('./assets/p1/h3/p1_h3_1.jpg'), label: 'Piso 1 - Habitación 3', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p1/h3/p1_h3_1.1.jpg'), label: 'Piso 1 - Habitación 3 - Vista 2', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p1/h3/p1_h3_1.2.jpg'), label: 'Piso 1 - Habitación 3 - Vista 3', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
    ],
  },
  {
    id: 'p1-h4',
    label: 'Piso 1 - Habitación 4',
    images: [
      { ...getResponsiveImage('./assets/p1/h4/p1_h4_1.jpg'), label: 'Piso 1 - Habitación 4', tipo: 'compartida', cuposDisponibles: 1, genero: 'caballero', aireAcondicionado: false },
      { ...getResponsiveImage('./assets/p1/h4/p1_h4.1.1.jpg'), label: 'Piso 1 - Habitación 4 - Vista 2', tipo: 'compartida', cuposDisponibles: 1, genero: 'caballero', aireAcondicionado: false },
      { ...getResponsiveImage('./assets/p1/h4/p1_h4_1.2.jpg'), label: 'Piso 1 - Habitación 4 - Vista 3', tipo: 'compartida', cuposDisponibles: 1, genero: 'caballero', aireAcondicionado: false },
      { ...getResponsiveImage('./assets/p1/h4/p1_h4_1.3.jpg'), label: 'Piso 1 - Habitación 4 - Vista 4', tipo: 'compartida', cuposDisponibles: 1, genero: 'caballero', aireAcondicionado: false },
      { ...getResponsiveImage('./assets/p1/h4/p1_h4_1.4.jpg'), label: 'Piso 1 - Habitación 4 - Vista 5', tipo: 'compartida', cuposDisponibles: 1, genero: 'caballero', aireAcondicionado: false },
    ],
  },
  {
    id: 'p2-h1',
    label: 'Piso 2 - Habitación 1',
    images: [
      { ...getResponsiveImage('./assets/p2/h1/p2_h1_1.jpeg'), label: 'Piso 2 - Habitación 1', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p2/h1/p2_h1_1.1.jpeg'), label: 'Piso 2 - Habitación 1 - Vista 2', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p2/h1/p2_h1_1.2.jpeg'), label: 'Piso 2 - Habitación 1 - Vista 3', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p2/h1/p2_h1_1.3.jpeg'), label: 'Piso 2 - Habitación 1 - Vista 4', tipo: 'compartida', cuposDisponibles: 2, aireAcondicionado: true },
    ],
  },
  {
    id: 'p2-h2',
    label: 'Piso 2 - Habitación 2',
    images: [
      { ...getResponsiveImage('./assets/p2/h2/p2_h2_1.jpg'), label: 'Piso 2 - Habitación 2', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p2/h2/p2_h2_1.1.jpg'), label: 'Piso 2 - Habitación 2 - Vista 2', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p2/h2/p2_h2_1.2.jpg'), label: 'Piso 2 - Habitación 2 - Vista 3', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
      { ...getResponsiveImage('./assets/p2/h2/p2_h2_1.3.jpg'), label: 'Piso 2 - Habitación 2 - Vista 4', tipo: 'individual', cuposDisponibles: 0, aireAcondicionado: true },
    ],
  },
];

const imagenes = galleryGroups.flatMap((group) => group.images);

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
            <Carousel images={galleryGroups} />
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
              images={imagenes}
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
