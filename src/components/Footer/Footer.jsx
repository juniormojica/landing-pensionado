import { Button } from '../ui/Button/Button'
import { Mail, Phone,MessageCircleMore  } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Contacto</h2>
          <p className="mt-2">Para mas informacion Favor Contactarnos:</p>
          <div className="flex items-center space-x-2 mt-2">
            <Mail className="h-5 w-5" />
            <p>juniormojica26@gmail.com </p>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <p>321 871 0632</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="flex items-center">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
             
              <MessageCircleMore />
       
            </a>
          </Button>
          <Button variant="outline">
            <a href="/privacy" className="hover:text-primary">Privacidad</a>
          </Button>
          <Button variant="outline">
            <a href="/terms" className="hover:text-primary">Terminos y condiciones</a>
          </Button>
        </div>
      </div>
    </footer>
  )
}