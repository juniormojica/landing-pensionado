import { motion, AnimatePresence } from 'framer-motion';
import { X, UserX, CalendarClock } from 'lucide-react';
import PropTypes from 'prop-types';

const FullCapacityModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal Card */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
                >
                    {/* Header decorative background */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-primary via-primaryLight to-accentGreen opacity-10" />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100/50 rounded-full transition-colors z-20"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="relative p-8 pt-10 text-center">
                        {/* Icon Wrapper */}
                        <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.1, type: "spring" }}
                            className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-secondaryYellow to-yellow-200 rounded-full flex items-center justify-center shadow-lg transform -rotate-3"
                        >
                            <UserX className="w-10 h-10 text-yellow-800" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                ¡Gracias por tu Interés!
                            </h3>

                            <div className="w-16 h-1 bg-accentGreen/30 mx-auto mb-4 rounded-full" />

                            <p className="text-gray-600 mb-6 text-lg loading-relaxed">
                                En este momento, <span className="font-bold text-red-500">todos nuestros cupos se encuentran llenos</span>.
                            </p>

                            <div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-100">
                                <p className="text-sm text-gray-500 mb-2">
                                    Apreciamos mucho que nos hayas considerado como tu hogar estudiantil.
                                </p>
                                <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary">
                                    <CalendarClock className="w-4 h-4" />
                                    <span>Te invitamos a estar pendiente para el próximo semestre</span>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={onClose}
                                className="w-full py-3.5 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>Entendido</span>
                                <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

FullCapacityModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default FullCapacityModal;
