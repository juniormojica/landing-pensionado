import { motion } from 'framer-motion';
import { Award, Heart, Users, TrendingUp, Home, Shield } from 'lucide-react';

const AboutUs = () => {
    const stats = [
        {
            icon: Award,
            number: '20+',
            label: 'Años de Experiencia',
            color: 'text-primary'
        },
        {
            icon: Users,
            number: '200+',
            label: 'Estudiantes Alojados',
            color: 'text-accent'
        },

    ];

    const values = [
        {
            icon: Home,
            title: 'Como en Casa',
            description: 'Creamos un ambiente familiar donde cada estudiante se siente acogido y seguro.'
        },
        {
            icon: Shield,
            title: 'Seguridad Total',
            description: 'Tu tranquilidad y la de tu familia es nuestra prioridad número uno.'
        },
        {
            icon: Heart,
            title: 'Compromiso',
            description: 'Nos dedicamos a apoyar tu éxito académico y bienestar personal.'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section id="nosotros" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-12 lg:mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-4"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm md:text-base font-semibold">
                            Nuestra Historia
                        </span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
                        20 Años Siendo Tu Hogar Estudiantil
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                            Desde el año <span className="font-bold text-primary">2004</span>, hemos sido el hogar de cientos de estudiantes que han confiado en nosotros para acompañarlos en su camino universitario.
                        </p>
                    </div>
                </motion.div>

                {/* Story Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-center"
                >
                    {/* Left: Story */}
                    <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                Todo comenzó con un <span className="font-semibold text-primary">sueño simple</span>: crear un espacio donde los estudiantes pudieran sentirse como en casa, lejos de casa. Lo que inició como una pequeña pensión familiar, se ha convertido en un <span className="font-semibold text-primary">referente de calidad y confianza</span> para estudiantes de la UPC.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                A lo largo de estas dos décadas, hemos visto crecer a generaciones de profesionales exitosos que iniciaron su camino en nuestras habitaciones. Cada uno de ellos ha dejado una huella en nuestra historia, y nosotros en la suya.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                Hoy, seguimos comprometidos con la misma <span className="font-semibold text-primary">pasión del primer día</span>: ofrecer más que un lugar para dormir, sino un verdadero hogar donde puedas concentrarte en tus estudios mientras nosotros cuidamos de tu bienestar.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Stats */}
                    <motion.div variants={itemVariants}>
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                                >
                                    <stat.icon className={`w-8 h-8 md:w-10 md:h-10 ${stat.color} mb-3`} />
                                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm md:text-base text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Values Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16"
                >
                    <motion.h3
                        variants={itemVariants}
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900"
                    >
                        Nuestros Valores
                    </motion.h3>
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="bg-primary/10 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                                    <value.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">
                                    {value.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-primary to-primaryDark rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
                >
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                        Sé Parte de Nuestra Historia
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
                        Únete a las generaciones de estudiantes que han encontrado en nosotros su segundo hogar. Tu éxito académico comienza aquí.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const phoneNumber = '3218710632';
                            const message = '¡Hola! Me gustaría reservar una habitación.';
                            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                            window.open(whatsappUrl, '_blank');
                        }}
                        className="bg-white text-primary px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg inline-flex items-center gap-2 min-h-[48px]"
                    >
                        Aparta tu cupo
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;
