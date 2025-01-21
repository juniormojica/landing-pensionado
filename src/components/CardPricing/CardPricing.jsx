import CardP from "../CardP/CardP";

const planPricings = [
  {
    packageName: "Habitacion Compartida",
    price: 400000,
    features: [
      'Cuarto Compartido Con otro Estudiante',
      "Cama individual",
      'Colchon ortopedico',
      "TV por cable",
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
      food: 600000,
      airConditioning: 100000
    }
  },
  {
    packageName: "Habitacion Individual",
    price: 700000,
    features: [
      'Cuarto Privado',
      "Cama individual",
      'Colchon ortopedico',
      "TV por cable",
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
      food: 600000,
      airConditioning: 100000
    }
  }
];

const CardPricing = () => {
  const formatPrice = (price) => {
    return price.toLocaleString('es-CO', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const handleWhatsAppClick = (packageName) => {
    const phoneNumber = '3218710632';
    const message = `Hola, me interesa obtener información sobre el paquete: ${packageName}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Planes Disponibles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escoge el plan que mejor se adapte a tus necesidades. Todos incluyen servicios básicos y acceso a áreas comunes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {planPricings.map((planPricing, index) => (
            <CardP 
              key={index} 
              plan={planPricing} 
              formatPrice={formatPrice} 
              handleWhatsAppClick={() => handleWhatsAppClick(planPricing.packageName)} 
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">¿Necesitas más información?</p>
          <button 
            onClick={() => handleWhatsAppClick('Información General')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardPricing;