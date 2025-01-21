

const Hero = () => {
  return (
    <div className="relative z-10 w-full bg-gradient-to-b from-white/90 to-white/50">
      <div className="container mx-auto px-4 py-2 lg:py-8">
        <div className="max-w-3xl mx-auto text-center margin ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 bg-primaryGray p-8 rounded-md ">
            Vive en la mejor pensión cercana a la UPC
          </h1>
          <p className="text-lg md:text-2xl text-darkGray font-lato">
            Tu hogar lejos de casa, a pasos de tu universidad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;