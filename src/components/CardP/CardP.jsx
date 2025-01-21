
import { Check } from 'lucide-react';
import PropTypes from 'prop-types';

const CardP = ({plan, formatPrice, handleWhatsAppClick}) => {
    return (
      <div className="w-full max-w-sm p-6 bg-white rounded-3xl shadow-lg transform transition-all hover:scale-105 mx-auto">
        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-black">{plan.packageName}</h3>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-black">
                ${formatPrice(plan.price)}
              </span>
              <span className="ml-1 text-gray-600">/Mes</span>
            </div>
          </div>
  
          {/* Features List */}
          <div className="space-y-3">
            {plan.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-black" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
  
          {/* Additionals */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-black">Servicios adicionales:</h4>
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-black" />
              <p className="text-gray-700">
                Alimentacion 3 veces al dia (Domingo Almuerzo) <span className='font-bold'>${formatPrice(plan.additionals.food)}/Mes</span>
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-black" />
              <p className="text-gray-700">
                Aire Acondicionado <span className='font-bold'>${formatPrice(plan.additionals.airConditioning)}/Mes</span>
              </p>
            </div>
          </div>
  
          {/* CTA Button */}
          <button 
            onClick={handleWhatsAppClick}
            className="w-full py-3 px-6 rounded-xl bg-black text-white  hover:bg-gray-800 transition-colors duration-200 font-lato font-bold">
            Reservar Ahora
          </button>
        </div>
      </div>
    );
  };
export default CardP;

CardP.propTypes = {
    plan: PropTypes.shape({
        packageName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired,
        additionals: PropTypes.shape({
            food: PropTypes.number.isRequired,
            airConditioning: PropTypes.number.isRequired
        }).isRequired
    }).isRequired,
    formatPrice: PropTypes.func.isRequired,
    handleWhatsAppClick: PropTypes.func.isRequired
};