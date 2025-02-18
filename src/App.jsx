import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import Features from './components/Features/Features'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import CardPricing from './components/CardPricing/CardPricing'
import Map	 from './components/Map/Map'


import banio3jr from './assets/banio3jr.jpg';
import banioh4 from './assets/banioh4.jpg';
import bh1 from './assets/bh1.jpg';
import bh3 from './assets/bh3.jpg';
import comedor from './assets/comedor.jpg';
import comedor1 from './assets/comedor1.jpg';
import cuarto2 from './assets/cuarto2.0.png';
import cuarto21 from './assets/cuarto2.1.png';
import cuarto22 from './assets/cuarto2.2.png';
import cuarto23 from './assets/cuarto2.3.png';
import cuarto24 from './assets/cuarto2.4.png';
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

const imagenes = [
   { src: entrada, disponibilidad: 'Disponible' },
  { src: entrada1, disponibilidad: 'Disponible' },

    { src: comedor, disponibilidad: 'Disponible' },
  { src: comedor1, disponibilidad: 'Disponible' },

    { src: p2, disponibilidad: 'Disponible' },
  { src: salacomedor, disponibilidad: 'Disponible' },

  { src: h1, disponibilidad: 'Disponible' },
   { src: bh1, disponibilidad: 'Disponible' },
     { src: cuarto2, disponibilidad: 'Disponible' },
  { src: cuarto21, disponibilidad: 'Disponible' },
  { src: cuarto22, disponibilidad: 'Disponible' },
  { src: cuarto23, disponibilidad: 'Disponible' },
  { src: cuarto24, disponibilidad: 'Disponible' },
    { src: h3, disponibilidad: 'Disponible' },
  { src: h11, disponibilidad: 'Disponible' },
  { src: h31, disponibilidad: 'Disponible' },
  { src: h33, disponibilidad: 'Disponible' },

    { src: h41, disponibilidad: 'Disponible' },
  { src: h42, disponibilidad: 'Disponible' },
  { src: banioh4, disponibilidad: 'Disponible' },
 
  { src: bh3, disponibilidad: 'Disponible' },


  { src: cuartojr, disponibilidad: 'Disponible' },
  { src: cuartojr2, disponibilidad: 'Disponible' },
  { src: cuartojr3, disponibilidad: 'Disponible' },
  { src: cuartojr4, disponibilidad: 'Disponible' },
    { src: banio3jr, disponibilidad: 'Disponible' },




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