

const Contact = () => {
  const phoneNumber = '+573218710632'; // Número de teléfono
  const message = '¡Hola! Me gustaría apartar un cupo para la aplicación de pensionados.'; // Mensaje predeterminado

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex justify-center items-center py-12 bg-gray-100">
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        <button className="bg-black text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:bg-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
          Apartar cupo
        </button>
      </a>
    </div>
  );
};

export default Contact;
