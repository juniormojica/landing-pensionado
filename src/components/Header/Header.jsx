import { useState } from 'react'
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkStyles = "text-gray-700 hover:text-primary transition-colors duration-200 font-medium cursor-pointer"

  const handleNavClick = (section) => {
    window.location.hash = `#/${section}`;
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">Pensión UPC</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button className={linkStyles} onClick={() => handleNavClick("inicio")}>Inicio</button>
          <button className={linkStyles} onClick={() => handleNavClick("caracteristicas")}>Características</button>
          <button className={linkStyles} onClick={() => handleNavClick("galeria")}>Galería</button>
          <button className={linkStyles} onClick={() => handleNavClick("planes")}>Planes</button>
          <button className={linkStyles} onClick={() => handleNavClick("simulador")}>Simulador</button>
          <button className={linkStyles} onClick={() => handleNavClick("nosotros")}>Nosotros</button>
          <button className={linkStyles} onClick={() => handleNavClick("contacto")}>Contacto</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>

            {/* Mobile Navigation */}
            <nav className="flex flex-col p-6 mt-16 space-y-1">
              <button
                className="text-left py-4 text-lg border-b border-gray-200 hover:text-primary transition-colors"
                onClick={() => handleNavClick("inicio")}
              >
                Inicio
              </button>
              <button
                className="text-left py-4 text-lg border-b border-gray-200 hover:text-primary transition-colors"
                onClick={() => handleNavClick("caracteristicas")}
              >
                Características
              </button>
              <button
                className="text-left py-4 text-lg border-b border-gray-200 hover:text-primary transition-colors"
                onClick={() => handleNavClick("galeria")}
              >
                Galería
              </button>
              <button
                className="text-left py-4 text-lg border-b border-gray-200 hover:text-primary transition-colors"
                onClick={() => handleNavClick("planes")}
              >
                Planes
              </button>
              <button
                className="text-left py-4 text-lg border-b border-gray-200 hover:text-primary transition-colors"
                onClick={() => handleNavClick("simulador")}
              >
                Simulador
              </button>
              <button
                className="text-left py-4 text-lg border-b border-gray-200 hover:text-primary transition-colors"
                onClick={() => handleNavClick("nosotros")}
              >
                Nosotros
              </button>
              <button
                className="text-left py-4 text-lg border-b border-gray-200 hover:text-primary transition-colors"
                onClick={() => handleNavClick("contacto")}
              >
                Contacto
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}