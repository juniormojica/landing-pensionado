import { Wifi, SprayCan, Sofa, ChefHat } from "lucide-react"

const features = [
  { 
    icon: Wifi, 
    title: 'Wifi', 
    description: 'Internet de fibra óptica alta velocidad',
    color: 'text-blue-500'
  },
  { 
    icon: SprayCan,
    title: 'Espacios Limpios', 
    description: 'Zonas de uso general impecables y desinfectadas',
    color: 'text-green-500'
  },
  { 
    icon: Sofa,
    title: 'Completamente Amoblado', 
    description: 'Todo lo que necesitas para tu vida universitaria sin preocupaciones por mudanzas',
    color: 'text-purple-500'
  },
  { 
    icon: ChefHat,
    title: 'Cocina Equipada', 
    description: 'Acceso a cocina completa con horno microondas y utensilios básicos',
    color: 'text-orange-500'
  },
]

export default function Features() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Características</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para una experiencia universitaria cómoda y sin preocupaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-secondaryYellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="mb-6">
                <div className="inline-block p-4 rounded-lg bg-gray-50 group-hover:bg-secondaryYellow/10 transition-colors duration-300">
                  <feature.icon 
                    className={`h-8 w-8 ${feature.color} group-hover:text-accentGreen transition-colors duration-300`} 
                  />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-accentGreen transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="text-accentGreen text-sm font-semibold hover:text-secondaryYellow transition-colors duration-300">
                  Saber más →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-secondaryYellow text-black px-8 py-3 rounded-lg font-semibold hover:bg-accentGreen hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            Ver todas las comodidades
          </button>
        </div>
      </div>
    </section>
  )
}