import PropTypes from 'prop-types';

const Availability = ({ status, label }) => {
  // Determinar el color de fondo basado en el estado de disponibilidad
  const getBgColor = () => {
    switch (status.toLowerCase()) {
      case 'disponible':
        return 'bg-green-500';
      case 'ocupado':
        return 'bg-red-500';
      case 'mantenimiento':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex flex-col gap-1 z-20">
      <div className="flex items-center gap-2">
        <span className={`${getBgColor()} w-3 h-3 rounded-full`}></span>
        <h3 className="text-white font-medium text-lg">{label}</h3>
      </div>
      <span className={`${getBgColor()} text-white px-3 py-1 rounded-md text-xs font-medium inline-block`}>
        {status}
      </span>
    </div>
  );
};

Availability.propTypes = {
  status: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Availability;