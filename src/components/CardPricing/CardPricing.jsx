import { motion } from "framer-motion";
import CardP from "../CardP/CardP";
import PropTypes from 'prop-types';

const planPricings = [
  {
    packageName: "Habitacion Compartida",
    price: 380000,
    features: [
      'Cuarto Compartido Con otro Estudiante',
      "Cama individual",
      "Baño privado",
      "WiFi ",
      'Acceso a cocina',
      'Acesso a zonas comunes',
      'Zona de estudio',
      'Parqueadero',
      "Armario",
      'Ventilador',
      'Escritorio',
    ],
    additionals: {
      food: 300000,
      airConditioning: 70000
    }
  },
  {
    packageName: "Habitacion Individual",
    price: 530000,
    features: [
      'Cuarto Privado',
      "Cama individual",
      'Colchon ',

      "Baño privado",
      "WiFi ",
      'Acceso a cocina',
      'Acesso a zonas comunes',
      'Zona de estudio',
      'Parqueadero',
      "Armario",
      'Ventilador',
      'Escritorio',
    ],
    additionals: {
      food: 300000,
      airConditioning: 120000
    }
  }
];

const CardPricing = ({ handleCTAClick }) => {
  const formatPrice = (price) => {
    return price.toLocaleString('es-CO', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const handleWhatsAppClick = (packageName) => {
    handleCTAClick(() => {
      const phoneNumber = '3218710632';
      const message = `Hola, me interesa obtener información sobre el paquete: ${packageName}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="planes" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <motion.div
        className="container mx-auto px-4 md:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="text-center mb-10 md:mb-12 lg:mb-16"
          variants={headingVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4"
            variants={itemVariants}
          >
            Planes Disponibles
          </motion.h2>
          <motion.p
            className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4"
            variants={itemVariants}
          >
            Escoge el plan que mejor se adapte a tus necesidades. Todos incluyen servicios básicos y acceso a áreas comunes.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-6xl mx-auto justify-items-center"
          variants={containerVariants}
        >
          {planPricings.map((planPricing, index) => (
            <motion.div
              key={index}
              className="w-full max-w-md"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <CardP
                plan={planPricing}
                formatPrice={formatPrice}
                handleWhatsAppClick={() => handleWhatsAppClick(planPricing.packageName)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 md:mt-12 lg:mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-sm md:text-base text-gray-600 mb-4"
            variants={itemVariants}
          >
            ¿Necesitas más información?
          </motion.p>
          <motion.button
            onClick={() => handleWhatsAppClick('Información General')}
            className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 text-sm md:text-base"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgb(229, 231, 235)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

CardPricing.propTypes = {
  handleCTAClick: PropTypes.func
};

export default CardPricing;