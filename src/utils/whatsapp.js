const PHONE_NUMBER = '+573218710632';

const DEFAULT_MESSAGES = {
  reservation: '¡Hola! Me gustaría apartar una habitación en Pensión UPC.',
  contact: '¡Hola! Me gustaría más información sobre Pensión UPC.',
  pension: '¡Hola! Me gustaría apartar un cupo para la aplicación de pensionados.',
};

export function openWhatsApp(messageTypeOrCustom) {
  let message;
  if (typeof messageTypeOrCustom === 'string' && DEFAULT_MESSAGES[messageTypeOrCustom]) {
    message = DEFAULT_MESSAGES[messageTypeOrCustom];
  } else {
    message = messageTypeOrCustom || DEFAULT_MESSAGES.contact;
  }
  const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
}

export function getWhatsAppUrl(messageTypeOrCustom) {
  let message;
  if (typeof messageTypeOrCustom === 'string' && DEFAULT_MESSAGES[messageTypeOrCustom]) {
    message = DEFAULT_MESSAGES[messageTypeOrCustom];
  } else {
    message = messageTypeOrCustom || DEFAULT_MESSAGES.contact;
  }
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_PHONE = PHONE_NUMBER;
export const WHATSAPP_MESSAGES = DEFAULT_MESSAGES;