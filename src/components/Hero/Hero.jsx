import { Button } from "../ui/Button/Button"

const Hero = () => {
  return (
    <div className="relative min-h-[400px] w-full bg-gradient-to-b from-secondaryYellow/10 to-white">
      <div className="absolute inset-0 z-0 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center opacity-10" />
      <div className="container relative z-10 mx-auto px-4 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl  bg-heroText bg-clip-text text-transparent">
            Vive en la mejor pensión cercana a la UPC
          </h1>
          <p className="mb-8 text-lg md:text-2xl text-gray-700 font-light">
            Tu hogar estudiantil con todas las comodidades a solo 5 minutos de UPC.
            Ambiente seguro y acogedor para que te enfoques en tus estudios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="solid"
              className="bg-accentGreen text-white hover:bg-secondaryYellow hover:text-black transition-all px-8 py-3 text-lg"
            >
              Reserva tu habitación
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-secondaryYellow text-black hover:bg-secondaryYellow transition-all px-8 py-3 text-lg"
            >
              Ver habitaciones
            </Button>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Hero;