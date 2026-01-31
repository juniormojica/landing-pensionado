import React from 'react';
import { Utensils, Calendar, Clock, ChevronRight } from 'lucide-react';

const LunchMenu = ({ handleCTAClick }) => {
    const weeklyMenu = [
        {
            day: 'Lunes',
            main: 'Pollo al Horno con Hierbas',
            soup: 'Sopa de Lentejas',
            drink: 'Limonada Natural',
            tag: 'Balanceado'
        },
        {
            day: 'Martes',
            main: 'Carne Desmechada en Salsa Criolla',
            soup: 'Sancoche de Gallina',
            drink: 'Jugo de Maracuyá',
            tag: 'Tradicional'
        },
        {
            day: 'Miércoles',
            main: 'Cerdo Agridulce con Vegetales',
            soup: 'Crema de Ahuyama',
            drink: 'Te Helado',
            tag: 'Favorito'
        },
        {
            day: 'Jueves',
            main: 'Pechuga a la Plancha',
            soup: 'Ajiaco Santafereño',
            drink: 'Lulada',
            tag: 'Ligero'
        },
        {
            day: 'Viernes',
            main: 'Mojarra Frita o Sudada',
            soup: 'Sopa de Pescado',
            drink: 'Agua de Panela con Limón',
            tag: 'Especial'
        },
        {
            day: 'Sábado',
            main: 'Bandeja Paisa',
            soup: 'Claro',
            drink: 'Refajo (opcional)',
            tag: 'Fin de Semana'
        },
        {
            day: 'Domingo',
            main: 'Sancocho Trifásico',
            soup: 'Consomé',
            drink: 'Jugo de Mora',
            tag: 'Familiar'
        }
    ];

    const handleWhatsAppClick = () => {
        // Determine which action to take based on capacity
        // If handleCTAClick is passed, it might handle logic like "Cupos Llenos"
        // But for this specific component, the user asked for redirect to WhatsApp API

        // We'll use a generic message for the menu
        const message = encodeURIComponent("¡Hola! Estoy interesado en el plan mensual de almuerzos de $300.000. ¿Me podrían dar más información?");
        const whatsappUrl = `https://wa.me/573133604051?text=${message}`; // Using placeholder number, should be replaced if known or generic

        // If we want to use the global handler:
        if (handleCTAClick) {
            handleCTAClick(() => window.open(whatsappUrl, '_blank'));
        } else {
            window.open(whatsappUrl, '_blank');
        }
    };

    return (
        <section id="almuerzos" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Almuerzos Caseros Diarios
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Disfruta de una alimentación balanceada y deliciosa sin preocuparte por cocinar.
                    </p>

                    {/* Pricing Highlight */}
                    <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl p-6 shadow-xl border border-primary/20 max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300 w-full">
                        <div className="flex items-center mb-4 md:mb-0 md:mr-8 w-full md:w-auto justify-center md:justify-start">
                            <div className="bg-green-100 p-3 rounded-full mr-4 shrink-0">
                                <Utensils className="w-8 h-8 text-primary" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Plan Mensual</p>
                                <p className="text-3xl font-extrabold text-primary">$300.000 <span className="text-sm font-normal text-gray-500">COP</span></p>
                            </div>
                        </div>

                        <div className="h-px md:h-12 w-full md:w-px bg-gray-200 mx-0 md:mx-4 mb-4 md:mb-0"></div>

                        <div className="flex items-center w-full md:w-auto justify-center md:justify-start mb-4 md:mb-0">
                            <div className="text-left">
                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider text-center md:text-left">Costo Diario</p>
                                <div className="flex items-baseline justify-center md:justify-start">
                                    <p className="text-2xl font-bold text-gray-800">$10.000</p>
                                    <p className="ml-2 text-sm text-gray-500">/día</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleWhatsAppClick}
                            className="mt-2 md:mt-0 md:ml-auto w-full md:w-auto bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primaryDark transition-colors shadow-lg shadow-green-200 flex items-center justify-center group"
                        >
                            Apartar mi Cupo
                            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Weekly Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {weeklyMenu.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
                            <div className="p-1 bg-green-50 border-b border-green-100 flex justify-between items-center px-4 py-2">
                                <span className="font-bold text-primaryDark">{item.day}</span>
                                <span className="text-xs font-medium px-2 py-1 bg-white text-primary rounded-full border border-green-200">
                                    {item.tag}
                                </span>
                            </div>
                            <div className="p-5 flex-grow space-y-4">
                                <div className="flex items-start">
                                    <div className="mt-1 mr-3 min-w-[20px]">
                                        <Utensils className="w-5 h-5 text-primary/60" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase">Plato Fuerte</p>
                                        <p className="font-medium text-gray-800">{item.main}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="mt-1 mr-3 min-w-[20px]">
                                        <span className="text-lg">🥣</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase">Sopa</p>
                                        <p className="text-gray-700">{item.soup}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="mt-1 mr-3 min-w-[20px]">
                                        <span className="text-lg">🥤</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase">Bebida</p>
                                        <p className="text-gray-700">{item.drink}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" />
                        Horario de servicio: 12:00 PM - 2:30 PM
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LunchMenu;
