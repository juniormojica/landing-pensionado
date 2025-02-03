import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import Features from './components/Features/Features'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import CardPricing from './components/CardPricing/CardPricing'
import Map	 from './components/Map/Map'


import cuarto2 from './assets/cuarto2.0.png'
import cuarto21 from './assets/cuarto2.1.png'
import cuarto22 from './assets/cuarto2.2.png'
import cuarto23  from './assets/cuarto2.3.png'
import cuarto24  from './assets/cuarto2.4.png'

const imagenes = [
  {
    src: cuarto2,
    disponibilidad: 'Disponible',
  },
  {
    src: cuarto21,
    disponibilidad: 'Disponible',
  },
  {
    src: cuarto22,
    disponibilidad: 'Disponible',
  },
  {
    src: cuarto23,
    disponibilidad: 'Disponible',
  },
  {
    src: cuarto24,
    disponibilidad: 'Disponible',
  },
];
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <Header />
      <Hero  />
      <main className="flex-grow">
      <Features />
        <Carousel images={imagenes}/>
        <Contact >
          Apartar Cupo
        </Contact >
        
        <CardPricing />
      </main>
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}