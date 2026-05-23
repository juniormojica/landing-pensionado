import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronDown, FileText, CheckCircle, ShieldCheck,
  DoorOpen, Users, CookingPot, Refrigerator, Snowflake,
  CalendarCheck, Bell, Shirt,
} from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

const REGULATIONS_KEY = 'pensionado-regulations-accepted';

const regulations = [
  {
    id: 'rooms',
    icon: DoorOpen,
    title: 'Habitaciones',
    summary: 'Cuidado y mantenimiento del espacio personal.',
    details: [
      'Se entregan en perfectas condiciones; deben devolverse igual al finalizar.',
      'Prohibido clavar, pintar o hacer cambios estructurales sin autorización.',
      'Cada estudiante debe llevar sus sábanas, almohadas y toallas.',
      'Aseo periódico obligatorio para evitar plagas y malos olores.',
      'La basura debe sacarse al contenedor principal en los días designados.',
    ],
  },
  {
    id: 'guests',
    icon: Users,
    title: 'Invitados',
    summary: 'Política clara sobre visitas.',
    details: [
      'No está permitido que nadie se quede a dormir en la pensión.',
      'Los invitados no pueden usar duchas, lavandería ni cocina.',
      'El pensionado es responsable del comportamiento de sus visitas.',
    ],
  },
  {
    id: 'kitchen',
    icon: CookingPot,
    title: 'Cocina',
    summary: 'Normas para la cocina compartida.',
    details: [
      'Se entrega dotación inicial (platos, cubiertos, vasos). Debe devolverse en buen estado.',
      'Pérdida o daño de la dotación corre por cuenta del estudiante.',
      'Ollas y sartenes no están incluidas — cada estudiante trae las suyas.',
      'Regla de oro: "Plato sucio, plato lavado" — nada en el fregadero.',
      'La estufa debe quedar limpia después de cocinar.',
      'La cocina debe quedar como se encontró o mejor.',
    ],
  },
  {
    id: 'fridge',
    icon: Refrigerator,
    title: 'Nevera',
    summary: 'Sistema de recipientes asignados.',
    details: [
      'Cada estudiante tiene un recipiente con su nombre y candado.',
      'Todo alimento debe permanecer dentro del recipiente asignado.',
      'La administración no se responsabiliza por alimentos fuera del recipiente.',
      'No almacenar productos que no requieran refrigeración.',
      'Domingos 10PM: limpieza profunda. Comida en mal estado se desecha.',
    ],
  },
  {
    id: 'ac',
    icon: Snowflake,
    title: 'Aire Acondicionado',
    summary: 'Uso exclusivo para horas de sueño.',
    highlight: true,
    details: [
      'El aire acondicionado se usa SOLO durante las horas de sueño.',
      'Apagar luces, abanicos y AC al salir de la habitación.',
      'La motobomba no debe encenderse por más de 15 minutos.',
    ],
  },
  {
    id: 'payments',
    icon: CalendarCheck,
    title: 'Pagos y Estancia',
    summary: 'Compromiso mínimo de 4 meses.',
    highlight: true,
    details: [
      'Estancia mínima: 4 meses (4 pagos mensuales).',
      'Pago mensual anticipado. No se cobra por días.',
      'Primer pago el día de ingreso; mismo día cada mes.',
      'Recordatorio 3 días antes. Mora genera recargo.',
    ],
  },
  {
    id: 'schedule',
    icon: Bell,
    title: 'Horarios',
    summary: 'Respeto por el descanso y el estudio.',
    details: [
      'A partir de las 10:00 PM — silencio absoluto.',
      'En semanas de parciales: no hay reuniones sociales ni ruido.',
      'La cocina cierra a las 11:00 PM.',
    ],
  },
  {
    id: 'services',
    icon: Shirt,
    title: 'Servicios Adicionales',
    summary: 'Lavandería y alimentación opcional.',
    details: [
      'Lavado manual disponible sin costo adicional.',
      'Lavadora automática: $15.000 COP/mes por carga semanal.',
      'Almuerzo: $10.000 COP por plato (pedir con 1 día de anticipación).',
    ],
  },
];

export default function RegulationsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingMessage, setPendingMessage] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const openWhatsAppDirect = useCallback((msg) => {
    const url = getWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const handleRequest = useCallback((event) => {
    const msg = event.detail?.message || 'contact';

    if (localStorage.getItem(REGULATIONS_KEY)) {
      openWhatsAppDirect(msg);
      return;
    }

    setPendingMessage(msg);
    setIsOpen(true);
  }, [openWhatsAppDirect]);

  useEffect(() => {
    window.addEventListener('whatsapp:request', handleRequest);
    return () => window.removeEventListener('whatsapp:request', handleRequest);
  }, [handleRequest]);

  const handleAccept = () => {
    localStorage.setItem(REGULATIONS_KEY, 'true');
    openWhatsAppDirect(pendingMessage);
    closeModal();
  };

  const closeModal = () => {
    setIsOpen(false);
    setPendingMessage(null);
    setExpandedId(null);
  };

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleExpand(id);
    }
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-20 px-3 sm:px-4 pb-4"
          role="dialog"
          aria-modal="true"
          aria-label="Reglamento interno y normas de convivencia"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col"
          >
            <div className="relative px-6 pt-8 pb-4 border-b border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-primary/10 via-primaryLight/5 to-transparent" />

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative flex items-start gap-3">
                <div className="p-2.5 bg-primary/10 rounded-xl shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 font-poppins">
                    Antes de contactarnos...
                  </h2>
                  <p className="text-sm text-gray-500 mt-1 font-lato">
                    Conoce nuestras normas de convivencia. Son pocas, claras y pensadas para que todos vivamos bien.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2.5">
              {regulations.map((reg, index) => {
                const isExpanded = expandedId === reg.id;
                const Icon = reg.icon;

                return (
                  <motion.div
                    key={reg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`rounded-xl border transition-all cursor-pointer ${
                      reg.highlight
                        ? 'border-accent/30 bg-accent/[0.04]'
                        : 'border-gray-100 bg-gray-50/50'
                    } ${isExpanded ? 'shadow-sm' : 'hover:border-gray-200'}`}
                    onClick={() => toggleExpand(reg.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => handleKeyDown(e, reg.id)}
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-3 p-3.5">
                      <div
                        className={`p-2 rounded-lg shrink-0 ${
                          reg.highlight
                            ? 'bg-accent/20 text-accentDark'
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3
                            className={`font-semibold text-sm font-poppins ${
                              reg.highlight
                                ? 'text-accentDark'
                                : 'text-gray-900'
                            }`}
                          >
                            {reg.title}
                          </h3>
                          {reg.highlight && (
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-accentDark bg-accent/15 px-1.5 py-0.5 rounded-full">
                              Importante
                            </span>
                          )}
                        </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1 font-lato">
                          {reg.summary}
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-3.5 pb-3.5 pt-0 border-t border-gray-100">
                            <ul className="space-y-1.5 mt-2.5">
                              {reg.details.map((detail, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs text-gray-600 font-lato"
                                >
                                  <span
                                    className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                                      reg.highlight ? 'bg-accent' : 'bg-primary'
                                    }`}
                                  />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/80">
              <a
                href="/reglamento.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-xs text-gray-500 hover:text-primary transition-colors mb-3 font-lato"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Leer manual completo</span>
              </a>

              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  className="flex-1 py-2.5 px-4 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-lato"
                >
                  Volver
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAccept}
                  className="flex-1 py-2.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primaryDark rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 font-lato"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Acepto y quiero contactarlos</span>
                </motion.button>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-2 font-lato">
                Al aceptar confirmas que leíste y aceptas nuestras normas de convivencia.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
