// First, we need to import Framer Motion
import { motion } from "framer-motion";
import { Button } from "../ui/Button/Button";
import { scrollToSection } from "../../utils/scrollToSection";

const Hero = () => {
  return (
    <div id='inicio' className="relative min-h-[300px] w-full bg-gradient-to-b from-primaryLight/10 to-white pt-20 md:pt-24">
      <div className="absolute inset-0 z-0 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center opacity-10" />
      <div className="container relative z-10 mx-auto px-4 py-8 md:py-12 lg:py-16">
        <motion.div
          onClick={() => scrollToSection("galeria")}
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-4 sm:mb-5 md:mb-6 font-bold text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary to-primaryDark bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vive en la mejor pensión cercana a la UPC en Valledupar!
          </motion.h1>
          <motion.p
            className="mb-6 sm:mb-7 md:mb-8 text-base sm:text-lg md:text-lg lg:text-xl text-gray-700 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tu hogar estudiantil con todas las comodidades a solo 3 Cuadras de UPC.
            Ambiente seguro y acogedor para que te enfoques en tus estudios.
          </motion.p>
          <motion.div
            className="flex flex-col xs:flex-row gap-3 sm:gap-3 md:gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                handleClick={() => {
                  const phoneNumber = '+573218710632';
                  const message = '¡Hola! Me gustaría apartar una habitacion de pensionados.';
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappURL, '_blank');
                }}
                variant="solid"
                className="bg-primary text-white hover:bg-primaryDark transition-all px-6 md:px-8 py-3 text-base md:text-lg min-h-[48px] w-full sm:w-auto"
              >
                Reserva tu habitación
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                handleClick={() => scrollToSection("galeria")}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all px-6 md:px-8 py-3 text-base md:text-lg min-h-[48px] w-full sm:w-auto"
              >
                Ver habitaciones
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero