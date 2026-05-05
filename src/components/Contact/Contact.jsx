import PropTypes from 'prop-types';
import { openWhatsApp } from '../../utils/whatsapp';

const Contact = ({ children = 'Apartar Cupo', handleCTAClick }) => {
  const handleContactClick = () => {
    handleCTAClick(() => openWhatsApp('pension'));
  };

  return (
    <div id='contacto' className="flex justify-center items-center py-12 bg-gray-100">
      <button
        onClick={handleContactClick}
        aria-label="Apartar cupo vía WhatsApp"
        className="font-semibold py-3 px-6 rounded-full shadow-lg transform transition duration-300  hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black bg-secondaryYellow text-black hover:bg-accentGreen hover:text-white">
        {children}
      </button>
    </div>
  );
};

export default Contact;
Contact.propTypes = {
  children: PropTypes.node, // Texto, JSX o cualquier elemento renderizable
  handleCTAClick: PropTypes.func
};
