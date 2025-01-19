import { Wifi, SprayCan, Sofa, ChefHat } from "lucide-react"


const features = [
  { 
    icon: Wifi, 
    title: 'Wifi', 
    description: 'Internet de fibra optica alta velocidad' 
  },
  { 
    icon: SprayCan, // Icono de spray de limpieza
    title: 'Espacios Limpios', 
    description: 'Zonas de uso general' 
  },
  { 
    icon: Sofa, // Icono de sofá para representar muebles
    title: 'Amoblados', 
    description: 'No haces trasteos tenemnos todo los que necesitas para tu vida universitaria' 
  },
  { 
    icon: ChefHat, // Icono de gorro de chef para cocina
    title: 'Cocina y Horno microOndas', 
    description: 'Acceso a Cocina ' 
  },
]
export default function Features() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Caracteristicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
              <div className="flex items-center justify-center mb-4">
                <feature.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}