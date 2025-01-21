import { useState } from 'react'
import { ArrowLeft, ArrowRight } from "lucide-react"
import PropTypes from 'prop-types'
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestras Habitaciones</h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
            {/* Overlay con información */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Habitación {currentIndex + 1}</h3>
                    <p className="text-sm">Estado: {images[currentIndex].disponibilidad}</p>
                  </div>
                  <span className="bg-secondaryYellow text-black px-4 py-1 rounded-full text-sm font-medium">
                    {currentIndex + 1} / {images.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Imagen principal */}
            <img
              src={images[currentIndex].src}
              alt={`Habitación ${currentIndex + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-500"
            />

            {/* Controles */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-accentGreen hover:text-white rounded-full transition-all duration-200"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-accentGreen hover:text-white rounded-full transition-all duration-200"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>

          {/* Miniaturas */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentIndex === index ? 'bg-accentGreen w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      disponibilidad: PropTypes.string.isRequired,
    })
  ).isRequired,
}