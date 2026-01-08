import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Home,
    Wind,
    UtensilsCrossed,
    Wifi,
    Car,
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    Sparkles,
    Calculator
} from 'lucide-react';

const PriceSimulator = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState({
        roomType: null,
        airConditioning: null,
        food: null,
    });

    const steps = [
        {
            id: 'roomType',
            title: 'Tipo de Habitación',
            description: 'Selecciona el tipo de habitación que prefieres',
            icon: Home,
            options: [
                {
                    id: 'shared',
                    name: 'Habitación Compartida',
                    description: 'Comparte con otro estudiante',
                    price: 380000,
                    features: ['Cama individual', 'Colchón ortopédico', 'Baño privado', 'Armario', 'Escritorio', 'Ventilador']
                },
                {
                    id: 'individual',
                    name: 'Habitación Individual',
                    description: 'Privacidad total para ti',
                    price: 530000,
                    features: ['Cuarto privado', 'Cama individual', 'Colchón ortopédico', 'Baño privado', 'Armario', 'Escritorio', 'Ventilador'],
                    popular: true
                }
            ]
        },
        {
            id: 'airConditioning',
            title: 'Aire Acondicionado',
            description: '¿Deseas agregar aire acondicionado a tu habitación?',
            icon: Wind,
            options: [
                {
                    id: 'no',
                    name: 'No, gracias',
                    description: 'Ventilador incluido',
                    price: 0
                },
                {
                    id: 'yes',
                    name: 'Sí, quiero aire acondicionado',
                    description: 'Disfruta de 8 horas de aire acondicionado diarias',
                    price: null, // Will be calculated based on room type
                    getPriceByRoom: (roomType) => roomType === 'shared' ? 70000 : 120000
                }
            ]
        },
        {
            id: 'food',
            title: 'Plan de Alimentación',
            description: '¿Quieres incluir alimentación?',
            icon: UtensilsCrossed,
            options: [
                {
                    id: 'no',
                    name: 'Sin alimentación',
                    description: 'Acceso a cocina compartida',
                    price: 0
                },
                {
                    id: 'yes',
                    name: 'Plan de alimentación completo',
                    description: '3 comidas al día (Lunes a Sábado)',
                    price: 630000,
                    popular: true
                }
            ]
        }
    ];

    const formatPrice = (price) => {
        return price.toLocaleString('es-CO', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    };

    const calculateTotal = () => {
        let total = 0;

        // Room type
        if (selections.roomType) {
            const roomOption = steps[0].options.find(opt => opt.id === selections.roomType);
            total += roomOption.price;
        }

        // Air conditioning
        if (selections.airConditioning === 'yes' && selections.roomType) {
            const acOption = steps[1].options.find(opt => opt.id === 'yes');
            total += acOption.getPriceByRoom(selections.roomType);
        }

        // Food
        if (selections.food === 'yes') {
            const foodOption = steps[2].options.find(opt => opt.id === 'yes');
            total += foodOption.price;
        }

        return total;
    };

    const getBreakdown = () => {
        const breakdown = [];

        if (selections.roomType) {
            const roomOption = steps[0].options.find(opt => opt.id === selections.roomType);
            breakdown.push({
                name: roomOption.name,
                price: roomOption.price
            });
        }

        if (selections.airConditioning === 'yes' && selections.roomType) {
            const acOption = steps[1].options.find(opt => opt.id === 'yes');
            const price = acOption.getPriceByRoom(selections.roomType);
            breakdown.push({
                name: 'Aire Acondicionado',
                price: price
            });
        }

        if (selections.food === 'yes') {
            const foodOption = steps[2].options.find(opt => opt.id === 'yes');
            breakdown.push({
                name: 'Plan de Alimentación',
                price: foodOption.price
            });
        }

        return breakdown;
    };

    const handleSelection = (stepId, optionId) => {
        setSelections(prev => ({
            ...prev,
            [stepId]: optionId
        }));
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = '3218710632';
        const breakdown = getBreakdown();
        const total = calculateTotal();

        let message = '¡Hola! He usado el simulador de precios y me interesa:\n\n';
        breakdown.forEach(item => {
            message += `✓ ${item.name}: $${formatPrice(item.price)}\n`;
        });
        message += `\n💰 Total mensual: $${formatPrice(total)}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const currentStepData = steps[currentStep];
    const isStepCompleted = selections[currentStepData.id] !== null;
    const allStepsCompleted = Object.values(selections).every(val => val !== null);

    return (
        <section id="simulador" className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
            <div className="container mx-auto px-3 sm:px-4 md:px-4 max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-6 sm:mb-9 md:mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-accentGreen/10 text-accentGreen px-3 sm:px-4 md:px-4 py-1.5 sm:py-2 md:py-2 rounded-full mb-3 sm:mb-3 md:mb-4">
                        <Calculator className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                        <span className="font-semibold text-sm sm:text-base md:text-base">Calculadora Interactiva</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-3 md:mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent px-2">
                        Simula el Precio de tu Pensión
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-base lg:text-lg px-4">
                        Personaliza tu estadía paso a paso y descubre cuánto costaría tu pensión ideal
                    </p>
                </motion.div>

                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {/* Main Simulator */}
                    <div className="lg:col-span-2 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl sm:rounded-2xl md:rounded-3xl shadow-xl p-4 sm:p-5 md:p-6 lg:p-8"
                        >
                            {/* Progress Bar */}
                            <div className="mb-4 sm:mb-6 md:mb-8">
                                <div className="flex justify-between items-center mb-3 sm:mb-3 md:mb-4">
                                    {steps.map((step, index) => (
                                        <div key={step.id} className="flex items-center flex-1">
                                            <div className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full transition-all duration-300 ${index <= currentStep
                                                ? 'bg-accentGreen text-white'
                                                : 'bg-gray-200 text-gray-400'
                                                }`}>
                                                {selections[step.id] !== null ? (
                                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                                ) : (
                                                    <span className="font-bold text-sm md:text-base">{index + 1}</span>
                                                )}
                                            </div>
                                            {index < steps.length - 1 && (
                                                <div className={`flex-1 h-0.5 md:h-1 mx-1 md:mx-2 transition-all duration-300 ${index < currentStep ? 'bg-accentGreen' : 'bg-gray-200'
                                                    }`} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs md:text-sm text-gray-500 text-center">
                                    Paso {currentStep + 1} de {steps.length}
                                </p>
                            </div>

                            {/* Current Step */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="mb-4 sm:mb-6 md:mb-8">
                                        <div className="flex items-center gap-2 sm:gap-2 md:gap-3 mb-3 sm:mb-3 md:mb-4">
                                            <div className="p-2 sm:p-2 md:p-3 bg-accentGreen/10 rounded-lg sm:rounded-lg md:rounded-xl">
                                                <currentStepData.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accentGreen" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-gray-900">
                                                    {currentStepData.title}
                                                </h3>
                                                <p className="text-sm md:text-base text-gray-600">{currentStepData.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Options */}
                                    <div className="space-y-3 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                                        {currentStepData.options.map((option) => {
                                            const isSelected = selections[currentStepData.id] === option.id;
                                            const displayPrice = option.getPriceByRoom
                                                ? option.getPriceByRoom(selections.roomType || 'shared')
                                                : option.price;

                                            return (
                                                <motion.button
                                                    key={option.id}
                                                    onClick={() => handleSelection(currentStepData.id, option.id)}
                                                    className={`w-full p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-xl md:rounded-2xl border-2 transition-all duration-300 text-left relative overflow-hidden active:scale-95 ${isSelected
                                                        ? 'border-accentGreen bg-accentGreen/5 shadow-lg'
                                                        : 'border-gray-200 hover:border-accentGreen/50 hover:shadow-md'
                                                        }`}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    {option.popular && (
                                                        <div className="absolute top-2 right-2 md:top-0.5 md:right-4">
                                                            <span className="bg-secondaryYellow text-black px-2 sm:px-2 md:px-3 py-0.5 sm:py-0.5 md:py-1 rounded-full text-xs font-bold flex items-center gap-1">
                                                                Popular
                                                            </span>
                                                        </div>
                                                    )}

                                                    <div className="flex flex-col sm:flex-row md:flex-row md:items-start md:justify-between gap-3 sm:gap-3 md:gap-4">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                {isSelected && (
                                                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-accentGreen flex-shrink-0" />
                                                                )}
                                                                <h4 className="font-bold text-base sm:text-lg md:text-lg text-gray-900">
                                                                    {option.name}
                                                                </h4>
                                                            </div>
                                                            <p className="text-gray-600 text-xs sm:text-sm md:text-sm mb-2 sm:mb-2 md:mb-3">
                                                                {option.description}
                                                            </p>
                                                            {option.features && (
                                                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                                                    {option.features.map((feature, idx) => (
                                                                        <span
                                                                            key={idx}
                                                                            className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 md:py-1 rounded-full"
                                                                        >
                                                                            {feature}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="text-left sm:text-right md:text-right flex sm:flex-col md:flex-col items-center sm:items-end md:items-end justify-between sm:justify-start md:justify-start">
                                                            <div className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900">
                                                                {displayPrice > 0 ? `+$${formatPrice(displayPrice)}` : 'Incluido'}
                                                            </div>
                                                            <div className="text-xs md:text-sm text-gray-500">por mes</div>
                                                        </div>
                                                    </div>
                                                </motion.button>
                                            );
                                        })}
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="flex gap-2 sm:gap-3 md:gap-4">
                                        <button
                                            onClick={handlePrevious}
                                            disabled={currentStep === 0}
                                            className={`flex items-center gap-1 sm:gap-2 md:gap-2 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-3 rounded-lg sm:rounded-lg md:rounded-xl font-semibold text-sm sm:text-base md:text-base transition-all duration-300 active:scale-95 ${currentStep === 0
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                        >
                                            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                                            <span className="hidden xs:inline sm:inline">Anterior</span>
                                        </button>

                                        {currentStep < steps.length - 1 ? (
                                            <button
                                                onClick={handleNext}
                                                disabled={!isStepCompleted}
                                                className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 md:gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3 rounded-lg sm:rounded-lg md:rounded-xl font-semibold text-sm sm:text-base md:text-base transition-all duration-300 active:scale-95 ${isStepCompleted
                                                    ? 'bg-accentGreen text-white hover:bg-accentGreen/90 shadow-lg'
                                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                    }`}
                                            >
                                                Siguiente
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                                            </button>
                                        ) : (
                                            <button
                                                onClick={handleWhatsAppClick}
                                                disabled={!allStepsCompleted}
                                                className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 md:gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3 rounded-lg sm:rounded-lg md:rounded-xl font-semibold text-sm sm:text-base md:text-base transition-all duration-300 active:scale-95 ${allStepsCompleted
                                                    ? 'bg-accentGreen text-white hover:bg-accentGreen/90 shadow-lg'
                                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                    }`}
                                            >
                                                <span className="hidden xs:inline sm:inline">Reservar por WhatsApp</span>
                                                <span className="xs:hidden sm:hidden">Reservar</span>
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Price Summary Sidebar */}
                    <div className="lg:col-span-1 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-accentGreen to-accentGreen/90 rounded-2xl sm:rounded-2xl md:rounded-3xl shadow-xl p-4 sm:p-5 md:p-6 lg:p-8 text-white sticky top-20 lg:top-4"
                        >
                            <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2">
                                <Calculator className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" />
                                Resumen de Precio
                            </h3>

                            <div className="space-y-3 sm:space-y-3 md:space-y-4 mb-4 sm:mb-5 md:mb-6">
                                {getBreakdown().length > 0 ? (
                                    <>
                                        {getBreakdown().map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex justify-between items-center pb-2 sm:pb-2 md:pb-3 border-b border-white/20"
                                            >
                                                <span className="text-white/90 text-sm md:text-base">{item.name}</span>
                                                <span className="font-bold text-sm md:text-base">${formatPrice(item.price)}</span>
                                            </motion.div>
                                        ))}
                                    </>
                                ) : (
                                    <div className="text-center py-4 md:py-8 text-white/70">
                                        <Calculator className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 opacity-50" />
                                        <p className="text-xs md:text-sm">Selecciona tus opciones para ver el precio</p>
                                    </div>
                                )}
                            </div>

                            <div className="pt-4 md:pt-6 border-t-2 border-white/30">
                                <div className="flex justify-between items-center mb-1 md:mb-2">
                                    <span className="text-base md:text-lg text-white/90">Total Mensual</span>
                                </div>
                                <motion.div
                                    key={calculateTotal()}
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    className="text-3xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4"
                                >
                                    ${formatPrice(calculateTotal())}
                                </motion.div>
                                <p className="text-xs md:text-sm text-white/80">
                                    * Precio final por mes
                                </p>
                            </div>

                            {/* Included Services */}
                            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/20">
                                <h4 className="font-semibold mb-2 md:mb-3 text-xs md:text-sm uppercase tracking-wide">
                                    Siempre Incluido
                                </h4>
                                <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-white/90">
                                    <div className="flex items-center gap-2">
                                        <Wifi className="w-3 h-3 md:w-4 md:h-4" />
                                        <span>WiFi de alta velocidad</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Car className="w-3 h-3 md:w-4 md:h-4" />
                                        <span>Parqueadero</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Home className="w-3 h-3 md:w-4 md:h-4" />
                                        <span>Zonas comunes</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Info Cards
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 grid md:grid-cols-3 gap-6"
                >
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="w-12 h-12 bg-accentGreen/10 rounded-xl flex items-center justify-center mb-4">
                            <CheckCircle2 className="w-6 h-6 text-accentGreen" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Sin Compromisos</h4>
                        <p className="text-gray-600 text-sm">
                            Puedes cambiar o cancelar tu plan en cualquier momento
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="w-12 h-12 bg-secondaryYellow/20 rounded-xl flex items-center justify-center mb-4">

                        </div>
                        <h4 className="font-bold text-lg mb-2">Todo Incluido</h4>
                        <p className="text-gray-600 text-sm">
                            Servicios públicos, WiFi y mantenimiento incluidos en el precio
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                            <Home className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">Ambiente Estudiantil</h4>
                        <p className="text-gray-600 text-sm">
                            Zonas de estudio y espacios diseñados para estudiantes
                        </p>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default PriceSimulator;
