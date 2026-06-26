import PropTypes from 'prop-types';
import { User, Users, Wind } from 'lucide-react';

const Availability = ({ status, label, tipo, cuposDisponibles, genero, aireAcondicionado, variant = 'dark' }) => {
  const isLight = variant === 'light';
  const effectiveStatus = cuposDisponibles !== undefined
    ? cuposDisponibles > 0 ? 'Disponible' : 'No Disponible'
    : status || 'No Disponible';

  const getBgColor = () => {
    switch (effectiveStatus.toLowerCase()) {
      case 'disponible':
        return 'bg-green-500';
      case 'ocupado':
        return 'bg-red-500';
      case 'mantenimiento':
        return 'bg-yellow-500';
      case 'zona común':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex flex-col gap-1.5 z-20">
      <div className="flex items-center gap-2">
        <span className={`${getBgColor()} w-3 h-3 rounded-full flex-shrink-0`}></span>
        <h3 className={`${isLight ? 'text-gray-900' : 'text-white'} font-medium text-lg leading-tight`}>{label}</h3>
      </div>
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className={`${getBgColor()} text-white px-2.5 py-0.5 rounded-md text-xs font-medium inline-block`}>
          {effectiveStatus}
        </span>
        {tipo && (
          <span className={`${isLight ? 'bg-gray-100 text-gray-700 border-gray-200' : 'bg-white/15 text-white border-white/10'} backdrop-blur-sm px-2.5 py-0.5 rounded-md text-xs font-medium flex items-center gap-1 border`}>
            {tipo === 'individual' ? <User className="h-3 w-3 flex-shrink-0" /> : <Users className="h-3 w-3 flex-shrink-0" />}
            {tipo === 'individual' ? 'Individual' : 'Compartida'}
          </span>
        )}
        {tipo === 'compartida' && cuposDisponibles > 0 && (
          <span className={`px-2.5 py-0.5 rounded-md text-xs font-medium border ${
            cuposDisponibles >= 2
              ? isLight ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-emerald-500/30 text-emerald-200 border-emerald-400/30'
              : isLight ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-amber-500/30 text-amber-200 border-amber-400/30'
          }`}>
            {cuposDisponibles >= 2 ? '2 cupos' : '1 cupo'}
          </span>
        )}
        {tipo === 'compartida' && genero && (
          <span className={`px-2.5 py-0.5 rounded-md text-xs font-medium border ${
            genero === 'dama'
              ? isLight ? 'bg-pink-50 text-pink-700 border-pink-200' : 'bg-pink-500/30 text-pink-200 border-pink-400/30'
              : isLight ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-blue-500/30 text-blue-200 border-blue-400/30'
          }`}>
            {genero === 'dama' ? 'Damas' : 'Caballeros'}
          </span>
        )}
        {aireAcondicionado !== undefined && (
          <span className={`px-2.5 py-0.5 rounded-md text-xs font-medium flex items-center gap-1 border ${
            aireAcondicionado
              ? isLight ? 'bg-cyan-50 text-cyan-700 border-cyan-200' : 'bg-cyan-500/30 text-cyan-200 border-cyan-400/30'
              : isLight ? 'bg-orange-50 text-orange-700 border-orange-200' : 'bg-orange-500/30 text-orange-200 border-orange-400/30'
          }`}>
            <Wind className="h-3 w-3 flex-shrink-0" />
            {aireAcondicionado ? 'Aire' : 'Sin Aire'}
          </span>
        )}
      </div>
    </div>
  );
};

Availability.propTypes = {
  status: PropTypes.string,
  label: PropTypes.string.isRequired,
  tipo: PropTypes.oneOf(['individual', 'compartida']),
  cuposDisponibles: PropTypes.number,
  genero: PropTypes.oneOf(['dama', 'caballero']),
  aireAcondicionado: PropTypes.bool,
  variant: PropTypes.oneOf(['dark', 'light']),
};

export default Availability;
