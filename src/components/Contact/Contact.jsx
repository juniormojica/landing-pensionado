import PropTypes from 'prop-types';
const Contact = ({children='Apartar Cupo'}) => {
  const phoneNumber = '+573218710632'; // Número de teléfono
  const message = '¡Hola! Me gustaría apartar un cupo para la aplicación de pensionados.'; // Mensaje predeterminado

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
        <button className="font-semibold py-3 px-6 rounded-full shadow-lg transform transition duration-300  hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black bg-secondaryYellow text-black hover:bg-accentGreen hover:text-white">
          {children}
        </button>
      </a>
    </div>
  );
};

export default Contact;
Contact.propTypes = {
  children: PropTypes.node, // Texto, JSX o cualquier elemento renderizable
};
