import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import PropTypes from 'prop-types';
import Availability from '../Availability/Availability';
import { ImageSkeleton } from '../Skeleton/Skeleton';

const imageSizes = '(max-width: 767px) 100vw, 960px';
const modalImageSizes = '100vw';
const thumbnailImageSizes = '80px';
const emptyImages = [];

const getWebpSrcSet = (image) => (
  image.sources?.webp?.map((source) => `${source.src} ${source.width}w`).join(', ')
);

const getLargestImageSrc = (image) => {
  const webpSources = image.sources?.webp;

  return webpSources?.[webpSources.length - 1]?.src || image.src;
};

const normalizeImageGroups = (images) => {
  if (images[0]?.images) {
    return images.filter((group) => group.images.length > 0);
  }

  return [{ id: 'all', label: 'Galería', images }];
};

const Carousel = ({ images }) => {
  const imageGroups = normalizeImageGroups(images);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const activeGroup = imageGroups[activeGroupIndex] || imageGroups[0];
  const activeImages = activeGroup ? activeGroup.images : emptyImages;
  const hasGroups = imageGroups.length > 1;

  useEffect(() => {
    if (!activeImages[currentIndex]) return;

    setIsImageLoading(true);
    const img = new Image();
    img.src = getLargestImageSrc(activeImages[currentIndex]);
    img.onload = () => setIsImageLoading(false);
    img.onerror = () => setIsImageLoading(false);
  }, [currentIndex, activeImages]);

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

  // Variantes para el modal
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
    }
  };

  // Configuración del gesto de swipe
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      if (isModalOpen) {
        nextModalSlide();
      } else {
        nextSlide();
      }
    } else if (swipe > swipeConfidenceThreshold) {
      if (isModalOpen) {
        prevModalSlide();
      } else {
        prevSlide();
      }
    }
  };

  const paginate = (newDirection) => {
    const newIndex = (currentIndex + newDirection + activeImages.length) % activeImages.length;
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

  const selectGroup = (index) => {
    if (index === activeGroupIndex) return;

    setActiveGroupIndex(index);
    setCurrentIndex(0);
    setModalIndex(0);
    setPage([page + 1, 1]);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Funciones para el modal
  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  };

  const nextModalSlide = () => {
    setModalIndex((prev) => (prev + 1) % activeImages.length);
  };

  const prevModalSlide = () => {
    setModalIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
  };

  // Agregar/remover event listener para teclas
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          setIsModalOpen(false);
          document.body.style.overflow = 'auto';
          break;
        case 'ArrowLeft':
          setModalIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
          break;
        case 'ArrowRight':
          setModalIndex((prev) => (prev + 1) % activeImages.length);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, activeImages.length]);

  if (activeImages.length === 0) {
    return null;
  }

  return (
    <>
      <section id='galeria' className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-3">
              Nuestras Habitaciones
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Explora nuestros espacios diseñados para tu comodidad y descanso
            </p>
          </motion.div>

          {hasGroups && (
            <div className="mb-6 -mx-4 px-4 overflow-x-auto hide-scrollbar" role="tablist" aria-label="Filtrar galería por zona o habitación">
              <div className="flex gap-2 sm:justify-center sm:flex-wrap pb-2">
                {imageGroups.map((group, index) => {
                  const isActive = activeGroupIndex === index;

                  return (
                    <button
                      key={group.id || group.label}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="gallery-panel"
                      onClick={() => selectGroup(index)}
                      className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isActive
                        ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-primary/50 hover:text-primary'
                      }`}
                    >
                      <span>{group.label}</span>
                      <span className={`ml-2 rounded-full px-2 py-0.5 text-xs ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {group.images.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
           
          <div id="gallery-panel" className="relative max-w-5xl mx-auto" role="tabpanel">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-100 touch-pan-y group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] max-h-[72vh] md:max-h-[80vh]">
                <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                  <motion.div
                    key={`${activeGroup.id || activeGroup.label}-${currentIndex}`}
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
                    onClick={() => openModal(currentIndex)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none">
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                        <div className="flex items-end justify-end md:items-center md:justify-between">
                          <div className="hidden md:block">
                            <Availability
                              status={activeImages[currentIndex].disponibilidad}
                              label={activeImages[currentIndex].label}
                              tipo={activeImages[currentIndex].tipo}
                              cuposDisponibles={activeImages[currentIndex].cuposDisponibles}
                              genero={activeImages[currentIndex].genero}
                              aireAcondicionado={activeImages[currentIndex].aireAcondicionado}
                            />
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="bg-accent text-gray-900 px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                              {currentIndex + 1} / {activeImages.length}
                            </span>
                            <div className="md:hidden bg-white/20 backdrop-blur-sm p-2 rounded-full">
                              <ZoomIn className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {isImageLoading ? (
                      <ImageSkeleton className="w-full h-full bg-gray-900/90" aspectRatio="aspect-[16/10]" />
                    ) : (
                      <picture className="contents">
                        {getWebpSrcSet(activeImages[currentIndex]) && (
                          <source
                            type="image/webp"
                            srcSet={getWebpSrcSet(activeImages[currentIndex])}
                            sizes={imageSizes}
                          />
                        )}
                        <img
                          src={activeImages[currentIndex].src}
                          alt={activeImages[currentIndex].label || `Habitación ${currentIndex + 1}`}
                          className="w-full h-full object-cover md:object-contain bg-gray-900"
                          draggable="false"
                          loading={currentIndex === 0 ? "eager" : "lazy"}
                          width="960"
                          height="540"
                        />
                      </picture>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.button
                onClick={prevSlide}
                aria-label="Ver imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 hover:bg-primary hover:text-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-all duration-200 hidden md:block group/btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="h-5 w-5 text-gray-700 group-hover/btn:text-white transition-colors" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                aria-label="Ver imagen siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 hover:bg-primary hover:text-white rounded-xl shadow-lg border border-gray-100 hover:border-primary transition-all duration-200 hidden md:block group/btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="h-5 w-5 text-gray-700 group-hover/btn:text-white transition-colors" />
              </motion.button>

              <div className="absolute bottom-4 left-4 flex justify-center md:hidden">
                <motion.p
                  className="text-white text-sm bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Desliza para navegar
                </motion.p>
              </div>
            </div>

            <div className="md:hidden mt-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-lg">
              <div className="flex items-start justify-between gap-3">
                <Availability
                  status={activeImages[currentIndex].disponibilidad}
                  label={activeImages[currentIndex].label}
                  tipo={activeImages[currentIndex].tipo}
                  cuposDisponibles={activeImages[currentIndex].cuposDisponibles}
                  genero={activeImages[currentIndex].genero}
                  aireAcondicionado={activeImages[currentIndex].aireAcondicionado}
                  variant="light"
                />
                <span className="flex-shrink-0 bg-accent text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                  {currentIndex + 1} / {activeImages.length}
                </span>
              </div>
            </div>

            <div className="md:hidden mt-4 flex items-center justify-center gap-2" aria-label="Paginación de imágenes">
              {activeImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ver ${image.label || `imagen ${index + 1}`}`}
                  aria-current={currentIndex === index ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all duration-200 ${
                    currentIndex === index ? 'w-8 bg-primary' : 'w-2.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 px-2 max-w-full hide-scrollbar">
                {activeImages.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Seleccionar ${image.label || `habitación ${index + 1}`}`}
                    aria-current={currentIndex === index ? 'true' : undefined}
                    className={`flex-shrink-0 snap-center relative rounded-xl overflow-hidden transition-all duration-300 group/thumb ${
                      currentIndex === index
                        ? 'ring-2 ring-primary ring-offset-2 shadow-lg scale-105'
                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <picture className="contents">
                      {getWebpSrcSet(image) && (
                        <source
                          type="image/webp"
                          srcSet={getWebpSrcSet(image)}
                          sizes={thumbnailImageSizes}
                        />
                      )}
                      <img
                        src={image.src}
                        alt={image.label}
                        className="w-20 h-14 md:w-20 md:h-14 object-cover"
                        loading="lazy"
                        width="160"
                        height="112"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="h-3 w-3 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de pantalla completa */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Contenedor del modal */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center p-4"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cerrar */}
              <motion.button
                onClick={closeModal}
                aria-label="Cerrar galería ampliada"
                className="absolute top-4 right-4 z-50 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-6 w-6" />
              </motion.button>

              {/* Controles de navegación */}
              <motion.button
                onClick={prevModalSlide}
                aria-label="Ver imagen anterior en galería ampliada"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft className="h-6 w-6" />
              </motion.button>

              <motion.button
                onClick={nextModalSlide}
                aria-label="Ver imagen siguiente en galería ampliada"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="h-6 w-6" />
              </motion.button>

              {/* Imagen del modal con soporte para swipe */}
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
              >
                <picture className="contents">
                  {getWebpSrcSet(activeImages[modalIndex]) && (
                    <source
                      type="image/webp"
                      srcSet={getWebpSrcSet(activeImages[modalIndex])}
                      sizes={modalImageSizes}
                    />
                  )}
                  <img
                    src={activeImages[modalIndex].src}
                    alt={activeImages[modalIndex].label || `Habitación ${modalIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                    draggable="false"
                    loading="lazy"
                    width="960"
                    height="540"
                  />
                </picture>
              </motion.div>

              {/* Información de la imagen */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-6 py-3 text-white">
                  <div className="flex items-center gap-4">
                    <Availability
                      status={activeImages[modalIndex].disponibilidad}
                      label={activeImages[modalIndex].label}
                      tipo={activeImages[modalIndex].tipo}
                      cuposDisponibles={activeImages[modalIndex].cuposDisponibles}
                      genero={activeImages[modalIndex].genero}
                      aireAcondicionado={activeImages[modalIndex].aireAcondicionado}
                    />
                    <span className="text-sm">
                      {modalIndex + 1} / {activeImages.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Miniaturas en el modal */}
              <div className="absolute bottom-20 left-0 right-0 flex justify-center">
                <div className="flex gap-2 bg-black/30 backdrop-blur-sm rounded-lg p-2 max-w-xs overflow-x-auto hide-scrollbar">
                  {activeImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setModalIndex(index)}
                      aria-label={`Ver ${image.label || `imagen ${index + 1}`} en galería ampliada`}
                      aria-current={modalIndex === index ? 'true' : undefined}
                      className={`flex-shrink-0 w-12 h-8 rounded overflow-hidden transition-all duration-200 ${modalIndex === index
                        ? 'ring-2 ring-white ring-offset-1 ring-offset-black/50'
                        : 'opacity-60 hover:opacity-100'
                        }`}
                    >
                      <picture className="contents">
                        {getWebpSrcSet(image) && (
                          <source
                            type="image/webp"
                            srcSet={getWebpSrcSet(image)}
                            sizes="48px"
                          />
                        )}
                        <img
                          src={image.src}
                          alt={image.label}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width="96"
                          height="64"
                        />
                      </picture>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const imageShape = PropTypes.shape({
  src: PropTypes.string.isRequired,
  disponibilidad: PropTypes.string,
  label: PropTypes.string.isRequired,
  tipo: PropTypes.oneOf(['individual', 'compartida']),
  cuposDisponibles: PropTypes.number,
  genero: PropTypes.oneOf(['dama', 'caballero']),
  aireAcondicionado: PropTypes.bool,
  sources: PropTypes.shape({
    webp: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
      })
    ),
  }),
});

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      imageShape,
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(imageShape).isRequired,
      }),
    ])
  ).isRequired,
};

// Estilo para ocultar la barra de desplazamiento pero mantener la funcionalidad
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;             /* Chrome, Safari and Opera */
  }
`;
document.head.appendChild(styleSheet);

export default Carousel;
