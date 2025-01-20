import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import Features from './components/Features/Features'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import CardPricing from './components/CardPricing/CardPricing'
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">\
     
      <Header />
      <Hero />
      <main className="flex-grow">
        <Carousel />
        <Contact />
        <Features />
        <CardPricing />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}