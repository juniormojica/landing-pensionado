import { useState } from 'react'
import { Button } from "../ui/Button/Button"
import { Menu, Home, Search,  Bell } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Home className="h-6 w-6 mr-2" />
          <h1 className="text-2xl font-bold">Pension UPC </h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Button variant="solid" className="hover:text-primary">Inicio</Button>
          <Button variant="solid" className="hover:text-primary">Caracteristicas</Button>
          <Button variant="solid" className="hover:text-primary">Galeria</Button>
          <Button variant="solid" className="hover:text-primary">Contact</Button>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5" />
          <Bell className="h-5 w-5" />
          <Button variant="outline" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4">
          <nav className="flex flex-col space-y-2">
            <Button variant="solid" className="hover:text-primary">Inicio</Button>
            <Button variant="solid" className="hover:text-primary">Caracteristicas</Button>
            <Button variant="solid" className="hover:text-primary">Galeria</Button>
            <Button variant="solid" className="hover:text-primary">Contacto</Button>
          </nav>
        </div>
      )}
    </header>
  )
}