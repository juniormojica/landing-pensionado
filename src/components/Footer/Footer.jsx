import { motion } from "framer-motion";
import { Mail, Phone, MessageCircleMore, Facebook, Instagram, MapPin, Clock } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function FooterLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-gray-700 dark:text-gray-200 hover:text-primary hover:underline underline-offset-2 transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <motion.footer
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-bold font-poppins text-primary mb-4">Pensión UPC</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
              Brindamos comodidad y tranquilidad a estudiantes con nuestro servicio de pensión completa. 
              Más que un lugar, es tu segundo hogar.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Facebook (se abre en nueva pestaña)"
                className="p-2 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram (se abre en nueva pestaña)"
                className="p-2 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/573218710632"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contáctanos por WhatsApp (se abre en nueva pestaña)"
                className="p-2 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <MessageCircleMore className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-bold font-poppins mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>Ubicación</span>
            </h3>
            <address className="not-italic text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-2">
              <p>Universidad Popular del César</p>
              <p>Valledupar, Cesar</p>
              <p>Colombia</p>
            </address>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-bold font-poppins mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              <span>Contacto</span>
            </h3>
            <address className="not-italic space-y-3">
              <a
                href="tel:+573218710632"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary underline underline-offset-2 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                aria-label="Llamar al 321 871 0632"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>321 871 0632</span>
              </a>
              <a
                href="mailto:juniormojica26@gmail.com"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary underline underline-offset-2 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                aria-label="Enviar correo a juniormojica26@gmail.com"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>juniormojica26@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>Lun - Sáb: 7:00 AM - 9:00 PM</span>
              </div>
            </address>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-bold font-poppins mb-4">Enlaces Rápidos</h3>
            <nav aria-label="Enlaces del pie de página">
              <ul className="space-y-2">
                <li>
                  <FooterLink href="#/inicio">Inicio</FooterLink>
                </li>
                <li>
                  <FooterLink href="#/caracteristicas">Características</FooterLink>
                </li>
                <li>
                  <FooterLink href="#/planes">Planes</FooterLink>
                </li>
                <li>
                  <FooterLink href="#/nosotros">Nosotros</FooterLink>
                </li>
                <li>
                  <FooterLink href="#/contacto">Contacto</FooterLink>
                </li>
              </ul>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
              <FooterLink href="/privacy">Política de Privacidad</FooterLink>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <FooterLink href="/terms">Términos y Condiciones</FooterLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center"
          variants={fadeIn}
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Pensión UPC. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}