import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from 'prop-types';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    })
  };

  // Configuración del gesto de swipe
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      nextSlide();
    } else if (swipe > swipeConfidenceThreshold) {
      prevSlide();
    }
  };

  const paginate = (newDirection) => {
    const newIndex = (currentIndex + newDirection + images.length) % images.length;
    setPage([page + newDirection, newDirection]);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => paginate(1);
  const prevSlide = () => paginate(-1);

  const goToSlide = (index) => {
    const direction = index > currentIndex ? 1 : -1;
    setPage([page + direction, direction]);
    setCurrentIndex(index);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nuestras Habitaciones
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl touch-pan-y">
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.35 },
                  opacity: { duration: 0.25 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                {/* Overlay con información */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none">
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
                  className="w-full h-full object-cover select-none"
                  draggable="false"
                />
              </motion.div>
            </AnimatePresence>

            {/* Controles - Ocultos en móvil */}
            <motion.button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-accentGreen hover:text-white rounded-full transition-colors duration-200 hidden md:block"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="h-6 w-6" />
            </motion.button>
            <motion.button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-accentGreen hover:text-white rounded-full transition-colors duration-200 hidden md:block"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="h-6 w-6" />
            </motion.button>

            {/* Indicador de swipe - Solo visible en móvil */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center md:hidden">
              <motion.p 
                className="text-white text-sm bg-black/50 px-4 py-2 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Desliza para ver más
              </motion.p>
            </div>
          </div>

          {/* Miniaturas */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  currentIndex === index ? 'bg-accentGreen w-4' : 'bg-gray-300 w-2'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      disponibilidad: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;