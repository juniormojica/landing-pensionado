import { Check, Star } from 'lucide-react';
import PropTypes from 'prop-types';

const CardP = ({ plan, formatPrice, handleWhatsAppClick, isAvailable, disabledReason }) => {
  const isPopular = plan.packageName === "Habitacion Individual";

  return (
    <div className={`w-full max-w-sm p-8 bg-white rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl relative ${isPopular ? 'border-2 border-accentGreen' : ''
      }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accentGreen text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="w-4 h-4" /> Más Popular
          </span>
        </div>
      )}

      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4 text-center pb-6 border-b border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900">{plan.packageName}</h3>
          <div className="flex items-baseline justify-center">
            <span className="text-5xl font-bold text-gray-900">
              ${formatPrice(plan.price)}
            </span>
            <span className="ml-2 text-gray-500">/Mes</span>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-4">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 group">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-accentGreen group-hover:scale-110 transition-transform duration-200" />
              </div>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Additionals */}
        <div className="space-y-4 pt-6 border-t border-gray-100">
          <h4 className="text-lg font-semibold text-gray-900">Servicios adicionales:</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors duration-200">
              <Check className="h-5 w-5 text-accentGreen" />
              <div className="flex-1">
                <p className="text-gray-700">
                  Almuerzo
                  <span className="block text-sm text-gray-500">(Lunes a Sábado)</span>
                </p>
              </div>
              <span className="font-bold text-gray-900">
                ${formatPrice(plan.additionals.food)}/Mes
              </span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors duration-200">
              <Check className="h-5 w-5 text-accentGreen" />
              <div className="flex-1">
                <p className="text-gray-700">Aire Acondicionado</p>
              </div>
              <span className="font-bold text-gray-900">
                ${formatPrice(plan.additionals.airConditioning)}/Mes
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {!isAvailable && (
          <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-center">
            <p className="text-sm font-semibold text-red-700">{disabledReason}</p>
            <p className="mt-1 text-xs text-red-600">Revisa la galería para ver las habitaciones disponibles.</p>
          </div>
        )}
        <button
          onClick={handleWhatsAppClick}
          disabled={!isAvailable}
          className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 
            ${!isAvailable
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed shadow-none'
              : isPopular
              ? 'bg-accentGreen text-white hover:bg-secondaryYellow hover:text-black'
              : 'bg-secondaryYellow text-black hover:bg-accentGreen hover:text-white'
            }`}>
          {isAvailable ? 'Reservar Ahora' : 'Sin cupos disponibles'}
        </button>
      </div>
    </div>
  );
};

CardP.propTypes = {
  plan: PropTypes.shape({
    packageName: PropTypes.string.isRequired,
    roomType: PropTypes.oneOf(['individual', 'compartida']).isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    additionals: PropTypes.shape({
      food: PropTypes.number.isRequired,
      airConditioning: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  formatPrice: PropTypes.func.isRequired,
  handleWhatsAppClick: PropTypes.func.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  disabledReason: PropTypes.string.isRequired,
};

export default CardP;
