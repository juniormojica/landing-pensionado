import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import Features from './components/Features/Features'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import CardPricing from './components/CardPricing/CardPricing'
import Map	 from './components/Map/Map'


import cuarto1 from './assets/cuarto1.jpeg'
import cuarto2 from './assets/cuarto2.jpeg'
import cuarto3 from './assets/cuarto3.jpg'
const imagenes = [
  {
    src: cuarto1,
    disponibilidad: 'Disponible',
  },
  {
    src: cuarto2,
    disponibilidad: 'Disponible',
  },
  {
    src: cuarto3,
    disponibilidad: 'Disponible',
  },
];
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <Header />
      <Hero />
      <main className="flex-grow">
        <Carousel images={imagenes}/>
        <Contact >
          Apartar Cupo
        </Contact >
        <Features />
        <CardPricing />
      </main>
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}