
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
      const message = `Quiero reservar el paquete: ${packageName}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-start max-w-7xl mx-auto">
          {planPricings.map((planPricing, index) => (
            <CardP 
              key={index} 
              plan={planPricing} 
              formatPrice={formatPrice} 
              handleWhatsAppClick={() => handleWhatsAppClick(planPricing.packageName)} 
            />
          ))}
        </div>
      </div>
    );
  };

export default CardPricing;