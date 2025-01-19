import { useState } from 'react'
import { ArrowLeft, ArrowRight } from "lucide-react"
import cuarto1 from '../../assets/cuarto1.jpeg'
import cuarto2 from '../../assets/cuarto2.jpeg'
import cuarto3 from '../../assets/cuarto3.jpg'

const images = [
  { src: cuarto1, disponibilidad:'disponible' },
  { src: cuarto2,  disponibilidad:'disponible' },
  { src: cuarto3, disponibilidad:'disponible' },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8">
  {/* Ajustamos la altura del contenedor para una mejor proporción */}
  <div className="relative w-full h-[400px] overflow-hidden rounded-lg"> {/* Cambiamos h-96 por h-[400px] o ajusta según necesites */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="text-white text-center">
        <h2 className="text-2xl font-bold">{images[currentIndex].caption}</h2>
      </div>
    </div>
    <img
      src={images[currentIndex].src}
      alt={`Room ${currentIndex + 1}`}
      // Ajustamos las clases de la imagen
      className="w-full h-[400px] object-contain mx-auto" // Cambiamos object-cover por object-contain
    />
  </div>
      <div className="flex justify-between mt-2">
        <button onClick={prevSlide} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button onClick={nextSlide} className="p-2 bg-white dark:bg-gray-800 rounded-full shadow">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}