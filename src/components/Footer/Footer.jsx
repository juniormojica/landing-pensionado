import { motion } from "framer-motion";
import { Mail, Phone, MessageCircleMore, Facebook, Instagram, MapPin, Clock, GraduationCap } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function FooterLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1 py-1"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-110 transition-all duration-200" />
      {children}
    </a>
  );
}

function SocialButton({ href, icon: Icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="relative group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
      <div className="relative p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all duration-300">
        <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors duration-200" />
      </div>
    </motion.a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <motion.div variants={fadeIn} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-primary/10 rounded-xl">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white">
                  Pensión UPC
                </h2>
                <p className="text-xs text-primary font-medium tracking-wide">Valledupar, Cesar</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              Brindamos comodidad y tranquilidad a estudiantes con nuestro servicio de pensión completa. 
              <span className="text-primary font-medium"> Más que un lugar, es tu segundo hogar.</span>
            </p>
            <div className="flex items-center gap-4">
              <SocialButton href="https://facebook.com" icon={Facebook} label="Síguenos en Facebook" />
              <SocialButton href="https://instagram.com" icon={Instagram} label="Síguenos en Instagram" />
              <SocialButton href="https://wa.me/573218710632" icon={MessageCircleMore} label="Contáctanos por WhatsApp" />
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-base font-bold font-poppins text-gray-900 dark:text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />
              Ubicación
            </h3>
            <address className="not-italic text-gray-600 dark:text-gray-300 text-sm space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-700 dark:text-gray-200">Universidad Popular del César</p>
                  <p>Valledupar, Cesar</p>
                  <p>Colombia</p>
                </div>
              </div>
            </address>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-base font-bold font-poppins text-gray-900 dark:text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />
              Contacto
            </h3>
            <address className="not-italic space-y-3">
              <a
                href="tel:+573218710632"
                className="flex items-center gap-2.5 text-gray-600 dark:text-gray-300 hover:text-primary group transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                aria-label="Llamar al 321 871 0632"
              >
                <div className="p-1.5 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">321 871 0632</span>
              </a>
              <a
                href="mailto:juniormojica26@gmail.com"
                className="flex items-center gap-2.5 text-gray-600 dark:text-gray-300 hover:text-primary group transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                aria-label="Enviar correo a juniormojica26@gmail.com"
              >
                <div className="p-1.5 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium truncate">juniormojica26@gmail.com</span>
              </a>
              <div className="flex items-center gap-2.5 text-gray-600 dark:text-gray-300 text-sm">
                <div className="p-1.5 bg-primary/5 rounded-lg">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <span>Lun - Sáb: 7AM - 9PM</span>
              </div>
            </address>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-base font-bold font-poppins text-gray-900 dark:text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full" />
              Enlaces
            </h3>
            <nav aria-label="Enlaces del pie de página">
              <ul className="space-y-1.5">
                <li><FooterLink href="#/inicio">Inicio</FooterLink></li>
                <li><FooterLink href="#/caracteristicas">Características</FooterLink></li>
                <li><FooterLink href="#/planes">Planes</FooterLink></li>
                <li><FooterLink href="#/nosotros">Nosotros</FooterLink></li>
                <li><FooterLink href="#/contacto">Contacto</FooterLink></li>
              </ul>
            </nav>
            <div className="mt-5 pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center gap-2 text-sm">
              <FooterLink href="/privacy">Privacidad</FooterLink>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <FooterLink href="/terms">Términos</FooterLink>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-200/60 dark:border-gray-700/60"
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {currentYear} <span className="font-semibold text-primary">Pensión UPC</span>. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
              Hecho con 
              <span className="text-red-400">❤</span> 
              para estudiantes
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}